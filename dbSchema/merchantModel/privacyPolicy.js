const mongoose = require('mongoose');

var privacyPolicy = mongoose.Schema({

    policy: {
        type: String,
        default: "",
    },
    aboutUs: {
        type:String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

privacyPolicyMgmt = mongoose.model('privacyPolicy', privacyPolicy, 'privacyPolicy');
module.exports = privacyPolicyMgmt;

function init() {
    // console.log("privacyPolicyMgmt calling function")
    privacyPolicyMgmt.findOne({}, (error, success) => {
        if (error) {
            console.log(error)
        }
        else {
            if (success === null) {
                new privacyPolicyMgmt({
                    policy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    aboutUs:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }).save((error, success) => {
                    console.log("Successfully Added privacy policy Content")
                })

            }
        }
    })
}
init();

