import { Component, OnInit } from '@angular/core';

import { Resume } from '../custom-classes/resume';
import { ProfessionalExperience } from '../custom-classes/professional-experience';
import { Education } from '../custom-classes/education';

import { ResumeService } from '../app-services/Resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume

  constructor(private resumeService: ResumeService) { }

  getResume(): void {
    this.resume = this.resumeService.getResume();
    console.log(this.resume);
  }

  ngOnInit() {
    this.getResume();
  }


}
