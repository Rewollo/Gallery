import {  Component, Input } from '@angular/core';
import { IAlbum } from './album.interface';
import { IPhoto } from './photo.interface';
import { IUser } from './user.interface';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UsersComponent {
  
  title = 'Gallery';
  @Input() override albums: IAlbum[] = [];
  @Input() override photos: IPhoto[] = [];
  @Input() users: IUser[] = [];




  @Input() override photo: IPhoto = {
    albumId: 0,
    id: 0,
    title: '',
    url: ''
  }
  

constructor() {
  super();
  this.getAlbums();
  this.getPhotos();
  this.getUsers();
}


  override click: boolean = false;

async getUsers() {
  const responseUser = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUser = await responseUser.json();
    this.users = dataUser;
    // console.log(this.users);
}

  async getAlbums() {
    const responseAlbum = await fetch('https://jsonplaceholder.typicode.com/albums');
    const dataAlbum = await responseAlbum.json();
    this.albums = dataAlbum;
    // console.log(this.albums);
  }

  async getPhotos() {
    const responsePhoto = await fetch('https://jsonplaceholder.typicode.com/photos');
    const dataPhoto = await responsePhoto.json();
    this.photos = dataPhoto;
    // console.log(this.photos);
  }

  getUsersAlbum(userId: number): IAlbum[] {
    return this.albums.filter(album => album.userId === userId);
  }

  getUsersPhoto(albumId: number): IPhoto[] {
    return this.photos.filter(photo => photo.albumId === albumId);
  }

}
