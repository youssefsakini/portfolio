import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.scss']
})
export class MyProjectComponent implements OnInit {

  projects:any = [
    {
      id:1,
      name:'MEDIEXPERTS APPLICATION',
      technologie:'Laravel/VueJs'
    },
    {
      id:2,
      name:'ATTAWFIQ MICRO-FINANCE APP',
      technologie:'Angular/NodeJs : ExpressJs'
    },
    {
      id:3,
      name:'ANGRY-SKELETON WEB SITE',
      technologie:'Laravel/VueJs'
    },
    {
      id:4,
      name:'ROSACOLOR WEB SITE',
      technologie:'NextJs'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
