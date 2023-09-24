import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToDo } from '../model/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  //Event Endpoint
  basePath = 'http://localhost:8080/api/events';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', //solo emite o recepciona de tipo json
      //Content-Type = se usa para decirle cual es el formato en el que se esta mandando un pedido
      // application/json = estandar
    }),
  };
  constructor(private http: HttpClient) {}

  //Api Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Default error handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      //Unseccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    //Return Observable with Error Message to Client
    return throwError(
      'Something happened with request, please try again later'
    );
  }

  //Create Event
  create(userId: any, item: ToDo): Observable<ToDo> {
    let urlPath = `http://localhost:8080/api/events/${userId}/`;
    return this.http
      .post<ToDo>(urlPath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get Event by date
  getByDate(date: Date): Observable<ToDo[]> {
    return this.http
      .get<ToDo[]>(`${this.basePath}?date=${date.toISOString()}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(userId: any): Observable<ToDo> {
    let urlPath = `http://localhost:8080/api/users/${userId}/events`;
    return this.http
      .get<ToDo>(urlPath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Delete Event
  delete(id: any) {
    let urlPath = `http://localhost:8080/api/events/${id}`;
    return this.http
      .delete(urlPath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
