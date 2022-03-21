import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChildren('trendstrrVideo') videos:QueryList<any>;

  feeds:any[] = [
    {
      id:1,
      logo:'assets/imgs/Rohan.jpg',
      username: 'Rohan Saini',
      location: 'India',
      src: 'assets/videos/Video1Rohan.mp4',
      description: 'Hi this is just a UI Demo for Trendstrr for Rohan Post((Video)',
      likes:50
    },
    {
      id:2,
      logo:'assets/imgs/Akhil.jpg',
      username: 'Akhil Saini',
      location: 'Germany',
      src: 'assets/videos/Video2Akhil.mp4',
      description: 'Hi this is just a UI Demo for Trendstrr from Akhil Post(Video)',
      likes:15
    },
    {
      id:3,
      logo:'assets/imgs/Shivam.jpg',
      username: 'Shivam',
      location: 'USA',
      src: 'assets/videos/Video3Shivam.mp4',
      description: 'Hi this is just a UI Demo for Trendstrr from Shivam Post(Video)',
      likes:14
    },
    {
      id:4,
      logo:'assets/imgs/Anant.jpg',
      username: 'Anant',
      location: 'Brazil',
      src: 'assets/imgs/posts/AnantImage2.jpeg',
      description: 'Hi this is just a UI Demo for Trendstrr from Anant Post(Image)',
      likes:32,
      image: true
    },
    {
      id:5,
      logo:'assets/imgs/Rahul.jpg',
      username: 'Rahul',
      location: 'Australia',
      src: 'assets/imgs/posts/RahulImage1.jpeg',
      description: 'Hi this is just a UI Demo for Trendstrr from Rahul Post(Image)',
      likes:20,
      image: true
    },
  ]

  nowPlaying=null;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.didScroll();
  }

  toggleWrap(feed){
    feed.wrap= !feed.wrap;
  }

  isElementInViewPort(element){
    const rect= element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerHeight || document.documentElement.clientWidth)
    );
  }

  didScroll(event?){
    console.log(event);
    if(this.nowPlaying && this.isElementInViewPort(this.nowPlaying)) return;
    else if(this.nowPlaying && !this.isElementInViewPort(this.nowPlaying)){
      this.nowPlaying.pause();
      this.nowPlaying= null;
    }

    this.videos.forEach(player=>{
      console.log('player',player);

      if(this.nowPlaying) return;

      const nativeElement = player.nativeElement;
      const inView = this.isElementInViewPort(nativeElement);

      if(inView){
        this.nowPlaying=nativeElement;
        this.nowPlaying.muted=true;
        this.nowPlaying.play();
      }
    })
  }
}
