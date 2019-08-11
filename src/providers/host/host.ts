import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HostProvider {

  baseUrl: any;

  constructor(public http: HttpClient) {
    this.baseUrl = "http://sipolahsar.dkp.jabarprov.go.id/api";
    console.log('Hello HostProvider Provider');
  }

}
