import { Request, Response, Router } from "express";

export class PingController {
    public router: Router = Router();

    constructor() {
        this.router.get("/", (req: Request, res: Response) => {
            return res.send("pong");
        });
    }
}