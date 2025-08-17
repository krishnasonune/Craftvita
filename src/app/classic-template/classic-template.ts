import { Component } from '@angular/core';
import { IExperience } from '../models/experience';
import { IProject } from '../models/projects';
import { IEducation } from '../models/education';
import { IAchievement, ICertification, IInterest } from '../models/additional';
import { ServiceService } from '../services/service.service';
import { ProfileDTO } from '../models/profile';

@Component({
  selector: 'app-classic-template',
  standalone: false,
  templateUrl: './classic-template.html',
  styleUrl: './classic-template.css'
})
export class ClassicTemplate {
  full_name: string = '';
  location: string = '';
  phone: string = '';
  portfolio: string = '';
  gmail: string = '';
  github: string = '';
  stackoverflow: string = '';
  linkedin: string = '';

  about_me: string = '';
  technical_skills: string = '';
  experiences !: IExperience[];
  projects !: IProject[];
  degrees !: IEducation[];
  certifications !: ICertification[];
  achievements !: IAchievement[];
  interests !: string[];
  userProfile !: ProfileDTO;

  constructor(private service: ServiceService) {
    this.userProfile = this.service.getProfile();
    this.getUserProfile();
  }

  downloadpdf() {
    window.print()
  }

  getUserProfile() {

    this.full_name = this.userProfile?.full_name != null ? this.userProfile?.full_name : '';
    this.location = this.userProfile?.location != null ? this.userProfile?.location : '';
    this.phone = this.userProfile?.phone != null ? this.userProfile?.phone : '',
      this.portfolio = this.userProfile?.portfolio != null ? this.userProfile?.portfolio : '',
      this.gmail = this.userProfile?.gmail != null ? this.userProfile?.gmail : '',
      this.github = this.userProfile?.github != null ? this.userProfile?.github : '',
      this.stackoverflow = this.userProfile?.stackoverflow != null ? this.userProfile?.stackoverflow : '',
      this.linkedin = this.userProfile?.linkedin != null ? this.userProfile?.linkedin : '',

      this.about_me = this.userProfile?.about_me != null ? this.userProfile.about_me : '';

    this.experiences = this.userProfile?.experience.every(this.isAllNullEntryExperience) ? [] : this.userProfile?.experience!;

    this.projects = this.userProfile?.project.every(this.isAllFieldsArrayOfNull) ? [] : this.userProfile?.project;

    this.technical_skills = this.userProfile?.technical_skills != null ? this.userProfile?.technical_skills : '';

    this.degrees = this.userProfile?.degree?.every(this.isAllFieldsArrayOfNull) ? [] : this.userProfile?.degree;

    this.certifications = this.userProfile?.certification?.every(this.isAllFieldsArrayOfNull) ? [] : this.userProfile?.certification;

    this.achievements = this.userProfile?.achievement?.every(this.isAllFieldsArrayOfNull) ? [] : this.userProfile?.achievement;

    this.interests = this.userProfile?.interest?.every(x => {
      if (x === null || x === "") return true;
      else
        return false;
    }) ? [] : this.userProfile?.interest;
  }

  //#region Null Checkers
  private isAllNullEntryExperience(entry: any): boolean {
    const isCompNameNull = entry.comp_name?.every((val: any) => val === null);
    const isDesignationNull = entry.designation?.every((val: any) => val === null);
    const isStartDateNull = entry.start_date?.every((val: any) => val === null);
    const isEndDateNull = entry.end_date?.every((val: any) => val === null);
    const isDescriptionNull = entry.description?.every(
      (descArray: any[]) => Array.isArray(descArray) && descArray.every((val: any) => val === null)
    );

    return isCompNameNull && isDesignationNull && isStartDateNull && isEndDateNull && isDescriptionNull;
  }

  private isAllFieldsArrayOfNull(entry: Record<string, any>): boolean {
    for (const key in entry) {
      const field = entry[key];

      // If it's not an array or contains non-null values, return false
      if (!Array.isArray(field) || !field.every((val: any) => val === null)) {
        return false;
      }
    }
    return true;
  }
  //#endregion

  ngOnInit(): void {
    //this.getUserProfile();
  }
}
