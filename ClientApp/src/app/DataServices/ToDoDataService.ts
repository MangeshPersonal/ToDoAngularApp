import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
@Injectable()
export class TodoDataService {

    private _baseurl: string = "";
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseurl = baseUrl + 'api/ToDo'
    }

    gettodolist() {
        return this.http.get<ToDo[]>(this._baseurl);
    }

    gettodobyid(id: number) {
        return this.http.get<ToDo>(this._baseurl + '/' + id);
    }
    createTodo(t: ToDo) {
        return this.http.post(this._baseurl, t);
    }
    updateUser(t: ToDo) {
        return this.http.put(this._baseurl + '/' + t.id, t);
    }
    delete(id: number) {
        return this.http.delete(this._baseurl + '/' + id);
    }
}