import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-five',
	templateUrl: './five.component.html',
	styleUrls: ['./five.component.scss']
})
export class FiveComponent {
	@Input() name: string;
}
