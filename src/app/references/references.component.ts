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
  this.commentsReferences = this.sortOrt(clientReviews)
 
  
  
  
}


// method to add the formulad to the arry of objs
  addReviews(){
    console.log(this.info.value);
    if(this.info.valid){
      let newComment:any= this.info.value;

      //<------ method to write the Date correctly
      //  let date : any = this.info.value.date;
      //  date = new Date(date);
      // const formatter = new Intl.DateTimeFormat('de-EU', { day: '2-digit', month: '2-digit', year: 'numeric' });
      // const formattedDate = formatter.format(date);
      // newComment.date = date;
      // method to write the Date correctly ends--------->

      // adding an image to the unregistered user
      newComment.img = "user.jpg";

      this.commentsReferences.push(newComment)
      
      this.toLocalStorage(this.commentsReferences);
      this.commentsReferences = this.sortOrt(this.commentsReferences)



  
    }
    }
      // method to add the formulad to the arry of objs ends

    // ngOnInit with all the function for References
    ngOnInit(): void {

      if(this.getFromLocalStorage()){
       this.commentsReferences = this.getFromLocalStorage()
       this.commentsReferences = this.sortOrt(this.commentsReferences)
      }
      
     
     }
         // ngOnInit with all the function for References ends

    //  methods to save the info in there localStorege
  toLocalStorage(obj:modelReviews[]){

    obj.map((ele: modelReviews) =>{
      return {...ele, date : new Date(ele.date)}
    })
    console.log(obj, "obj");
    
    const commentObjToString = JSON.stringify(obj)

    
    localStorage.setItem("clientReviews", commentObjToString)
  }
//  methods to save the info in there localStorege ends

// <---------------------get data form the local storege
  getFromLocalStorage(): modelReviews[]{
      
      let retObj = JSON.parse(localStorage.getItem("clientReviews") || '""') 
      retObj.map((ele: modelReviews) =>{
        return {...ele, date : new Date(ele.date).toDateString()}
      })
      return retObj
  
  }
// get data form the local storege ends----------->
      

    // <---------------------method for the sortort btn
      sortOrt(array : modelReviews[]){  
        let temp: any[]  = []
        array.forEach(comment =>{
          let dateComent = new Date(comment.date).getTime()
          temp.push({...comment, date: dateComent})
        })   
        
        temp.sort((a, b)=>{
          return b.date - a.date
        })
        
        
          let covertedArray = temp.map(ele => {
            return {...ele, date: new Date(ele.date)}
          })     
          
          return covertedArray
             
        
      }
      
      
}
