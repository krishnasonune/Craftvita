import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IExperience } from '../models/experience';
import { ProfileDTO } from '../models/profile';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  profileForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.profileForm = this.fb.group({
      full_name: [''],
      about_me: [''],
      technical_skills: [''],
      location: [''],
      phone: [''],
      portfolio: [''],
      gmail: [''],
      github: [''],
      stackoverflow: [''],
      linkedin: [''],
      experience: this.fb.array([
        this.createAddExperienceFormGroupInstance()
      ]),
      project: this.fb.array([
        this.createProjectFormGroupInstance()
      ]),
      degree: this.fb.array([
        this.createDegreeInstance()
      ]),
      certification: this.fb.array([
        this.createCertification()
      ]),
      achievement: this.fb.array([
        this.createAchievement()
      ]),
      interest: this.fb.array([
        this.createInterestsInstance()
      ]),
    });
  }

  //#region Experience Functions
  addExperience() {
    this.experiences.insert(0, this.createAddExperienceFormGroupInstance());
  }

  removeExperience(i: any) {
    if (this.experiences.length > 1) {
      this.experiences.removeAt(i);
    }
  }

  createAddExperienceFormGroupInstance() {
    return this.fb.group({
      comp_name: new FormControl([null]),
      designation: new FormControl([null]),
      start_date: new FormControl([null]),
      end_date: new FormControl([null]),
      description: new FormArray([
        new FormControl([null])
      ])
    })
  }

  get experiences() { return this.profileForm.get('experience') as FormArray; }
  descriptions(i: any) { return this.experiences.at(i).get('description') as FormArray; }

  addPoint(i: any) {
    this.descriptions(i).push(new FormControl(['']))
  }

  removePoint(i: any, j: any) {
    if (this.descriptions(i).length > 1) {
      this.descriptions(i).removeAt(j);
    }
  }
  //#endregion

  //#region Projects Fucntions
  addProject() {
    this.projects.insert(0, this.createProjectFormGroupInstance());
  }

  removeProject(i: any) {
    if (this.projects.length > 1) {
      this.projects.removeAt(i);
    }
  }

  createProjectFormGroupInstance() {
    return this.fb.group({
      title: [''],
      technologies: [''],
      description: [''],
      link: ['']
    })
  }

  get projects() { return this.profileForm.get('project') as FormArray; }

  //#endregion

  //#region Degree Function
  createDegreeInstance() {
    return this.fb.group({
      degree: [''],
      institution: [''],
      start_date: [''],
      end_date: [''],
      score: ['']
    });
  }

  addDegree() {
    this.degrees.insert(0, this.createDegreeInstance());
  }

  removeDegree(i: any) {
    if (this.degrees.length > 1) {
      this.degrees.removeAt(i);
    }
  }

  get degrees() { return this.profileForm.get('degree') as FormArray; }
  //#endregion

  //#region certification functions
  createCertification() {
    return this.fb.group({
      title: [''],
      issuer: ['']
    });
  }

  addCertificate() {
    this.certifications.insert(0, this.createCertification());
  }

  removeCertificate(i: any) {
    if (this.certifications.length > 1) {
      this.certifications.removeAt(i);
    }
  }

  get certifications() { return this.profileForm.get('certification') as FormArray; }
  //#endregion

  //#region Achievements function
  createAchievement() {
    return this.fb.group({
      title: [''],
      description: ['']
    });
  }

  addAchievement() {
    this.achievements.insert(0, this.createAchievement());
  }

  removeAchievement(i: any) {
    if (this.achievements.length > 1) {
      this.achievements.removeAt(i);
    }
  }

  get achievements() { return this.profileForm.get('achievement') as FormArray; }
  //#endregion

  //#region Interests
  createInterestsInstance() {
    return new FormControl([null]);
  }

  addInterets() {
    this.interests.insert(0, this.createInterestsInstance())
  }

  removeInterest(i: any) {
    if (this.interests.length > 1) {
      this.interests.removeAt(i)
    }
  }

  get interests() { return this.profileForm.get('interest') as FormArray }
  //#endregion

  onSubmit() {
    let profile: ProfileDTO = this.profileForm.value;
    console.log(profile)

    this.service.setProfile(profile);
    this.router.navigate(['/classic']);
  }
}

