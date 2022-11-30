import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario:any = {
    nome:null,
    email:null
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(form);
    //console.log(form.value); //forma de submissão de dados 1 usando o form (template)
    //console.log(this.usuario); // forma de submissão 2 usando o objeto (component)
        
  }

}
