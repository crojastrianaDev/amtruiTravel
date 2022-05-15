import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  cargada = true; //para saber cuando la info ya la tenemos cargada
  banner: any[] = [];
  nosotros: any[] = [];
  constructor(private http: HttpClient) {}
  private cargandoBanner() {
    this.http
      .get('https://appamtruitravel-default-rtdb.firebaseio.com/Inicio')
      .subscribe((res: any[]) => {
        console.log(res);
        this.cargada = false;
        this.banner = res;
      });
  }
  private cargandoNosotros() {
    this.http
      .get('https://appamtruitravel-default-rtdb.firebaseio.com/Nosotros')
      .subscribe((res: any[]) => {
        console.log(res);
        this.cargada = false;
        this.nosotros = res;
      });
  }
}
