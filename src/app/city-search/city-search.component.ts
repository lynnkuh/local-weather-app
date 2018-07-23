import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { getMatFormFieldMissingControlError } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})

export class CitySearchComponent implements OnInit {

  search = new FormControl('', [Validators.minLength(3)])

  @Output() searchEvent = new EventEmitter<string>()

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      (searchValue: string) => {
        if (!this.search.invalid) {
          this.searchEvent.emit(searchValue)
        }
      }
    )
  }

  getErrorMessage() {
    return this.search.hasError('minLength') ? 'Type more than one character to search' : '';
 }



}