import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import Cities from '../../../Cities.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

	cities: any = Cities;
	myControl = new FormControl();
	options: string[] = [];
 	filteredOptions: Observable<string[]>;

	ngOnInit() {
	  	
	  	for (let cityId in this.cities) {
	    	this.options.push(this.cities[cityId].cityName);
		}
	 
		this.filteredOptions = this.myControl.valueChanges.pipe(
	        startWith(''),
	        map(value => this._filter(value)));
	  	}
	 
	private _filter(value: string): string[] {
	    const filterValue = value.toLowerCase();
	 
	    return this.options.filter(option => option.toLowerCase().includes(filterValue));
	  	}   

}
