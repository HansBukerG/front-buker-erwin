import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { QuienesSomosPageComponent } from './quienes-somos-page/quienes-somos-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainPage',
    pathMatch: 'full'
  },
  {
    path: 'mainPage',
    component: InicioPageComponent
  },
  {
    path: 'quienesSomos',
    component: QuienesSomosPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
