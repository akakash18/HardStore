import { Component } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(): void{
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'grey'
    })
    
    writer
      .type('Welcome to the Hard🔨 Store.')
      .rest(800)
      .start() 
  }
  
}