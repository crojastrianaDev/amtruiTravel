import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServicioXComponent } from './components/servicio-x/servicio-x.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent }, //inicialmente siempre
  { path: 'tours', component: ListaServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'tours-id', component: ServicioXComponent },
  //{ path: 'tours:id', component: ServicioXComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  {
    path: 'search/:termino',
    component: ListaServiciosComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }, //ruta de inicial
  { path: '**', component: PageNotFoundComponent }, //ruta exep
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
