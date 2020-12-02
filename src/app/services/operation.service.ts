import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation.model';
import { Global } from './global';

@Injectable()
export class OperationService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        console.log("Probando servicio");
    }

    saveOperation(operation: Operation): Observable<any>{
        let params = JSON.stringify(operation);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-operation', params, {headers: headers});
    }

    getOperations(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'operations',{headers: headers});
    }

    deleteOperation(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'operation/'+id, {headers: headers});
    }

    getOperation(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'operation/'+id, {headers: headers});
    }

    updateOperation(operation): Observable<any>{
        let params = JSON.stringify(operation);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'operation/'+operation._id, params, {headers: headers});
    } 

}