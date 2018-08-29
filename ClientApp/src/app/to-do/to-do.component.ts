import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../DataServices/ToDoDataService';
import { ToDo } from '../DataServices/ToDo';
import { PagerService } from '../PagserService/PagerService';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  ngOnInit(): void {
    this.LoadData();
  }
  pager: any = {};
  pagedItems: ToDo[];
  public ToDOList: ToDo[];
  constructor(private router: Router, private todoservice: TodoDataService,private _Pagerservice: PagerService) {}
  
  LoadData(): void {
    this.todoservice.gettodolist().subscribe(re => {
     this.ToDOList = re;
     this.setPage(1);
    }, error => console.error(error));

  }
  
  public addtodo(): void {
    this.router.navigate(['todoadd'])
  }
  public edittodo(id:number): void {
   
    this.router.navigate(['todoedit',id]);
  }

  public delete (id:number):void{

    if(confirm("Are you sure you want to delete this? "))
    {
    this.todoservice.delete(id).subscribe(res=>{
      alert("Deleted successfully !!");
      this.LoadData();
    },error=>console.error(error));
  }
  }



  setPage(page: number) {
    
    // get pager object from service
    this.pager = this._Pagerservice.getPager(this.ToDOList.length, page);

    // get current page of items
    this.pagedItems = this.ToDOList.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}



