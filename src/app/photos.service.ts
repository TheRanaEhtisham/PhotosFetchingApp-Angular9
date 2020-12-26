import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface UnSplashResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<UnSplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID thsyQasTABFoU5anBRXrtpioMh_wmChwdtSSSIW3fTk'
      }
    })
  }
}
