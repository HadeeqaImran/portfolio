const mongoose = require('mongoose');
const { TECHNOLOGIES } = require('../constants/enums');

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        titleImage: {
            type: String,
            required: true,
        },
        images: [
            {
                type: String,
                required: true,
            },
        ],
        link: {
            type: String,
            required: false,
        },
        github: {
            type: String,
            required: false,
        },
        video: {
            type: String,
            required: false,
        },
        technologies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Technology',
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
