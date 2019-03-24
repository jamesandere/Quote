import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quote;
  
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() isPlus = new EventEmitter<boolean>();
  @Output() isMinus = new EventEmitter<boolean>();
  
  quoteDelete(remove:boolean) {
    this.isDelete.emit(remove);
  }
  votePlus(plus:boolean) {
    this.isPlus.emit(plus);
  }
  voteMinus(minus:boolean) {
    this.isMinus.emit(minus);
  }
  constructor() { }

  ngOnInit() {
  }

}
