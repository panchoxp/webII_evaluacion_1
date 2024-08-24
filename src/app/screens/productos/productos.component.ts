import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'] 
})
export class ProductosComponent {

  servicio = inject(ProductosService);

  producto: any; 
  colorSeleccionado: string = ''; 

  ngOnInit(){
    this.servicio.getProducto().subscribe(p => {
      console.log(p);
      this.producto = p;
    });
  }
}
