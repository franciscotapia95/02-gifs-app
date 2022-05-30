import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'UdunlfywSHhwxhaWDK3la8u085ezhrho';

  private _historial: string[] = [];

  // ToDo Cambiar any por el tipo correspondiente
  public resultados:any[] = [];

  get historial(): string[] {
    return [...this._historial];
  }

  constructor (private http: HttpClient) { }
  
  buscarTermino(query: string): void {

    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=10`).subscribe( (resp: any) => {
      console.log(resp.data);
      this.resultados = resp.data;
    });
    // console.log(this._historial);

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=UdunlfywSHhwxhaWDK3la8u085ezhrho&q=Dragon Ball z&limit=10').then(response => {
    //   response.json().then(data => {
    //     console.log(data);
    //   });
    // })
  }
}
