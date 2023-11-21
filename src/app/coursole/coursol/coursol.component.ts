import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coursol',
  templateUrl: './coursol.component.html',
  styleUrls: ['./coursol.component.scss']
})
export class CoursolComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  carouselItems = [
    { image: '..//assets/Photos/A-191108.jpg', title: 'Item 1' },
    { image: '..//assets/Photos/Annotation 2023-11-12 132950.jpg', title: 'Item 2' },
    { image: '..//assets/Photos/837b7a73fa84266e54a340e2e531dd50.jpg', title: 'Item 3' },
    { image: '..//assets/Photos/145.jpg', title: 'Item 4' },
  ];
  // scrollToNext() {
  //   const carouselElement: HTMLElement = this.carouselContainer?.nativeElement;
  //   const currentScrollLeft = carouselElement.scrollLeft;
  //   const itemWidth = carouselElement.offsetWidth;

  //   const nextScrollLeft = currentScrollLeft + itemWidth;
  //   carouselElement.scrollTo({
  //     left: nextScrollLeft,
  //     behavior: 'smooth'
  //   });
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
