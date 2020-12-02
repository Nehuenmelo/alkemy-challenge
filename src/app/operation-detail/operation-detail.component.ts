import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { Operation } from '../models/operation.model';
import { Global } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.scss'],
  providers: [OperationService]
})
export class OperationDetailComponent implements OnInit {
  public url: string;
  public operation: Operation;

  constructor(
    private _operationService: OperationService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
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

  deleteOperation(id){
    this._operationService.deleteOperation(id).subscribe(
      response => {
        if(response.operation){
          this._router.navigate(['/list']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
