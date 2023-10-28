import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fido2Get, PublicKeyCredential } from "@ownid/webauthn"

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    form: FormGroup;
    constructor(private router: Router, private http: HttpClient, formBuilder: FormBuilder,) {
        this.form = formBuilder.group(
            {
                username: ['', [Validators.required]],
            },
            { updateOn: 'blur' },
        );
    }

    get username(): AbstractControl | null {
        return this.form.get('username');
    }

    home() {
        
    }
}
