import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	favLanguageControl = new FormControl('', [Validators.required, this.isKlingon]);


	namesGroup: FormGroup = new FormGroup({
		avatarNameControl: new FormControl('DragonSlayer', [Validators.required, Validators.minLength(6)]),
		realNameControl: new FormControl('', [Validators.required])
		},
		{ validators: [this.sameNameValidator] }
	);
	realNameControl: AbstractControl;
	avatarNameControl: AbstractControl;

	constructor() { }

	ngOnInit() { 
		this.realNameControl = this.namesGroup.controls['realNameControl'];
		this.avatarNameControl = this.namesGroup.controls['avatarNameControl'];
	}

	isKlingon(text: AbstractControl) {
		if( text.value.toUpperCase() === 'KLINGON' ) {
			return { isKlingon: true };
		}
		return null;
	}
	sameNameValidator(group: FormGroup) {
		// Use get or controls, whatever you like best
		let realName = group.get('realNameControl').value;
		let avatarName = group.controls['avatarNameControl'].value;
		if( realName === avatarName ) {
			return { sameName: true };
		}
		return null;
	}
}






//
