import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent, CommonModule]
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  //questo è il metodo per il ciclo di vita del component
  //avviato ogni volta che è inizializzato o caricato
  // il "PageLoad"
  //ad esempio puoi farci una http request or shit like that
  ngOnInit(): void { }

  toggleAddTask() {
    this.uiService.toggleShowForm();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
