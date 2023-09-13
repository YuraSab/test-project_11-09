import {Component, Input} from '@angular/core';
import {Weather} from "../models/weather";
import {User} from "../models/user";

type onSaveFunction = (user: User | null, weather: Weather | null, lowestForDay: number, highestForDay: number, weatherIcons: string[]) => void;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  @Input() user: User | null;
  @Input() weather: Weather | null;
  @Input() lowestForDay: number;
  @Input() higestForDay: number;
  @Input() weatherIcons: string[];
  @Input() onSave: onSaveFunction | false;

}
