const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
    package_name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true  
    },
    magin_dollor: {
        type: String,
        required: true
    },
    magin_percentage: {
        type: String,
        required: true
    }

})  



const AssignTask = mongoose.model('AssignTask', assignSchema);

module.exports = AssignTask;