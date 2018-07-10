import { Component }              from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


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

export class HeroDetailComponent1 {
  name = new FormControl();
}

export class HeroDetailComponent2 {
  heroForm = new FormGroup ({
    name: new FormControl()
  });
}