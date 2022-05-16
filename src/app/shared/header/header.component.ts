import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  buscarProducto(termino: string) {
    console.log(termino);
    if (termino.length < 1) {
      //solo vamos a buscar su tengo al menos una letra
      return;
    }
    this.router.navigate(['/search', termino]);
    console.log(termino);
  }
  ToggleNavBar(): void {
    const element: HTMLElement = document.getElementsByClassName(
      'navbar-toggler'
    )[0] as HTMLElement;
    if (element.getAttribute('aria-expanded') === 'true') {
      element.click();
    }
  }
}
