import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
// import { IUser } from '../user.interface';
import { IPhoto } from '../photo.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  // albums: IAlbum[] = [];
  // users: IUser[] = [];

  @Input() album: IAlbum | undefined;
  @Input() photos: IPhoto[] = [];
  clickStatus:boolean = false;


  constructor() {}

  ngOnInit(): void {}
  getPhotos(): string[] {
    return this.photos.map(photo => JSON.stringify(photo));
  }
  openAlbum() {
    if (this.clickStatus == false && this.album !== undefined) {
      this.clickStatus = true;
    } else {
      this.clickStatus = false;
    }
  
}
}

