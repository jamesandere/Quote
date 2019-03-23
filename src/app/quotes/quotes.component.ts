import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes=[
    new Quotes("Howie Mandel", "Keri","If you do what you’ve always done, you’ll get what you’ve always gotten."),
    new Quotes("Olivia Pope", "Ellen","When everything gets answered, it's fake.")
  ]
  constructor() { }

  ngOnInit() {
  }

}
