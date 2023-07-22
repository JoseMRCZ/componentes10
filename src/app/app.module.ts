import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { CaracterComponent } from './components/caracter/caracter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutocompleteComponent} from './components/autocomplete/autocomplete.component';
import {BadgeComponent} from './components/badge/badge.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { CoreComponent } from './components/core/core.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,    
    CaracterComponent, CoreComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    AutocompleteComponent,
    BrowserAnimationsModule,
    BadgeComponent,
    ButtonComponent, 
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DialogComponent,
    DatepickerComponent, 
    BottomSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
