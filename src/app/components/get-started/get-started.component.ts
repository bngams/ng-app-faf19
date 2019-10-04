import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  title = 'ng-app';

  object = {
    title: 'My application',
    author: 'Boris'
  };

  products = [
    {
      name: 'Product1',
      price: 10
    },
    {
      name: 'Product2',
      price: 10
    }
  ];

  date = new Date();

  btnDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  isBtnDisabled() {
    return (this.btnDisabled);
  }

  toggleButton(event) {
    this.btnDisabled = !this.btnDisabled;
  }

  getClasses(): string[] {
    const classes: string[] = new Array();
    if (this.isBtnDisabled) {
      classes.push('class1');
    } else {
      classes.push('class2');
    }
    return classes;
  }

  getClassesAsJson(): {} {
    return {
      class1: this.isBtnDisabled,
      class2: !this.isBtnDisabled,
    };
  }

}
