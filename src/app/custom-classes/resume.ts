import { ProfessionalExperience } from './professional-experience';
import { Education } from './education';

/**
 * Resume Class that hold everything that I include in my resume. 
 */
export class Resume {
    name: string;
    cellphone: string;
    email: string;
    github: string;
    linkedIn: string;
    summary: string;
    skills: string[];
    jobs: ProfessionalExperience[];
    schools: Education[];
    downloadPath: string;
}
