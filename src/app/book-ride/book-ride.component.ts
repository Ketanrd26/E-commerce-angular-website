import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BookRideService } from '../book-ride.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent {
 rideForm : FormGroup;
 isSubmitted = false;


 constructor(private fb: FormBuilder, private service:FirebaseService){
  this.rideForm = this.fb.group({
    name : ['',[Validators.required]],
    contact : ['',[Validators.required]],
  })
 }
 onSubmitRideForm(rideForm : FormGroup){
  this.isSubmitted = true
       this.service.registerBookRide(rideForm.value.name,rideForm.value.contact)
       .then(data=>{
            alert("your ride is confirmed")
       }).catch(error=>{
        console.log(error);
       })
 }
}
