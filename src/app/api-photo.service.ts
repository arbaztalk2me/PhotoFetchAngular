import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiPhotoService {

  constructor(private http:HttpClient) { }

  getPhoto(){
    return this.http.get('https://api.unsplash.com/photos/random',{
      headers:{
        'Authorization':'Client-ID V4Lq9dVp5jhavYMb8LDa2mED4GyyoT7z98v0VNvOMDo'
      }
    })
  }

}
