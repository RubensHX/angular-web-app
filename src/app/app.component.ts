import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-web-app';

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
        const cliente = entry[1];
        cliente.id = entry[0];
        alert(entry)
        this.listaClientes.push(entry[1]);
      })
    })
  }
}



