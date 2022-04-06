import { Component, ElementRef, OnInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-servicio-x',
  templateUrl: './servicio-x.component.html',
  styleUrls: ['./servicio-x.component.css'],
})
export class ServicioXComponent implements OnInit {
  [x: string]: any;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.swiper = new Swiper(
      this.elementRef.nativeElement.querySelector('.swiper-container'),
      {
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        lazy: true,
        parallax: true,
        // coverflowEffect: {
        //   rotate: 30,
        //   slideShadows: false,
        // },
      }
    );
  }

  ngOnInit(): void {}
}
