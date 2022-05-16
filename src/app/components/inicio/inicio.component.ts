import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { isPlatformBrowser } from '@angular/common';
import { Params } from '@angular/router';

declare var Swiper: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  [x: string]: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public bannerService: DatosService,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
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
          // coverflowEffect: {
          //   rotate: 30,
          //   slideShadows: false,
          // },
        }
      );
    }
  }

  ngOnInit(): void {}
}
