import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   message :string = 'Welcome on this page'
   name= ''
   messageCustomized: String
  constructor(private route:ActivatedRoute,private welcomeService:WelcomeDataService) { }
   
  ngOnInit() {
    // compilation error: this.message = 5
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

getWelcomeMessage(){
 console.log(this.welcomeService.executeHelloWorldBeanService());
 this.welcomeService.executeHelloWorldBeanService().subscribe(
   response => this.handleSuccessfulResponse(response),
  error => this.handleErrorResponse(error)
 );
  //console.log("Get Welcome message")
}

handleSuccessfulResponse(response){
  //console.log(response.message);
  this.messageCustomized = response.message;
}

handleErrorResponse(error){
 // console.log(error.error.message);
  this.messageCustomized = error.error.message;
}


getWelcomeMessageWithParameter(){
  console.log(this.welcomeService.executeHelloWorldServiceWithPathVariable(this.name));
  this.welcomeService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfulResponse(response),
   error => this.handleErrorResponse(error)
  );
   
 }

}
