import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersTable } from 'src/models/users-table';
import * as bcrypt from 'bcrypt';
/**
 * @method createUser to insert new user into our table
 * 
 */



@Injectable()
export class UserService {
    constructor(@InjectRepository(UsersTable) private userRepository: Repository<UsersTable>){

    }


    async createUser(user:UsersTable):Promise<UsersTable>{
        const hash = await bcrypt.hash(user.userPassword,10);
        user.setPassword(hash);
        return this.userRepository.save(user);
    }
}
