const mongoose = require('mongoose');

var aboutUs = mongoose.Schema({

    about: {
        type: String,
        default: "",
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

aboutUsMgmt = mongoose.model('aboutUs', aboutUs, 'aboutUs');
module.exports = aboutUsMgmt;

function init() {
    // console.log("calling function")
    aboutUsMgmt.findOne({}, (error, success) => {
        if (error) {
            console.log(error)
        } else {
            if (success === null) {
                new aboutUsMgmt({

                    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


                }).save((error, success) => {
                    console.log("Successfully Added AboutUs Content")
                })

            }
        }
    })
}
init();