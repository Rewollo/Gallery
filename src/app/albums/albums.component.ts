import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
<<<<<<< HEAD
=======
// import { IUser } from '../user.interface';
>>>>>>> 7904ce022fd92e9894b0dfe52c4050c0efcc7d74
import { IPhoto } from '../photo.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
<<<<<<< HEAD
  
  @Input() album: IAlbum | undefined;
  @Input() photos: IPhoto[] = [];
  clickStatus:boolean = false;


=======
  // albums: IAlbum[] = [];
  // users: IUser[] = [];

  @Input() album: IAlbum | undefined;
  @Input() photos: IPhoto[] = [];
  clickStatus:boolean = false;


>>>>>>> 7904ce022fd92e9894b0dfe52c4050c0efcc7d74
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

