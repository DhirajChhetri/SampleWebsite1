import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 public header=
    {heading: 'A FREE AND SIMPLE LANDING PAGE',
    headertext: `'Namari is a free landing page template you can use for your projects. It is free to use for your
    personal and commercial projects, enjoy!'`,
    buttontext:'Getting Started',
    buttonlink:'/Home'
  }

  constructor() { };

  ngOnInit() {
  }

}

