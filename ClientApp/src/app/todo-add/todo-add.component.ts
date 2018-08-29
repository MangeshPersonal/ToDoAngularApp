import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../DataServices/ToDoDataService';
import { NgForm } from '@angular/forms';
import { ToDo } from '../DataServices/ToDo';
import { Router } from '@angular/router';



@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public ToDoModel: ToDo;

  constructor(private _todo: TodoDataService,private router:Router) {
  }

  ngOnInit() {
  }
  todoAdd(regForm: NgForm) {
    console.log(regForm.value);
    if (regForm.valid) {
      this.ToDoModel = new ToDo()
      this.ToDoModel.title = regForm.value.title;
      this.ToDoModel.description = regForm.value.desc;
      this.ToDoModel.status = regForm.value.chkstatus;
      this._todo.createTodo(this.ToDoModel).subscribe(result => {
        alert("Added Successfully"); 
        this.router.navigate(['todo']);
      }, error => alert(error))
    };

  }


}



