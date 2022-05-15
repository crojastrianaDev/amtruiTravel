import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];
  productoFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {}
  private cargandoProductos() {
    return new Promise<void>((resolve, reject) => {
      this.http
        .get('https://appamtruitravel-default-rtdb.firebaseio.com/Tours.json')
        .subscribe((res: ProductoInterface[]) => {
          console.log(res);
          this.productos = res;
        });
    });
  }
  getProducto(id: String) {
    return this.http.get(
      `https://appamtruitravel-default-rtdb.firebaseio.com/Tours/${id}.json`
    );
  }
  buscarProducto(termino: string) {
    if (this.productos.length == 0) {
      //cargamos los productos, si ya termino de cargar ahora si filtar
      this.filtrarProductos(termino);
    } else {
      //filtrar si ya estan ahí
      this.filtrarProductos(termino);
    }
  }
  private filtrarProductos(termino: string) {
    this.productoFiltrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach((prod) => {
      const tituloLower = prod.nombre.toLowerCase();
      if (tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }
    });
  }
}
