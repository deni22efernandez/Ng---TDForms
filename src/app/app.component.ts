import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
 // @ViewChild('myForm')formulario:NgForm;
 comboBoxOptions=['Basic', 'Advanced', 'Pro'];
 defaultSelection='Advanced';
  onSubmit(formulario:NgForm){
    console.log(formulario);
  }
}
