import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../DataServices/ToDoDataService';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public ToDoModel: ToDo;

  constructor(private todo:TodoDataService) { 
  }

  ngOnInit() {
  }
  todoAdd(regForm:NgForm){  
    console.log(regForm.value.title);  
if(regForm.valid)
{
  
    
}

      
  }  
  

}
