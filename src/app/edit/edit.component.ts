import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { Operation } from '../models/operation.model';
import { Global } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [OperationService]
})
export class EditComponent implements OnInit {

  public title: string;
  public operation: Operation;
  public saveOperation;

  constructor(
    private _operationService: OperationService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    
    this.title = "Editar operación";
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getOperation(id);
    })
  }

  getOperation(id){
    this._operationService.getOperation(id).subscribe(
      response => {
        this.operation = response.operation;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    console.log(this.operation);
    this._operationService.updateOperation(this.operation).subscribe(
      response => {
        if(response.operation){
          this.saveOperation = response;
          console.log(response);
          this._router.navigate(['/resume']);
        }
        
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
