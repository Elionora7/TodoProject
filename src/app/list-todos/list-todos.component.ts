import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done:boolean,
    public targetDate:Date){
  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos:Todo[];
message:string;
//   todos = [new Todo(1,'Learn to dance',false,new Date()),
//   new Todo(2,'Learn to push',false,new Date()),
//   new Todo(3,'Learn to pull',false,new Date())
// ]

  // todos=[{ id:1, description: 'Learn to dance'},
  //   { id:2, description: 'Learn to jump'},
  //   { id:3, description: 'Learn to run'}
  // ]
  constructor(private todoService:TodoDataService,private router:Router) { 
    
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      })
  }

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id){
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response => {
        console.log(response);
       this.message= `Id: ${id} Deleted successfully!`;
       this.refreshTodos();
      }
    );

  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

  updateTodo(id){
    console.log(id);
    this.router.navigate(['todos',id]);
  }
}
