import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { ListComponent } from './list/list.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AddOperationComponent,
    ListComponent,
    OperationDetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
