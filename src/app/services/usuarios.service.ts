import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url: string = '';

  constructor(
    private readonly httpClient: HttpClient
  ) { 
    this.url = environment.API_REST_URL;
  }

  public obtenerUsuarios(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.httpClient.get(this.url +`${'usuarios'}`, {headers});
  }

  public obtenerUsuarios1(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.httpClient.get(this.url + 'usuarios', {headers});
  }

  
}
