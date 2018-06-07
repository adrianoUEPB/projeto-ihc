import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './security/login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormNovoComponent } from './processos/form-novo/form-novo.component';
import { ListarProcessosComponent } from './processos/listar-processos/listar-processos.component';
import { FormPesquisarComponent } from './processos/form-pesquisar/form-pesquisar.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'processos', component: ProcessosComponent },
  { path: 'processos/novo', component: FormNovoComponent },
  { path: 'processos/lista', component: ListarProcessosComponent },
  { path: 'processos/pesquisar', component: FormPesquisarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];