import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProcessosComponent } from './processos/processos.component';
import { ProtocoloComponent } from './protocolo/protocolo.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
 { path: '', component: HomeComponent },
 { path: 'home', component: HomeComponent },
 { path: 'processos', component: ProcessosComponent },
 { path: 'protocolo', component: ProtocoloComponent },
 { path: 'sobre', component: SobreComponent },
 { path: 'login', component: LoginComponent }
];