import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	avatarNameControl: FormControl = new FormControl('DragonSlayer', [Validators.required, Validators.minLength(6)]);
	favLanguageControl: FormControl = new FormControl('', [Validators.required, this.isKlingon]);

	constructor() { }

	ngOnInit() { }

	isKlingon(text: AbstractControl) {
		if( text.value.toUpperCase() === 'KLINGON' ) {
			return { isKlingon: true };
		}
		return null;
	}
}






//
