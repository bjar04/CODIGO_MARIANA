import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { first } from 'rxjs';
import { MateriaInput } from 'src/app/_models/materiaInput';
import { Materia } from 'src/app/_models/materias';
import { MateriasService } from 'src/app/_services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: [],
  providers: [DatePipe, MateriasService],
})
export class MateriasComponent implements OnInit {
  listaMaterias: Materia[] = [];
  listaMateriasSelect: Materia[] = [];
  materiaSeleccionado: MateriaInput = new MateriaInput();

  constructor(private materiasService: MateriasService) {}

  // limpiarFormulario(e) {
  //   e.preventDefault
  //   document.getElementById("materia").reset();
  // }

  ngOnInit(): void {
    this.materiasService
      .getMaterias()
      .pipe(first())
      .subscribe((data) => (this.listaMateriasSelect = data));
  }

  findMateria(): void {
    if(this.materiaSeleccionado.idMateria == undefined || this.materiaSeleccionado.idMateria == 0){
      alert('Por favor seleccione una materia para su busqueda');
      return;
    }
    
      this.materiasService
        .getMateriasByIdJson(this.materiaSeleccionado)
        .pipe(first())
        .subscribe((data) => (this.listaMaterias = data));
  }

  capturarId($event: any): void {
    let idSeleccionado = $event.target.options[$event.target.options.selectedIndex].value;
    this.materiaSeleccionado.idMateria = Number(idSeleccionado);
  }
 
}


