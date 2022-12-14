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
      technologie:'Laravel/VueJs',
      image: './../../../assets/images/mxperts.png',
      link: 'https://mediexperts.ma/'
    },
    {
      id:2,
      name:'ATTAWFIQ MICRO-FINANCE APP',
      technologie:'Angular/NodeJs : ExpressJs',
      image: './../../../assets/images/TAWFIQ.jpg',
      link: 'https://loyer.netlify.app/'
    },
    {
      id:3,
      name:'ANGRY-SKELETON WEB SITE',
      technologie:'Angular',
      image: './../../../assets/images/skeleton1.jpeg',
      link: 'https://angryskeleton.netlify.app/'
    },
    {
      id:4,
      name:'ROSACOLOR WEB SITE',
      technologie:'NextJs',
      image: './../../../assets/images/rosacolor.png',
      link: 'https://rosacolor-front.vercel.app/'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
