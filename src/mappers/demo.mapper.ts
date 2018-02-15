import { DemoPayload } from "../payloads/demo.payload";
import { IDemo } from "../models/demo.model";
import { Mapper } from "./interface-mapper";

export class DemoMapper implements Mapper<IDemo, DemoPayload> {
    
    toPayload(entity: IDemo): DemoPayload {
        return new DemoPayload(entity.id, entity.name, entity.description);
    }

    toEntity(payload: DemoPayload): IDemo {
        const { id, name, description } = payload;
        return { id, name, description };
    }
}