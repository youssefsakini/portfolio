import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  skills:any = [
    {
      id: '1.',
      name: 'Problem Solving'
    },
    {
      id: '2.',
      name: 'Creative Idea'
    },
    {
      id: '3.',
      name: 'Search a lot'
    },
    {
      id: '4.',
      name: 'High Quality'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
