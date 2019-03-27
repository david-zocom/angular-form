import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KomponentComponent } from './komponent/komponent.component';


@NgModule({
	declarations: [KomponentComponent],
	imports: [
		CommonModule
	],
	exports: [
		KomponentComponent
	]
})
export class ModulModule { }
