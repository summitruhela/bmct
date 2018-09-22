const mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');
let registration = mongoose.Schema({

    merchantId: Number,

    isAdmin: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'BLOCK', 'DELETE'],
        default: "INACTIVE",
        upperCase: true
    },
    fName: {
        type: String,
        require: true,
        default: "",

    },
    lName: {
        type: String,
        require: true,
        default: "",
    },
    email_ID: {
        type: String,
        require: true,
        unique: false,
        default: "",
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    logo: {
        type: String,
        require: false,
        default: "",
    },
    password: {
        type: String,
        require: true,
        default: "",
    },
    phoneNumber: {
        type: Number,                                            
        require: true,
        default: "",
    },
    location: {
        place: {
            type: String,
            default: "",
            require: true
        },
        country: {
            type: String,
            default: "",
            require: true
        },
        state: {
            type: String,
            default: "",
            require: true
        },
        addLine1: {
            type: String,
            default: "",
            require: true
        },
        zipCode: {
            type: Number,
            default: "",
            require: true
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
            require: true
        }
    },
    merchantWebsite: {
        type: String,
        require: false,
        default: "",
    }
}, { timestamps: true }
)
registration.plugin(mongoosePaginate);
module.exports = mongoose.model("merchantRegistration", registration, "merchantRegistration")