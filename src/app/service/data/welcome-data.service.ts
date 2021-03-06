import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message: String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
     return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Welcome world bean");
  }

 // http://localhost:8080/hello-world/path-variable/in28minutes
  executeHelloWorldServiceWithPathVariable(name){
    let basicAuthHeaderString = this.createBasicAuthenticationHTTPHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })
  return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{headers});

// 'http://localhost:8080/hello-world/path-variable/in28minutes'

 }

 createBasicAuthenticationHTTPHeader(){
   let username ='in28minutes';
   let password = 'dummy';
   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);

   return basicAuthHeaderString;
 }


}
