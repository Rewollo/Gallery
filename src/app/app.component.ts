import { Component, Input } from '@angular/core';
import { IAlbum } from './album.interface';
import { IPhoto } from './photo.interface';
import { IUser } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gallery';
  @Input() albums: IAlbum[] = [];
  @Input() photos: IPhoto[] = [];
  @Input() users: IUser[] = [];

  constructor() {
    this.getAlbums();
    this.getPhotos();
    this.getUsers();
  }

  async getUsers() {
    const responseUser = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const dataUser = await responseUser.json();
    this.users = dataUser;
    // console.log(this.users);
  }

  async getAlbums() {
    const responseAlbum = await fetch(
      'https://jsonplaceholder.typicode.com/albums'
    );
    const dataAlbum = await responseAlbum.json();
    this.albums = dataAlbum;
    // console.log(this.albums);
  }

  async getPhotos() {
    const responsePhoto = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    );
    const dataPhoto = await responsePhoto.json();
    this.photos = dataPhoto;
    // console.log(this.photos);
  }

  getUserAlbums(userId: number): IAlbum[] {
    return this.albums.filter((album) => album.userId === userId);
  }

  getUserPhotos(userId: number): IPhoto[] {
    const albums = this.getUserAlbums(userId);
    const albumsIds = albums.map(album => album.id);

    return this.photos.filter((photo) => albumsIds.includes(photo.albumId));
  }

  getAlbumsPhotos(albumId: number): IPhoto[] {
    return this.photos.filter((photo) => photo.albumId === albumId);
  }
}
