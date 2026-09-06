import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource} from 'typeorm';
import * as fs from 'node:fs';
import * as path from 'path';

@Injectable()
export class SeedService implements OnModuleInit {
    constructor(private readonly dataSource: DataSource){console.log("seed service ctor");}
    onModuleInit(){
	const driver = this.dataSource.driver as any;
	const sqlPath = path.join(__dirname, '../../resources/inserts.sql');
	driver.databaseConnection.exec(fs.readFileSync(sqlPath, 'utf8'));
    }
}
