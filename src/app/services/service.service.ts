import { Injectable } from '@angular/core';
import { ProfileDTO } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  profile !: ProfileDTO;
  constructor() { }

  getProfile(){
    return this.profile;
  }

  setProfile(newProfile : ProfileDTO){
    this.profile = newProfile;
    return this.profile;
  }

  clearProfile(){
    this.profile = {};
    return this.profile;
  }
}
