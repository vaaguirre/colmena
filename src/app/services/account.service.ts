import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from "@angular/http";
import { environment } from "../../environments/environment";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class AccountService {

    constructor(public http: Http) { }

    login(username: string, password: string) {
        return new Observable(observable => {
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            this.http.post(environment.apiurl + '/login', JSON.stringify({
                username: username, password: password
            }), { headers: headers }).map(res => res.json())
                .subscribe(res => {
                    if (res.code == "404" || res.code == "500") {
                        console.error('Login error');
                    } else {
                        observable.next(res);
                    }
                });
        });
    }


    logout() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id");
        window.localStorage.removeItem("username");
    }

    isAuth() {
        if (window.localStorage.getItem("token")) {
            return true;
        }
        return false;
    }

    getToken() {
        return window.localStorage.getItem("token");
    }

    getId() {
        return window.localStorage.getItem('id');
    }

    getUsername() {
        return window.localStorage.getItem('username');
    }
}
