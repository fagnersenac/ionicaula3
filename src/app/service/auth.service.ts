import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    constructor(public fire : AngularFireAuth,
                public router : Router){

    }

    isAuth(){ // Está logado?
        this.fire.authState.subscribe(user=>{
            if(!user) this.router.navigate(['/home']);
            // se não existir usuário, retorne para home
        })
    }
}