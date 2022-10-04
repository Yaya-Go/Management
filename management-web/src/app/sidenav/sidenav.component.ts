import { Component, Input, OnInit } from '@angular/core';
import { SidenavList } from '../app-config.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  list: any;
  constructor() { 
    this.list = SidenavList;
  }

  ngOnInit(): void {
  }

}
