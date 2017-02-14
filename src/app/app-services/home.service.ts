import { Injectable } from '@angular/core';
import { Home } from '../custom-classes/home'
import { HOME } from './data/kevin-home'

@Injectable()
export class HomeService {

  constructor() { }

  getHomePage(): Home {
    return HOME;
  }

}
