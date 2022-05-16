import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  cargada = true; //para saber cuando la info ya la tenemos cargada
  banner: any[] = [];
  nosotros: any[] = [];
  constructor(private http: HttpClient) {
    this.cargandoBanner();
    this.cargandoNosotros();
  }
  //: Observable<any[]>
  private cargandoBanner() {
    console.log('Ingreso banner');
    this.http
      .get<any[]>(
        'https://appamtruitravel-default-rtdb.firebaseio.com/inicio.json'
      )
      .subscribe((res: any[]) => {
        console.log(res);
        this.cargada = false;
        this.banner = res;
      });
  }
  private cargandoNosotros() {
    console.log('Ingreso Nosotros');
    this.http
      .get<any[]>(
        'https://appamtruitravel-default-rtdb.firebaseio.com/Nosotros.json'
      )
      .subscribe((res: any[]) => {
        console.log(res);
        this.cargada = false;
        this.nosotros = res;
      });
  }
}
