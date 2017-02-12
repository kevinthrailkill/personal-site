import { Injectable } from '@angular/core';
import { Resume } from '../custom-classes/resume'
import { RESUME } from './data/kevin-resume'

@Injectable()
export class ResumeService {

  constructor() { }

  getResume(): Resume {
    return RESUME;
  }

}
