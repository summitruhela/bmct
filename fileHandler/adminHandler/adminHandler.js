const express = require('express');
var app = express()
const Response = require('../../commonFile/response_handler');
const resCode = require('../../helper/httpResponseCode')
const resMessage = require('../../helper/httpResponseMessage');
const commonFile = require('../../commonFile/commonFunction')
const adminLoginModel = require('../../dbSchema/adminModel/loginModel')
const bannerModel = require('../../dbSchema/merchantModel/bannerModel')
const termConditionModel = require('../../dbSchema/merchantModel/term&condition')
const merchantModel = require('../../dbSchema/merchantModel/merchantModel')
const privacyPolicyModel = require('../../dbSchema/merchantModel/privacyPolicy')
const bcrypt = require('bcryptjs')
var mongoose = require("mongoose")
let salt = bcrypt.genSaltSync(10)
var mongoosePaginate = require('mongoose-paginate');
var imageFunction = require('../../commonFile/uploadMedia')
var configJSON = require('../../config/config.json')
const log = console.log
var server = require('http').Server(app);
var socketIo = require('socket.io')(server);
app.set('socketIo', socketIo);
const randomWord = require('random-word');
global.statusMerchant = "sumit"
const serverFunc = require('../../server');
////////////////////////////////////////////API////////////////////////////////////////////////////////
login = (req, res) => {
    log("login")
    obj = {
        email: req.body.email,//bmct
        password: req.body.password//bmct
    }
    console.log("%#$@#$%$%@#$%@#$%", obj)
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
    }
    var update = {
        lastLogin: Date.now()
    };
    var query = { email: obj.email }
    adminLoginModel.findOneAndUpdate(query, update, (err, succ) => {
        // console.log(err, succ)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (succ == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.UNAUTHORIZED)
        }
        else {
            console.log("#@@@@@", succ.access)
            if (succ.access == "BLOCK") {
                return Response.sendResponsewithError(res, resCode.SOMETHING_WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR, err)
            } else {
                commonFile.compareHash(obj.password, succ.password, (err, result) => {
                    var jwtToken=commonFile.jwtEncode(succ._id);
                    if (err)
                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, "resMessage.INCORRECT_PASSWORD", err)
                    else if (!result)
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.INCORRECT_PASSWORD)
                    else {
                            adminLoginModel.update(query ,{token:jwtToken},(err,result)=>{
                                console.log(err,result)
                            })
                            console.log("##########")
                        if (succ.email == configJSON.credientialAdmin.email) {
                            Response.sendResponseWithToken(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, jwtToken)
                        }
                        else { Response.sendResponseWithTokenAndResult(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, succ.access, jwtToken) }
                    }
                })
            }
        }
    })
}
// add subadmin
addSubAdmin = (req, res) => {
    log("addSubAdmin")
    obj = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        image: null,
        access: req.body.access,
        subAdmin_id: null
    }
    adminLoginModel.find({}).count().exec((err, result) => {
        obj.subAdmin_id = result + 1000
    })
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
    }
    else if (true) {
        adminLoginModel.findOne({ email: obj.email }).exec((err, result) => {
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.ALL_READY_EXIST_EMAIL)
            }
            else {
                imageFunction.uploadImg(req.body.image, (err, result) => {
                    if (err) {
                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                    }
                    else if (!result) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, 'IMAGE NOT IN BASE64')
                    }
                    else {
                        commonFile.createHash(obj.password, (err, hash) => {
                            obj.password = hash
                            obj.image = result;
                            adminLoginModel.create(obj, (err, success) => {
                                if (err) {
                                    Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                                }
                                else if (!success) {
                                    Response.sendResponseWithoutData(res, resCode.NOT_FOUND, 'IMAGE NOT IN BASE64')
                                }
                                else {
                                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SAVED_SUCCESSFULLY, success)
                                }
                            })
                        })
                    }
                })
            }
        })
    }
},
    ////////////////////////////////////////////////edit sub admin////////////////////////////////
    editSubAdmin = (req, res) => {
        console.log("editSubAdmin")
        obj = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            image: null,
            _id: req.body._id,
            access: req.body.access,
            password: req.body.password
        }
        if (!obj) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        adminLoginModel.findOne({ _id: obj._id }, (err, result) => {
            console.log("err,result", err, result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (!result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                imageFunction.uploadImg(req.body.image, (err, image) => {
                    if (err) {
                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                    }
                    else if (!image) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, 'IMAGE NOT IN BASE64')
                    }
                    else {
                        commonFile.createHash(obj.password, (err, hash) => {
                            obj.password = hash;
                            obj.image = image;
                            console.log("manish", obj)
                            adminLoginModel.findByIdAndUpdate({ _id: result._id }, obj, { new: true }, (err, success) => {
                                console.log("errrrerrererer", err, success)
                                if (err) {
                                    Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                                }
                                else if (!success) {
                                    Response.sendResponseWithoutData(res, resCode.NOT_FOUND, 'IMAGE NOT IN BASE64')
                                }
                                else {
                                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SAVED_SUCCESSFULLY, success)
                                }
                            })
                        })
                    }
                })
            }
        })
    }
/////////////////////////////////////////////view Subadmin////////////////////
viewSubAdmin = (req, res) => {
    console.log("viewSubAdmin")
    obj = {
        _id: req.body._id
    }
    console.log(typeof obj._id, obj._id)
    console.log(typeof parseInt(obj._id))
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
    }
    adminLoginModel.find({ $or: [{ _id: mongoose.Types.ObjectId(obj._id) }] }, (err, success) => {
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (!success) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LIST_OF_SUBADMIN, success)

        }
    })
}
//////////////////////////////////subadmin list////////////////////////////////////////////
subAdminList = (req, res) => {
    console.log("subadmin list")
    query = { isAdmin: "subAdmin" };
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        }
    }
    adminLoginModel.paginate(query, options, (err, success) => {
        console.log(err, success)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (!success) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, 'IMAGE NOT IN BASE64')
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SAVED_SUCCESSFULLY, success)
        }


    })
}
//////////////////////////////////////BLOCKSUBADMIN/////////////////////////////////////////

blockAndDeleteSubAdmin = (req, res) => {
    console.log("blockSubadmin")
    obj = {
        status: req.body.status,
        email: req.body.email || req.body.subAdmin_id
    }

    if (req.body.status === "DELETE" || req.body.status === "delete") {
        var query = { access: "DELETE" }
        adminLoginModel.deleteOne({ email: obj.email }, (err, result) => {
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, obj.status, result)
            }
        })
    }
    else if (req.body.status === "BLOCK" || req.body.status === "block") {
        var query = { access: "BLOCK" }
        adminLoginModel.findOneAndUpdate({ email: obj.email }, { $set: query }, (err, result) => {
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, obj.status, result)
            }
        })
        // break;
    }
}

// forgot password
forgotPassword = (req, res) => {
    log('forgot password')
    obj = {
        email: req.body.email,
    }
    log(obj)
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
    }
    else {
        adminLoginModel.findOne({ email: obj.email }, (err, result) => {
            console.log("find -->> ", result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                console.log(randomWord())
                var random = randomWord()
                commonFile.createHash(random, (err, hash) => {

                    adminLoginModel.update({ _id: result._id }, { $set: { password: hash } }, { new: true }, (err, success) => {


                        console.log("$$$$$$$$$$$$$$$$$$$$", result)
                        var password = commonFile.jwtEncode(result._id)

                        commonFile.sendMailTest(obj.email, "FIND YOUR PASSWORD", random, (err, result) => {
                            if (err) {
                                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                            }
                            else if (result == null) {
                                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                            }
                            else {
                                Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, resMessage.MAIL_SENT)
                            }
                        })
                    })
                })
            }
        })
    }
}

//RESET PASSWORD
resetPassword = (req, res) => {
    log("reset password")
    obj = {
        password: req.body.Password,
        confirmPassword: req.body.confirmPassword,
        token: req.query.token
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
    }
    else {
        // log("%%%%%%%%%%%%%%%", obj.token)
        commonFile.jwtDecode(obj.token, (err, result) => {
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)

            }
            else if (!result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else if (result) {
                commonFile.createHash(obj.password, (err, hash) => {


                    adminLoginModel.findByIdAndUpdate({ _id: result }, { $set: { password: hash } }, { new: true }, (error, success) => {
                        log(success)
                        if (error) {
                            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                        }
                        else if (!success) {
                            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                        }
                        else {
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.PASSWORD_UPDATE_SUCCESS, success)
                        }
                    })
                })
            }
        })
    }
}
//merchant view
merchantView = (req, res) => {   ///dashBoard
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        },
        select: 'fName lName location phoneNumber email_ID merchantWebsite merchant merchantId , isAdmin'

    }
    query = { isAdmin: req.body.status || "ACTIVE" }
    log('merchantView')
    merchantModel.paginate(query, options, (err, result) => {
        // console.log("err", pageCount, paginatedResults)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)

        }
        else {
            // log("pagecount",pageCount)
            // log("paginateResult",paginatedResults)
            Response.sendResponseWithPagination(res, resCode.EVERYTHING_IS_OK, resMessage.LIST_OF_MERCHANT, result)
        }
    })
}
//changePassword
changePassword = (req, res) => {
    log('changePassword')
    var obj = {
        newPassword: req.body.newPassword,
        confirmPassword: req.body.confirmPassword,
        //email: req.body.email,
        token: req.headers.token
    }
    if (!obj.newPassword || !obj.confirmPassword) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.REQUIRED_DATA)
    } else {
        commonFile.jwtDecode(obj.token, (err, result) => {
            if (!result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            } else {
                // console.log(result)
                log("@@@@@@@@@", result)
                adminLoginModel.findById({ _id: result }, (err, result) => {
                    if (err) {
                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                    } else if (!result.password) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, "FIRST FORGOT PASSWORD")
                    } else {
                        console.log("result", result.password)
                        var checkPassword = bcrypt.compareSync(obj.newPassword, result.password)
                        log("$$$$$$$", checkPassword)
                        if (!checkPassword) {
                            var password = bcrypt.hashSync(obj.newPassword, salt)
                            adminLoginModel.findOneAndUpdate({
                                _id: result
                            }, {
                                    $set: {
                                        password: password
                                    }
                                }, (err, result) => {
                                    if (err) {
                                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR)
                                    } else if (!result) {
                                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                                    } else {
                                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.PASSWORD_UPDATE_SUCCESS, "done")
                                    }
                                })
                        } else {
                            console.log("#$@#$@#$@#@#$@#4")
                            Response.sendResponsewithError(res, resCode.UNAUTHORIZED, "same as pervious password")
                        }
                    }
                })
            } //end
        })
    }
}
//bannen management
editBanner = (req, res) => {
    log("bannerManagement")
    obj = {
        banners: req.body.banners,
        text: req.body.text,
        _id: req.body._id
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.REQUIRED_DATA)
    }
    else if (true) {
        imageFunction.uploadImg(obj.banners, (err, result) => {
            console.log("!!!!!!!!!!!!!!!!!!", result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (!result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, "IMAGE NOT IN BASE64")
            }
            else {

                bannerModel.findByIdAndUpdate({ _id: obj._id }, { $set: { banners: result, text: obj.text } }, { new: true }).exec((err, result) => {
                    // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
                    if (err) {
                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                    }
                    else if (result == null) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    }
                    else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_UPDATE, result)
                    }
                })
            }
        })
    }
}

bannerList = (req, res) => {
    log("banner list ")
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        },
        select: 'banners text _id'

    }
    bannerModel.paginate({}, options, (err, result) => {
        // console.log("err", pageCount, paginatedResults)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)

        }
        else {
            // log("pagecount",pageCount)
            // log("paginateResult",paginatedResults)
            Response.sendResponseWithPagination(res, resCode.EVERYTHING_IS_OK, resMessage.LIST_OF_BANNER, result)

        }
    })

}
//delete banner
deleteBanner = (req, res) => {
    log('deleteBanner')
    obj = {
        _id: req.body._id
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.REQUIRED_DATA)
    }
    else {
        bannerModel.deleteOne({ _id: obj._id }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.DELETE, result)
            }
        })
    }
}
//addbanner
addBanner = (req, res) => {
    log("addbanner")
    obj = {
        banners: req.body.banners,
        text: req.body.text,
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.REQUIRED_DATA)
    }
    else if (true) {
        imageFunction.uploadImg(obj.banners, (err, result) => {
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (!result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, "IMAGE NOT IN BASE64 ")
            }
            else {

                log(result)
                obj.banners = result
                // })
                var banner = new bannerModel(
                    {
                        banners: obj.banners,
                        text: obj.text
                    }
                )
                banner.save((err, result) => {
                    // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
                    if (err) {
                        Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                    }
                    else if (result == null) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    }
                    else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.BANNER_ADDED, result)
                    }
                })
            }
        })
    }
}

//addmerchant through adminpanel

addMerchantAdmin = (req, res) => {
    console.log("registration")
    obj = {
        fName: req.body.fName,
        lName: req.body.lName,
        email_ID: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        location: req.body.location,
        merchantWebsite: req.body.merchantWebsite,
        isAdmin: "ACTIVE",
        logo: null,
        merchantId: null
    }
    merchantModel.find({}).count().exec((err, result) => {
        // log("@#@!@#$!@#$!@#$!@#$!@#$@#!$!@#$!@#$@#$@#$!@#$!@#$!@#$@#!@#$@!#$", result)
        obj.merchantId = result + 1000
    })
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (obj) {
        merchantModel.findOne({ email_ID: obj.email_ID }).exec((err, result) => {
            if (err) {
                // log(err)
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result) {
                Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, resMessage.ALL_READY_EXIST_EMAIL)
            }
            else {
                imageFunction.uploadImg(req.body.logo, (err, url) => {
                    // console.log("5467890--=5467890-", url)
                    obj.logo = url
                    // })
                    obj.password = commonFile.createHash(obj.password, (err, hash) => {
                        // log("hash", hash)
                        obj.password = hash
                        merchantModel.create(obj, (err, result) => {
                            // console.log("dataBaseInsert")
                            if (err) {
                                // log(err)
                                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
                            }
                            else if (!result) {
                                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                            }
                            else {
                                //serverFunc.refreshList;
                                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.merchant_registered_successfully, result)
                            }
                        })
                    })
                })
            }
        })
    }
}

//merchant-request-approve-pending
merchantPending = (req, res) => {
    log('merchantPending')
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        },
        select: 'isAdmin fName lName merchantId location'
    }
    merchantModel.paginate({ isAdmin: "INACTIVE" }, options, (err, result) => {
        // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.PENDING_LIST_OF_MERCHANT, result)
        }
    })
}
//active status
activeStatus = (req, res) => {
    log("activeStatus")
    obj = {
        _id: req.body._id,
        status: req.body.status
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        merchantModel.findByIdAndUpdate({ _id: obj._id }, { $set: { isAdmin: "ACTIVE" } }, { new: true }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.MERCHANT_ACTIVATED)
            }
        })
    }
}
//merchantView
merchantProfile = (req, res) => {
    log("merchantView")
    obj = {
        merchant_id: req.body.merchant_id
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        merchantModel.findByIdAndUpdate({ _id: obj.merchant_id }, { password: 0 }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
            }
        })
    }
}

//add staticContent
addTermAndCondition = (req, res) => {
    log('addStaticContent')
    obj = {
        about: req.body.about
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        termConditionModel.update({ about: obj.about }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.UPDATE, result)
            }
        })
    }
}
//privacy and policy 
addPrivacyPolicy = (req, res) => {
    log('privacy and policy')
    obj = {
        about: req.body.about
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        privacyPolicyModel.update({ policy: obj.about }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.UPDATE, result)
            }
        })
    }
}
//about us 
addAboutUs = (req, res) => {
    log('privacy and policy')
    obj = {
        about: req.body.about
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        privacyPolicyModel.update({ aboutUs: obj.about }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.UPDATE, result)
            }
        })
    }
}

//////////////////////getTermAndCondition/////////////////////////////
getTermAndCondition = (req, res) => {
    log("privacy&Policy")
    termConditionModel.findOne({}, { about: 1 }, (err, result) => {
        if (err) {
            log(err)
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (!result) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })
}

///////////////////////////privacyAndPolicy///////////////////////////////////////////

getPrivacyPolicy = (req, res) => {
    log("privacy&Policy")
    privacyPolicyModel.findOne({}, { policy: 1 }, (err, result) => {

        if (err) {
            log(err)
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (!result) {
            log("not found")
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            log("final----->", result)
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })
}

///////////////////////////////getAboutUs///////////////////////////
getAboutUs = (req, res) => {
    log("privacy&Policy")
    privacyPolicyModel.findOne({}, { aboutUs: 1 }, (err, result) => {

        if (err) {
            log(err)
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (!result) {
            log("not found")
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            log("final----->", result)
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })
}

//////////////viewBanner/////////////
viewBanner = (req, res) => {
    log('viewBanner')
    obj = {
        banner_id: req.body.banner_id
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        bannerModel.findByIdAndUpdate({ _id: obj.banner_id }, { password: 0 }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
            }
        })
    }
}


///////////////////////////////////filterBanner/////////////////////////////////////////////////
filterBanner = (req, res) => {
    log('filterBanner')
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        }
    }
    obj = {
        text: req.body.text
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    bannerModel.paginate({ text: { $regex: obj.text, $options: 'i' } }, options, (err, result) => {
        log("$%$%$%$%%$%$%$%$%$%$%$%", err, result)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })
}
/////////////////////////////////////////////filterSudadmin////////////////////////////////////////
filterSubAdmin = (req, res) => {
    console.log("filtersubadmin")
    obj = {
        userName: req.body.userName,
        date: req.body.date
    }
    var fromDate = new Date(req.body.date)
    console.log("fromDate==>>", fromDate)
    fromDate = fromDate.setHours(0, 0, 0, 0)
    // console.log("fromDate==>>", fromDate)
    var toDate = new Date(req.body.date)
    toDate = toDate.setHours(23, 59, 59, 999)
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }

    else if (obj.userName) {
        var query = {
            $or: [{
                email: {
                    $regex: new RegExp(req.body.userName, "ig")
                }
            }, {
                name: {
                    $regex: new RegExp(req.body.search, "ig")
                }
            }], isAdmin: "subAdmin"
        }
    }
    else if (obj.date) {
        var query = {
            lastLogin: {
                $gte: fromDate,
                $lte: toDate
            }
        }
    }
    else {
        console.log("#$#$#$#$#   730")
        var query = { isAdmin: "subAdmin" }
    }
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        }
    }
    adminLoginModel.paginate(query, options, (err, result) => {
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })



}
///////////////////////filterMerchant////////////////////////////////////////////////////////////
filterMerchant = (req, res) => {
    log('filterBanner')
    obj = {
        text: req.body.text
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    if (req.body.status || req.body.search) {
        console.log("#$#$#$#$#   710")
        var query = {
            isAdmin: req.body.status
        }
        var query = {
            $and: [{ isAdmin: req.body.status  }, {
                $or: [{
                    fName: {
                        $regex: new RegExp(req.body.search, "ig")
                    }
                }, {
                    email_ID: {
                        $regex: new RegExp(req.body.search, "ig")
                    }
                }]
            }]
        }
    }
    // else if (req.body.status) {
    //     console.log("#$#$#$#$#   710")
    //     var query = {
    //         isAdmin: req.body.status
    //     }
    // }
    // else if (req.body.search) {
    //     console.log("#$#$#$#$#   716")
    //     var query = {
    //         $or: [{
    //             fName: {
    //                 $regex: new RegExp(req.body.search, "ig")
    //             }
    //         }, {
    //             email_ID: {
    //                 $regex: new RegExp(req.body.search, "ig")
    //             }
    //         }]
    //     }
    // }
    // else {
    //     console.log("#$#$#$#$#   730")
    //     var query = {}
    // }
    let options = {
        page: req.body.page || 1,
        limit: req.body.limit || 6,
        sort: {
            createdAt: -1
        }
    }
    merchantModel.paginate(query, options, (err, result) => {
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })
}
/////////////////////////////////////////editMerchant/////////////////////////////////////////////////////////
editMerchant = (req, res) => {
    log("addmerchantadmin")
    console.log("registration")
    obj = {
        merchant_id: req.body.merchant_id,
        fName: req.body.fName,
        lName: req.body.lName,
        email_ID: req.body.email_ID,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        location: req.body.location,
        merchantWebsite: req.body.merchantWebsite,
        isAdmin: "ACTIVE"
    }
    log(obj)
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        merchantModel.findByIdAndUpdate({ _id: obj.merchant_id }, { $set: { fName: obj.fName, lName: obj.lName, email_ID: obj.email_ID, phoneNumber: obj.phoneNumber, password: obj.password, location: obj.location, merchantWebsite: obj.merchantWebsite, isAdmin: obj.isAdmin } }, { new: true }, (err, result) => {
            console.log("dataBaseInsert")
            if (err) {
                log(err)
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (!result) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                log("final----->", result)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.MERCHANT_EDIT_SUCCESSFULLY, result)
            }
        })
    }
}
///////////////////////////////////blockMerchant/////////////////////////
blockMerchant = (req, res) => {
    log("block merchant")
    obj = {
        _id: req.body._id,
        // status: req.body.status
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        merchantModel.findByIdAndUpdate({ _id: obj._id }, { $set: { isAdmin: "INACTIVE" } }, { new: true }).exec((err, result) => {
            // log("$%$%$%$%%$%$%$%$%$%$%$%",err,result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.MERCHANT_BLOCKED)
            }
        })
    }
}
////////////////////////////////////////////delete////////////////////////////////////////////////////////
deleteMerchant = (req, res) => {
    log('deleteMerchant')
    obj = {
        _id: req.body._id,
        // status: req.body.status
    }
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (true) {
        console.log("object", obj)
        merchantModel.deleteOne({ _id: obj._id }).exec((err, result) => {
            log("$%$%$%$%%$%$%$%$%$%$%$%", err, result)
            if (err) {
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result == null) {
                Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
            }
            else {
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.MERCHANT_DELETED, result)
            }
        })
    }
},
//logout api
logout=(req,res)=>{
    console.log("logout api ")
    adminLoginModel.update({token:req.headers.token},{token:""},(err,result)=>{
        console.log("err,result",err,result)
        if (err) {
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (result == null) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGOUT_SUCCESSFULLY, result)
        }
    })
}
module.exports = {
    login,
    forgotPassword,
    resetPassword,
    merchantView,
    changePassword,
    editBanner,
    deleteBanner,
    deleteMerchant,
    addBanner,
    addMerchantAdmin,
    merchantPending,
    activeStatus,
    bannerList,
    addSubAdmin,
    merchantProfile,
    addTermAndCondition,
    addPrivacyPolicy,
    addAboutUs,
    getTermAndCondition,
    getPrivacyPolicy,
    getAboutUs,
    viewBanner,
    filterBanner,
    filterMerchant,
    editMerchant,
    blockMerchant,
    editSubAdmin,
    subAdminList,
    blockAndDeleteSubAdmin,
    filterSubAdmin,
    viewSubAdmin,
    logout
}