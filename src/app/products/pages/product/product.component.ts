import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

// Variable que indica si el producto es visible o no.
public isProductVisible: boolean = false;

// Variable que almacena el precio actual del producto.
public currentPrice: number = 10;

// Constructor de la clase, se ejecuta al crear una instancia del componente.
constructor() {
  console.log('Constructor');
}

// Método que se ejecuta después de que el componente ha sido inicializado.
ngOnInit(): void {
  console.log('ngOnInit');
}

// Método que se ejecuta cuando hay cambios en las propiedades de entrada del componente.
ngOnChanges(changes: SimpleChanges): void {
  console.log({changes})
  console.log('ngOnChanges');
}

// Método que se ejecuta durante cada detección de cambios en el componente.
ngDoCheck(): void {
  console.log('ngDoCheck');
}

// Método que se ejecuta después de que se ha inicializado el contenido del componente.
ngAfterContentInit(): void {
  console.log('ngAfterContentInit');
}

// Método que se ejecuta después de cada verificación del contenido del componente.
ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked');
}

// Método que se ejecuta después de que se ha inicializado la vista del componente.
ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
}

// Método que se ejecuta después de cada verificación de la vista del componente.
ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked');
}

// Método que se ejecuta justo antes de que el componente sea destruido.
ngOnDestroy(): void {
  console.log('ngOnDestroy');
}

// Método que incrementa el precio actual del producto.
increasePrice() {
  this.currentPrice++;
}


}
