import { IAchievement, ICertification, IInterest } from "./additional";
import { IEducation } from "./education";
import { IExperience } from "./experience";
import { IProject } from "./projects";

export interface ProfileDTO {
  full_name?: string;
  about_me?: string;
  technical_skills?: string;
  location?: string;
  phone?: string;
  portfolio?: string;
  gmail?: string;
  github?: string;
  stackoverflow?: string;
  linkedin?: string;

  experience?: IExperience[];
  project?: IProject[];
  degree?: IEducation[];
  certification?: ICertification[];
  achievement?: IAchievement[];
  interest?: IInterest[];
}