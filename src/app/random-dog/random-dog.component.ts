import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.component.html',
  styleUrls: ['./random-dog.component.css']
})
export class RandomDogComponent implements OnInit {

  dogImage;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.showDog();
  }

  showDog() {
    this.dogsService.getADog()
      .subscribe((data: any) => this.dogImage = data.message );
  }

}
