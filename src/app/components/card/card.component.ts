import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  photoCover:string = "https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription:string = "";
  @Input()
  id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
