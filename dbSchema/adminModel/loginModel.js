var commonFunction = require('../../commonFile/commonFunction')
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate');

var login = mongoose.Schema({
    subAdmin_id: {
        type: Number,
        default: null
    },
    email: {
        type: String,
        require: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minlength: 8,
        require: true,
    },
    name: {
        type: String,
        require: true,
        default: ""
    },
    isAdmin: {
        type: String,
        enum: ['super', 'subAdmin'],
        default: 'subAdmin',
        upperCase: true
    },
    phoneNumber: {
        type: Number,
        default: null
    },
    access: {
        type: [],
        // enum: ["merchantManagement", "bannerManagement", "staticContentManagement", "block"],
        upperCase: true,
        default: 'block',
    },
    image: {
        type: String,
        default: ""
    },
    lastLogin:{
        type: Date,
        default: Date.now
    },
    token:{
        type:String
    }
})
login.plugin(mongoosePaginate);

login = mongoose.model('login', login, 'login')
module.exports = login

function init() {
    commonFunction.createHash("Mobiloitte@123", (err, result) => {
        console.log(err, result)
        // console.log("privacyPolicyMgmt calling function")
        login.findOne({}, (error, success) => {
            if (error) {
                console.log(error)
            }
            else {
                if (success == null) {
                    new login({
                        email: "ph-gauri@mobiloitte.com",
                        password: result,
                        isAdmin: "super",
                        access: ["merchantManagement", "bannerManagement", "staticContentManagement"]
                    }).save((error, success) => {
                        console.log("Successfully login ", error, success)
                    })
                }
            }
        })
    })
}
init();
