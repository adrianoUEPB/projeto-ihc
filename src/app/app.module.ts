import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> ac04a9311e9394dd40bb3b983528aefe2b07f01f

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';
import { HomeComponent } from './home/home.component';
import { InputContentComponent } from '../components/input-content/input-content.component';
import { LoginComponent } from './security/login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNovoComponent } from './processos/form-novo/form-novo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SobreComponent,
    ProcessosComponent,
    ProtocoloComponent,
    HomeComponent,
    LoginComponent,
    InputContentComponent,
    NotFoundComponent,
    FormNovoComponent
  ],
  imports: [
<<<<<<< HEAD
    // AngularFontAwesomeModule,
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> ac04a9311e9394dd40bb3b983528aefe2b07f01f
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
