import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TOdo List ';

  todos = [
    
         { 
     label:'Salah Taouririt', done:false, priority:3 
        },
        { 
          label:'Aissa amia', done:true, priority:1
             },
             { 
              label:'Salah Taouririt', done:false, priority:4
                 },





         ];
          addTodo(newTodolable){
var newTodo ={
label: newTodolable,
priority:1,
done:false

};
this.todos.push(newTodo);


          }


        
}
