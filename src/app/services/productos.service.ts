import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  private API_PRODUCTO = "http://localhost:3000/productos"

  getProducto(): Observable<any> {
    return this.http.get(this.API_PRODUCTO)
  }
  getProductoID(id: any):Observable<any>{
    return this.http.get(`${this.API_PRODUCTO}/${id}`)//traer un unico elemento, mas facil asi
  }

//post
postProducto(item: any): Observable<any> {
  return this.http.post(this.API_PRODUCTO, item)
}
//put-editar
putProducto(item:any): Observable<any> {
  return this.http.put(`${this.API_PRODUCTO}/${item.id}`,item)
  //return this.http.put(this.API_PRODUCTO+"/"+item.id,item)
}

//DELETE
deleteProducto(id:any):Observable<any>{
  return this.http.delete(`${this.API_PRODUCTO}/${id}`)
}
}
