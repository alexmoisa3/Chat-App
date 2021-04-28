import { Injectable } from '@angular/core';

import { Message } from '../models/message';

@Injectable()
export class MessageMocks {
  public items: Message[] = [];

  constructor() {
    let items = [
      {
        "from": "me",
        "to": "ion53",
        "content": "Salut",
        "time": new Date()
      },
      {
        "from": "ion53",
        "to": "me",
        "content": "Salut, ce faci ?",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "ion53",
        "content": "Bine",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "ion53",
        "content": "Tu ?",
        "time": new Date()
      },
      {
        "from": "ion53",
        "to": "me",
        "content": "Sunt bine.",
        "time": new Date()
      },
      {
        "from": "me",
        "to": "AnD77",
        "content": "Salut",
        "time": new Date()
      },
      {
        "from": "MarinD",
        "to": "me",
        "content": "Salut",
        "time": new Date()
      },
      {
        "from": "andrei07",
        "to": "me",
        "content": "Salut",
        "time": new Date()
      },
      {
        "from": "Danciu",
        "to": "me",
        "content": "Salut",
        "time": new Date()
      },
      {
        "from": "UnitBV",
        "to": "me",
        "content": "Buna ziua!",
        "time": new Date()
      },
      {
        "from": "Iuly2",
        "to": "me",
        "content": "Buna",
        "time": new Date()
      },
      {
        "from": "woods",
        "to": "me",
        "content": "Hi",
        "time": new Date()
      }
    ];

    for (let item of items) {
      this.items.push(item);
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Message) {
    this.items.push(item);
  }

}
