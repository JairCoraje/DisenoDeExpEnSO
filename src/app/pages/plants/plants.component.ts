import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Plants } from './model/Plants';
import { PlantsService } from './service/plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css'],
})
export class PlantsComponent implements OnInit, OnChanges {
  plants: Plants[] = [];
  plantsView: Plants[] = [];
  input: string = '';
  messageSubtitle: string = 'Your Plants: ';

  constructor(private plantsService: PlantsService) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.plantsService.getAll().subscribe((response: any) => {
      this.plants = response;
    });
    // this.plantsService.getAll().subscribe((response: any) => {
    //   this.plantsView = response.filter((res: any) => {
    //     return res.saved == true;
    //   });
    // });
  }

  Search() {
    if (this.input != '') {
      this.messageSubtitle = 'Similar results: ';
      this.plantsView = this.plants.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.input.toLocaleLowerCase());
      });
    } else if (this.input == '') {
      this.messageSubtitle = 'Your plants: ';
      this.plantsView = this.plants.filter((res) => {
        return res.saved == true;
      });
    }
  }
}
