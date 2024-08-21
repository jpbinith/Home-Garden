import { Request, Response } from 'express';
import { UserServices } from '../modules/user/services/user.service';
import { IUser } from 'modules/user/models/user.model';

export class UserController {

    private user_service: UserServices = new UserServices();
    public create_user(req: Request, res: Response) {
        if (req.body.user_name &&
            req.body.first_name &&
            req.body.email) {
            const user_detail: IUser = {
                user_name: req.body.user_name,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                phone_number: req.body.phone_number
            }
            new UserServices().createUser(user_detail, (err: any) => {
                if (err) {
                    res.status(500).json({ message: "Internal server error" });
                } else {
                    res.status(200).json({ message: "Sucessful" });
                }
            });
        } else {
            res.status(422).json({ message: "Need username and first name and phone number" });
        }
    }

    public get_user(req: Request, res: Response) {
        if (req.params.user_name) {
            this.user_service.getUser(req.params.user_name, (err: any, user_data: IUser) => {
                if (err) {
                    res.status(500).json({ message: "Internal server error" });
                } else if (user_data === null) {
                    res.status(401).json({ message: 'No such user found' });
                } else {
                    res.status(200).json(user_data);
                }
            });
        } else {
            res.status(400).json({ message: "Invalid input" });
        }
    }
}