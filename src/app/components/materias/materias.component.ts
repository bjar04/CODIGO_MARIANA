import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { first } from 'rxjs';
import { MateriaInput } from 'src/app/_models/materiaInput';
import { EstudianteInput } from 'src/app/_models/materiaInput';
import { Materia } from 'src/app/_models/materias';
import { Estudiante } from 'src/app/_models/materias';
import { MateriasService } from 'src/app/_services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: [],
  providers: [DatePipe, MateriasService],
})
export class MateriasComponent implements OnInit {
  listaMaterias: Materia[] = [];
  listaEstudiante: Estudiante[] = [];
  listaMateriasSelect: Materia[] = [];
  listaEstudianteSelect: Estudiante[] = [];
  materiaSeleccionado: MateriaInput = new MateriaInput();
  // EstudianteSeleccionado: EstudianteInput = new EstudianteInput();

  constructor(private materiasService: MateriasService) {}

  ngOnInit(): void {
    this.materiasService
      .getMaterias()
      .pipe(first())
      .subscribe((data) => (this.listaMateriasSelect = data));
      console.log(this.listaMateriasSelect);
      
      // estudiante
      this.materiasService
      .getEstudiante()
      .pipe(first())
      .subscribe((data) => (this.listaEstudianteSelect = data));
      
      
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

  // ----------------------------------------------------------------------------

  //  ngOnInite(): void {
  //    this.materiasService
  //      .getEstudiante()
  //      .pipe(first())
  //      .subscribe((data) => (this.listaEstudianteSelect = data));
  //  }

  // findMateriae(): void {
  //     this.materiasService
  //     .getByIdEstudiante(this.EstudianteSeleccionado)
  //     .pipe(first())
  //     .subscribe((data) => (this.listaEstudiante = data));
  // }

    capturarIde($event: any): void {
      let idSeleccionado = $event.target.options[$event.target.options.selectedIndex].value;
      this.materiaSeleccionado.idMateria = Number(idSeleccionado);
  }
 
}