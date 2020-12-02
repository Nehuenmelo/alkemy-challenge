import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { Operation } from '../models/operation.model';
import { Global } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [OperationService]
})
export class ListComponent implements OnInit {
  public operations: Operation[];
  public url: string;

  constructor(
    private _operationService: OperationService,
    private _router: Router,
    private _route: ActivatedRoute
    
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getOperations();
  }

  getOperations(){
    this._operationService.getOperations().subscribe(
      response => {
        if(response.operations){
          this.operations = response.operations;
        }
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