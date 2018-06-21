import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment'

import { ProcessosService } from './processos/processos.service';
import { ServidorService } from './servidor/servidor.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormNovoComponent } from './processos/form-novo/form-novo.component';
import { ListarProcessosComponent } from './processos/listar-processos/listar-processos.component';
import { FormPesquisarComponent } from './processos/form-pesquisar/form-pesquisar.component';
import { ServidorComponent } from './servidor/servidor.component';
import { ServidorCadastroComponent } from './servidor/servidor-cadastro/servidor-cadastro.component';
import { ServidorListaComponent } from './servidor/servidor-lista/servidor-lista.component';
import { TemplateFormComponent } from './processos/template-form/template-form.component';
import { DetalheComponent } from './processos/detalhe/detalhe.component';
import { TemplateServidorFormComponent } from './servidor/template-servidor-form/template-servidor-form.component';

import { ROUTES } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { LoginService } from './security/login/login.service';

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
    NotFoundComponent,
    FormNovoComponent,
    ListarProcessosComponent,
    FormPesquisarComponent,
    FormPesquisarComponent,
    ServidorComponent,
    ServidorCadastroComponent,
    ServidorListaComponent,
    TemplateFormComponent,
    DetalheComponent,
    TemplateServidorFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule
  ],
  providers: [
    ServidorService,
    ProcessosService,
    LoginService
    // AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
