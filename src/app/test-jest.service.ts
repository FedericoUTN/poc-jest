import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestJestService {
  data: string[] = ["esto", "es", "una", "prueba"];

  constructor() { }
  
  GetPrueba(): string{
    return this.data.join(" ");
  }
}
