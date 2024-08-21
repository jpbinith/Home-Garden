import users from '../schemas/user.shems';
import { IUser } from '../models/user.model';

export class UserServices {

    public createUser(user_detail: IUser, callback: any) {
        const user = new users(user_detail);
        user.save(callback);
    }

    public getUser(user_name: String, callback: Function) {
        const queary = { user_name: user_name };
        users.findOne(queary, callback);
    }
}