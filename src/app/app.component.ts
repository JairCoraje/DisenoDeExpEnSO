import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AgriPureFrontend';
  renderLayout = false;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.updateRenderLayout();
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => this.updateRenderLayout());
  }

  private updateRenderLayout() {
    this.renderLayout = !this.location.path().startsWith('/accounts');
  }
}
