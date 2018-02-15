import { Document, Model, model, Schema } from "mongoose";

export interface IDemo  {
    id: string;
    name: string;
    description: string;
}

let demoSchema = new Schema(
    {
        name: { type: String, required: true },
        description: String
    },
    {
        timestamps: true
    }
);
export const DemoModel = model<IDemo  & Document>("Demo", demoSchema);
