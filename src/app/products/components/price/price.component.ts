import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
// Decorador @Input() que indica que 'price' es una propiedad de entrada.
@Input()
public price: number = 0;

// Variable que almacenará la suscripción al intervalo.
public interval$?: Subscription;

// Método que se ejecuta después de que el componente ha sido inicializado.
ngOnInit(): void {
  console.log('Componente HIJO: ngOnInit');

  // Crear una suscripción al intervalo que emite un valor cada segundo y loguearlo.
  this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`));
}

// Método que se ejecuta cuando hay cambios en las propiedades de entrada del componente.
ngOnChanges(changes: SimpleChanges): void {
  console.log('Componente HIJO: ngOnChanges');
  console.log({changes});
}

// Método que se ejecuta justo antes de que el componente sea destruido.
ngOnDestroy(): void {
  console.log('Componente HIJO: ngOnDestroy');

  // Desuscribirse del intervalo para evitar posibles fugas de memoria.
  this.interval$?.unsubscribe();
}


}
