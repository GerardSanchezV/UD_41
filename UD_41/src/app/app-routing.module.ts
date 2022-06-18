import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'information/:id',
    component: InformationComponent,
  },
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full',
  },
  {
    path: 'character',
    component: CharacterListComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent,
  },
  {
    path: 'add',
    component: AddCharactersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
