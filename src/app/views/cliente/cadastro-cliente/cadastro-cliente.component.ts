import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  listaClientes = new Array<Cliente>();
  nomeCliente: string = '';
  emailCliente: string = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.lerCliente();
  }

  salvarCliente(): void {
    alert(`Cliente ${this.nomeCliente} salvo com sucesso! um email de confirmação foi enviado para ${this.emailCliente}`);
  }

  lerCliente() {
    this.listaClientes = [];
    var observable = this.clienteService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      entries.forEach(entry => {
        alert(entry)
        this.listaClientes.push(entry)
      })
    })
  }

}
