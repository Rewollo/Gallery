import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
import { IPhoto } from '../photo.interface';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  @Input() user: IUser = {
    id: 0,
    name: ''
  }

  @Input() album: IAlbum = {
    userId: 0,
    id: 0,
    title: ''
  }

  @Input() albums: IAlbum[] = [];

  @Input() photos: IPhoto[] = [];

  @Input() photo: IPhoto = {
    albumId: 0,
    id: 0,
    title: '',
    url: ''
  }

  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getUsersPhotos(albumId: number): IPhoto[] {
    return this.photos.filter(photo => photo.albumId === albumId);
  }

}
