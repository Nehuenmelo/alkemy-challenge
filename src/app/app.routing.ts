import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//IMPORTAR COMPONENTES
import { AddOperationComponent } from './add-operation/add-operation.component';
import { ListComponent } from './list/list.component';
import { ResumeComponent } from './resume/resume.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { EditComponent } from './edit/edit.component';

//ARRAY DE RUTAS
const routes: Routes = [
    {path: '', component: ResumeComponent},
    {path: 'add-operation', component: AddOperationComponent},
    {path: 'list', component: ListComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'operation/:id', component: OperationDetailComponent},
    {path: 'edit-operation/:id', component: EditComponent},
    {path: '**', component: ResumeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  