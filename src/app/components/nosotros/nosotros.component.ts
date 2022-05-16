import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css'],
})
export class NosotrosComponent implements OnInit {
  uno: any[] = [];
  dos: any[] = [];
  constructor(public nosotrosService: DatosService) {
    this.uno = this.nosotrosService.nosotros[0];
    console.log('uno', this.uno);
  }

  ngOnInit(): void {}
}
