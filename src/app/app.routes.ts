import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './security/login/login.component';
import { ProcessosComponent } from './processos/processos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormNovoComponent } from './processos/form-novo/form-novo.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'processos', component: ProcessosComponent },
  { path: 'processos/novo', component: FormNovoComponent },
  { path: 'protocolo', component: ProtocoloComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];