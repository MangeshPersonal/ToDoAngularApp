import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../DataServices/ToDoDataService';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  ngOnInit(): void {
    this.LoadData();
  }

  public ToDOList: ToDo[];
  constructor(private router: Router, private todoservice: TodoDataService) {}
  
  LoadData(): void {
    this.todoservice.gettodolist().subscribe(re => {
     this.ToDOList = re;
    }, error => console.error(error));

  }
  public addtodo(): void {
    this.router.navigate(['todoadd'])
  }
  public edittodo(): void {
    this.router.navigate(['todoedit'])
  }
}



