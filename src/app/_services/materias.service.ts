import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { MateriaInput } from '../_models/materiaInput';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  constructor(private http: HttpClient) {}

  getMaterias() {
    return this.http
      .get<any>('http://localhost:8081/servicesRest/WsColegio/getMaterias')
      .pipe(
        map((materia) => {
          return materia;
        })
      );
  }

  getMateriasById(idMateria: string) {
    return this.http
      .post<any>(
        'http://localhost:8081/servicesRest/WsColegio/getMateriasById',
        JSON.stringify(idMateria)
      )
      .pipe(
        map((materia) => {
          return materia;
        })
      );
  }

  getMateriasByIdJson(materiaInput: MateriaInput) {
    return this.http
      .post<any>(
        'http://localhost:8081/servicesRest/WsColegio/getMateriasByIdJson',
        { idMateria: materiaInput.idMateria }
      )
      .pipe(
        map((materia) => {
          return materia;
        })
      );
  }
// ---------------------------------
  getEstudiante() {
    return this.http
      .get<any>('http://localhost:8081/servicesRest/WsColegio/getEstudiantes')
      .pipe(
        map((estudiante) => {
          return estudiante;
        })
      );
  }

  getByIdEstudiante(idEstudiante: string) {
    return this.http
      .post<any>(
        'http://localhost:8081/servicesRest/WsColegio/getEstudiantesMateriasById',
        JSON.stringify(idEstudiante),
      )
      .pipe(
        map((estudiante) => {
          return estudiante;
        })
      );
  }

  getnombreEstudiante(nombre: string) {
    return this.http
      .post<any>(
        'http://localhost:8081/servicesRest/WsColegio/getEstudiantesMateriasById',
        JSON.stringify(nombre),
      )
      .pipe(
        map((estudiante) => {
          return estudiante;
        })
      );
  }
}