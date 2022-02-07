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
  @Input() photos: IPhoto[] = []

  // @Input() user: IUser = {
  //   id: 0,
  //   name: ''
  // }

  constructor() {}

  ngOnInit(): void {}
  getPhotos(): string[] {
    return this.photos.map(photo => JSON.stringify(photo));
  }
}
