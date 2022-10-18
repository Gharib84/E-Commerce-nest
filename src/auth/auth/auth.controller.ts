import { Controller, Get, Render, Param, Redirect, Response, Post, Body } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UsersTable } from 'src/models/users-table';

/**
 * @prop  raad only Registration assign to string 
 * @prop read only name assign to  string
 * @prop read only email assign to string 
 * @prop read only password assign to string 
 */

@Controller('auth')
export class AuthController {
    public readonly Registration:string = "Registration";
    public readonly email:string = "Email Address";
    public readonly password:string = "Password";
    public readonly name:string = "Name";
    constructor(private readonly user: UserService) {

    }

    @Get('Registration')
    @Render('Registration/Registration')
    RegistrationForm():{} {
        return {
            Registration:this.Registration,
            email:this.email,
            password:this.password,
            name:this.name

        }
        
    }

    @Post('/store')
    @Redirect('http://localhost:3000/')
    async register(@Body() body){
        let newUser = new UsersTable();
        newUser.setName(body.name);
        newUser.setEmail(body.email);
        newUser.setPassword(body.password);
        newUser.setRole("client");
        newUser.setBalance(100);

        await this.user.createUser(newUser);

    }

   
}
