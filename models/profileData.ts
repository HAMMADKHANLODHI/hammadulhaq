import mongoose,{Schema, Document, models, model} from "mongoose";

interface ISkill{
    name: string;
    level: string;
}
interface IEducation{
    School: string;
    StartDate: string;
    EndDate: string;
    Summary: string;
}
interface IExperience{
    Company: string;
    Role: string;
    StartDate: string;
    EndDate: string;
    Desc: string;
}
interface IService{
    icon: string;
    Title: string;
    Desc: string;
}

interface IPortfolio{
    name: string;
    category: string;
    Image: string;
    Link: string;
}


export interface IProfile extends Document {
  Name: string;
  Email: string;
  Linkedin: string;
  Github: string;
  GoogleMap: string;
  Whatsapp: string;
  "Home-Summary": string;
  "About-Summary": string;
  Skills: ISkill[];
  Education: IEducation[];
  Experience: IExperience[];
  Services: IService[];
    Portfolio: IPortfolio[];
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema: Schema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Linkedin: { type: String, required: true },
  Github: { type: String, required: true },
  GoogleMap: { type: String, required: true },
  Whatsapp: { type: String, required: true },
  "Home-Summary": { type: String, required: true },
  "About-Summary": { type: String, required: true },
  Skills: [{
    name: { type: String, required: true },
    level: { type: String, required: true }
  }],
  Education: [{
    School: { type: String, required: true },
    StartDate: { type: String, required: true },
    EndDate: { type: String, required: true },
    Summary: { type: String, required: true }
  }],
  Experience: [{
    Company: { type: String, required: true },
    Role: { type: String, required: true },
    StartDate: { type: String, required: true },
    EndDate: { type: String, required: true },
    Desc: { type: String, required: true }
  }],
  Services: [{
    icon: { type: String, required: true },
    Title: { type: String, required: true },
    Desc: { type: String, required: true }
  }],
  Portfolio: [{
    name: { type: String, required: true },
    category: { type: String, required: true },
    Image: { type: String, required: true },
    Link: { type: String, required: true }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Profile = models.Profile || model<IProfile>('Profile', ProfileSchema);
export default Profile;