import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoInterface } from '../../models/productos';
declare var Swiper: any;

@Component({
  selector: 'app-servicio-x',
  templateUrl: './servicio-x.component.html',
  styleUrls: ['./servicio-x.component.css'],
})
export class ServicioXComponent implements OnInit {
  [x: string]: any;
  producto: ProductoInterface | any;
  id: string | undefined;
  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {}
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

  ngOnInit(): void {
    this.route.params.subscribe((parametros) => {
      console.log(parametros['id']);
      this.productoService
        .getProducto(parametros['id'])
        .subscribe((producto) => {
          this.id = parametros['id'];
          this.producto = producto;
        });
    });
  }
}
