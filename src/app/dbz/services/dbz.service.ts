import { Injectable } from '@angular/core';
import{v4 as uuid} from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})//inyectado en la raiz del proyecto angular

export class DbzService {

  public characters: Character[] = [
    {id: uuid(), name: 'Krillin', power: 500 },
    {id: uuid(), name: 'Goku', power: 1500},
    {id: uuid(), name: 'Vegetta', power: 1200}];

    addCharacter(character:Character):void{
      const newCharacter: Character={ id: uuid(), ...character}
      this.characters.push(newCharacter);
    }

    deleteCharacterById(id:string):void{
      this.characters = this.characters.filter(character => character.id !== id)
    }

}
