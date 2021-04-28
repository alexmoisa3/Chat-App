import { Injectable } from '@angular/core';


@Injectable()
export class Util {

  constructor() {
    console.log('Hello UtilProvider Provider');
  }

  static pathAvatar(name: string): string {
    return './assets/avatar/' + name;
  }

}
