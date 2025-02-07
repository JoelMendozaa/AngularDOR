import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'] // Usa .scss si trabajas con Sass
})
export class TiendaComponent implements OnInit {
  cantidad: number = 0; // Cantidad inicial de productos
  carrito: any[] = []; // Arreglo para almacenar productos en el carrito

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {
    // Aquí puedes agregar lógica para inicializar datos si es necesario
  }

  incrementarCantidad(): void {
    this.cantidad++;
  }

  decrementarCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
    }
  }

  agregarAlCarrito(): void {
    if (this.cantidad > 0) {
      const producto = {
        nombre: 'Fall Limited Edition Sneakers',
        precio: 125.00,
        cantidad: this.cantidad
      };
      this.carrito.push(producto);
      this.cantidad = 0; // Reinicia la cantidad después de agregar
      console.log('Producto añadido al carrito:', this.carrito);
    } else {
      alert('Por favor, selecciona una cantidad antes de añadir al carrito.');
    }
    
  }
  get gifs(): Gif[] {
  return this.gifsService.gifList;
  }
}
