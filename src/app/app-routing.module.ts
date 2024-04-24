import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';

const routes: Routes = [
    {
      path: 'formulario',
      component: FormularioComponent
    },
    {
      path: 'lista-contatos',
      component: ListaContatosComponent
    },
    {
      path: '',
      redirectTo: '/lista-contatos',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
