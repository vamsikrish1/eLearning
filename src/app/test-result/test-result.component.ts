import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.css']
})
export class TestResultComponent implements OnInit {

marks_scored : number = 0;
total_marks : number = 60;

attempted_questions : number = 0;
total_questions : number = 75;

percentage : string = '';

time_taken : string = '';
total_time : string = '120 mins';

start_time : string = '';
end_time : string = '';

public canvasWidth = 600;
public needleValue : number = 0;
public centralLabel = '';
public name ='';
public bottomLabel = '';
public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['red','lightgrey','lightblue', 'lightgreen'],
    arcDelimiters: [25,50,75],
    rangeLabel: ['0','100'],
    needleStartValue: 50,
}


  constructor( private connectionService: ConnectionService, private localStorageService: LocalstorageService) { }

  ngOnInit(): void {
    if(this.localStorageService.get('TOKEN')) {
      var data = history.state.data;
      this.marks_scored = data.marksScored;
      this.total_marks = data.totalMarks;
      this.percentage = ((this.marks_scored/this.total_marks) * 100).toFixed(2)+'%';
      this.bottomLabel = this.percentage;
      this.needleValue = ((this.marks_scored/this.total_marks) * 100);
      this.attempted_questions = data.attemptedQuestions;
      this.time_taken = data.timeTaken;
      let date = new Date();
      this.start_time = data.startTime;;
      this.end_time = data.endTime;
    }
  }
}
