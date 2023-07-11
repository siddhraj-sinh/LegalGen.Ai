import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  research: any[] = [
    {
      title: "Research 1",
      creationDate: "2023-07-10"
    },
    {
      title: "Research 2",
      creationDate: "2023-07-09"
    },
    {
      title: "Research 3",
      creationDate: "2023-07-08"
    },
    
    {
      title: "Research 4",
      creationDate: "2023-07-08"
    },

  ];
 
  filteredResearches: string[] = []; // Placeholder for filtered researches
  searchQuery: string = ''; // Placeholder for the search query
  openAddResearchModal() {
    // Here, you can open a modal or perform any other action to add a new project.
    // For simplicity, we will just log a message to the console.
    console.log('Add new Research');

}
performSearch(): void {
  console.log('Search Keyword:', this.searchQuery);
  // Filter researches based on the search query
  this.filteredResearches = this.research.filter(research =>
    research.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
  
  console.log('Filtered Researches:', this.filteredResearches);
}
}
