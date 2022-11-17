import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { first } from 'rxjs';
import { EstudianteInput } from 'src/app/_models/estudianteInput';
import { Estudiante } from 'src/app/_models/estudiante';
import { EstudianteService } from 'src/app/_services/estudiantes.service';
import { Materia } from 'src/app/_models/materias';
import { MateriasService } from 'src/app/_services/materias.service';


@Component({
  selector: 'app-admin-estudiantes',
  templateUrl: './admin-estudiantes.component.html',
  styleUrls: [],
  providers: [DatePipe, EstudianteService],
})
export class AdminEstudiantesComponent implements OnInit {
  listaMaterias: Materia[] = [];
  listaMateriasSelect: Materia[] = [];
  listaEstudiante: Estudiante[] = [];
  listaEstudianteSelect: Estudiante[] = [];
  estudianteSeleccionado: EstudianteInput = new EstudianteInput();

  constructor(private estudiantesService: EstudianteService) { }

  ngOnInit(): void {
    this.estudiantesService
    // estudiante
    this.estudiantesService
      .getEstudiante()
      .pipe(first())
      .subscribe(data => {
        this.listaEstudianteSelect = data;
        this.listaEstudiante = data;
      });
  }

  // método al dar click al botón buscar
  findEstudiante(): void {
    // alerta por si no hay ningún filtro seleccionado
    if (this.estudianteSeleccionado.idEstudiante == undefined || this.estudianteSeleccionado.idEstudiante == 0) {
      alert('Por favor seleccione un estudiante para su búsqueda');
      return;
    }
    //accedo al servicio y a las propiedades del objeto estudianteSeleccionado 
    this.estudiantesService
      .getEstudianteMateriaByIdJson(this.estudianteSeleccionado)
      .pipe(first())
      .subscribe((data) => (this.listaEstudiante = data));

  }
  capturarIde($event: any): void {
    let idSeleccionado = $event.target.options[$event.target.options.selectedIndex].value;
    this.estudianteSeleccionado.idEstudiante = Number(idSeleccionado);
  }

}
