import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
 })
 export class GifsService {
  public gifList: Gif[] = [];
  private _taghistory: string[] = [];
  private apikey: string = 'mbdfUdkRQmtesshKFFP9N8jpVAuyeNXg';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) { }
  get tagHistory(){
  return[...this._taghistory];
  }
  private organizeHistory(tag:string){
  tag = tag.toLowerCase();
  if ( this._taghistory.includes(tag) ){
  this._taghistory = this._taghistory.filter( (oldTag) => oldTag !== tag)
  }
  this._taghistory.unshift(tag);
  this._taghistory = this.tagHistory.splice(0,15);
 }

 searchTag(tag:string):void  {
  if(tag.length === 0) return;
  this.organizeHistory(tag);
    
  const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('limit', '15')
    .set('q', tag)
  
  this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
    .subscribe(Response => {
      this.gifList = Response.data;
      console.log(Response);
      })
 }
}