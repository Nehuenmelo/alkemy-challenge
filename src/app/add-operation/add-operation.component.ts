import { Component, OnInit } from '@angular/core';
import { Operation } from '../models/operation.model';
import { OperationService } from '../services/operation.service';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.scss'],
  providers: [OperationService]
})
export class AddOperationComponent implements OnInit {

  public title: string;
  public operation: Operation;
  public saveOperation;
  public status: string;

  constructor(
    private _operationService: OperationService
  ) {
    
    this.title = "Formulario de Registro de operación";
    this.operation = new Operation('',0,new Date(),true);
  }

  ngOnInit(): void {
    
  }

  onSubmit(form){
    console.log(this.operation);
    this._operationService.saveOperation(this.operation).subscribe(
      response => {
        if(response.operation){
          this.saveOperation = response;
          console.log(response);
          this.status  = 'success';
          form.reset();
        }else{
          this.status = 'failed';
        }
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
