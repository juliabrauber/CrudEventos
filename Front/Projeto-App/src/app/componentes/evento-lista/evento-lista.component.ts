import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '@app/models/Evento';
import { EventoService } from '@app/services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {

  modalRef?: BsModalRef;
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public eventoId = 0;

  public larguraImagem: number = 150;
  public margemImagem: number = 2;
  public exibirImagem: boolean = true;
  private filtroListado: string = '';

public get filtroLista (): string {
return this.filtroListado;
}
public set filtroLista (value: string){
  this.filtroListado = value;
  this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista): this.eventos;
}
public filtrarEventos(filtrarPor: string) : Evento[] {
filtrarPor = filtrarPor.toLocaleLowerCase();
return this.eventos.filter(
  evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || 
  evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
);
}

constructor(
  private eventoService: EventoService,
  private modalService: BsModalService,
  private toastr: ToastrService,
  private spinner: NgxSpinnerService,
  private router: Router,
) { }

  public ngOnInit(): void {
    this.getEventos();
    this.spinner.show();
  }
  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem; 
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
      next: (eventosResp: Evento[]) => {
        this.eventos = eventosResp;
        this.eventosFiltrados = this.eventos;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os eventos.', 'Erro!');
      },
      complete: () => this.spinner.hide()
    });
  }
  openModal(event: any, template: TemplateRef<any>, eventoId: number): void {
    event.stopPropagation();
    this.eventoId = eventoId
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(): void {
    this.modalRef?.hide();
    this.spinner.show();

    this.eventoService.deleteEvento(this.eventoId).subscribe(
      (result: any) => {
        console.log(result);
          this.toastr.success('O Evento foi deletado com sucesso.', 'Deletado!');
          this.getEventos();
        },

      (error: any) => { 
        this.toastr.error(`Error ao tentar deletar o evento ${this.eventoId}`, 'Erro');
        console.error(error);
      },
  ).add(() => this.spinner.hide());
    
    // Lógica para confirmar a ação (editar/excluir)
  }
  
  decline(): void {
    this.modalRef?.hide();
    // Lógica para recusar a ação (editar/excluir)
  }
  detalheEvento(id: number): void {
    this.router.navigate([`eventos/detalhe/${id}`]);
  }

}
