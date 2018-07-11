import { Component }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {

  constructor() { }

  ngOnInit() {
  }

}

// export class HeroDetailComponent1 {
//   name = new FormControl();
// }

// export class HeroDetailComponent2 {
//   heroForm = new FormGroup ({
//     name: new FormControl()
//   });
// }

export class HeroDetailComponent3 {
  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
    });
  }
}