import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../DataServices/ToDoDataService';
import { ToDo } from '../DataServices/ToDo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public todo: ToDo=new ToDo();
  dataloaded:boolean;
  id: number;
  constructor(private router: Router, private _todoservice: TodoDataService, private route: ActivatedRoute, ) {
    this.route.params.subscribe(res => {
      this.id = res.id
    }, error => console.log(error));

    this._todoservice.gettodobyid(this.id).subscribe(res => {
      this.todo = res;
      this.dataloaded=true;
    }, error => console.log(error))

  }
  Edit(regForm: NgForm) {
    console.log(regForm.value);
    if (regForm.valid) {
      this.todo = new ToDo()
      this.todo.id=this.id.toString();
      this.todo.title = regForm.value.title;
      this.todo.description = regForm.value.desc;
      this.todo.status = regForm.value.chkstatus;
      this._todoservice.updateUser(this.todo).subscribe(result => {
        alert("Updated Successfully"); 
        this.router.navigate(['todo']);
      }, error => alert(error))
    };

  }

  ngOnInit() {
   
  };

}


