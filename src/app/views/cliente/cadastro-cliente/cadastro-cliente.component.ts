import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit, OnDestroy {
  cliente = new Cliente();
  sub!: any;
  id!: string;
  titulo: string = 'Cadastro de Cliente';

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id) {
      this.titulo = 'Edição de Cliente';
    }
  }

  salvarCliente(): void {
    alert(`Cliente ${this.cliente.nome} salvo com sucesso!`);
  }

}
