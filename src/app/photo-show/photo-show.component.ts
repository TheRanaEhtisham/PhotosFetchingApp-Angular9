import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoUrl: string;
  constructor(private photosService: PhotosService) {

  }

  ngOnInit(): void {
    this.fetchPhoto()
  }

  onClick() {
    this.fetchPhoto()

  }

  fetchPhoto() {
    this.photosService.getPhotos().subscribe((res) => {
      this.photoUrl = res.urls.regular
    })
  }

}
