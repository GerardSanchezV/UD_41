import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() detailCharacter: Characters = new Characters();

  @Output() updateCharEvent = new EventEmitter<Characters>();

  id:any;
  personajes: any = null;
  constructor(private _route: ActivatedRoute, private http: HttpClient) {

   this.id = this._route.snapshot.paramMap.get('id');
   }


  ngOnInit(): void {

    this.http
      .get('https://rickandmortyapi.com/api/character/' + this.id)
      .subscribe(
        (result) => {
          this.personajes = result;
        },
        (error) => {
          console.log('problemas');
        }
      );
  }

  submitt() {
    this.updateCharEvent.emit(this.detailCharacter)
  }

}
