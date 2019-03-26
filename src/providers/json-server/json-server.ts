import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../modelo/usuario';


@Injectable()
export class JsonServerProvider {
  URL="http://localhost:3000/";
  listener:JsonServerProviderListener

  constructor(public http: HttpClient) {
    console.log('Hello JsonServerProvider Provider');
  }

  setListener(listener:JsonServerProviderListener){
    this.listener=listener;
  }

  getUsuario(usuario:string, contrasenna:string){
    this.http.get(this.URL+"alumnos?usuario="+usuario+"&clave="+contrasenna).subscribe(
    data=>{
      this.listener.onGetUsuarioResponse(data[0],null);
    },
    _error=>{
      this.listener.onGetUsuarioResponse(null,"ERROR AL INICIAR SESIÓN");
      console.log("ERROR getUsuario en json-server.ts");
    }
    );
  }
  
}

export interface JsonServerProviderListener{
  onGetUsuarioResponse(usuario:Usuario, error:string)
}
