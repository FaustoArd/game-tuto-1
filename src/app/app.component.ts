import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Phaser from 'phaser';
import { Example } from './scenes/example';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'tuto1';

  exmple:Example = new Example();

  ngOnInit(): void {
      this.getGame();
  }

  getGame(){
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height:600,
      physics: {
        default: 'arcade',
        arcade:{
          gravity: {x:1,y:1}
        }
      },
      scene:Example

    }
    const game= new Phaser.Game(config);
   
  }
}
