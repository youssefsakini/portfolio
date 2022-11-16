import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routers: any = [
    {
      id: 1,
      name: 'HOME',
      link: '/home'
    },
    {
      id: 2,
      name: 'ABOUT ME',
      link: '/about-me'
    },
    {
      id: 3,
      name: 'MY PROJECT',
      link: '/my-project'
    },
    {
      id: 4,
      name: 'CONTACT ME',
      link: '/contact-me'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
