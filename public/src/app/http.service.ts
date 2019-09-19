import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getCakes(){
    return this._http.get('/cakes');
    // this._http.get('/tasks').subscribe(data => console.log("Got some tasks", data));
    // tempObserv.subscribe(data => console.log("Got some tasks", data));
  }
  getOneCake(id: string){
    return this._http.get(`/cakes/${id}`);
    // this._http.get(`/tasks/${id}`).subscribe(data => console.log('got one task', data));
  }
  createCake(cakeobj){
    return this._http.post('/cakes', cakeobj)
    // let atemp = this._http.post('/tasks', {"title": "This is a Title", "description": "Something here", "completed": false});
    // atemp.subscribe(data => console.log("made this", data));
  }
  editCake(id: string, commobj){
    return this._http.put(`/cakes/${id}`, commobj);
    // this._http.put(`/tasks/${id}`, {"title": "New Title"}).subscribe(data => console.log('edited this', data));
  }
}