import mongoose from "mongoose"
const jobSchema = new mongoose.connect({
    title :{
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    requirement : [{
        type: String
    }],
    salary: {
        type: Number,
        requirement: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    positoin: {
        type: String, 
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    application: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',

        }
    ]

})

export const Job = mongoose.model("Job", jobSchema)