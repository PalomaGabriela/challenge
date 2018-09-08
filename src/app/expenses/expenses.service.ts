import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Expense } from './expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private _http: HttpClient) { }

  list(): Observable<Expense[]> {
    return this._http.get<Expense[]>('./assets/database.json');
  }

}