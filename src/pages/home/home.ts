import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonServerProvider, JsonServerProviderListener } from '../../providers/json-server/json-server';
import { Usuario } from '../../modelo/usuario';
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements JsonServerProviderListener{

  formulario:FormGroup;

  constructor(public navCtrl: NavController, public jsonserverprovider:JsonServerProvider, public toastController:ToastController) {
    this.jsonserverprovider.setListener(this);
    this.formulario=new FormGroup({
      usuario:new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z]|[A-Z]|[0-9]$')
      ])),
      contrasenna:new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[a-z]|[A-Z]|[0-9]$')
      ]))
    });
  }

  public abrirV2(){
    console.log(this.formulario.get("usuario").value);

    this.jsonserverprovider.getUsuario(this.formulario.get("usuario").value, this.formulario.get("contrasenna").value);
  }

  onGetUsuarioResponse(usuario:Usuario, error:string){
    if(error==null){
      //abrimos la ventana2 pasandole el usuario logueado
      if(usuario!=undefined){
        //login correcto
        console.log("login correcto" + usuario)
        this.navCtrl.push(Pagina2Page, {"usuario":usuario});
      }else{
        //no existe el usuario
        const toast = this.toastController.create({
          message: "Usuario y/o contraseña inscorrecto",
          duration: 2000
        });
        toast.present();
      }
    }else{
      //aparece un error si no se pudo iniciar sesión
      const toast = this.toastController.create({
        message: error,
        duration: 2000
      });
      toast.present();
    }

  }

}
