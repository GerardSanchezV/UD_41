import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  title = 'personajes';

  personajes: any = null;

  arr_numeros: any[] = new Array(8);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    for (var index = 0; index < 8; index++) {
      if (index < 5) {
        this.arr_numeros[index] =
          Math.floor(Math.random() * (800 - 1) + 1) + ',';
      } else {
        this.arr_numeros[index] = Math.floor(Math.random() * (800 - 1) + 1);
      }
      console.log(this.arr_numeros);
    }

    console.log(this.arr_numeros);
    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.arr_numeros)
      .subscribe(
        (result) => {
          this.personajes = result;
        },
        (error) => {
          console.log('problemas');
        }
      );
  }
}
