import { Component, OnInit } from '@angular/core';

import { Project } from '../custom-classes/project';

import { ProjectService } from '../app-services/project.service';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[]

  constructor(private projectService: ProjectService) { }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

  ngOnInit() {
    this.getProjects();
  }

}
