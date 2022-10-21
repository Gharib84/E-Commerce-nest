import { Controller, Get, Render, Param, Redirect, Post, Body, Req, Res } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UsersTable } from 'src/models/users-table';
import { response, Response } from 'express';

/**
 * @prop  raad only Registration assign to string 
 * @prop read only name assign to  string
 * @prop read only email assign to string 
 * @prop read only password assign to string 
 * @prop read only retrun string
 * @method permission return promise to check user email and his password
 * @method logout to logout our admin panel
 */

@Controller('auth')
export class AuthController {
    public readonly Registration: string = "Registration";
    public readonly email: string = "Email Address";
    public readonly password: string = "Password";
    public readonly name: string = "Name";
    public readonly loginForm: string = "Login"
    constructor(private readonly user: UserService) {

    }

    @Get('Registration')
    @Render('Registration/Registration')
    RegistrationForm(): {} {
        return {
            Registration: this.Registration,
            email: this.email,
            password: this.password,
            name: this.name

        }

    }

    @Post('/store')
    @Redirect('http://localhost:3000/')
    async register(@Body() body) {
        let newUser = new UsersTable();
        newUser.setName(body.name);
        newUser.setEmail(body.email);
        newUser.setPassword(body.password);
        newUser.setRole("client");
        newUser.setBalance(100);

        await this.user.createUser(newUser);

    }


    @Get('login')
    @Render('login/login')
    login(): Object {
        return {
            login: this.loginForm,
            email: this.email,
            password: this.password
        }
    }

    @Post('permission')
    async permission(@Body() body, @Req() req, @Res() res: Response) {
        const email = body.email;
        const pass = body.password;
        const user = await this.user.login(email, pass);
        if (user) {
            req.session.user = {
                id: user.userID,
                name: user.name,
                role: user.role

            };

            return res.redirect('http://localhost:3000/admin');
        } else {
            res.redirect('http://localhost:3000/auth/login');
        }

    }

    @Get('logout')
    @Redirect('http://localhost:3000')
    logout(@Req() req){
        req.session.user = null;
    }


}
