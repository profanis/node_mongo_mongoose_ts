import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as child from "child_process";

export class HeavyController {
    public router: Router = Router();

    constructor() {
      //this.block_me();
      //this.do_not_block_me();
    }


    private block_me() {
      this.router.get("/", (req: Request, res: Response) => {
        const file = fs.createWriteStream("./big.file");

        for (let i = 0; i < 1e7; i++) {
            file.write("Blah Blah");
        }

        file.end();
        return res.send("Done");
      });
    }

    private do_not_block_me() {
      this.router.get("/", (req: Request, res: Response) => {
        const copute = child.fork("./src/controllers/compute.ts");
        copute.send("start");
        copute.on("message", (msg) => {
            res.send(msg);
        });
      });
    }
}
