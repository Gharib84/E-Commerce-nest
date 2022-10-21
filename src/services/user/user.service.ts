import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersTable } from 'src/models/users-table';
import * as bcrypt from 'bcrypt';
/**
 * @method createUser to insert new user into our table
 * @method login that check username and his passowrd
 * 
 */



@Injectable()
export class UserService {

    private userTable: UsersTable = new UsersTable();
    constructor(@InjectRepository(UsersTable) private userRepository: Repository<UsersTable>){

    }


    async createUser(user:UsersTable):Promise<UsersTable>{
        const hash = await bcrypt.hash(user.userPassword,10);
        user.setPassword(hash);
        return this.userRepository.save(user);
    }

    async login(email:string, passowrd:string):Promise<UsersTable>{
        const usr = await this.userRepository.findOneBy({email:email})
        if(usr){
            const isMatch = await bcrypt.compare(passowrd, usr.userPassword);
            if(isMatch){
                return usr;
            }
        }

        return null;
    }
}
