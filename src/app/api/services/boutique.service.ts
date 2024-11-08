import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Category } from "../models/boutique.types";
import { catchError, Observable, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class BoutiqueService {
    constructor(private http: HttpClient) {
    }

    fetchCategories(): Observable<any> {
        return this.http.get('http://localhost:3000/api/category').pipe(
          catchError(error => {
            return error;
          }  
        ),
        tap(data => {return data})
        );
      }

      fetchAllItems(): Observable<any> {
        return this.http.get('http://localhost:3000/api/items').pipe(
          catchError(error => {
            return error;
          }  
        ),
        tap(data => {return data})
        );
      }
}