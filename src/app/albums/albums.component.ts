import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
import { IUser } from '../user.interface';
import { IPhoto } from '../photo.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  // albums: IAlbum[] = [];
  // users: IUser[] = [];

  @Input() album: IAlbum = {
    userId: 0,
    id: 0,
    title: ''
  }

  // @Input() user: IUser = {
  //   id: 0,
  //   name: ''
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
