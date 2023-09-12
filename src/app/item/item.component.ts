import { Component, Input } from '@angular/core';
import {Weather} from "../models/weather";
import {User} from "../models/user";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() user: User | null;
  @Input() weather: Weather | null;
  @Input() lowestForDay: any;
  @Input() higestForDay: any;
  @Input() weatherIcons: any;
  @Input() onSave: any;

}
