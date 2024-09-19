import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbzPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    DbzPageComponent,
    ListComponent,
    CharacterComponent
  ],
  exports: [
    DbzPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
