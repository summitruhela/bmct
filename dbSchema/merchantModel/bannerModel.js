const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var banner = mongoose.Schema({

    banners: {
        type: String,
        default: "",
    },
    text: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
banner.plugin(mongoosePaginate);
banner = mongoose.model('banner', banner, 'banner');
module.exports = banner


function init() {
    // console.log("privacyPolicyMgmt calling function")
    banner.findOne({}, (error, success) => {
        if (error) {
            console.log(error)
        }
        else {
            // console.log(success)
            if (success === null) {
                new banner({
                    banners: "http://res.cloudinary.com/sumit9211/image/upload/v1536295321/bvhldhst1zxvcrhav84t.jpg",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
                }).save((error, success) => {
                    console.log("Successfully Added privacy policy Content")
                })

            }
        }
    })
}
init();

