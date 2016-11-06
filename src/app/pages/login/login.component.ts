import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;
    public error: string;

    constructor(
        private service: AccountService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.route.data.forEach((data: any) => {
            if (!data.login) {
                this.logout();
            }
        });
    }

    login() {
        this.service.login(this.email, this.password)
            .subscribe(token => {
                if (token) {
                    //Checking if we got success in login
                    //Logic to store token
                    if (token['success']) {
                        window.localStorage.setItem('token', token['token']);
                        window.localStorage.setItem('id', token['id']);
                        window.localStorage.setItem('username', token['username']);
                        //Redirect
                        this.router.navigate(['']);
                    } else {
                        this.error = token['message'];
                    }
                }
            }, error => {
                alert('Error');
            });
    }

    logout() {
        this.service.logout();
        this.router.navigate(['']);
    }
}
