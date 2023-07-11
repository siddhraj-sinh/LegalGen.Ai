import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  research: string[] = ['Research 1', 'Research 2', 'Research 3'];

  openAddResearchModal() {
    // Here, you can open a modal or perform any other action to add a new project.
    // For simplicity, we will just log a message to the console.
    console.log('Add new Research');

}
}
