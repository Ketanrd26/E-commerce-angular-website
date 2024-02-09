import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelapse',
  templateUrl: './timelapse.component.html',
  styleUrls: ['./timelapse.component.css']
})
export class TimelapseComponent implements OnInit {
private date = new Date();

public hour : any;
public minute : any;
public second: any;
public ampm : any
constructor(){}

ngOnInit() {
  setInterval(()=>{
    const date = new Date();
    this.updateDate(date);
  },1000);

  
}
private updateDate(date: Date){
  const hour = date.getHours(); //get hours from the date
  this.ampm =  hour >= 12 ? 'am' : 'pm';
  this.hour = hour % 12 ;   //makes hours in 12 format 
  this.hour = this.hour ? this.hour : 12;
  this.hour = this.hour < 10 ? '0' + this.hour : this.hour;


  const minutes = date.getMinutes();
  this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

  const second = date.getSeconds();
  this.second = second < 10 ? '0' + second : second.toString()
}
}

 
