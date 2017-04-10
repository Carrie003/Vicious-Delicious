import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Recipes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Recipes {

  shared: any;

  constructor(public http: Http) {
    this.shared = null;
  }


  loadRecipes(){

    if (this.shared) {
      return Promise.resolve(this.shared);
    }

    return new Promise(resolve => {
      this.http.get('http://141.140.193.179:3000/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
          /*console.log(JSON.stringify(this.shared));*/
        });
    });

  }

  getSharedlst(){
    return JSON.stringify(this.shared);
  }

}
