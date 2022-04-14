import * as mongoose from "mongoose";

export const crudCapteurSchema = new mongoose.Schema({
    temperature: {
        type: String,
        required: true,
        index: true
    },
    humidite:{
        type: String,
        required: true,
        index: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
});