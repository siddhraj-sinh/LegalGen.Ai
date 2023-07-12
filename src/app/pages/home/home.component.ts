import { Component, OnInit } from '@angular/core';
import { ResearchBookService } from 'src/app/services/research-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  research!: any[];
  showFilterPage: boolean=false;
 
  constructor(private researchService:ResearchBookService){}
  ngOnInit(): void {
   this.researchService.getAllBook().subscribe((res)=>{
    this.research=res;
   })
  }
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
toggleFilterPage() {
  this.showFilterPage = !this.showFilterPage;
}
}
