import { Injectable } from '@angular/core';
import { Project } from '../custom-classes/project'
import { PROJECTS } from './data/kevin-projects'


@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

}
