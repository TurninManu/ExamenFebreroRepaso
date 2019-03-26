import { Nota } from './../../modelo/nota';
import { Asignatura } from './../../modelo/asignatura';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../modelo/usuario';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  usuario:Usuario;
  asignaturaSelec:Asignatura;
  notas:Array<Nota>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario=navParams.get("usuario");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  public verNota(asig:Asignatura){
    this.asignaturaSelec=asig;
    this.notas=this.asignaturaSelec.notas;
  }

}
