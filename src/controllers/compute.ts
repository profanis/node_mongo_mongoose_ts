import * as fs from "fs";
import * as child from "child_process";

export class Compute {

    constructor() {
        const file = fs.createWriteStream("./big.file");
        for (let i = 0; i < 1e7; i++) {
            file.write("Blah Blah");
        }

        file.end();
    }
}

process.on("message", (msg) => {
    new Compute();
    process.send("DONE");
});
