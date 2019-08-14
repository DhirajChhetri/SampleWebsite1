import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naviagation',
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.css']
}) 
export class NaviagationComponent implements OnInit {
  public activetab='';
  constructor() { }

  ngOnInit() {
  }
  getActiveTab(tabname: string){
    this.activetab = tabname;
    console.log(this.activetab);
  }

}
