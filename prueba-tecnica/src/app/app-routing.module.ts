import { DialogCrudComponent } from './dialog-crud/dialog-crud.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Crud', component: CrudComponent},
  { path: 'Formulario', component: FormularioComponent},
  { path: 'DialogCrud', component: DialogCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
