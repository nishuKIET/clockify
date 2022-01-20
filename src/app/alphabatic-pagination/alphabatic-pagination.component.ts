import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alphabatic-pagination',
  templateUrl: './alphabatic-pagination.component.html',
  styleUrls: ['./alphabatic-pagination.component.css']
})
export class AlphabaticPaginationComponent{
  counterSecs: any;
  counterMins: any;
counterHrs: any;
timer: any;
timerValue: any;
projectList = [];projDetails: any;
@ViewChild ('inputText') inputText: ElementRef;
  constructor() { 
  }
  
  startProject(start, projName){
    this.counterHrs = 0;
    this.counterMins = 0;
    this.counterSecs = 69;
    if(start){
      console.log("start clicked");
      this.timer = setInterval(()=>{
        if(this.counterSecs >= 59){
          this.counterMins = this.counterMins + 1;
          this.counterSecs = 0;
          if(this.counterMins >= 59){
            this.counterHrs = this.counterHrs + 1;
            this.counterMins = 0;
            this.counterSecs = 0;
          }
        }else{
          this.counterSecs = this.counterSecs + 1;
        }
        // this.counterSecs < 10 ? `0${this.counterSecs}`: this.counterSecs
        this.timerValue =  `${this.counterHrs}:${this.counterMins}:${this.counterSecs}`;
      },1000)
    }else{
      this.projDetails = {
        projName: projName,
        projTimer: this.timerValue
      }
      this.projectList.push(this.projDetails);
      this.inputText.nativeElement.value = '';
      console.log("stop clicked", this.projectList);
      clearInterval(this.timer)
    }


  }

  deleteProject(index){
    this.projectList.splice(index, 1);
  }




}
