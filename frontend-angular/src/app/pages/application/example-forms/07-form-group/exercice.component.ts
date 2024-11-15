import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = new FormGroup({
    name: new FormControl(''),
    releaseDate: new FormControl(''),
    franchise: new FormControl<boolean>(false),
    budget: new FormControl<number>(0),
    worldwide: new FormControl<number>(0),
    summary: new FormControl('')
  });

  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
      franchise: true,
      budget: 356000000,
      worldwide: 2797800564,
      summary: 'After the devastating events of Avengers: Infinity War (2018), ' +
        'the universe is in ruins.'
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
      franchise: null,
      budget: null,
      worldwide: null,
      summary: null,
    });
  }

}
