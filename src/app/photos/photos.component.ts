import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from '../photo.interface';
import { IAlbum } from '../album.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photo: IPhoto = {
    albumId: 0,
    id: 0,
    title: '',
    url: ''
  }

  @Input() album: IAlbum = {
    userId: 0,
    id: 0,
    title: ''
  }

  @Input() photos: IPhoto[] = [];

  @Input() albums: IAlbum[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
