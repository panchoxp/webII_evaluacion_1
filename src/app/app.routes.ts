import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { EditarProductoComponent } from './screens/editar-producto/editar-producto.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ApiComponent } from './screens/api/api.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "Productos", component: ProductosComponent},
    {path: "Gestion", component: GestionComponent},
    {path: "editarProductos/:idProducto", component:EditarProductoComponent},
    {path: "Libro", component: ApiComponent},

    {path: "**", redirectTo:"", pathMatch:'full'},
    ];
