import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/index';
import { UserRegistration } from 'models';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: 'register.html'
})
export class RegisterComponent {
    @ViewChild(NgForm)
    ngForm: NgForm;

    model = new UserRegistration();

    constructor(
        private registrationService: RegistrationService,
        private router : Router
    ) { }

    register() {
        if (this.ngForm.form.invalid) {
            return; // Faire des erreurs
        }
        this.registrationService.usernameExists(this.model.userName)
        .then((result) => {
            if(result)
                return; // Faire message d'erreurs
            else
                this.registrationService.register(this.model)
                .then((result) => {
                    this.router.navigate(['/'])
                })
                .catch((error) => {
                    console.log("Erreur : Erreur serveur, l'username devrair être enregistré")
                })
        })
    }
}
