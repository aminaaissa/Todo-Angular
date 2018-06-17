import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-com',
  templateUrl: './atlas-com.component.html',
  styleUrls: ['./atlas-com.component.css']
})
export class AtlasComComponent implements OnInit {


  name="amina";
  lname="aissa";
  age="28ans";
   employe={ name:'amina',lname:'aissa',age:'28ans'}
   
   constructor() { }

  ngOnInit() {
  }

}
