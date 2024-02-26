import { Component } from '@angular/core';
import {QizzComponent} from "../../components/qizz/qizz.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    QizzComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
