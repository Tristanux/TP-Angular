import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'models';

import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    model = new UserLogin();
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }

    login() {
        return this.authService.authenticate(this.model);
    }

    submit(event) {

        this.login()
            .then((result) => this.router.navigate(['/']))
            .catch((error) => {
                console.log("Error"); this.router.navigate(["./Channel"])
            });
    }
}
