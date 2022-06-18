import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent implements OnInit {


  characters: Characters = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: '',
    description: undefined,
    title: undefined
  };
  isCharacterAdded = false;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

    // Add New
    addCharacter(): void {
      const data = {
        name: this.characters.name,
        status: this.characters.status,
        species:  this.characters.species,
        gender:  this.characters.gender,
        origin:  this.characters.origin,
        location:  this.characters.location,
        image:  this.characters.image
      };
      if (!data.name) {
        alert('Please add name!');
        return;
      }

      this.charactersService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.isCharacterAdded = true;
          },
          error => {
            console.log(error);
          });
    }

    // Reset on adding new
    newCharacter(): void {
      this.isCharacterAdded = false;
      this.characters = {
        name:  '',
        status:  '',
        species:  '',
        gender:  '',
        origin:  '',
        location:  '',
        image:  '',
        description: undefined,
        title: undefined
      };
    }
}
