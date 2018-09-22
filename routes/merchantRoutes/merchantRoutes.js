const merchantRouter=require('express').Router()
const merchantHandler=require('../../fileHandler/merchantHandler/merchantController')

merchantRouter.post('/registration',merchantHandler.registration)
merchantRouter.get('/privacyAndPolicy',merchantHandler.privacyAndPolicy)
merchantRouter.get('/termAndCondition',merchantHandler.termAndCondition)
merchantRouter.get('/banner',merchantHandler.banner)



module.exports=merchantRouter