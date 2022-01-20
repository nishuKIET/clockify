import {
  Component,
  ViewContainerRef,
  ViewChild,
  ElementRef,
  ViewEncapsulation
} from "@angular/core";
// import { IntegralUISelectionMode } from "@lidorsystems/integralui-web/bin/integralui/components/integralui.core";
// import { IntegralUIListBox } from "@lidorsystems/integralui-web/bin/integralui/components/integralui.listbox";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'europa-app';
  @ViewChild('listbox') listbox: ElementRef;
  @ViewChild('listbox2') listbox2: ElementRef;
   // An array that holds a list of items in the ListBox on the left
   availableItems: any = [];
   // An array that holds a list of all selected items
   selItems: any = [];
   selectedOptions: any = [];
   unSelectedOptions: any = [];
   optionsToBeAdded: any;
   optionsToBeRemoved: any;
   constructor() {
     // Create a list of items
     this.availableItems = [
       "Inception" ,
       "Gravity" ,
       "Django Unchained" ,
       "Toy Story 3" ,
       "The Wolf of Wall Street",
       "The Town" ,
        "Nightcrawler" ,
        "Locke" ,
       "Prometheus" ,
        "The Social Network" ,
        "The Conjuring" ,
        "Blue Jasmine" ,
        "Black Swan" ,
        "Prisoners" ,
        "The Avengers" ,
        "Snowpiercer" ,
        "The Dark Knight Rises" ,
        "American Hustle" ,
        "Dawn of the Planet of the Apes" ,
        "Frozen" ,
        "Edge of Tomorrow" ,
        "Interstellar" ,
        "Rush" ,
        "Shutter Island" ,
        "This Is the End" 
     ];

     this.availableItems = this.availableItems.sort();
 
     // At first there are no selected items
     this.selItems = [];
   }
 
  
   sendSelectedOption(){
    this.optionsToBeAdded = this.listbox.nativeElement.selectedOptions;
    for(let i = 0; i < this.optionsToBeAdded.length; i++){
      this.selectedOptions.push(this.optionsToBeAdded[i].label);
    }
    this.availableItems = this.availableItems.filter((i) => (this.selectedOptions.indexOf(i) === -1));
    this.selItems = this.selectedOptions;
   }

   removeSelectedOption(){
    this.optionsToBeRemoved = this.listbox2.nativeElement.selectedOptions;
    for(let i = 0; i < this.optionsToBeRemoved.length; i++){
      this.unSelectedOptions.push(this.optionsToBeRemoved[i].label);
      this.availableItems.push(this.optionsToBeRemoved[i].label);
    }
    this.selItems = this.selItems.filter((i) => (this.unSelectedOptions.indexOf(i) === -1));
    this.availableItems.sort();
   }
   
   addAllOptions(){
     if(this.availableItems){
      for(let i = 0; i < this.availableItems.length; i){
        this.selItems.push(this.availableItems[i]);
        this.availableItems.splice(i, 1);
      }
     }
    
    this.selItems.sort();
   }

   removeAllOptions(){
     if(this.selItems){
      for(let i = 0; i < this.selItems.length; i){
        this.availableItems.push(this.selItems[i]);
        this.selItems.splice(i, 1);
      }
      this.availableItems.sort();
     }
    else{
      return;
    }
   }
}
