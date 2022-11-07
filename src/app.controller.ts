import { Controller, Get, Render } from '@nestjs/common';
import { rename } from 'fs';


@Controller()
export class AppController {
  constructor() { }

  @Get('/')
  @Render('index')
  index() {

  }

 @Get("/about")
 @Render('about')
 about(){
    let aboutInfo:{} = {
      info: "This is Simple Store app Created By me. This App Depend on typescript programing language as backend by using nest framework ",
      cardText: "About Page",
      cardFooter: "Created By Mahmoud Eddie"
    }

    return {
      about: aboutInfo
    }
 }



}

