import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  
  id: any;
  producto: any;
  categoria: string = "";
  color: string = "";
  precio: any;

  ruta = inject(ActivatedRoute)
  servicio = inject(ProductosService)//traigo el servicio
  //editar
  ngOnInit() {
    this.ruta.params.subscribe(r => {
      let id = r['idProducto'];
      this.servicio.getProductoID(id).subscribe(p => {
        this.id = p.id
        this.producto = p.producto
        this.categoria = p.categoria
        this.color = p.color
        this.precio = p.precio
      })
    })
  }
  editar(data: NgForm) {
    this.servicio.putProducto(data.value).subscribe()
    alert("Elemento editado")                        
  }                                               

}
