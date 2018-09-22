const adminRoute=require('express').Router()
var adminHandle=require('../../fileHandler/adminHandler/adminHandler')

let authHandler=require('../../middleware/customer_auth_handler')


adminRoute.post('/login',adminHandle.login);
adminRoute.post('/forgotPassword',adminHandle.forgotPassword);
adminRoute.post('/resetPassword',adminHandle.resetPassword);
adminRoute.post('/merchantView',authHandler.verifyToken,adminHandle.merchantView);
adminRoute.post('/changePassword',authHandler.verifyToken,adminHandle.changePassword);
adminRoute.post('/editBanner',authHandler.verifyToken,adminHandle.editBanner);
adminRoute.post('/deleteBanner',authHandler.verifyToken,adminHandle.deleteBanner);
adminRoute.post('/addBanner',authHandler.verifyToken,adminHandle.addBanner);
adminRoute.post('/addMerchantAdmin',authHandler.verifyToken,adminHandle.addMerchantAdmin);
adminRoute.post('/merchantPending',authHandler.verifyToken,adminHandle.merchantPending);
adminRoute.post('/activeStatus',authHandler.verifyToken,adminHandle.activeStatus);
adminRoute.post('/blockMerchant',authHandler.verifyToken,adminHandle.blockMerchant);
adminRoute.post('/deleteMerchant',authHandler.verifyToken,adminHandle.deleteMerchant);
adminRoute.post('/bannerList',authHandler.verifyToken,adminHandle.bannerList);

adminRoute.post('/addSubAdmin',authHandler.verifyToken,adminHandle.addSubAdmin);//addsubAdmin

adminRoute.post('/merchantProfile',authHandler.verifyToken,adminHandle.merchantProfile);
adminRoute.post('/addTermAndCondition',authHandler.verifyToken,adminHandle.addTermAndCondition);
adminRoute.post('/addPrivacyPolicy',authHandler.verifyToken,adminHandle.addPrivacyPolicy);
adminRoute.post('/addAboutUs',authHandler.verifyToken,adminHandle.addAboutUs);
adminRoute.get('/getTermAndCondition',authHandler.verifyToken,adminHandle.getTermAndCondition);
adminRoute.get('/getPrivacyPolicy',authHandler.verifyToken,adminHandle.getPrivacyPolicy);
adminRoute.get('/getAboutUs',authHandler.verifyToken,adminHandle.getAboutUs);
adminRoute.post('/viewBanner',authHandler.verifyToken,adminHandle.viewBanner);
adminRoute.post('/filterBanner',authHandler.verifyToken,adminHandle.filterBanner);
adminRoute.post('/filterMerchant',authHandler.verifyToken,adminHandle.filterMerchant);
adminRoute.post('/editMerchant',authHandler.verifyToken,adminHandle.editMerchant);
adminRoute.post('/editSubAdmin',authHandler.verifyToken,adminHandle.editSubAdmin);
adminRoute.post('/subAdminList',authHandler.verifyToken,adminHandle.subAdminList);
adminRoute.post('/blockAndDeleteSubAdmin',authHandler.verifyToken,adminHandle.blockAndDeleteSubAdmin);
adminRoute.post('/filterSubAdmin',authHandler.verifyToken,adminHandle.filterSubAdmin);
adminRoute.post('/viewSubAdmin',authHandler.verifyToken,adminHandle.viewSubAdmin);
adminRoute.get('/logout',authHandler.verifyToken,adminHandle.logout);











module.exports=adminRoute