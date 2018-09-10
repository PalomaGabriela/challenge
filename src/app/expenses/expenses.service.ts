import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Expense } from './expenses';

const API_URL_LOCAL = 'http://localhost:8000/';
const API_URL_PROD = 'http://52.33.68.249/challenge-api/public/';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private _http: HttpClient) { }

  list(): Observable<Expense[]> {
    return this._http.get<Expense[]>('./assets/db.json');
  }

  listByAPI(type: string): Observable<Expense[]> {
    return this._http.get<Expense[]>(
      API_URL_PROD + 'api/expenses?filter='+type
    );
  }

}