import { Injectable, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable({
  providedIn: 'root'
})
export class ContatosDataBaseService {

  contatos: ContatoModel [] = [];
  enviarContato = new EventEmitter();

  constructor() { }

  setContato(novoContato: ContatoModel): void {
    this.contatos.push(novoContato);
    this.enviarContato.emit(this.contatos);
  }

  getContato(id: number): ContatoModel {
    let contato: ContatoModel;
    contato = this.contatos[id];
    return contato;
  }

}
