import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Recipes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Recipes {

  shared: any;
  gfy:any;

  constructor(public http: Http) {
    this.shared = null;
  }


  loadRecipes(){

    if(!this.shared){

      return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });

  }}

  loadBeverage(){

    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/beverage')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }

  loadFood(){

    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes/food')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });
  }


  filterItems(searchTerm){
    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          });
          resolve(this.shared);
        });
    });
  }

  createRecipe(recipe){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://viciousdelicious.herokuapp.com/api/recipes', JSON.stringify(recipe), {headers: headers})

      .subscribe(res => {
        console.log(res.json());

      });

    return new Promise(resolve => {
      this.http.get('https://viciousdelicious.herokuapp.com/api/recipes')
        .map(res => res.json())
        .subscribe(shared => {
          this.shared = shared;
          resolve(this.shared);
        });
    });

  }

  deleteRecipe(id){

    this.http.delete('https://viciousdelicious.herokuapp.com/api/recipes' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

  imgurAPI(path){
    let link=null;
    let response=null;
    let headers = new Headers();

    headers.append('Authorization', 'Bearer 878ad20c4f11e3f308cfb85838e19d26ad96e0ed');
    //headers.append('Authorization', 'Client-ID 990bf56cfa4922a');
    //this.http.post('https://api.gfycat.com/v1/gfycats', {headers: headers})
    //  .subscribe(res => {
    //    response=res;
    //    console.log("get title");
    //  });

    // this.http.post('https://filedrop.gfycat.com', {
    //  title:response.gfyname,
    //  fetchUrl: path,
    //  captions: [
    //    {
    //      startSeconds:0,
    //      duration: 5,
    //      text:response.secret
    //    }
    //  ]
    // })
    //  .subscribe(res => {
    //    console.log("Converting to GIF.");
    //  });


    this.http.post('https://api.imgur.com/3/image', {
      headers:{
        "Authorization":"client-id 990bf56cfa4922a",
        'Content-Type': 'application/json'
      },
      image: path,
      title: path,
    })
      .subscribe(res => {
        console.log(res.json());
        console.log("Posting Img to Imgur");
        response=res;
      });


    //headers.append('Authorization', 'Bearer <<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0OTIyMDQ2NjgsImlzcyI6IjJfVlNGc19BIiwicm9sZXMiOlsiQ29udGVudF9SZWFkZXIiXX0.jZqPRhltX6_XLAepIYgsp_Fmud3jklIWkc3K9CQwmBw>>');
    // this.http.get("https://api.imgur.com/3/image/"+response.id,{headers:headers})
    //   .subscribe(res => {
    //     link=res;
    //     console.log("Get the GIF back.");
    //     return link.link;
    //   });

  }
}
