import {io} from "../http";
import {ConnectionsService} from "../services/ConnectionsService";
import { MessagesService } from "../services/MessagesService";
import { UsersService } from "../services/UsersService";

interface IParams{
    text: string;
    email: string;
}

io.on('connect', (socket) =>{
    const connectionsSevice = new ConnectionsService();
    const usersService = new UsersService();
    const messagesService = new MessagesService();

    socket.on('client_first_access',async (params) => {
        const socket_id = socket.id;
        const { text, email } = params as IParams;
        let user_id = null;
        console.log(params);

        const userExists = await usersService.findByEmail(email);

        if(!userExists){
            const user = await usersService.create(email);

            await connectionsSevice.create({
                socket_id, 
                user_id: user.id
            })

            user_id = user.id;
        } else {
            user_id = userExists.id;
            const connection = await connectionsSevice.findByUserId(userExists.id);

            if(!connection){
                await connectionsSevice.create({
                    socket_id, 
                    user_id: userExists.id
                })
            } else {
                connection.socket_id = socket_id;

                await connectionsSevice.create(connection);
            }

            

        }

        await messagesService.create({
            text, 
            user_id
        })

        //Salvar a conexão com o socket_id, user_id,
    });
});