import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaContato: ContatoModel [] = [];

  @Output()
  eventOutputClicado = new EventEmitter();

  constructor(private contatoDataBaseService: ContatosDataBaseService) { }

  ngOnInit() {
    this.contatoDataBaseService.enviarContato.subscribe(contatos => this.listaContato = contatos);
  }

  contatoClicado(idContatoClicado: number){
    console.log('Enviou: ', idContatoClicado);
    this.eventOutputClicado.emit(idContatoClicado);
  }

}
