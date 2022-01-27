import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../album.interface';
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

  constructor() { }

  ngOnInit(): void {
  }

}
