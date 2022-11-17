import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Estudiante } from 'src/app/_models/estudiante';
import { EstudianteInput } from 'src/app/_models/estudianteInput';

@Injectable({
    providedIn: 'root',
})
export class EstudianteService {
    constructor(private http: HttpClient) { }
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
                JSON.stringify(idEstudiante)
            )
            .pipe(
                map((estudiante) => {
                    return estudiante;
                })
            );
            }

        getEstudianteByIdJson(estudianteInput: any) {
            return this.http
                .post<any>(
                    'http://localhost:8081/servicesRest/WsColegio/getEstudiantesMateriasByIdJson',
                    { idEstudiante: estudianteInput.idEstudiante}
                )
                .pipe(
                    map((Estudiante) => {
                        return Estudiante;
                    })
                );
        }
}