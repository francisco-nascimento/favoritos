import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-table-films',
  templateUrl: './table-films.component.html',
  styleUrls: ['./table-films.component.css']
})
export class TableFilmsComponent implements OnInit {

  displayedColumns: string[] = ['Título', 'Elenco', 'Gênero', 'Ano'];
  listaFilmes: Filme[];

  constructor(private service: FilmesService) {}

  ngOnInit(): void {
    this.listarFilmes();
  }

  listarFilmes(): void {
    this.service.getListaFilmes().subscribe(
      (res) => {this.listaFilmes = res; },
      (err) => {alert('There is a problem!' + JSON.stringify(err)); }
    );
  }

}
