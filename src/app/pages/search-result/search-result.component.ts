import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  public textArray: string[] = [
    'unless the contrary is proved, that the holder of a cheque received the cheque of the nature referred to in section 138 for the discharge, in whole or in part, of any debt or other liability.'
  ,'unless the contrary is proved, that the holder of a cheque received the cheque of the nature referred to in section 138 for the discharge, in whole or in part, of any debt or other liability.'
  ,'unless the contrary is proved, that the holder of a cheque received the cheque of the nature referred to in section 138 for the discharge, in whole or in part, of any debt or other liability.'
  
  ];
  currentPage: number = 1;
  changedPage: number = 0;
  pageSize: number = 10;
  maxPageCountVisible: number = 5;
  @Output() pageNumberToGetData = new EventEmitter<number>();
  data: any;
  stats: any = [];
  common_judgements: any = [];
  objectKeys = Object.keys;
  isFormCardOpen: boolean = false;
  relevancies:string[]=[];
  constructor(private service: AppService) {
    this.data = [];
    this.service.currentResults.subscribe(results => {
      this.data = results;
      this.setData();
    });
  }

  // To avoid keyvalue pairs with default sorting
  returnZero() {
    return 0;
  }
  // To differentiate between value type object and string 
  typeOf(value: any) {
    return typeof value;
  }

  ngOnInit(): void {
  }

  /**
   * Set data based on the search result
   */
  setData(): void {
    this.common_judgements = [];
    if (this.data['resp'].length) {
      for (var i = 0; i < this.data['resp'].length; i++) {
        if (this.data['resp'][i]['stats']) {
          this.stats.push(this.data['resp'][i]['stats'])
          console.log(this.data['resp'][i]['stats'])
        }
        if (this.data['resp'][i]['common judgement among all facts']) {
          this.common_judgements.push(this.data['resp'][i]['common judgement among all facts'])
        }
      }

    }
  }
  openFormCard(key:string,relevancy:string[]) {
    console.log(key);
    console.log(relevancy);
    this.relevancies=relevancy;
    console.log(this.relevancies);
    this.isFormCardOpen = true;
  }

  close() {
    this.isFormCardOpen = false;
  }
  
  closeFormCard() {
    this.isFormCardOpen = false;
  }
  /**
   * Event call on page change
   * @param event page change event
   */
  // pageChanged(event: PageChangedEvent): void {
  //   this.changedPage = event.page;
  //   this.pageNumberToGetData.emit(this.changedPage);
  // }
}
