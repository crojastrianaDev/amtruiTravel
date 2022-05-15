import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css'],
})
export class ListaServiciosComponent implements OnInit {
  constructor(public productosService: ProductosService) {}

  ngOnInit(): void {}
}
