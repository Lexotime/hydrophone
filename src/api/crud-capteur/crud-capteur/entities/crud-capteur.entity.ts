import { Document } from 'mongoose';

export class CrudCapteur extends Document {
    _id:string;
    temperature:string;
    humidite:string;
    created_at:Date;
}
