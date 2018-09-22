var merchantSchema = require('../../dbSchema/merchantModel/merchantModel')
const Response = require('../../commonFile/response_handler');
const resCode = require('../../helper/httpResponseCode')
const resMessage = require('../../helper/httpResponseMessage');
const commonFile = require('../../commonFile/commonFunction')
const log = console.log
var imageFunction=require('../../commonFile/uploadMedia')
const termConditionModel = require('../../dbSchema/merchantModel/term&condition')
const bannerModel = require('../../dbSchema/merchantModel/bannerModel')
const privacyPolicyModel = require('../../dbSchema/merchantModel/privacyPolicy')

//registration merchant
const registration = (req, res) => {
    
    console.log("registration")
    obj = {
        fName: req.body.fName,
        lName: req.body.lName,
        email_ID: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        location: req.body.location,
        merchantWebsite: req.body.merchantWebsite,
        isAdmin: "INACTIVE",
        logo: null,
        merchantId: null
    }
    console.log("registration")
    merchantSchema.find({}).count().exec((err, result) => {
        log("@#@!@#$!@#$!@#$!@#$!@#$@#!$!@#$!@#$@#$@#$!@#$!@#$!@#$@#!@#$@!#$", result)
        obj.merchantId = result + 1000
    })
    if (!obj) {
        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.PARAMETER_IS_MISSING)
    }
    else if (obj) {
        console.log("registration")
        merchantSchema.findOne({ email_ID: obj.email_ID }).exec((err, result) => {
            if (err) {
                log(err)
                Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
            }
            else if (result) {
                Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, resMessage.ALL_READY_EXIST_EMAIL)
            }
            else {
                imageFunction.uploadImg(req.body.logo, (err,url) => {
                    console.log("5467890--=5467890-",url)
                    obj.logo = url
                // })
                obj.password = commonFile.createHash(obj.password, (err, hash) => {
                    log("hash", hash)
                    obj.password = hash
                    merchantSchema.create(obj, (err, result) => {
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
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.merchant_registered_successfully, result)
                        }
                    })
                })
            })
            }
            
        })
    }
}
//get policyandservices
privacyAndPolicy = (req, res) => {
    log("privacy&Policy")
    privacyPolicyModel.find({}, { policy: 1 }, (err, result) => {

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
//term&condition
termAndCondition = (req, res) => {
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
//banner
banner = (req, res) => {
    log("privacy&Policy")
    bannerModel.find({}, (err, result) => {
        if (err) {
            log(err)
            Response.sendResponsewithError(res, resCode.INTERNAL_SERVER_ERROR, resMessage.INTERNAL_SERVER_ERROR, err)
        }
        else if (!result) {
            Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
        }
        else {
            log("final----->", result)
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.SUCCESSFULLY_DONE, result)
        }
    })
}

module.exports = {
    registration,
    privacyAndPolicy,
    termAndCondition,
    banner
}

