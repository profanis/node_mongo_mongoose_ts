import { DemoMapper } from "../mappers/demo.mapper";
import { Nullable } from "../models/nullable";
import { DemoPayload } from "../payloads/demo.payload";
import { DemoRepo } from "../repos/demo.repo";

export class DemoService {

    private demoRepo: DemoRepo;
    private demoMapper: DemoMapper;

    constructor() {
        this.demoRepo = new DemoRepo();
        this.demoMapper = new DemoMapper();
    }

    public async retrieve(): Promise<DemoPayload[]> {
        const data = await this.demoRepo.retrieve().exec();
        return Promise.resolve(data.map(this.demoMapper.toPayload));
    }

    public async findById(id: string): Promise<Nullable<DemoPayload>> {
        const data = await this.demoRepo.findById(id).exec();
        if (data) {
            return Promise.resolve(this.demoMapper.toPayload(data));
        }

        return Promise.resolve(null);
    }

    public async findAllWithName(name: string): Promise<DemoPayload[]> {
        const data = await this.demoRepo.find({ name }).exec();
        return Promise.resolve(data.map(this.demoMapper.toPayload));
    }

    

    public async create(payload: DemoPayload): Promise<DemoPayload> {
        const data = await this.demoRepo.create(this.demoMapper.toEntity(payload));
        return Promise.resolve(this.demoMapper.toPayload(data));
    }

    public async update(id: string, payload: DemoPayload): Promise<DemoPayload> {
        const data = await this.demoRepo.update(id, this.demoMapper.toEntity(payload)).exec();
        if (data) {
            return Promise.resolve(this.demoMapper.toPayload(data));
        }
        return Promise.reject(`Unable to find entity with id ${id}`);
    }

    public async delete(id: string): Promise<boolean> {
        const data = await this.demoRepo.delete(id).exec();

        // If no exception is thrown, the method will return true. Otherwise the exception will be handled by controller
        return Promise.resolve(true);
    }
}