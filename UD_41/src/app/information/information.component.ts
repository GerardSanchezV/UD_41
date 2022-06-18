import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  id:any;
  personaje: any = null;
  constructor(private _route: ActivatedRoute, private http: HttpClient) {

   this.id = this._route.snapshot.paramMap.get('id');
   }


  ngOnInit(): void {

    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.id)
      .subscribe(
        (result) => {
          this.personaje = result;
        },
        (error) => {
          console.log('problemas');
        }
      );
  }

}
