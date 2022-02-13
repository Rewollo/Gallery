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

  @Input() album: IAlbum = {
    userId: 0,
    id: 0,
    title: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
