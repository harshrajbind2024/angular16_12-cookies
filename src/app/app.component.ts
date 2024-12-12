import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookies';
  constructor(private cookies:CookieService){}
  onclick(){
    console.log('hello');
     this.cookies.set("userID","abc");
     this.cookies.set("studentName","harsh")
     this.cookies.set("title","wed")
     alert(this.cookies.get("userID"))
     this.cookies.delete("title")
     
  }

}
