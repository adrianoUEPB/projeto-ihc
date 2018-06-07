import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { InputContentComponent } from '../components/input-content/input-content.component';
import { LoginComponent } from './security/login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNovoComponent } from './processos/form-novo/form-novo.component';
import { ListarProcessosComponent } from './processos/listar-processos/listar-processos.component';
import { FormPesquisarComponent } from './processos/form-pesquisar/form-pesquisar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SobreComponent,
    ProcessosComponent,
    HomeComponent,
    LoginComponent,
    InputContentComponent,
    NotFoundComponent,
    FormNovoComponent,
    ListarProcessosComponent,
    FormPesquisarComponent,
    FormPesquisarComponent
  ],
  imports: [
    // AngularFontAwesomeModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
