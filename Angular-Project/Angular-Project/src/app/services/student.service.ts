import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Admin } from '../Models/Admin';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class StudentService {

    constructor(private http: HttpClient) { }

    studentList() {
        return this.http.get(environment.Student);
    }
    public saveAdmin(username:string,pass:string):Observable<any>{

        let params=new HttpParams();
        params=params.set('username',username.toString());
        params=params.set('password',pass.toString());
        return this.http.post('http://localhost:8080/api/admin/saveAdmin',{params} , {responseType: 'text'});
    }

}

  
