import {Application, Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoutes {
    
    private user_controller: UserController = new UserController();

    public route(app: Application) {
        
        app.get('/user/:user_name', (req: Request, res: Response) => {
            // res.json("Get is WORKING " + req.params.name);
            this.user_controller.get_user(req, res);
        });
        
        app.post('/user', (req: Request, res: Response) => {
            this.user_controller.create_user(req, res);
        });

    }
}