import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  cakes: any = []; //set to any to allow setting this equal to data (which is an array anyways..)
  onecake: any = {baker: "", photo: "", rating: -1, comments: []};
  newcake: any;
  constructor(private _httpService: HttpService){
    this.newcake = {baker: "", photo: "", rating: [], comments: []};
  }
  ngOnInit(){
    this.getCakesFromService();
  }
  showClick(event){
    this.getOneCakeFromService(event.srcElement['name']);
  }
  editCakeFromService(event){
    // console.log(event)
    // id = event.srcElement['name']
    // rating = event.srcElement[0]['value']
    // comment = event.srcElement[1]['value']
    let rating = Number(event.srcElement[0]['value']);
    // console.log(rating)
    let changecake = {"rating": rating, "comments": event.srcElement[1]['value']};
    // let changecake = {"rating": [], "comments": []};
    this._httpService.editCake(event.srcElement['name'], changecake).subscribe(data => {
      console.log(data, "edited");
      this.getCakesFromService();
    });
  }
  createCakeFromService(){
    this._httpService.createCake(this.newcake).subscribe(data => {
      console.log("Created this", data);
      this.newcake = {baker: "", photo: "", rating: [], comments: []}; //reset newcake
      this.getCakesFromService(); //to display added cake if necessary
    })
  }
  getOneCakeFromService(id){
    this._httpService.getOneCake(id).subscribe(data => {
      console.log('Something', data);
      if(data.rating){
        let total_rating = 0;
        for(let i = 0; i<data.rating.length; i++){
          total_rating += data.rating[i];
        }
        data.rating = total_rating/data.rating.length;
      }
      this.onecake = data;
    })
  }
  getCakesFromService(){
    this._httpService.getCakes().subscribe(data => {
      console.log('Got this data:', data);
      this.cakes = data;
    })
  }
}
