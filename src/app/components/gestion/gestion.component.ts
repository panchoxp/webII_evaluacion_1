import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {
  servicio = inject(ProductosService)//inteccion de dependencias//traigo el servicio

  producto:any
  productoSeleccionado: string = ''; 
//crear
  ngOnInit(){
    this.servicio.getProducto().subscribe(p=>{      
      this.producto = p
    })    
  }
  //eliminar
  eliminar(id:any) {      
    this.servicio.deleteProducto(id).subscribe()
  }


}
