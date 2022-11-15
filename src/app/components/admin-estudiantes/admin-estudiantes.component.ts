// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-estudiantes',
//   templateUrl: './admin-estudiantes.component.html',
//   styleUrls: []
// })
// export class AdminEstudiantesComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { first } from 'rxjs';
import { MateriaInput } from 'src/app/_models/materiaInput';
import { EstudianteInput } from 'src/app/_models/estudianteInput';
import { Materia } from 'src/app/_models/materias';
import { Estudiante } from 'src/app/_models/estudiante';
import { MateriasService } from 'src/app/_services/materias.service';


@Component({
  selector: 'app-admin-estudiantes',
  templateUrl: './admin-estudiantes.component.html',
  styleUrls: [],
  providers: [DatePipe, MateriasService],
})
export class AdminEstudiantesComponent implements OnInit {
  listaMaterias: Materia[] = [];
  listaEstudiante: Estudiante[] = [];
  listaMateriasSelect: Materia[] = [];
  listaEstudianteSelect: Estudiante[] = [];
  materiaSeleccionado: MateriaInput = new MateriaInput();
  // EstudianteSeleccionado: EstudianteInput = new EstudianteInput();

  constructor(private materiasService: MateriasService) {}

  ngOnInit(): void {
    this.materiasService
      // estudiante
      this.materiasService
      .getEstudiante()
      .pipe(first())
      .subscribe((data) => (this.listaEstudianteSelect = data));
       
  }

    capturarIde($event: any): void {
      let idSeleccionado = $event.target.options[$event.target.options.selectedIndex].value;
      this.materiaSeleccionado.idMateria = Number(idSeleccionado);
  }
 
}
