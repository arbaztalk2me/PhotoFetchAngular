import { Component,OnInit } from '@angular/core';
import { ApiPhotoService } from './api-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private apiCall:ApiPhotoService){}
  ngOnInit(): void {
    this.getPhotoRandom();
   
  }

  imageUrl:string=""
  getPhotoRandom(){
    this.apiCall.getPhoto().subscribe((response:any)=>{
      console.log(response.urls.regular)
      this.imageUrl=response.urls.regular;
    })
  }

  title = 'photoFetchingApp';
}
