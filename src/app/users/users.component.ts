import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
import { IUser } from '../user.interface';
import { IPhoto } from '../photo.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() user: IUser = {
    id: 0,
    name: '',
  };

  @Input() albums: IAlbum[] = [];
  @Input() photos: IPhoto[] = [];

  selectedAlbumId: number | string = -1; // из select возвращается строка, а не число

  getAlbumById(albumId: number | string): IAlbum | undefined {
    // из select возвращается строка, поэтому просто "==". можно обезопасить этот поиск дополнительными преобразованиями.
    return this.albums.find(elem => elem.id == albumId);
  }

  getPhotosByAlbumId(albumId: number | string): IPhoto[] {
    return this.photos.filter(photo => photo.albumId == albumId);
  }

  ngOnInit(): void {}
}
