import { Injectable } from '@nestjs/common';
import { Repository, DataSource, ObjectLiteral } from 'typeorm';
@Injectable()
export class BaseService<T extends ObjectLiteral, IdType = number> {
    constructor(protected readonly repository: Repository<T>, protected readonly idField: keyof T) {
	
    }
    async findAll(): Promise<T[]>
    {
	    return this.repository.find();
    }
    async findById(id: IdType): Promise<T | null> 
    {
	    return this.repository.findOneBy({ [this.idField]: id } as any);
    }
}
