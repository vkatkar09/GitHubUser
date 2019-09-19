import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IuserData} from '../shared/model/userData'
import {IfollowerData} from '../shared/model/followerData'
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class gitUserServices{

    private userEndPoint : string = 'https://api.github.com/users/';
    //private followerEndPoint : string = 'https://api.github.com/users/octocat/followers';
    constructor(private http : HttpClient){}

    Users(username): Observable<IuserData>{
       return this.http.get<IuserData>(this.userEndPoint + username);
    }

    Followers(username): Observable<IuserData>{
        return this.http.get<IuserData>(this.userEndPoint + username + "/followers");
     }
}