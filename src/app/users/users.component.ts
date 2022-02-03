import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
import { IUser } from '../user.interface';
import { IPhoto } from '../photo.interface';


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


  @Input() albums: IAlbum[] = [];

  @Input() photo: IPhoto = {
    albumId: 0,
    id: 0,
    title: '',
    url: ''
  }

  @Input() photos: IPhoto[] = [];
  

  click: boolean = false;
  

  selectedValue: number = 1;

  constructor() { }
  


  onClick() {
    this.user.id = this.selectedValue;
      return (this.click = true, console.log(this.selectedValue));
  }



  ngOnInit(): void {
  }


}
