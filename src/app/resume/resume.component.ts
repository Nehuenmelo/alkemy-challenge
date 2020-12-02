import { Component, OnInit } from '@angular/core';
import { OperationService } from '../services/operation.service';
import { Operation } from '../models/operation.model';
import { Global } from '../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  providers: [OperationService],

})
export class ResumeComponent implements OnInit {
  public balance: number;
  public operations: Operation[];
  public total: number;

  constructor(
    private _operationService: OperationService
  ) { 
    this.balance = 0;
  }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(){
    this._operationService.getOperations().subscribe(
      response => {
        if(response.operations){
          this.operations = response.operations;

          this.operations.forEach(element => {
            if(element.income){
              this.balance += element.amount;

            }
            if(!element.income){
              this.balance -= element.amount;
            }
          });            
        }        
      },
      error => {
        console.log(<any>error);
      }
    );
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

}
