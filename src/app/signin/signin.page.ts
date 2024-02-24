import { Component, OnInit } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFireAuthModule } from '@angular/fire/auth';
//import { GoogleAuth } from '@abacritt/angularx-social-login';
//import { SocialUser } from '@abacritt/angularx-social-login';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    //private afAuth: AngularFireAuth,
   // private googleAuth: GoogleAuth,
   // private router: Router
  ) { }

  ngOnInit() {
  }
/* forgotPassword() {
    const email = document.querySelector('.auto-group-zqvg-mF4 input') as HTMLInputElement;
    if (email.value) {
      this.afAuth.sendPasswordResetEmail(email.value)
        .then(() => {
          console.log('Email de réinitialisation de mot de passe envoyé');
        })
        .catch((error: any) => {
          console.error(error);
        });
    } else {
      console.error('Saisissez un e-mail pour réinitialiser le mot de passe');
    }
  }
  googleSignIn() {
    this.googleAuth.signIn(
      {
        scope: 'profile email'
      }
    ).then((user: SocialUser) => {
      const credential = this.afAuth.auth.GoogleAuthProvider.credential(user.idToken);
      this.afAuth.auth.signInWithCredential(credential)
        .then(() => {
          console.log('Connexion réussie avec Google');
          this.router.navigate(['/home']);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }).catch((error : any) => {
      console.error(error);
    });
  }

  githubSignIn() {
    this.googleAuth.signIn(
      {
        provider: 'github'
      }
    ).then((user: SocialUser) => {
      const credential = this.afAuth.auth.GithubAuthProvider.credential(user.idToken);
      this.afAuth.auth.signInWithCredential(credential)
        .then(() => {
          console.log('Connexion réussie avec GitHub');
          this.router.navigate(['/home']);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }).catch((error : any) => {
      console.error(error);
    });
  }*/
}
