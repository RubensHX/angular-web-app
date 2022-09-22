import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {


  nomeCliente: string = '';
  emailCliente: string = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  salvarCliente(): void {
    alert(`Cliente ${this.nomeCliente} salvo com sucesso! um email de confirmação foi enviado para ${this.emailCliente}`);
  }

  letCliente() {
    var observable = this.clienteService.getAll();
    observable.subscribe(listaCliente => {
      const entries = Object.entries(listaCliente);
      entries.forEach(entry => {
        alert(entry)
      })
    })
  }

}
