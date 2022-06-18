import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  charactersList: Characters[] = [];
  detailCharacter: Characters = new Characters();

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getAllCharacters()

  }

  // Child submit
  submit(char: Characters) {
    this.detailCharacter = char;
    this.update();
  }

  // Update
  update(): void {
    this.charactersService.update(this.detailCharacter.id, {
      title: this.detailCharacter.title,
      description: this.detailCharacter.description
    }).subscribe(
      (response: any) => {
        this.getAllCharacters();
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  // Get all
  getAllCharacters(): void {
    this.charactersService.list().subscribe(
      (characters: any) => {
        this.charactersList = characters;
      },
      (error: any) => {
        console.log(error);
      });
  }

  // Delete
  delete(id: any): void {
    this.charactersService.delete(id).subscribe(
      (response: any) => {
        console.log("delete OK, response:", response);
        this.getAllCharacters();
      },
      (error: any) => {
        console.log(error);
      });
  }

  // Details - mostrar el componente details
  details(char: Characters) {
    this.detailCharacter = char;
  }



}
