import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestJestService } from './test-jest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc';
  stringDePrueba?: string;

  constructor(private fb: FormBuilder, private service: TestJestService){}
  
  formTest = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    edad: [16, Validators.required],
    sexo: ['M', Validators.required],
    bio: ['', Validators.required]
  });

  onSubmit(){
    if(this.formTest.valid){
      console.warn(this.formTest.value);
    }
    else{
      console.error("El formulario es invalido")
    }
  }

  ObtenerStringDePrueba(){
    this.stringDePrueba = this.service.GetPrueba();
  }
}
