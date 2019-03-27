import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {ModulModule} from './modul/modul.module';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { KomponentComponent } from './modul/komponent/komponent.component';

@NgModule({
	declarations: [
		AppComponent,
		UserProfileComponent
		// , KomponentComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		ModulModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
