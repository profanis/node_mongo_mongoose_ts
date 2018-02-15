import { Query } from "mongoose";

import { DemoModel, IDemo } from "../models/demo.model";
import { BaseRepo } from "./base.repo";

export class DemoRepo extends BaseRepo<IDemo> { 

    constructor() {
        super(DemoModel);
    }


    public somethingElse() {
        this.entity.find({});
    }
}