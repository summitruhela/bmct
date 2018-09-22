const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');

var userLocation = mongoose.Schema({
    location: {
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    },
    seed: {
        type: String,
        unique: false
    }
    // email:{
    //     type:String,
    //     require: true,
    //     unique: false,
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    //     default:""
    // },
    // otp:{
    //     type:Number
    // }
},
    { timestamps: true })
userLocation.plugin(mongoosePaginate);
module.exports = mongoose.model("userLocation", userLocation, "userLocation")