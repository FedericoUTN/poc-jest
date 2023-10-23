import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestJestService } from './test-jest.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [FormsModule, ReactiveFormsModule],
    providers: [TestJestService]
  }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'poc'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('poc');
  });

  test('should render first label', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain('Nombre:');
  });

  test("should be true if form is valid" , () => {
    component.formTest.setValue({
      "nombre" : "test",
      "apellido" : "test",
      "edad" : 20,
      "sexo" : "M",
      "bio" : "test"
    });

    expect(component.formTest.valid).toEqual(true);
  })

  test("should be false if form is invalid" , () => {
    component.formTest.setValue({
      "nombre" : "",
      "apellido" : "",
      "edad" : 0,
      "sexo" : "",
      "bio" : ""
    });

    expect(component.formTest.valid).toEqual(false);
  })

  test("service should return string", () => {
    component.ObtenerStringDePrueba();

    expect(component.stringDePrueba).toEqual("esto es una prueba");
  })
});
