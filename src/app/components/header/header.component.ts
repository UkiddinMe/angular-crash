import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscriber, Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ButtonComponent]
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
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
}
