export interface Mapper<E, P> {
    toPayload(entity: E): P;
    toEntity(payload: P): E;
}