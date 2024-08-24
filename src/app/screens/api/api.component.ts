import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  servicio = inject(ApiService);
  libros: any[] = [];

  ngOnInit() {
    this.servicio.getLibro().subscribe(response => {
      console.log(response);
      this.libros = response.libros; 
    });
  }
}
