import { Component, OnInit } from '@angular/core';
import { modelReviews } from './modelReviews';
import { clientReviews } from './clientsReviews';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})

export class ReferencesComponent implements OnInit{
commentsReferences:modelReviews[]= [];
 info = new FormGroup({
  client: new FormControl('', Validators.required),
  notclient: new FormControl(''),
  date: new FormControl('', Validators.required),
  location: new FormControl('', Validators.required),
  reviews: new FormControl('', Validators.required)
})
constructor(){
  this.commentsReferences = clientReviews
}


// method to add the formulad to the arry of objs
  addReviews(){
    console.log(this.info.value);
    if(this.info.valid){
      let newComment:any= this.info.value;

      //<------ method to write the Date correctly
      let date : any = this.info.value.date;
      date = new Date(date);
      const formatter = new Intl.DateTimeFormat('de-EU', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const formattedDate = formatter.format(date);
      newComment.date = formattedDate;
      // method to write the Date correctly ends--------->

      // adding an image to the unregistered user
      newComment.img = "user.jpg";

      this.commentsReferences.push(newComment)
      this.toLocalStorage(this.commentsReferences);
  
    }
    }
      // method to add the formulad to the arry of objs ends

    // ngOnInit with all the function for References
    ngOnInit(): void {

      if(this.getFromLocalStorage()){
       this.commentsReferences = this.getFromLocalStorage()
      }
     
     }
         // ngOnInit with all the function for References ends

    //  methods to save the info in there localStorege
  toLocalStorage(obj:modelReviews[]){

    const commentObjToString = JSON.stringify(obj)

    
    localStorage.setItem("clientReviews", commentObjToString)
  }

  getFromLocalStorage(): modelReviews[]{
      
      let retObj = JSON.parse(localStorage.getItem("clientReviews") || '""') 
      return retObj
  
  }
      //  methods to save the info in there localStorege ends
}
