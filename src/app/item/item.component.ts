import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() user: any;
  @Input() weather: any;
  @Input() lowestForDay: any;
  @Input() higestForDay: any;
  @Input() weatherIcons: any;
  @Input() onSave: any;

  ngOnInit(): void {
    console.log("My user",this.user);
  }
}
