(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Common/header-footer/header-footer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Common/header-footer/header-footer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Common/header-footer/header-footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Common/header-footer/header-footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div >\n        <header class=\"header\">\n            <nav class=\"navbar clearfix\">\n                <div class=\"logo-box\">\n                    <a class=\"navbar-brand logo\" (click)='dashoboard()'>\n                        <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"lg-logo\">\n                        <!-- <img src=\"assets/img/sm-logo.png\" alt=\"logo\" class=\"sm-logo\"> -->\n                    </a>\n\n                </div>\n                <div class=\"header-right-part\">\n                    <button class=\"btn btn-toggle\" type=\"button\" (click)='openSideMenu()'>\n                                <i class=\"fas fa-bars\" ></i>\n                            </button>\n                    <button class=\"btn btn-outline-secondary btn-mobsearch\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n                </div>\n            </nav>\n        </header>\n        <!-- Header End -->\n\n        <aside class=\"sidebar\">\n            <div class=\"sidebar-scroller\">\n                <!--Accordion Start -->\n                <div id=\"accordion\" class=\"sidebar-menu\">\n                   <!--  <div class=\"user-panel clearfix\">\n                        <div class=\"pull-left image\">\n                            <img src=\"assets/img/user-img.png\" class=\"img-circle\" alt=\"User Image\">\n                            <a href=\"#\" class=\"online-icon\"><i class=\"fa fa-circle text-success\"></i></a>\n                        </div>\n                        <div class=\"pull-left info mt10\">\n                          <a href=\"profile.html\">\n                            <p>Welcome</p>\n                            <h4>Arvind</h4>\n                          </a>\n                        </div>\n                    </div> -->\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box active\" [ngClass]=\"{'active': activeTab =='dashboard'}\">\n                        <div class=\"card-header clearfix\" id=\"headingOne\">\n                            <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='dashoboard()'>\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-tachometer-alt\"></i> -->\n                                    <img src=\"assets/img/dashboard-icon.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">Dashboard</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{'active': activeTab =='merchant-management'}\" *ngIf=\"isInclude('merchantManagement')\">\n                        <div class=\"card-header clearfix\" id=\"headingTwo\">\n                            <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='merchant_management()'>\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-users\"></i> -->\n                                    <img src=\"assets/img/user-manage.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">Merchant Management</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                     <!-- menu-box End -->\n                     <div class=\"menu-box\" [ngClass]=\"{'active': activeTab =='subadmin-management'}\" *ngIf=\"isInclude('sub')\">\n                            <div class=\"card-header clearfix\" id=\"headingTwo\">\n                                <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='subadmin_management()'>\n                                    <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-users\"></i> -->\n                                        <img src=\"assets/img/avatar.png\" alt=\"icon\"/>\n                                    </span>\n                                    <span class=\"side_page_name\">Sub Admin Management</span>\n                                </a>\n                            </div>\n                        </div>\n                        <!-- menu-box End -->\n                           <!-- menu-box Start -->\n                           <div class=\"menu-box\" [ngClass]=\"{'active': activeTab =='banner-management'}\" *ngIf=\"isInclude('bannerManagement')\">\n                            <div class=\"card-header clearfix\" id=\"headingThree\">\n                                <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='banner_management()'>\n                                    <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-users\"></i> -->\n                                        <img src=\"assets/img/banner-icon.png\" alt=\"icon\"/>\n                                    </span>\n                                    <span class=\"side_page_name\">Banner Management</span>\n                                </a>\n                            </div>\n                        </div>\n                        <!-- menu-box End -->\n                     <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{'active': activeTab =='static-contents'}\" *ngIf=\"isInclude('staticContentManagement')\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='static_contents()'>\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-users\"></i> -->\n                                    <img src=\"assets/img/static-content.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">Statics Content Management</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                     <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{'active': activeTab =='change-password'}\">\n                        <div class=\"card-header clearfix\" id=\"headingThree\">\n                            <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='change_password()'>\n                               <!--  <span class=\"side_menu_icon\">\n                                    <img src=\"assets/img/envelope.png\" alt=\"icon\"/>\n                                </span> -->\n                                <span class=\"side_menu_icon\">\n                                    <i class=\"fas fa-unlock-alt\"></i>\n                                </span>\n                                <span class=\"side_page_name\">Change Password</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                  \n                    \n                     \n                    <!-- menu-box Start -->\n                    <div class=\"menu-box\" [ngClass]=\"{'active': activeTab =='logout'}\">\n                        <div class=\"card-header clearfix\">\n                            <a class=\"side_menu\" style=\"color: white; cursor: pointer;\" (click)='logout()'  href=\"#signout_modal\" data-toggle=\"modal\">\n                                    <!-- <a class=\"side_menu\" href=\"#signout_modal\" (click)='dashoboard()'  data-toggle=\"modal\"> -->\n                                <span class=\"side_menu_icon\"><!-- <i class=\"fas fa-sign-out-alt\"></i> -->\n                                    <img src=\"assets/img/logout.png\" alt=\"icon\"/>\n                                </span>\n                                <span class=\"side_page_name\">Logout</span>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- menu-box End -->\n                </div>\n                <!--Accordion End -->\n            </div>\n        </aside>\n        <!-- Aside End -->\n\n        <footer>\n            <div class=\"container-fluid\">\n                <p>Copyright © 2018 BMCT  All rights reserved.</p>\n            </div>\n        </footer>\n        <!-- Footer Finish -->\n    </div>\n    <!-- Wrapper End -->\n    <!--Modal Start-->\n\n    <!-- signout_modal Start -->\n    <div class=\"modal fade global-modal reset-modal\" id=\"signout_modal\">\n        <div class=\"modal-dialog max-WT-500\">\n            <div class=\"modal-content\">\n                <div>\n                    <!-- Modal body -->\n                    <div class=\"modal-body  text-center\">\n                        <div class=\"row align-items-center modal_flax_height\">\n                            <div class=\"col\">\n                                <div class=\"box-title mb40 d-inline-block\">\n                                    <i class=\"fas fa-power-off off-icon\"></i>\n                                    <p class=\"mt40\">Are you sure you want to logout?</p>\n                                </div>\n                                <div class=\"text-center\">\n                                    <a style=\"color: white; cursor: pointer;\" (click)='logoutYes()' class=\"btn btn-blue btn-noYes\">YES</a>\n                                    <button style=\"color: white; cursor: pointer;\" type=\"button\" class=\"btn btn-red btn-noYes\" data-dismiss=\"modal\">CANCEL</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Signout Modal -->\n"

/***/ }),

/***/ "./src/app/Common/header-footer/header-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Common/header-footer/header-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFooterComponent", function() { return HeaderFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderFooterComponent = /** @class */ (function () {
    function HeaderFooterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.access = [];
    }
    HeaderFooterComponent.prototype.ngOnInit = function () {
        var url = window.location.href.split('/');
        var page = url[url.length - 1];
        this.activeTab = page;
        this.access = JSON.parse(localStorage.token).result;
    };
    HeaderFooterComponent.prototype.dashoboard = function () {
        this.activeTab = 'dashboard';
        this.router.navigate(['/dashboard']);
    };
    HeaderFooterComponent.prototype.merchant_management = function () {
        this.activeTab = 'merchant-management';
        this.router.navigate(['/merchant-management']);
    };
    HeaderFooterComponent.prototype.banner_management = function () {
        this.activeTab = 'banner-management';
        this.router.navigate(['/banner-management']);
    };
    HeaderFooterComponent.prototype.static_contents = function () {
        this.activeTab = 'static-contents';
        this.router.navigate(['/static-contents']);
    };
    HeaderFooterComponent.prototype.change_password = function () {
        this.activeTab = 'change-password';
        this.router.navigate(['/change-password']);
    };
    HeaderFooterComponent.prototype.subadmin_management = function () {
        this.activeTab = 'subadmin-management';
        this.router.navigate(['/subadmin-management']);
    };
    HeaderFooterComponent.prototype.logout = function () {
        this.activeTab = 'logout';
    };
    HeaderFooterComponent.prototype.openSideMenu = function () {
        $("body").toggleClass("toggle-wrapper");
    };
    HeaderFooterComponent.prototype.logoutYes = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.callGet('logout ').subscribe(function (response) {
            console.log(response);
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                $('#signout_modal').modal('hide');
            }
            else {
                console.log("API MSG CODE", response['responseCode']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong');
        });
    };
    HeaderFooterComponent.prototype.isInclude = function (val) {
        if (this.access) {
            // Sub admin
            if (val != 'sub') {
                if (this.access.length)
                    return this.access.includes(val);
                else
                    return false;
            }
            else {
                return false;
            }
        }
        else {
            // Admin
            return true;
        }
    };
    HeaderFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-footer',
            template: __webpack_require__(/*! ./header-footer.component.html */ "./src/app/Common/header-footer/header-footer.component.html"),
            styles: [__webpack_require__(/*! ./header-footer.component.css */ "./src/app/Common/header-footer/header-footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]])
    ], HeaderFooterComponent);
    return HeaderFooterComponent;
}());



/***/ }),

/***/ "./src/app/Components/banner-edit/banner-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/banner-edit/banner-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/banner-edit/banner-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/banner-edit/banner-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Merchant Management</h1>\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <form class=\"login_box_outer\" >\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                    <form [formGroup]='bannerForm'>\n                      <div class=\"form-group row mb40 align-items-center\">\n                          <label class=\"col-md-5\">Banner Image :</label>\n                          <div class=\"col-md-7\">\n                              <div class=\"user-profile bannerimg\">\n                                 <div class=\"image-box mb0\">\n                                     <img src=\"{{imageUrl || 'assets/img/placeholder.png'}}\" class=\"profile-pic\"> \n                                      <label class=\"upload-label\">\n                                       <input type=\"file\" (change)='fileSelect($event)' accept=\"image/jpeg,image/jpg,image/png\">\n                                        <i class=\"fas fa-camera\"></i>\n                                        <!-- <div class=\"errMsg\" *ngIf=\"bannerForm.get('image').dirty && bannerForm.get('image').invalid\"> \n                                                <span  [ngClass]=\"{error:bannerForm.get('image').hasError('required')}\" *ngIf=\"bannerForm.get('image').hasError('required')\">*Please select banner image.</span>\n                                        </div> -->\n                                    </label>\n                                </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-start\">\n                          <label class=\"col-md-5\">Banner Description :</label>\n                          <div class=\"col-md-7\">\n                               <textarea class=\"form-control common-textarea\" formControlName='description' maxlength=\"500\" id='description' ></textarea>\n                               <div class=\"errMsg\" *ngIf=\"bannerForm.get('description').dirty && bannerForm.get('description').invalid\"  > \n                                    <span  [ngClass]=\"{error:bannerForm.get('description').hasError('required')}\" *ngIf=\"bannerForm.get('description').hasError('required')\">*Please enter description.</span>\n                                    <span  [ngClass]=\"{error:bannerForm.get('description').hasError('minlength')}\" *ngIf=\"bannerForm.get('description').hasError('minlength')\">*Description should be of at least 10 characters.</span>\n                                  </div>\n                          </div>\n                      </div>\n                      <div class=\"text-center mt40\">\n                         <a  class=\"btn btn-large  max-WT-150 font-100 btn-grey\" (click)='back()'>Back</a>\n                          <button  type='button' class=\"btn btn-large  max-WT-150 font-100 btn-green mL10\" (click)='save()' [disabled]='bannerForm.invalid || !imageUrl'>Save</button>\n                      </div>\n                    </form>\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/banner-edit/banner-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/banner-edit/banner-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerEditComponent", function() { return BannerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BannerEditComponent = /** @class */ (function () {
    function BannerEditComponent(service, router) {
        this.service = service;
        this.router = router;
        this.imageUrl = '';
        this.bannerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)])
        });
    }
    BannerEditComponent.prototype.ngOnInit = function () {
        if (localStorage.bannerId) {
            this.service.spinnerShow();
            this.getBanner();
        }
        else {
            localStorage.removeItem('bannerId');
        }
    };
    BannerEditComponent.prototype.getBanner = function () {
        var _this = this;
        var bannerData = {
            banner_id: localStorage.bannerId
        };
        this.service.callPost('viewBanner', bannerData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('merchant pending api run');
            if (response['responseCode'] == 200) {
                _this.bannerDetails = response['result'];
                _this.bannerForm.patchValue({
                    description: _this.bannerDetails.text,
                });
                _this.imageUrl = _this.bannerDetails.banners;
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log('merchant pending api run');
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong');
        });
    };
    BannerEditComponent.prototype.save = function () {
        var _this = this;
        this.service.spinnerShow();
        if (this.service.pageIs === 'addBanner') {
            var bannerData = {
                banners: this.imageUrl,
                text: this.bannerForm.value.description
            };
            console.log('DATA SENT===>>>', bannerData);
            this.service.callPost('addBanner', bannerData).subscribe(function (response) {
                console.log('CHAL GYA !!!');
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('banner added successfully.');
                    _this.router.navigate(['/banner-management']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    _this.service.error('Your token is expired !');
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                }
                else {
                    console.log("API MSG CODE", response['responseCode']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('ERROR');
            });
        }
        else {
            var bannerData = {
                banners: this.imageUrl,
                text: this.bannerForm.value.description,
                _id: localStorage.bannerId
            };
            console.log('DATA SENT===>>>', bannerData);
            this.service.callPost('editBanner', bannerData).subscribe(function (response) {
                console.log('CHAL GYA !!!');
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('banner editted successfully.');
                    _this.router.navigate(['/banner-management']);
                    console.log("API MSG CODE", response['response_message']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else {
                    console.log("API MSG CODE", response['responseCode']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('ERROR');
            });
        }
        this.service.spinnerShow();
    };
    BannerEditComponent.prototype.back = function () {
        this.router.navigate(['/banner-management']);
    };
    BannerEditComponent.prototype.fileSelect = function (event) {
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var fileType = event.target.files[0].type;
            if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg') {
                this.image = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.imageUrl = e.target['result'];
                    // this.image =e.target['result']       
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                // this.image = ''				
                //this.imageUrl = '';
                self.imageUrl = '';
                // this.imageUrl='assets/img/profile-img.jpg'	
                this.service.error('Please select image file only !');
            }
        }
    };
    BannerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-edit',
            template: __webpack_require__(/*! ./banner-edit.component.html */ "./src/app/Components/banner-edit/banner-edit.component.html"),
            styles: [__webpack_require__(/*! ./banner-edit.component.css */ "./src/app/Components/banner-edit/banner-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BannerEditComponent);
    return BannerEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/banner-management/banner-management.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Components/banner-management/banner-management.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/banner-management/banner-management.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/banner-management/banner-management.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Banner Management</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n    <div class=\"sec_head_new sec_head_new_after\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-6 col-xl-3\">\n              <div class=\"filter_search mb10 width100\">\n                <div class=\"input-group filter_search_group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" id='searchData'>\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn_search_group\" type='button'  (click)='searchFilter()'><img src=\"assets/img/icon-search.png\" alt=\"Search\"></button>\n                    </div>\n                </div>\n             </div>\n          </div>\n          <div class=\"col-md-6 col-xl-2\">\n              <div class=\"text-left mb10\">\n                  <button type=\"submit\" class=\"btn  btn-theme\" (click)='searchFilter()'>Search</button>\n              </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"> \n       <div class=\"mb10 show-txt f-left\">\n              <span>Show</span>\n              <select name=\"\" class=\"form-control form-control2 select_opt\" id='itemsPP' (change)='limitChange()'>\n                    <option value=\"5\" selected=\"\">5</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"15\">15</option>\n                </select>\n              <span>from all</span>\n            </div>\n            <div class=\"f-right\">\n               <a class=\"btn btn-primary\" (click)='addBanner()' style=\"color: white; cursor: pointer;\">\n                  <i class=\"fa fa-plus\"></i> Add Banner\n               </a>\n            </div>\n    </div>\n      <div class=\"outer-box\">\n\n          <!-- Gloabl Table Box Start -->\n          <div class=\"global-table no-radius p0\">\n\n              <div class=\"tab-content1\">\n                  <div class=\"tab-pane1\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-bordered\">\n                              <thead>\n                                  <tr class=\"no_wrap_th\">\n                                    <th>S.NO.</th>\n                                      <th>Banner Images </th>\n                                      <th>Banner Text </th>\n                                      <th class=\"action_td_btn3\">Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr *ngFor='let banner of bannerArray | paginate: { itemsPerPage:itemPP, currentPage: currPage, totalItems: pageSize } ;let i=index'>\n                                    <td>{{srNo+(i+1)}}</td>\n                                      <td>\n                                         <img src=\"{{banner.banners}}\" style=\"max-width:80px;\">\n                                      </td>\n                                      <td>{{banner.text}}</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a (click)='view(banner)'><i class=\"fa fa-eye\"></i></a>\n                                           <a (click)='edit(banner)'><i class=\"fa fa-edit\"></i></a>\n                                           <a (click)='delete(banner)'><i class=\"fa fa-trash\"></i></a>\n                                      </td>\n                                  </tr>\n                                  <!-- <tr>\n                                    <td>2</td>\n                                      <td>\n                                         <img src=\"assets/img/profile-img.jpg\" style=\"max-width:80px;\">\n                                      </td>\n                                      <td>Lorem.....</td>\n                                      <td class=\"action_td_btn3\">\n                                           <a (click)='view()'><i class=\"fa fa-eye\"></i></a>\n                                           <a (click)='edit()'><i class=\"fa fa-edit\"></i></a>\n                                           <a (click)='delete()'><i class=\"fa fa-trash\"></i></a>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>3</td>\n                                      <td>\n                                         <img src=\"assets/img/profile-img.jpg\" style=\"max-width:80px;\">\n                                      </td>\n                                      <td>Lorem.....</td>\n                                      <td class=\"action_td_btn3\">\n                                           <a (click)='view()'><i class=\"fa fa-eye\"></i></a>\n                                           <a (click)='edit()'><i class=\"fa fa-edit\"></i></a>\n                                           <a (click)='delete()'><i class=\"fa fa-trash\"></i></a>\n                                      </td>\n                                  </tr> -->\n                              </tbody>\n                          </table>\n                      </div>\n                      <div class=\"custom-pagination mt20 text-right\">\n                          <nav aria-label=\"Page navigation example\">\n                                <div class=\"pagination_block\" *ngIf=\"bannerArray.length \">\n                                        <ul class=\"pagination\">\n                                          <pagination-controls (pageChange)=\"changePage($event)\"></pagination-controls>\n                                        </ul>\n                                </div>\n                          </nav>\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Table Responsive End -->\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n<div class=\"modal fade global-modal reset-modal\" id=\"delete_modal\">\n        <div class=\"modal-dialog max-WT-500\">\n            <div class=\"modal-content\">\n                <div>\n                    <!-- Modal body -->\n                    <div class=\"modal-body  text-center\">\n                        <div class=\"row align-items-center modal_flax_height\">\n                            <div class=\"col\">\n                                <div class=\"box-title mb40 d-inline-block\">\n                                    <i class=\"fas fa-trash off-icon\"></i>\n                                    <p class=\"mt40\">Are you sure you want to delete this banner ?</p>\n                                </div>\n                                <div class=\"text-center\">\n                                    <a data-dismiss=\"modal\" class=\"btn btn-blue btn-noYes\" style=\"color: white; cursor: pointer;\">BACK</a>\n                                    <a (click)='deleteYes()' class=\"btn btn-red btn-noYes\"  style=\"color: white; cursor: pointer;\">YES</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/Components/banner-management/banner-management.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/banner-management/banner-management.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BannerManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerManagementComponent", function() { return BannerManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerManagementComponent = /** @class */ (function () {
    function BannerManagementComponent(router, service) {
        this.router = router;
        this.service = service;
        this.currPage = 1;
        this.bannerArray = [];
        this.itemPP = 5;
        this.pageSize = 0;
        $("#searchData").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    BannerManagementComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('bannerId');
        this.service.pageIs = '';
        this.service.spinnerShow();
        this.bannersList();
    };
    BannerManagementComponent.prototype.view = function (e) {
        localStorage.bannerId = e._id;
        console.log('view clicked!', e._id);
        this.router.navigate(['/banner-view']);
    };
    BannerManagementComponent.prototype.edit = function (e) {
        localStorage.bannerId = e._id;
        console.log('edit clicked!', e._id);
        this.router.navigate(['/banner-edit']);
    };
    BannerManagementComponent.prototype.delete = function (e) {
        localStorage.bannerId = e._id;
        $('#delete_modal').modal('show');
        console.log('delete clicked!', e._id);
    };
    BannerManagementComponent.prototype.addBanner = function () {
        this.service.pageIs = 'addBanner';
        this.router.navigate(['/banner-edit']);
    };
    BannerManagementComponent.prototype.bannersList = function () {
        var _this = this;
        // this.service.spinnerShow()
        var bannerData = {
            page: this.currPage,
            limit: this.itemPP,
            text: this.search
        };
        this.service.callPost('bannerlist', bannerData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('CHAL GYAaaaaaa');
            if (response['responseCode'] == 200) {
                _this.bannerArray = response['result'].docs;
                console.log("API RESULT-->", response['result'].total);
                _this.pageSize = response['result'].total;
                _this.srNo = response['result'].limit * (response['result'].page - 1);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    BannerManagementComponent.prototype.deleteYes = function () {
        var _this = this;
        this.service.spinnerShow();
        var bannerData = {
            "_id": localStorage.bannerId
        };
        this.service.callPost('deleteBanner', bannerData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                $('#delete_modal').modal('hide');
                _this.bannersList();
                _this.service.success('Banner Deleted');
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    BannerManagementComponent.prototype.changePage = function (p) {
        this.currPage = p;
        this.bannersList();
    };
    BannerManagementComponent.prototype.limitChange = function () {
        this.itemPP = parseInt($('#itemsPP').val());
        this.bannersList();
    };
    BannerManagementComponent.prototype.searchFilter = function () {
        var _this = this;
        this.service.spinnerShow();
        console.log('SEARCH BUTTON CLICKEDDD');
        var filterMerchantData = {
            text: $('#searchData').val(),
            limit: parseInt($('#itemsPP').val()),
            page: 1
        };
        this.service.callPost('filterBanner', filterMerchantData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.bannerArray = response['result'].docs;
                _this.pageSize = response['result'].total;
                _this.srNo = response['result'].limit * (response['result'].page - 1);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong');
        });
    };
    BannerManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-management',
            template: __webpack_require__(/*! ./banner-management.component.html */ "./src/app/Components/banner-management/banner-management.component.html"),
            styles: [__webpack_require__(/*! ./banner-management.component.css */ "./src/app/Components/banner-management/banner-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]])
    ], BannerManagementComponent);
    return BannerManagementComponent;
}());



/***/ }),

/***/ "./src/app/Components/banner-view/banner-view.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/banner-view/banner-view.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/banner-view/banner-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/banner-view/banner-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Merchant Management</h1>\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <form class=\"login_box_outer\" >\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                      <div class=\"form-group row mb40 align-items-center\">\n                          <label class=\"col-md-5\">Banner Image :</label>\n                          <div class=\"col-md-7\">\n                              <div class=\"bannerimage-block\">\n                                 <img src=\"{{bannerDetails.banners}}\">\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-start\">\n                          <label class=\"col-md-5\">Banner Description :</label>\n                          <div class=\"col-md-7\">\n                              <p class=\"word-break\">\n                                {{bannerDetails.text}}\n                              </p>\n                          </div>\n                      </div>\n                      <div class=\"text-center mt40\">\n                         <a  class=\"btn btn-large  max-WT-150 font-100 btn-grey\" [routerLink]=\"['/banner-management']\">Back</a>\n                          <a  class=\"btn btn-large  max-WT-150 font-100 btn-green mL10\" (click)='edit()'>Edit</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/banner-view/banner-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/banner-view/banner-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerViewComponent", function() { return BannerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerViewComponent = /** @class */ (function () {
    function BannerViewComponent(router, service) {
        this.router = router;
        this.service = service;
        this.bannerDetails = [];
    }
    BannerViewComponent.prototype.ngOnInit = function () {
        this.service.spinnerShow();
        this.getBanner();
    };
    BannerViewComponent.prototype.edit = function () {
        this.router.navigate(['/banner-edit']);
    };
    BannerViewComponent.prototype.getBanner = function () {
        var _this = this;
        var bannerData = {
            banner_id: localStorage.bannerId
        };
        this.service.callPost('viewBanner', bannerData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('merchant pending api run');
            if (response['responseCode'] == 200) {
                _this.bannerDetails = response['result'];
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    BannerViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner-view',
            template: __webpack_require__(/*! ./banner-view.component.html */ "./src/app/Components/banner-view/banner-view.component.html"),
            styles: [__webpack_require__(/*! ./banner-view.component.css */ "./src/app/Components/banner-view/banner-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]])
    ], BannerViewComponent);
    return BannerViewComponent;
}());



/***/ }),

/***/ "./src/app/Components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/change-password/change-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Components/change-password/change-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Change Password</h1>\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <form class=\"login_box_outer\" >\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n              <div class=\"main-block-innner mb40 mt40\">\n                  <div class=\"add-store-block input-style\">\n                      <form [formGroup]='passwordForm'>\n                      <!-- <div class=\"form-group row align-items-center\">\n                            <label class=\"col-md-4\">Old Password</label>\n                            <div class=\"col-md-8\">\n                                <input type=\"email\" class=\"form-control\" formControlName='oldPassword'  maxlength=\"16\">\n                                <div class=\"errMsg\" *ngIf=\"passwordForm.get('oldPassword').dirty && passwordForm.get('oldPassword').invalid\"> \n                                        <span  [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('required')\">*Please enter password.</span>\n                                        <span  [ngClass]=\"{error:passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')}\" *ngIf=\"passwordForm.get('oldPassword').hasError('minlength') && !passwordForm.get('oldPassword').hasError('required')\">*Password must be of minimum 8 characters.</span>\n                                </div>\n                            </div>\n                      </div> -->\n                      <div class=\"form-group row align-items-center\">\n                          <label class=\"col-md-4\">New Password</label>\n                          <div class=\"col-md-8\">\n                              <input type=\"password\" class=\"form-control\"  formControlName='newPassword' maxlength=\"16\" id='newPassword'>\n                              <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').invalid\"> \n                                    <span  [ngClass]=\"{error:passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('required')\">*Please enter password.</span>\n                                    <span  [ngClass]=\"{error:passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')}\" *ngIf=\"passwordForm.get('newPassword').hasError('minlength') && !passwordForm.get('newPassword').hasError('required')\">*Password must be of minimum 8 characters.</span>\n                                 </div>\n                          </div>\n                      </div>\n                      <div class=\"form-group row align-items-center\">\n                          <label class=\"col-md-4\">Confirm Password</label>\n                          <div class=\"col-md-8\">\n                              <input type=\"password\" class=\"form-control\"  formControlName='confirmPassword'  maxlength=\"16\" id='confirmPassword'>\n                              <div class=\"errMsg\" *ngIf=\"passwordForm.get('newPassword').value && passwordForm.get('confirmPassword').value && !passwordForm.get('newPassword').invalid\">                                   \n                                    <span  [ngClass]=\"{error:passwordForm.get('newPassword').value != passwordForm.get('confirmPassword').value }\" *ngIf='passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value '>*Password and confirm password does not match. </span>\n                                 </div>\n                          </div>\n                      </div>\n                      <div class=\"text-center mt40\">\n                          <button  (click)='OK()' class=\"btn btn-large  max-WT-150 font-100 btn-green\" [disabled]='passwordForm.invalid  || (passwordForm.get(\"newPassword\").value != passwordForm.get(\"confirmPassword\").value)'>OK</button>\n                      </div>\n                    </form>\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(service, router) {
        this.service = service;
        this.router = router;
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // oldPassword: new FormControl('',[Validators.required, Validators.minLength(8)]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
        $("#newPassword, #confirmPassword").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.OK = function () {
        var _this = this;
        this.service.spinnerShow();
        var changeData = {
            newPassword: this.passwordForm.value.newPassword,
            confirmPassword: this.passwordForm.value.confirmPassword
        };
        this.service.callPost('changePassword', changeData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('CHAL GYA');
            if (response['responseCode'] == 200) {
                _this.service.success('Password changed successfully.');
                _this.router.navigate(['/dashboard']);
                console.log("API MSG CODE", response['response_message']);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 401) {
                _this.service.error('Please do not enter old password');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/Components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/Components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!-- Aside End -->\n<div class=\"wrapper\">\n   <main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Dashboard</h1>\n       <!--  <div class=\"common-bredcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item active\">Dashboard</li>\n            </ol>\n\n        </div> -->\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section dashboard-block\" >\n       <div class=\"row\">\n          <div class=\"col-12\">\n             <div class=\"map-block\" id=\"map_canvas\" style=\"height:650px;\">\n             </div>\n          </div>\n       </div>\n     \n    </div>\n</main>\n</div>\n<app-header-footer></app-header-footer>\n<!-- Middle Content End -->"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _Services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/socket.service */ "./src/app/Services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, scoket) {
        var _this = this;
        this.service = service;
        this.scoket = scoket;
        this.markerArr = [];
        this.locations = [];
        this.scoket.getMessages().subscribe(function (message) {
            console.log("Respone of socket is " + JSON.stringify(message));
            _this.locations = message['result'];
            console.log("CONSTRUCTOR");
            setTimeout(function () {
                // this.initialize1()
                _this.addMarker();
            }, 1000);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ng on init');
        setTimeout(function () {
            _this.initialize1();
        }, 300);
        // this.scoket.getMessages().subscribe((message: any) => {
        //   console.log(`Respone of socket is ${JSON.stringify(message)}`)
        //   this.locations = message['result']
        //   console.log("ONINIT")
        //   this.initialize1()
        // })
        // this.scoket.sendMessage('users list')
        this.scoket.sendMessage("USER INFO");
        // this.scoket.getMerchantList().subscribe((message:any)=>{
        //   console.log("list is ", message)
        // })
        // this.mapList()
        // this.initialize();
        // this.initialize1()
    };
    // mapList(){
    //   this.service.callGet('userInfo').subscribe(response => {
    //     this.service.spinnerHide()   
    //      if(response['responseCode'] == 200){
    //       console.log('API MSG CODE 200')
    //       console.log(response)
    //      } 
    //      else {
    //        console.log("API MSG CODE",response['responseCode'] )
    //      }
    //   }, error =>{
    //     this.service.spinnerHide()
    //     console.log('API ERROR')
    //     this.service.error('ERROR')
    //   })
    // }
    /* async initialize()
   {
       console.log('map called')
       var mapOptions = {
       center: new google.maps.LatLng('23.11', '71.00'),
       zoom: 2,
       scrollwheel: false,
       disableDefaultUI: false,
       mapTypeId: google.maps.MapTypeId.ROADMAP
    };
   
     this.map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
      this.addMarker()
     
    } */
    DashboardComponent.prototype.addMarker = function () {
        this.markerArr.forEach(function (marker) {
            marker.setMap(null);
        });
        this.markerArr = [];
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        if (this.locations.length != 0) {
            for (i = 0; i < this.locations.length; i++) {
                // console.log("LOCATION==>>", this.locations[i])
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(this.locations[i].location.coordinates[1], this.locations[i].location.coordinates[0]),
                    map: this.map
                });
                this.markerArr.push(marker);
                // let self = this;
                // google.maps.event.addListener(marker, 'click', (function(marker, i) {
                //   return function() {
                //     // console.log('LOCATION-->', self.locations)
                //     infowindow.setContent(self.locations[i].email);
                //     infowindow.open(this.map, marker);
                //   }
                // })(marker, i));
            }
        }
    };
    DashboardComponent.prototype.initialize1 = function () {
        console.log(this.locations);
        this.map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: 2,
            center: new google.maps.LatLng(23.11, 71.00),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.addMarker();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/Components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProviderService"], _Services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/forgot-password/forgot-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Components/forgot-password/forgot-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <div class=\"container-common\">\n     <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"d-flex align-items-center minheight70vh\">\n        <form class=\"login_box_outer w-100\" action=\"forgot-password-validation.html\">\n          <div class=\"login-box max-WT-520\">\n              <div class=\"login-right-block\">\n                <div class=\"login-heading\">\n                   <h4>FORGOT PASSWORD</h4>\n                </div>\n                <form [formGroup]='forgetForm'>\n                <div class=\"login-box-body\">\n                  <p class=\"common-paragrph text-center\">Please enter your registered email address so that we can send you reset instruction</p>\n                  <div class=\"form-group\">\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" formControlName='email' id='email'  maxlength=\"30\"/>\n                      <div class=\"errMsg\" *ngIf=\"forgetForm.get('email').dirty && forgetForm.get('email').invalid\"> \n                          <span  [ngClass]=\"{error:forgetForm.get('email').hasError('required')}\" *ngIf=\"forgetForm.get('email').hasError('required')\">*Please enter email.</span>\n                          <span  [ngClass]=\"{error:forgetForm.get('email').hasError('pattern')}\" *ngIf=\"forgetForm.get('email').hasError('pattern')\">*Please enter valid email.</span>\n                        </div>\n                    </div>\n                  </div>\n                    <div class=\"text-center mt40\">\n                      <button type=\"submit\" class=\"btn btn-login btn-large  width100 font-100\" (click)=\"submit()\" [disabled]='forgetForm.invalid' >SUBMIT</button>\n                    </div>\n                  </form>\n              </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n<footer class=\"before-login\">\n  <p>Copyright © 2018 BMCT  All rights reserved.</p>\n</footer>"

/***/ }),

/***/ "./src/app/Components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, service) {
        this.router = router;
        this.service = service;
        this.forgetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)])
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.service.spinnerShow();
        var forgotData = {
            "email": this.forgetForm.value.email
        };
        this.service.postApi('forgotPassword', forgotData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.router.navigate(['/login']);
                _this.service.success(response['responseMessage']);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong');
        });
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/Components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/Components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <div class=\"container-common\">\n     <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"d-flex align-items-center minheight70vh\">\n        <form class=\"login_box_outer w-100\" action=\"login-validation.html\">\n          <div class=\"login-box max-WT-520\">\n              <div class=\"login-right-block\">\n                <div class=\"login-heading\">\n                   <h4>LOGIN</h4>\n                </div> \n                <form [formGroup]='loginForm'>\n                <div class=\"login-box-body\">\n                  <div class=\"form-group\" >\n                      <input type=\"email\" class=\"form-control\" placeholder=\"Email*\" formControlName='email' maxlength=\"64\" id='email' />\n                      <div class=\"errMsg\" *ngIf=\"loginForm.get('email').dirty && loginForm.get('email').invalid\"> \n                          <span [ngClass]=\"{error:loginForm.get('email').hasError('required')}\" *ngIf=\"loginForm.get('email').hasError('required')\">*Please enter email.</span>\n                          <span  [ngClass]=\"{error:loginForm.get('email').hasError('pattern')}\" *ngIf=\"loginForm.get('email').hasError('pattern')\">*Please enter valid email.</span>\n                      </div>\n                    </div>\n                    <div class=\"form-group\" >\n                      <input type=\"password\" class=\"form-control \" placeholder=\"Password*\"  formControlName='password' maxlength=\"16\"   id='password'/>\n                      <div class=\"errMsg\" *ngIf=\"loginForm.get('password').dirty && loginForm.get('password').invalid\"> \n                          <span  [ngClass]=\"{error:loginForm.get('password').hasError('required')}\" *ngIf=\"loginForm.get('password').hasError('required')\">*Please enter the password.</span>\n                          <span  [ngClass]=\"{error:loginForm.get('password').hasError('pattern')}\" *ngIf=\"loginForm.get('password').hasError('pattern')\">*Please enter valid password.</span>\n                          <span  [ngClass]=\"{error:loginForm.get('password').hasError('minlength')}\" *ngIf=\"loginForm.get('password').hasError('minlength')\">*Password must be of minimum 8 characters.</span>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-6\">\n                          <div class=\"remember-text \">\n                            <label class=\"checkbox-design\">\n                              <input type=\"checkbox\"  formControlName='remember'/><span></span>Remember me\n                            </label>\n                          </div>\n                        </div>\n                       <!--  <div class=\"text-right\">\n                           <a href=\"forgot-password.html\" class=\"forget-pass\">Forgot Password?</a>\n                        </div> -->\n                        <div class=\"col-6\">\n                          <div class=\"forgot-links\">\n                            <a [routerLink]=\"['/forgot-password']\">Forgot Password?</a>\n                          </div>\n                        </div>\n                    </div>\n                  </div>\n                </form>\n                    <div class=\"text-center mt40\">\n                      <button  type='submit' class=\"btn btn-login btn-large  width100 font-100\" (click)='login()' [disabled]='loginForm.invalid' >LOGIN</button>\n                    </div>\n              </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n<footer class=\"before-login\">\n  <p>Copyright © 2018 BMCT  All rights reserved.</p>\n</footer>"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, cookieService) {
        this.router = router;
        this.service = service;
        this.cookieService = cookieService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        $(function () {
            $('#email, #password').on('keypress', function (e) {
                if (e.which == 32)
                    return false;
            });
        });
        this.loginForm.patchValue({
            email: this.cookieService.get('email'),
            password: this.cookieService.get('password'),
            remember: this.cookieService.check('remember')
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.clear();
        this.service.spinnerShow();
        console.log('email-->' + this.loginForm.value.email + ', pass -->' + this.loginForm.value.password);
        console.log('LOGIN CLICKED');
        var loginData = {
            "email": this.loginForm.value.email,
            "password": this.loginForm.value.password
        };
        this.service.postApi('login', loginData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                localStorage.token = JSON.stringify({ token: response.token, result: response.result });
                _this.service.success('Successfully login');
                _this.router.navigate(['/dashboard']);
                if (_this.loginForm.controls['remember'].value == true) {
                    _this.cookieService.set('email', _this.loginForm.controls['email'].value);
                    _this.cookieService.set('password', _this.loginForm.controls['password'].value);
                    _this.cookieService.set('remember', _this.loginForm.controls['remember'].value);
                }
                else {
                    _this.cookieService.delete('email');
                    _this.cookieService.delete('password');
                    _this.cookieService.delete('remember');
                }
                console.log('API MSG CODE 200');
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                _this.service.error(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
        // this.router.navigate(['/dashboard'])
        // this.service.success('login successful')
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/merchant-edit/merchant-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/merchant-edit/merchant-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/merchant-edit/merchant-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/merchant-edit/merchant-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Merchant Management</h1>\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <form class=\"login_box_outer\" [formGroup]='merchantForm'>\n            <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n            <div class=\"main-block-innner mb40 mt40\">\n                <div class=\"add-store-block input-style\">\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-12\">\n                            <label>First Name </label>\n                            <div>\n                                <input type=\"text\" class=\"form-control\"  formControlName='fname' >\n                            </div>\n                       </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label>Last Name </label>\n                        <div>\n                            <input type=\"text\" class=\"form-control \" formControlName='lname' >\n                        </div>\n                      </div>  \n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label>Email </label>\n                        <div>\n                            <input type=\"email\" class=\"form-control \" formControlName='email' >\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label>Password </label>\n                        <div>\n                            <input type=\"text\" class=\"form-control \" formControlName='password' >\n                        </div>\n                      </div>  \n                    </div>\n                    <div class=\"form-group\">\n                       <label>Phone No. </label>\n                        <div class=\"row\">\n                          <div class=\"col-md-4\">\n                             <select class=\"form-control select2\" formControlName='prefix' >\n                                <option *ngFor=\"let country of codeArray\" [value]=\"country.code\">{{country.code}} ( {{country.country}} )</option> \n                             </select>\n                          </div> \n                          <div class=\"col-md-8\">\n                              <input type=\"text\" class=\"form-control \" formControlName='phoneNum' >\n                          </div> \n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                       <label>Address</label>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                             <select class=\"form-control select2\" formControlName='country' (change)='countryChange(merchantForm.value.country)'>\n                                    <option *ngFor=\"let country of countryArray\" [value]=\"country.country\">{{country.country}}</option> \n                             </select>\n                          </div> \n                          <div class=\"col-md-6 mt10\">\n                             <select class=\"form-control select2\" formControlName='state'>\n                                    <option *ngFor=\"let state of stateArray\" [value]=\"state\">{{state}}</option> \n                             </select>\n                          </div> \n                          <div class=\"col-md-6 mt10\">\n                              <input type=\"text\" class=\"form-control \" formControlName='addLine1' >\n                          </div>\n                     \n                        </div>\n                    </div>\n                     <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                        <label>Merchant Website </label>\n                        <div>\n                            <input type=\"text\" class=\"form-control \" formControlName='website' >\n                        </div>\n                      </div>  \n                    </div>\n                    <label class=\"col-md-5\">Merchant Logo :</label>\n                          <div class=\"col-md-7\">\n                              <div class=\"user-profile \">\n                                 <div class=\"image-box mb0\">\n                                     <img [src]=\"imageUrl\" class=\"profile-pic\"> \n                                      <label class=\"upload-label\">\n                                       <input type=\"file\" name=\"\" formControlName='image' (change)='fileSelect($event)' accept=\"image/jpeg,image/jpg,image/png,image/ico\">\n                                        <i class=\"fas fa-camera\"></i>\n                                        <div class=\"errMsg\" *ngIf=\"merchantForm.get('image').dirty && merchantForm.get('image').invalid\"> \n                                                <span  [ngClass]=\"{error:merchantForm.get('image').hasError('required')}\" *ngIf=\"merchantForm.get('image').hasError('required')\">*Please select banner image.</span>\n                                        </div>\n                                    </label>\n                                </div>\n                              </div>\n                          </div>\n                    \n                    \n                    <div class=\"text-center mt40\">\n                      <a (click)='back()' class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5\">Back</a>\n                        <button (click)='save()' class=\"btn btn-large  max-WT-200 font-100 btn-green\" [disabled]='merchantForm.invalid'>Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </form>\n    </div>\n</main>\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/merchant-edit/merchant-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/merchant-edit/merchant-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: MerchantEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantEditComponent", function() { return MerchantEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MerchantEditComponent = /** @class */ (function () {
    function MerchantEditComponent(service, router) {
        this.service = service;
        this.router = router;
        this.imageUrl = 'assets/img/profile-img.jpg';
        this.codeArray = [];
        this.stateArray = [];
        this.countryArray = [];
        this.merchantForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            addLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    MerchantEditComponent.prototype.ngOnInit = function () {
        if (this.service.pageIs == 'addMerchant') {
        }
        else {
            this.service.spinnerShow();
            this.viewMerchant();
        }
        this.getCountryCodesList();
    };
    MerchantEditComponent.prototype.getCountryCodesList = function () {
        var _this = this;
        this.service.getCountryCodeJson().subscribe(function (response) {
            _this.codeArray = response['countries'];
            _this.countryArray = response['countries'];
        }, function (error) {
            console.log("Error is " + JSON.stringify(error));
        });
    };
    MerchantEditComponent.prototype.viewMerchant = function () {
        var _this = this;
        var view = {
            "merchant_id": localStorage.merchantId
        };
        this.service.callPost('merchantProfile', view).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.profile = response['result'];
                _this.merchantForm.patchValue({
                    fname: _this.profile.fName,
                    lname: _this.profile.lName,
                    email: _this.profile.email_ID,
                    phoneNum: _this.profile.phoneNumber,
                    password: _this.profile.password,
                    website: _this.profile.merchantWebsite,
                    state: _this.profile.location.state,
                    country: _this.profile.location.country,
                    addLine1: _this.profile.location.addLine1
                });
                _this.imageUrl = _this.profile.logo;
                console.log('PROFILE IS--->>>', _this.profile);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('ERROR');
        });
    };
    MerchantEditComponent.prototype.save = function () {
        var _this = this;
        this.service.clear();
        this.service.spinnerShow();
        var profileDetails = {
            merchant_id: localStorage.merchantId,
            fName: this.merchantForm.value.fname,
            lName: this.merchantForm.value.lname,
            email_ID: this.merchantForm.value.email,
            phoneNumber: this.merchantForm.value.phoneNum,
            password: this.merchantForm.value.password,
            location: {
                state: this.merchantForm.value.state,
                country: this.merchantForm.value.country,
                addLine1: this.merchantForm.value.addLine1
            },
            merchantWebsite: this.merchantForm.value.website,
            logo: this.imageUrl
        };
        console.log('TO SEND-->', profileDetails);
        this.service.callPost('editMerchant', profileDetails).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                console.log('');
                _this.router.navigate(['/merchant-management']);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantEditComponent.prototype.back = function () {
        this.router.navigate(['/merchant-management']);
    };
    MerchantEditComponent.prototype.countryChange = function (e) {
        console.log('event is--> e', (e));
        var indx = this.countryArray.findIndex(function (x) { return x.country == e; });
        if (indx > 0) {
            this.stateArray = this.codeArray[indx].states;
            console.log(this.stateArray);
        }
    };
    MerchantEditComponent.prototype.fileSelect = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var fileType = event.target.files[0].type;
            if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg' || fileType === 'image/ico') {
                this.image = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.imageUrl = e.target['result'];
                    _this.image = e.target['result'];
                    console.log('IMAGE--->', _this.image);
                    console.log('IMAGE URL--->', _this.imageUrl);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                this.image = '';
                //this.imageUrl = '';
                self.imageUrl = 'assets/img/profile-img.jpg';
                this.imageUrl = 'assets/img/profile-img.jpg';
                this.service.error('Please select image file only !');
            }
        }
    };
    MerchantEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchant-edit',
            template: __webpack_require__(/*! ./merchant-edit.component.html */ "./src/app/Components/merchant-edit/merchant-edit.component.html"),
            styles: [__webpack_require__(/*! ./merchant-edit.component.css */ "./src/app/Components/merchant-edit/merchant-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MerchantEditComponent);
    return MerchantEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/merchant-form/merchant-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/merchant-form/merchant-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-container {\n    text-align: center; \n    width: 100%;\n}\n\n.google-place-input {\n    width: 50%;\n    min-width: 280px;\n    height: 2rem; \n    font-size: 1rem; \n    padding: 0.5rem;\n}"

/***/ }),

/***/ "./src/app/Components/merchant-form/merchant-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/merchant-form/merchant-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Merchant Management</h1>\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <form class=\"login_box_outer\" [formGroup]='merchantForm'>\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n          <div class=\"main-block-innner mb40 mt40\">\n              <div class=\"add-store-block input-style\">\n                  <div class=\"form-group row\">\n                      <div class=\"col-md-12\">\n                          <label>First Name </label>\n                          <div>\n                              <input type=\"text\" class=\"form-control\"  formControlName='fname'  placeholder=\"First Name\" maxlength=\"20\" id='fname'>\n                              <div class=\"errMsg\" *ngIf=\"merchantForm.get('fname').dirty && merchantForm.get('fname').invalid\"> \n                                    <span style='color:red'  *ngIf=\"merchantForm.get('fname').hasError('required')\">*Please enter first name.</span>\n                                    <span style='color:red'  *ngIf=\"merchantForm.get('fname').hasError('pattern')\">*Please enter valid first name.</span>\n                              </div>\n                          </div>\n                     </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <div class=\"col-md-12\">\n                      <label>Last Name </label>\n                      <div>\n                          <input type=\"text\" class=\"form-control \" formControlName='lname'  placeholder=\"Last Name\"  maxlength=\"20\"  id='lname'>\n                          <div class=\"errMsg\" *ngIf=\"merchantForm.get('lname').dirty && merchantForm.get('lname').invalid\"> \n                                <span style='color:red'  *ngIf=\"merchantForm.get('lname').hasError('required')\">*Please enter last name.</span>\n                                <span style='color:red'  *ngIf=\"merchantForm.get('lname').hasError('pattern')\">*Please enter valid last name.</span>\n                              </div>\n                      </div>\n                    </div>  \n                  </div>\n                  <div class=\"form-group row\">\n                    <div class=\"col-md-12\">\n                      <label>Email </label>\n                      <div>\n                          <input type=\"email\" class=\"form-control \" formControlName='email'  placeholder=\"Email\"  maxlength=\"50\"  id='email'>\n                          <div class=\"errMsg\" *ngIf=\"merchantForm.get('email').dirty && merchantForm.get('email').invalid\"> \n                                <span style='color:red'  *ngIf=\"merchantForm.get('email').hasError('required')\">*Please enter email.</span>\n                                <span style='color:red'  *ngIf=\"merchantForm.get('email').hasError('pattern')\">*Please enter valid email.</span>\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <div class=\"col-md-12\">\n                      <label>Password </label>\n                      <div>\n                          <input type=\"password\" class=\"form-control \" formControlName='password'  placeholder=\"Password\"  maxlength=\"16\"  id='password'>\n                          <div class=\"errMsg\" *ngIf=\"merchantForm.controls['password'].dirty && merchantForm.controls['password'].invalid\">\n                                <span style='color:red'  *ngIf=\"merchantForm.controls['password'].hasError('required')\">*Please enter a password.</span>\n                                <span style='color:red'  *ngIf=\"merchantForm.controls['password'].hasError('minlength')\">*Password must be between 8 to 16 characters.</span>\n                                <span style='color:red'  *ngIf=\"merchantForm.controls['password'].hasError('pattern') && !merchantForm.controls['password'].hasError('minlength')\">*Please enter valid password.</span>\n                              </div>\n                      </div>\n                    </div>  \n                  </div>\n                  <div class=\"form-group\">\n                     <label>Phone No. </label>\n                      <div class=\"row\">\n                        <div class=\"col-md-5\">\n                           <select class=\"form-control select2\" formControlName='prefix' >\n                               <option value=''>select country code</option>\n                              <option *ngFor=\"let country of codeArray\" [value]=\"country.code\">{{country.code}} ( {{country.country}} )</option> \n                           </select>\n                        </div> \n                        <div class=\"col-md-7\">\n                            <input type=\"text\" class=\"form-control \" formControlName='phoneNum'  placeholder=\"Phone Number\" maxlength=\"12\">\n                            <div class=\"errMsg\" *ngIf=\"merchantForm.controls['phoneNum'].dirty && merchantForm.controls['phoneNum'].invalid\">\n                            <span style='color:red'  *ngIf=\"merchantForm.controls['phoneNum'].hasError('required')\">*Please enter a phone number.</span>\n                            <span style='color:red'  *ngIf=\"merchantForm.controls['phoneNum'].hasError('minlength')\">*Phone number must be between 10 to 12 digits long.</span>\n                            <span style='color:red'  *ngIf=\"merchantForm.controls['phoneNum'].hasError('pattern') && !merchantForm.controls['phoneNum'].hasError('minlength')\">*Please enter valid phone number.</span>\n                            </div>\n                            \n                        </div> \n                      </div>\n                  </div>\n                  <div class=\"form-group row\">\n                        <div class=\"col-md-12\">\n                     <label>Address</label>\n                     \n                          <div class=\"input-container d-flex justify-content-start mb10\">\n                                <input  type=\"text\" class=\"google-place-input form-control w-100 d-inline-block\" google-place (onSelect)=\"setAddress($event)\" placeholder=\"Type to search..\" id='location'>                              \n                                <!-- <button (click)='getLocation()' class=\"btn  btn-theme mL8\">Set Address</button> -->\n                            </div>\n                         \n                        <!-- <div class=\"col-md-12 pL0\"> -->\n                           <!-- <input class=\"form-control select2\" formControlName='country'  placeholder=\"Country\"  maxlength=\"40\"> -->\n                           <!-- <select class=\"form-control select2\" formControlName='country' (change)=\"onSelectCountry()\">\n                                <option value=''>Select Country</option>\n                               <option *ngFor=\"let country of codeArray\" [value]=\"country.country\"> {{country.country}} </option> \n                            </select>\n                           <div class=\"errMsg\" *ngIf=\"merchantForm.get('country').dirty && merchantForm.get('country').invalid\"> \n                                <span style='color:red'  *ngIf=\"merchantForm.get('country').hasError('required')\">*Please enter country.</span> -->\n                                <!-- <span style='color:red'  *ngIf=\"merchantForm.get('country').hasError('pattern')\">*Please enter valid country.</span> -->\n                          <!-- </div>                                \n                        </div>  -->\n                        <!-- <div class=\"col-md-6 mt10 pL0\"> -->\n                           <!-- <input class=\"form-control select2\" formControlName='state'  placeholder=\"State\"  maxlength=\"40\"> -->\n                           <!-- <select class=\"form-control select2\" formControlName='state' >\n                                <option value=''>Select State</option>\n                               <option *ngFor=\"let state of statesArr\" [value]=\"state\"> {{state}} </option> \n                            </select>\n                           <div class=\"errMsg\" *ngIf=\"merchantForm.get('state').dirty && merchantForm.get('state').invalid\"> \n                                <span style='color:red'  *ngIf=\"merchantForm.get('state').hasError('required')\">*Please enter state.</span> -->\n                                <!-- <span style='color:red'  *ngIf=\"merchantForm.get('state').hasError('pattern')\">*Please enter valid state.</span> -->\n                          <!-- </div>\n                                \n                        </div>  -->\n                        <!-- <div class=\"col-md-6 mt10 pL0\">\n                            <input type=\"text\" class=\"form-control \" formControlName='addLine1' placeholder=\"Locality\"  maxlength=\"40\">\n                        </div>\n                        <div class=\"col-md-6 mt10 pL0\">\n                            <input type=\"text\" class=\"form-control \" formControlName='pin' placeholder=\"Pin\"  maxlength=\"7\">\n                            <div class=\"errMsg\" *ngIf=\"merchantForm.get('pin').dirty && merchantForm.get('pin').invalid\"> \n                                  <span style='color:red'  *ngIf=\"merchantForm.get('pin').hasError('required')\">*Please enter pin.</span>\n                                  <span style='color:red'  *ngIf=\"merchantForm.get('pin').hasError('pattern')\">*Please enter valid pin.</span>\n                              </div>\n                        </div> -->\n                   \n                      </div>\n                  </div>\n                   <div class=\"form-group row\">\n                    <div class=\"col-md-12\">\n                      <label>Merchant Website </label>\n                      <div>\n                          <input type=\"text\" class=\"form-control \" formControlName='website'   placeholder=\"Website URL\"  maxlength=\"60\"  id='website'>\n                          <div class=\"errMsg\" *ngIf=\"merchantForm.get('website').dirty && merchantForm.get('website').invalid\"> \n                                <span style='color:red'  *ngIf=\"merchantForm.get('website').hasError('required')\">*Please enter website.</span>\n                                <span style='color:red'  *ngIf=\"merchantForm.get('website').hasError('pattern')\">*Please enter valid website.</span>\n                          </div>\n                      </div>\n                    </div>  \n                  </div>\n                  <label class=\"col-md-5\">Merchant Logo :</label>\n                        <div class=\"col-md-7\">\n                            <div class=\"user-profile \">\n                               <div class=\"image-box mb0\">\n                                   <img src=\"{{imageUrl || 'assets/img/placeholder.png' }}\" class=\"profile-pic\"> \n                                    <label class=\"upload-label\">\n                                     <input type=\"file\" name=\"\" (change)='fileSelect($event)' accept=\"image/jpeg,image/jpg,image/png,image/ico\">\n                                      <i class=\"fas fa-camera\"></i>\n                                      <!-- <div class=\"errMsg\" *ngIf=\"merchantForm.get('image').dirty && merchantForm.get('image').invalid\"> \n                                              <span  [ngClass]=\"{error:merchantForm.get('image').hasError('required')}\" *ngIf=\"merchantForm.get('image').hasError('required')\">*Please select banner image.</span>\n                                      </div> -->\n                                  </label>\n                              </div>\n                            </div>\n                        </div>\n                  \n                  \n                  <div class=\"text-center mt40\">\n                    <a (click)='back()' class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5\">Back</a>\n                      <button (click)='save()' class=\"btn btn-large  max-WT-200 font-100 btn-green\" [disabled]='merchantForm.invalid' type='button'>Save</button>\n                  </div>\n              </div>\n          </div>\n      </div>\n      </form>\n  </div>\n</main>\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/merchant-form/merchant-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/merchant-form/merchant-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: MerchantFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantFormComponent", function() { return MerchantFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/socket.service */ "./src/app/Services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MerchantFormComponent = /** @class */ (function () {
    function MerchantFormComponent(service, router, zone, scoket) {
        this.service = service;
        this.router = router;
        this.zone = zone;
        this.scoket = scoket;
        this.imageUrl = '';
        this.codeArray = [];
        this.title = 'Places';
        this.statesArr = [];
        this.merchantForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z]{2,20}$/)]),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]{2,20}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phoneNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9][0-9][0-9]{8}$/)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            addLine1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(www|http:|https:)+[^\s]+[\w]/i)]),
            pin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        $("#fname, #lname").on("keypress", function (e) {
            if (e.which === 32 && !this.value.length)
                e.preventDefault();
        });
        $('#email, #password, #phoneNum, #pin, #website').on('keypress', function (e) {
            if (e.which == 32)
                return false;
        });
    }
    MerchantFormComponent.prototype.setAddress = function (addrObj) {
        var _this = this;
        console.log('ADDRESS OBJECT--->', addrObj);
        this.zone.run(function () {
            _this.addr = addrObj;
            _this.addrKeys = Object.keys(addrObj);
        });
    };
    MerchantFormComponent.prototype.ngOnInit = function () {
        if (localStorage.merchantId) {
            this.service.spinnerShow();
            this.viewMerchant();
        }
        // this.viewMerchant()
        this.getCountryCodesList();
    };
    MerchantFormComponent.prototype.getCountryCodesList = function () {
        var _this = this;
        this.service.getCountryCodeJson().subscribe(function (response) {
            _this.codeArray = response['countries'];
        }, function (error) {
            console.log("Error is " + JSON.stringify(error));
        });
    };
    MerchantFormComponent.prototype.viewMerchant = function () {
        var _this = this;
        var view = {
            "merchant_id": localStorage.merchantId
        };
        this.service.callPost('merchantProfile', view).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.profile = response['result'];
                _this.merchantForm.patchValue({
                    fname: _this.profile.fName,
                    lname: _this.profile.lName,
                    email: _this.profile.email_ID,
                    phoneNum: _this.profile.phoneNumber,
                    password: _this.profile.password,
                    website: _this.profile.merchantWebsite,
                    state: _this.profile.location.state,
                    country: _this.profile.location.country,
                    addLine1: _this.profile.location.addLine1,
                    pin: _this.profile.location.zipCode
                });
                _this.imageUrl = _this.profile.logo;
                console.log('PROFILE IS--->>>', _this.profile);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantFormComponent.prototype.save = function () {
        var _this = this;
        this.service.spinnerShow();
        this.service.clear();
        if (this.service.pageIs == 'addMerchant') {
            var profileDetails = {
                fName: this.merchantForm.value.fname,
                lName: this.merchantForm.value.lname,
                email_ID: this.merchantForm.value.email,
                phoneNumber: this.merchantForm.value.phoneNum,
                password: this.merchantForm.value.password,
                location: { place: $('#location').val(),
                    state: this.addr['admin_area_l1'],
                    country: this.addr['country'],
                    addLine1: this.addr['route'],
                    coordinates: [this.addr['lng'], this.addr['lat']],
                    zipCode: this.addr['postal_code']
                },
                merchantWebsite: this.merchantForm.value.website,
                logo: this.imageUrl
            };
            console.log('TO SEND-->', profileDetails);
            this.service.callPost('addMerchantAdmin', profileDetails).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Merchant successfully added');
                    _this.scoket.refreshMessage('refreshed List');
                    _this.router.navigate(['/merchant-management']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 409) {
                    _this.service.error(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong');
            });
        }
        else {
            var profileDetails = {
                merchant_id: localStorage.merchantId,
                fName: this.merchantForm.value.fname,
                lName: this.merchantForm.value.lname,
                email_ID: this.merchantForm.value.email,
                phoneNumber: this.merchantForm.value.phoneNum,
                password: this.merchantForm.value.password,
                location: { place: $('#location').val(),
                    state: this.addr['admin_area_l1'],
                    country: this.addr['country'],
                    addLine1: this.addr['route'],
                    coordinates: [this.addr['lat'], this.addr['lng']],
                    zipCode: this.addr['postal_code']
                },
                merchantWebsite: this.merchantForm.value.website,
                logo: this.imageUrl
            };
            console.log('TO SEND-->', profileDetails);
            this.service.callPost('editMerchant', profileDetails).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Merchant successfully edited');
                    _this.router.navigate(['/merchant-management']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
    };
    MerchantFormComponent.prototype.back = function () {
        this.router.navigate(['/merchant-management']);
    };
    MerchantFormComponent.prototype.fileSelect = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var fileType = event.target.files[0].type;
            if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg' || fileType === 'image/ico') {
                this.image = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.imageUrl = e.target['result'];
                    _this.image = e.target['result'];
                    console.log('IMAGE--->', _this.image);
                    console.log('IMAGE URL--->', _this.imageUrl);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                // this.image = ''				
                //this.imageUrl = '';
                self.imageUrl = '';
                // this.imageUrl='assets/img/profile-img.jpg'	
                this.service.error('Please select image file only !');
            }
        }
    };
    MerchantFormComponent.prototype.getLocation = function () {
        console.log(this.addr);
        console.log('country', this.addr['country']);
        console.log('locality', this.addr['route']);
        console.log('state', this.addr['admin_area_l1']);
        console.log('city', this.addr['locality']);
        console.log('pin', this.addr['postal_code']);
        this.merchantForm.patchValue({
            state: this.addr['admin_area_l1'],
            country: this.addr['country'],
            addLine1: this.addr['route'],
            pin: this.addr['postal_code']
        });
    };
    MerchantFormComponent.prototype.onSelectCountry = function () {
        console.log('selected country => ' + this.merchantForm.controls['country'].value);
        var selectedCountry = this.merchantForm.controls['country'].value;
        this.statesArr = selectedCountry ? this.codeArray.filter(function (x) { return x.country == selectedCountry; })[0].states : [];
        console.log('selected country => ', this.merchantForm.value);
    };
    MerchantFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchant-form',
            template: __webpack_require__(/*! ./merchant-form.component.html */ "./src/app/Components/merchant-form/merchant-form.component.html"),
            styles: [__webpack_require__(/*! ./merchant-form.component.css */ "./src/app/Components/merchant-form/merchant-form.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _Services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], MerchantFormComponent);
    return MerchantFormComponent;
}());



/***/ }),

/***/ "./src/app/Components/merchant-management/merchant-management.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/merchant-management/merchant-management.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/merchant-management/merchant-management.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/merchant-management/merchant-management.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Merchant Management</h1>\n\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section dashboard-block\">\n    <div class=\"sec_head_new sec_head_new_after\">\n            <form [formGroup]='filterForm'>\n        <div class=\"row align-items-center\">\n            \n          <div class=\"col-md-6 col-xl-3\">\n              <div class=\"filter_search mb10\">\n                <div class=\"input-group filter_search_group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search..\" formControlName='search'>\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn_search_group\" type=\"button\" (click)='search()'><img src=\"assets/img/icon-search.png\" alt=\"Search\"></button>\n                    </div>\n                </div>\n             </div>\n          </div>\n          <div class=\"col-md-6 col-xl-2\">\n              <div class=\"text-left mb10\">\n                  <button type=\"submit\" class=\"btn  btn-theme\" (click)='search()'>Search</button>\n              </div>\n          </div>\n         \n      </div>\n    </form>\n    </div>\n     <div class=\"custom_tabs common-tabs\">\n         <div class=\"row mb20 justify-content-center\">\n            <div class=\"col-sm-6\">\n                <ul class=\"nav nav-tabs d-flex  justify-content-center text-center\">\n                    <li class=\"nav-item flex-fill\">\n                        <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#tab1\" (click)='getTab1()'>\n                         Current\n                        </a>\n                    </li>\n                    <li class=\"nav-item flex-fill\" >\n                        <a class=\"nav-link show\" data-toggle=\"tab\" href=\"#tab2\" (click)=\"getTab2()\">\n                         Pending\n                        </a>\n                    </li>\n                 </ul>\n            </div>\n          </div>\n         <div class=\"tab-content\">\n          <div class=\"mb10 mt20 show-txt\">\n              <span>Show </span>\n             \n              <select name=\"\" class=\"form-control form-control2 select_opt\" id='itemsPP' (change)='limitChange()'>\n                <option value=\"5\" selected=\"\">5</option>\n                <option value=\"10\">10</option>\n                <option value=\"15\">15</option>\n            </select>\n              <span> from all</span>\n            </div>\n             <div class=\"tab-pane active show\" id=\"tab1\">\n                    <div class=\"text-right mb20\">\n                            <a class=\"btn btn-primary\" (click)='addMerchant()' style=\"color: white; cursor: pointer;\">\n                               <i class=\"fa fa-plus\"></i> Add Merchant\n                            </a>\n                         </div>\n\n                <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                      <thead>\n                          <tr class=\"no_wrap_th\">\n                            <th>Merchant ID</th>\n                              <th>Merchant First Name</th>\n                              <th>Merchant Last Name</th>\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      \n                      <tbody>\n                          <tr *ngFor='let merchant of merchants | paginate: { itemsPerPage: itemPP, currentPage: currPage1, totalItems: pageSize1 } '>\n                              <td>{{merchant.merchantId}}</td>\n                              <td>{{merchant.fName}}</td>\n                              <td>{{merchant.lName}}</td>\n                              <td class=\"action_td_btn3\">\n                                    <a (click)='view(merchant)'><i class=\"fa fa-eye\"></i></a>\n                                     <a (click)='edit(merchant)'><i class=\"fa fa-edit\"></i></a>\n                                     <a (click)='ban(merchant)' ><i class=\"fa fa-ban\"></i></a>\n                                     <a (click)='delete(merchant)' ><i class=\"fa fa-trash\"></i></a>\n                                </td>\n                          </tr>\n                      </tbody>\n                  </table>\n                </div>\n                <div class=\"custom-pagination mt20 text-right\">\n                          <nav aria-label=\"Page navigation example\">\n                                <div class=\"pagination_block\" *ngIf=\"merchants.length \">\n                                        <ul class=\"pagination\">\n                                          <pagination-controls (pageChange)=\"changePage1($event)\"></pagination-controls>\n                                        </ul>\n                                </div>\n                          </nav>\n                      </div>\n             </div>\n             <div class=\"tab-pane\" id=\"tab2\" >\n                <div class=\"table-responsive\">\n                  <table class=\"table table-bordered\">\n                      <thead>\n                          <tr class=\"no_wrap_th\">\n                            <th>Merchant ID</th>\n                              <th>Merchant First Name</th>\n                              <th>Merchant Last Name</th>\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      \n                      <tbody>                        \n                          <tr *ngFor='let pending of pendingMerchants | paginate: { itemsPerPage: itemPP, currentPage: currPage2, totalItems: pageSize2 } '>\n                              <td>{{pending.merchantId}}</td>\n                              <td>{{pending.fName}}</td>\n                              <td>{{pending.lName}}</td>\n                              <td>\n                                  <button class=\"btn btn-info btn-sm\" (click)='approve(pending)' data-toggle=\"modal\" data-target=\"#payment\">Approve</button>\n                                  <button class=\"btn btn-info btn-sm\" (click)='notapprove(pending)' data-toggle=\"modal\" data-target=\"#delet_farms_modal\">Reject</button>\n                              </td>\n                          </tr>\n      \n                      </tbody>\n                  </table>\n               </div>\n               <div class=\"custom-pagination mt20 text-right\">\n                          <nav aria-label=\"Page navigation example\">\n                                <div class=\"pagination_block\" *ngIf=\"pendingMerchants.length \">\n                                        <ul class=\"pagination\">\n                                          <pagination-controls (pageChange)=\"changePage2($event)\"></pagination-controls>\n                                        </ul>\n                                </div>\n                          </nav>\n                </div>\n             </div>\n\n         </div>\n     </div>\n  \n  </div>\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n<div class=\"modal fade global-modal reset-modal\" id=\"block_modal\">\n        <div class=\"modal-dialog max-WT-500\">\n            <div class=\"modal-content\">\n                <div>\n                    <!-- Modal body -->\n                    <div class=\"modal-body  text-center\">\n                        <div class=\"row align-items-center modal_flax_height\">\n                            <div class=\"col\">\n                                <div class=\"box-title mb40 d-inline-block\">\n                                    <i class=\"fas fa-ban off-icon\"></i>\n                                    <p class=\"mt40\">Are you sure you want to block this merchant ?</p>\n                                </div>\n                                <div class=\"text-center\">\n                                    <a  style=\"color: white; cursor: pointer;\" class=\"btn btn-blue btn-noYes\" data-dismiss=\"modal\" >BACK</a>\n                                    <a  style=\"color: white; cursor: pointer;\" (click)='blockYes()' class=\"btn btn-red btn-noYes\" data-dismiss=\"modal\">YES</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal fade global-modal reset-modal\" id=\"delete_modal\">\n            <div class=\"modal-dialog max-WT-500\">\n                <div class=\"modal-content\">\n                    <div>\n                        <!-- Modal body -->\n                        <div class=\"modal-body  text-center\">\n                            <div class=\"row align-items-center modal_flax_height\">\n                                <div class=\"col\">\n                                    <div class=\"box-title mb40 d-inline-block\">\n                                        <i class=\"fas fa-trash off-icon\"></i>\n                                        <p class=\"mt40\">Are you sure you want to delete merchant ?</p>\n                                    </div>\n                                    <div class=\"text-center\">\n                                        <a data-dismiss=\"modal\" class=\"btn btn-blue btn-noYes\" style=\"color: white; cursor: pointer;\" >BACK</a>\n                                        <a (click)='deleteYes()' class=\"btn btn-red btn-noYes\" style=\"color: white; cursor: pointer;\">YES</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"modal fade global-modal reset-modal\" id=\"delet_farms_modal\">\n            <div class=\"modal-dialog max-WT-500\">\n                <div class=\"modal-content\">\n                    <div class=\"inner_border_area\">\n                        <!-- Modal body -->\n                        <div class=\"modal-body  text-center\">\n                            <div class=\"row align-items-center modal_flax_height\">\n                                <div class=\"col\">\n                                    <div class=\"box-title mb40 d-inline-block\">\n                                        <h2>Are you sure?</h2>\n                                        <p>You won’t be able to revert this!</p>\n                                    </div>\n                                    <div class=\"max-WT-300 d-inline-block\">\n                                        <button type=\"button\" class=\"btn btn-gray btn-large radius0 btn-block\" (click)='reject()'>YES</button>\n                                        <button type=\"button\" class=\"btn btn-red btn-large radius0 btn-block\" data-dismiss=\"modal\">CANCEL</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/Components/merchant-management/merchant-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/merchant-management/merchant-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MerchantManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantManagementComponent", function() { return MerchantManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _Services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/socket.service */ "./src/app/Services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MerchantManagementComponent = /** @class */ (function () {
    function MerchantManagementComponent(router, service, socket) {
        this.router = router;
        this.service = service;
        this.socket = socket;
        this.currPage1 = 1;
        this.currPage2 = 1;
        this.merchants = [];
        this.pendingMerchants = [];
        this.pageSize1 = 0;
        this.pageSize2 = 0;
        this.itemPP = 5;
        this.cuuTab = 'tab1';
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    MerchantManagementComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('merchantId');
        this.service.spinnerShow();
        this.tab1();
    };
    MerchantManagementComponent.prototype.getTab1 = function () {
        this.cuuTab = 'tab1';
        this.currPage1 = 1;
        this.tab1();
    };
    MerchantManagementComponent.prototype.getTab2 = function () {
        this.cuuTab = 'tab2';
        this.currPage2 = 1;
        this.tab2();
    };
    MerchantManagementComponent.prototype.tab1 = function () {
        var _this = this;
        var merchantListData = {
            page: this.currPage1,
            limit: parseInt($('#itemsPP').val())
        };
        console.log(merchantListData);
        this.service.callPost('merchantView', merchantListData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('CHAL GYA');
            if (response['responseCode'] == 200) {
                _this.merchants = response['result'].docs;
                _this.pageSize1 = response['result'].total;
                console.log('page size os tab 1', _this.pageSize1);
                console.log('current page-->', _this.currPage1);
                console.log("API res tab1", response['result']);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantManagementComponent.prototype.view = function (e) {
        console.log(e._id);
        localStorage.merchantId = e._id;
        this.router.navigate(['/merchant-view']);
    };
    MerchantManagementComponent.prototype.edit = function (e) {
        localStorage.merchantId = e._id;
        this.router.navigate(['/merchant-form']);
    };
    MerchantManagementComponent.prototype.search = function () {
        var _this = this;
        var filterMerchantData;
        if (this.cuuTab == 'tab1') {
            filterMerchantData = {
                search: this.filterForm.value.search,
                status: "ACTIVE",
                limit: parseInt($('#itemsPP').val()),
                page: 1
            };
            this.service.callPost('filterMerchant', filterMerchantData).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.merchants = response['result'].docs;
                    _this.pageSize1 = response['result'].total;
                    console.log('page size os tab 1', _this.pageSize1);
                    console.log('current page-->', _this.currPage1);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
        else {
            filterMerchantData = {
                search: this.filterForm.value.search,
                status: "INACTIVE",
                limit: parseInt($('#itemsPP').val()),
                page: 1
            };
            this.service.callPost('filterMerchant', filterMerchantData).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.pendingMerchants = response['result'].docs;
                    _this.pageSize2 = response['result'].total;
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
    };
    MerchantManagementComponent.prototype.delete = function (e) {
        localStorage.merchantId = e._id;
        $('#delete_modal').modal('show');
    };
    MerchantManagementComponent.prototype.ban = function (e) {
        localStorage.merchantId = e._id;
        $('#block_modal').modal('show');
    };
    MerchantManagementComponent.prototype.deleteYes = function () {
        var _this = this;
        this.service.spinnerShow();
        var merchantDData = {
            _id: localStorage.merchantId
        };
        this.service.callPost('deleteMerchant', merchantDData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('merchant pending api run');
            if (response['responseCode'] == 200) {
                _this.service.success('Merchant Deleted');
                _this.socket.refreshMessage('refreshed List');
                _this.socket
                    .getRefresh()
                    .subscribe(function (message) {
                    console.log("Respone of socket is " + JSON.stringify(message));
                });
                $('#delete_modal').modal('hide');
                setTimeout(function () { _this.tab1(); }, 1000);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantManagementComponent.prototype.blockYes = function () {
        var _this = this;
        this.service.spinnerShow();
        var banData = {
            _id: localStorage.merchantId
        };
        this.service.callPost('blockMerchant', banData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                console.log("response ", response);
                _this.service.success('Merchant Blocked');
                _this.socket
                    .getRefresh()
                    .subscribe(function (message) {
                    console.log("Respone of socket is " + JSON.stringify(message));
                });
                setTimeout(function () { _this.tab1(); }, 1000);
                $('#block_modal').modal('hide');
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            $('#block_modal').modal('hide');
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantManagementComponent.prototype.tab2 = function () {
        var _this = this;
        this.service.spinnerShow();
        var merchantPendingListData = {
            page: this.currPage2,
            limit: parseInt($('#itemsPP').val())
        };
        this.service.callPost('merchantPending', merchantPendingListData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('merchant pending api run');
            if (response['responseCode'] == 200) {
                _this.pendingMerchants = response['result'].docs;
                _this.pageSize2 = response['result'].total;
                console.log('2 TOTAL PAGE-->', _this.pageSize2);
                console.log("API MSG CODE", _this.pendingMerchants);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantManagementComponent.prototype.changePage1 = function (p) {
        this.currPage1 = p;
        this.tab1();
    };
    MerchantManagementComponent.prototype.changePage2 = function (p) {
        this.currPage2 = p;
        this.tab2();
    };
    MerchantManagementComponent.prototype.limitChange = function () {
        this.itemPP = parseInt($('#itemsPP').val());
        this.getTab1();
        this.getTab2();
    };
    MerchantManagementComponent.prototype.approve = function (pending) {
        var _this = this;
        this.service.spinnerShow();
        localStorage.merchantId = pending._id;
        var merchantAData = {
            _id: localStorage.merchantId
        };
        this.service.callPost('activeStatus', merchantAData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('merchant pending api run');
            if (response['responseCode'] == 200) {
                _this.socket.refreshMessage('refreshed List');
                _this.socket
                    .getRefresh()
                    .subscribe(function (message) {
                    console.log("Respone of socket is " + JSON.stringify(message));
                });
                _this.service.success('Request Approved');
                _this.tab2();
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantManagementComponent.prototype.reject = function () {
        var _this = this;
        this.service.spinnerShow();
        var merchantDData = {
            _id: localStorage.merchantId
        };
        this.service.callPost('deleteMerchant', merchantDData).subscribe(function (response) {
            _this.service.spinnerHide();
            console.log('merchant pending api run');
            if (response['responseCode'] == 200) {
                _this.service.success('Request Deleted');
                _this.socket
                    .getRefresh()
                    .subscribe(function (message) {
                    console.log("Respone of socket is " + JSON.stringify(message));
                });
                $('#delet_farms_modal').modal('hide');
                _this.tab2();
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantManagementComponent.prototype.notapprove = function (e) {
        localStorage.merchantId = e._id;
    };
    MerchantManagementComponent.prototype.addMerchant = function () {
        this.service.pageIs = 'addMerchant';
        this.router.navigate(['/merchant-form']);
    };
    MerchantManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchant-management',
            template: __webpack_require__(/*! ./merchant-management.component.html */ "./src/app/Components/merchant-management/merchant-management.component.html"),
            styles: [__webpack_require__(/*! ./merchant-management.component.css */ "./src/app/Components/merchant-management/merchant-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"], _Services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], MerchantManagementComponent);
    return MerchantManagementComponent;
}());



/***/ }),

/***/ "./src/app/Components/merchant-view/merchant-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/merchant-view/merchant-view.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/merchant-view/merchant-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/merchant-view/merchant-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Merchant Management</h1>\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <form class=\"login_box_outer\" >\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n            <div class=\"main-block-innner mb40 mt40\">\n                <div class=\"add-store-block input-style\">\n               \n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">First Name :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.fName}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Last Name :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.lName}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\" *ngIf='profile?.email_ID'>\n                        <label class=\"col-md-6\">Email :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.email_ID}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Phone No :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.phoneNumber}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Address :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.location.place}}</label>\n                        </div>\n                    </div>\n                    <!-- <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Zip :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.location.zidCode}}</label>\n                        </div>\n                    </div> -->\n                    <div class=\"form-group row align-items-baseline\" *ngIf='profile?.merchantWebsite'>\n                        <label class=\"col-md-6\">Merchant Website :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.merchantWebsite}}</label>\n                        </div>\n                    </div>\n                    <div class=\"text-center mt40\">\n                       \n                        <a (click)='back()' class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5\">Back</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </form>\n    </div>\n</main>\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/merchant-view/merchant-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/merchant-view/merchant-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: MerchantViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantViewComponent", function() { return MerchantViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MerchantViewComponent = /** @class */ (function () {
    function MerchantViewComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    MerchantViewComponent.prototype.ngOnInit = function () {
        this.service.spinnerShow();
        this.viewMerchant();
    };
    MerchantViewComponent.prototype.back = function () {
        this.router.navigate(['/merchant-management']);
    };
    MerchantViewComponent.prototype.viewMerchant = function () {
        var _this = this;
        var view = {
            "merchant_id": localStorage.merchantId
        };
        this.service.callPost('merchantProfile', view).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.profile = response['result'];
                console.log('PROFILE IS--->>>', _this.profile);
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    MerchantViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-merchant-view',
            template: __webpack_require__(/*! ./merchant-view.component.html */ "./src/app/Components/merchant-view/merchant-view.component.html"),
            styles: [__webpack_require__(/*! ./merchant-view.component.css */ "./src/app/Components/merchant-view/merchant-view.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MerchantViewComponent);
    return MerchantViewComponent;
}());



/***/ }),

/***/ "./src/app/Components/reset-password/reset-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <div class=\"container-common\">\n     <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"d-flex align-items-center minheight70vh\">\n        <form class=\"login_box_outer w-100\" action=\"forgot-password-validation.html\">\n          <div class=\"login-box max-WT-520\">\n              <div class=\"login-right-block\">\n                <form [formGroup]='resetForm'>\n                <div class=\"login-heading\">\n                   <h4>FORGOT PASSWORD</h4>\n                   <h4 class=\"f-size-18\">Reset Password</h4>\n                </div>\n                <div class=\"login-box-body\">\n                  <div class=\"form-group\">\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName='newPassword'/>\n                      <div class=\"errMsg\" *ngIf=\"resetForm.get('newPassword').dirty && resetForm.get('newPassword').invalid\"> \n                          <span  [ngClass]=\"{error:resetForm.get('newPassword').hasError('required')}\" *ngIf=\"resetForm.get('newPassword').hasError('required')\">*Please enter password.</span>\n                          <span  [ngClass]=\"{error:resetForm.get('newPassword').hasError('minlength') && !resetForm.get('newPassword').hasError('required')}\" *ngIf=\"resetForm.get('newPassword').hasError('minlength') && !resetForm.get('newPassword').hasError('required')\">*Password must be of minimum 8 characters.</span>\n                       </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName='confirmPassword'/>\n                      <div class=\"errMsg\" *ngIf=\"resetForm.get('newPassword').value && resetForm.get('confirmPassword').value\">                          \n                          <span  [ngClass]=\"{error:resetForm.get('newPassword').value != resetForm.get('confirmPassword').value }\" *ngIf='resetForm.get(\"newPassword\").value != resetForm.get(\"confirmPassword\").value '>*Password and confirm password does not match. </span>\n                       </div>\n                  </div>\n                  </div>\n                    <div class=\"text-center mt40\">\n                      <button (click)='submit()' class=\"btn btn-login btn-large  width100 font-100\" [disabled]='resetForm.invalid || (resetForm.get(\"newPassword\").value != resetForm.get(\"confirmPassword\").value)' >SUBMIT</button>\n                    </div>\n                  </form>\n              </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/Components/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.resetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.submit = function () {
        var _this = this;
        this.service.spinnerShow();
        var resetData = {
            Password: this.resetForm.value.newPassword,
            confirmPassword: this.resetForm.value.confirmPassword
        };
        console.log(this.route.queryParams['_value'].token);
        this.service.postApi('resetPassword/?token=' + this.route.queryParams['_value'].token, resetData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.service.success('Password changed successfully.');
                _this.router.navigate(['/login']);
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/Components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/Components/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Components/static-content-edit/static-content-edit.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/static-content-edit/static-content-edit.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/static-content-edit/static-content-edit.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/static-content-edit/static-content-edit.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Content Management</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\"><a href=\"user-management.html\">User Management </a></li>\n              <li class=\"breadcrumb-item active\">Transaction Details</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n<div class=\"content-section\">\n <div class=\"terms-page\">\n     <form class=\"middle-form\" [formGroup]='staticForm'>\n        <div class=\"form-group row\">\n          <label class=\"common-label col-md-12\">Title *</label>\n          <div class=\"col-md-12\">\n           <!-- <input class=\"form-control\" type=\"text\" value=\"Terms & Condition\" formControlName='title' required/> -->\n          <strong><p>{{title}}</p></strong> \n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"common-label col-md-12\">Body *</label>\n            <div class=\"col-md-12\">\n                 <!-- <textarea name=\"textarea\" class=\"jqte-test form-control\" formControlName='body'>\n               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.\n               </textarea> -->\n               <ckeditor  formControlName='body'></ckeditor>\n               <!-- <ck-editor name=\"editor1\"  skin=\"moono-lisa\" language=\"en\" [fullPage]=\"true\"></ck-editor> -->\n            </div>\n        </div>\n        <div class=\"form-group button-box row\">\n        <div class=\"col-6 \">\n        <button  (click)='save()' type=\"button\" class=\"btn btn-green btn-large btn-block\" [disabled]='staticForm.invalid'>Save</button>         \n         </div>\n      <div class=\"col-6\">\n          <a (click)='cancel()' class=\"btn btn-large btn-gray btn-block\"> Cancel</a>\n      </div>\n    </div>\n     </form>\n </div> \n</div>\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/static-content-edit/static-content-edit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/static-content-edit/static-content-edit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StaticContentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentEditComponent", function() { return StaticContentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaticContentEditComponent = /** @class */ (function () {
    function StaticContentEditComponent(router, service) {
        this.router = router;
        this.service = service;
        this.editorValue = '';
        this.staticForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    }
    StaticContentEditComponent.prototype.ngOnInit = function () {
        this.title = localStorage.sc;
        this.service.spinnerShow();
        this.getStaticView();
    };
    StaticContentEditComponent.prototype.getStaticView = function () {
        var _this = this;
        this.title = localStorage.sc;
        if (localStorage.sc == 'About Us') {
            this.service.callGet('getAboutUs').subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    console.log("static data is " + JSON.stringify(response['result']));
                    _this.staticForm.patchValue({
                        body: response['result'].aboutUs
                    });
                    console.log("ABOUT US-->>", _this.staticForm.value.body);
                    // this.body = response['result'][0].policy
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong.');
            });
        }
        else if (localStorage.sc == 'Terms & Conditions') {
            this.service.callGet('getTermAndCondition').subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    console.log("static data is " + JSON.stringify(response['result']));
                    // this.body = response['result'].about
                    _this.staticForm.patchValue({
                        body: response['result'].about
                    });
                    console.log("TERMS-->>", _this.staticForm.value.body);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong.');
            });
        }
        else if (localStorage.sc == 'Privacy Policy') {
            this.service.callGet('getPrivacyPolicy').subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    console.log("static data is " + JSON.stringify(response['result']));
                    _this.staticForm.patchValue({
                        body: response['result'].policy
                    });
                    console.log("POLICY -->>", _this.staticForm.value.body);
                    // this.body = response['result'][0].policy
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong.');
            });
        }
    };
    StaticContentEditComponent.prototype.save = function () {
        //  console.log('SAVE CLICKED')
        var _this = this;
        this.service.spinnerShow();
        var staticdata = {
            about: this.staticForm.value.body
        };
        if (localStorage.sc == 'About Us') {
            this.service.callPost('addAboutUs', staticdata).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Content updated successfully');
                    _this.router.navigate(['/static-contents']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
        else if (localStorage.sc == 'Terms & Conditions') {
            this.service.callPost('addTermAndCondition', staticdata).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Content updated successfully');
                    _this.router.navigate(['/static-contents']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
        else if (localStorage.sc == 'Privacy Policy') {
            this.service.callPost('addPrivacyPolicy', staticdata).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Content updated successfully');
                    _this.router.navigate(['/static-contents']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
    };
    StaticContentEditComponent.prototype.cancel = function () {
        this.router.navigate(['/static-contents']);
    };
    StaticContentEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-static-content-edit',
            template: __webpack_require__(/*! ./static-content-edit.component.html */ "./src/app/Components/static-content-edit/static-content-edit.component.html"),
            styles: [__webpack_require__(/*! ./static-content-edit.component.css */ "./src/app/Components/static-content-edit/static-content-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"]])
    ], StaticContentEditComponent);
    return StaticContentEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/static-content-management/static-content-management.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/static-content-management/static-content-management.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/static-content-management/static-content-management.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/Components/static-content-management/static-content-management.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n  <!-- Page Title Start -->\n  <div class=\"page_title_block\">\n      <h1 class=\"page_title\">Terms & Conditions</h1>\n      <!-- <div class=\"common-bredcrumb\">\n          <ol class=\"breadcrumb\">\n\n              <li class=\"breadcrumb-item active\">User Management</li>\n          </ol>\n\n      </div> -->\n  </div>\n  <!-- Page Title End -->\n  <div class=\"content-section\">\n      <div class=\"outer-box\">\n\n          <!-- Gloabl Table Box Start -->\n          <div class=\"global-table no-radius p0\">\n\n              <div class=\"tab-content1\">\n                  <div class=\"tab-pane1\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-bordered\">\n                              <thead>\n                                  <tr class=\"no_wrap_th\">\n                                    <th>Sr. No.</th>\n                                      <th>Page Name </th>\n                                      <th class=\"action_td_btn3\">Action</th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                    <td>1</td>\n                                      <td>About Us</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a (click)='view(\"a\")'><i class=\"fa fa-eye\"></i></a>\n                                          <a (click)='edit(\"a\")'><i class=\"fa fa-edit\"></i></a>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>2</td>\n                                      <td>Terms & Services</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a (click)='view(\"t\")'><i class=\"fa fa-eye\"></i></a>\n                                          <a (click)='edit(\"t\")'><i class=\"fa fa-edit\"></i></a>\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                    <td>3</td>\n                                      <td>Privacy & Policies</td>\n                                      <td class=\"action_td_btn3\">\n                                          <a (click)='view(\"p\")'><i class=\"fa fa-eye\"></i></a>\n                                          <a (click)='edit(\"p\")'><i class=\"fa fa-edit\"></i></a>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n\n      </div>\n  </div>\n  <!-- Table Responsive End -->\n</main>\n<!-- Middle Content End -->\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/static-content-management/static-content-management.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/static-content-management/static-content-management.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: StaticContentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentManagementComponent", function() { return StaticContentManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaticContentManagementComponent = /** @class */ (function () {
    function StaticContentManagementComponent(router) {
        this.router = router;
    }
    StaticContentManagementComponent.prototype.ngOnInit = function () {
    };
    StaticContentManagementComponent.prototype.view = function (e) {
        if (e === "a") {
            localStorage.sc = 'About Us';
        }
        else if (e === "t") {
            localStorage.sc = 'Terms & Conditions';
        }
        else if (e == "p") {
            localStorage.sc = 'Privacy Policy';
        }
        this.router.navigate(['/static-view']);
    };
    StaticContentManagementComponent.prototype.edit = function (e) {
        if (e === "a") {
            localStorage.sc = 'About Us';
        }
        else if (e === "t") {
            localStorage.sc = 'Terms & Conditions';
        }
        else if (e == "p") {
            localStorage.sc = 'Privacy Policy';
        }
        console.log('edit clicked!');
        this.router.navigate(['/static-edit']);
    };
    StaticContentManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-static-content-management',
            template: __webpack_require__(/*! ./static-content-management.component.html */ "./src/app/Components/static-content-management/static-content-management.component.html"),
            styles: [__webpack_require__(/*! ./static-content-management.component.css */ "./src/app/Components/static-content-management/static-content-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StaticContentManagementComponent);
    return StaticContentManagementComponent;
}());



/***/ }),

/***/ "./src/app/Components/static-content-view/static-content-view.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/static-content-view/static-content-view.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/static-content-view/static-content-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/static-content-view/static-content-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Content Management</h1>\n        <!-- <div class=\"common-bredcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"user-management.html\">User Management </a></li>\n                <li class=\"breadcrumb-item active\">Transaction Details</li>\n            </ol>\n  \n        </div> -->\n    </div>\n    <!-- Page Title End -->\n  <div class=\"content-section\">\n   <div class=\"terms-page\">\n       <form class=\"middle-form\">\n          <div class=\"form-group row\">\n            <label class=\"common-label col-md-12\">Title *</label>\n            <div class=\"col-md-12\">\n             \n             <p> {{title}}</p>\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"common-label col-md-12\">Body *</label>\n              <div class=\"col-md-12\">\n                   <p [innerHTML]=\"body\">\n               \n                   </p>\n              </div>\n          </div>\n          <div class=\"form-group button-box row\">\n        \n        <div class=\"col-6\">\n            <a [routerLink]=\"['/static-contents']\" class=\"btn btn-large btn-gray btn-block\"> Back</a>\n        </div>\n      </div>\n       </form>\n   </div> \n  </div>\n  </main>\n  <!-- Middle Content End -->\n  <app-header-footer></app-header-footer>\n  "

/***/ }),

/***/ "./src/app/Components/static-content-view/static-content-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/static-content-view/static-content-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StaticContentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticContentViewComponent", function() { return StaticContentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaticContentViewComponent = /** @class */ (function () {
    function StaticContentViewComponent(service, sanitizer, router) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    StaticContentViewComponent.prototype.ngOnInit = function () {
        this.service.spinnerShow();
        this.getStaticView();
    };
    StaticContentViewComponent.prototype.getStaticView = function () {
        var _this = this;
        this.title = localStorage.sc;
        if (localStorage.sc == 'About Us') {
            this.service.callGet('getAboutUs').subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    console.log("static data is " + JSON.stringify(response['result']));
                    // this.body = response['result'][0].policy 
                    _this.body = _this.sanitizer.bypassSecurityTrustHtml(response['result'].aboutUs);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong.');
            });
        }
        else if (localStorage.sc == 'Terms & Conditions') {
            this.service.callGet('getTermAndCondition').subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    console.log("static data is " + JSON.stringify(response['result']));
                    // this.body = response['result'].about
                    _this.body = _this.sanitizer.bypassSecurityTrustHtml(response['result'].about);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong.');
            });
        }
        else if (localStorage.sc == 'Privacy Policy') {
            this.service.callGet('getPrivacyPolicy').subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    console.log("static data is " + JSON.stringify(response['result']));
                    // this.body = response['result'][0].policy
                    _this.body = _this.sanitizer.bypassSecurityTrustHtml(response['result'].policy);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong.');
            });
        }
    };
    StaticContentViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-static-content-view',
            template: __webpack_require__(/*! ./static-content-view.component.html */ "./src/app/Components/static-content-view/static-content-view.component.html"),
            styles: [__webpack_require__(/*! ./static-content-view.component.css */ "./src/app/Components/static-content-view/static-content-view.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProviderService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StaticContentViewComponent);
    return StaticContentViewComponent;
}());



/***/ }),

/***/ "./src/app/Components/sub-admin-add/sub-admin-add.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/sub-admin-add/sub-admin-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/sub-admin-add/sub-admin-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/sub-admin-add/sub-admin-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Add Subadmin</h1>\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <form class=\"login_box_outer\" >\n            <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n            <div class=\"main-block-innner mb40 mt40\">\n                <div class=\"add-store-block input-style\">\n                    <form [formGroup]='subadminForm'>\n                    <div class=\"user-profile\">\n                     <div class=\"image-box\">\n                         <img src=\"{{imageUrl || 'assets/img/profile-img.jpg' }}\" class=\"profile-pic\"> \n                          <label class=\"upload-label\">\n                           <input type=\"file\" name=\"\"  (change)='fileSelect($event)' accept=\"image/jpeg,image/jpg,image/png,image/ico\">\n                            <i class=\"fas fa-camera\"></i>\n                        </label>\n                    </div>\n\n                    </div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"col-md-4\">Name :</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" class=\"form-control \"  formControlName='name' maxlength=\"40\">\n                            <div class=\"errMsg\" *ngIf=\"subadminForm.get('name').dirty && subadminForm.get('name').invalid\"> \n                                <span style='color:red'  *ngIf=\"subadminForm.get('name').hasError('required')\">*Please enter name.</span>\n                                <span style='color:red'  *ngIf=\"subadminForm.get('name').hasError('pattern')\">*Please enter valid name.</span>\n                          </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"col-md-4\">Email :</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"email\" class=\"form-control \"   formControlName='email'  maxlength=\"50\">\n                            <div class=\"errMsg\" *ngIf=\"subadminForm.get('email').dirty && subadminForm.get('email').invalid\"> \n                                <span style='color:red'  *ngIf=\"subadminForm.get('email').hasError('required')\">*Please enter email.</span>\n                                <span style='color:red'  *ngIf=\"subadminForm.get('email').hasError('pattern')\">*Please enter valid email.</span>\n                          </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"col-md-4\">Phone :</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"text\" class=\"form-control \"  formControlName='phone'  maxlength=\"12\">\n                            <div class=\"errMsg\" *ngIf=\"subadminForm.get('phone').dirty && subadminForm.get('phone').invalid\"> \n                                <span style='color:red'  *ngIf=\"subadminForm.get('phone').hasError('required')\">*Please enter phone number.</span>\n                                <span style='color:red'  *ngIf=\"subadminForm.get('phone').hasError('pattern')\">*Please enter valid phone number.</span>\n                          </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"col-md-4\">Password :</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"password\" class=\"form-control \"  formControlName='password'  maxlength=\"16\">\n                            <div class=\"errMsg\" *ngIf=\"subadminForm.get('password').dirty && subadminForm.get('password').invalid\"> \n                                <span  [ngClass]=\"{error:subadminForm.get('password').hasError('required')}\" *ngIf=\"subadminForm.get('password').hasError('required')\">*Please enter password.</span>\n                                <span  [ngClass]=\"{error:subadminForm.get('password').hasError('minlength') && !subadminForm.get('password').hasError('required')}\" *ngIf=\"subadminForm.get('password').hasError('minlength') && !subadminForm.get('password').hasError('required')\">*Password must be of minimum 8 characters.</span>\n                             </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"col-md-4\">Confirm Password :</label>\n                        <div class=\"col-md-8\">\n                            <input type=\"password\" class=\"form-control \"   formControlName='confirmPassword'  maxlength=\"16\">\n                            <div class=\"errMsg\" *ngIf=\"subadminForm.get('password').value && subadminForm.get('confirmPassword').value\">                                   \n                                <span  [ngClass]=\"{error:subadminForm.get('password').value != subadminForm.get('confirmPassword').value }\" *ngIf='subadminForm.get(\"password\").value != subadminForm.get(\"confirmPassword\").value '>*Password and confirm password does not match. </span>\n                             </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-start\">\n                        <label class=\"col-md-4\">Access</label>\n                        <div class=\"col-md-8\">\n                            <div class=\"checkblock\">\n                               <label class=\"checkbox-design\">\n                                  <input type=\"checkbox\" value='merchantManagement' formControlName='accessMerchant'><span></span>Merchant Management\n                               </label>\n                            </div>\n                            <div class=\"checkblock\">\n                               <label class=\"checkbox-design\">\n                                  <input type=\"checkbox\"  value='bannerManagement' formControlName='accessBanner'><span></span>Banner Management\n                               </label>\n                            </div>\n                            <div class=\"checkblock\">\n                               <label class=\"checkbox-design\">\n                                  <input type=\"checkbox\"  value='staticContentManagement' formControlName='accessStatic'><span></span>Static Content Management\n                               </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"text-center mt40\">\n                        <button (click)='save()' class=\"btn btn-large  max-WT-200 font-100 btn-green\" [disabled]='subadminForm.invalid || !imageUrl'>Save</button>\n                        <button (click)='cancel()' class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5\">Cancel</button>\n                    </div>                \n                </form>\n            </div>\n            </div>\n        </div>\n        </form>\n    </div>\n</main>\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/sub-admin-add/sub-admin-add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/sub-admin-add/sub-admin-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubAdminAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminAddComponent", function() { return SubAdminAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubAdminAddComponent = /** @class */ (function () {
    function SubAdminAddComponent(service, router) {
        this.service = service;
        this.router = router;
        this.imageUrl = '';
        this.edit = false;
        this.subadminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]{2,40}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9][0-9][0-9]{8,10}$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            accessMerchant: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            accessBanner: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            accessStatic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    SubAdminAddComponent.prototype.ngOnInit = function () {
        if (localStorage.subId) {
            this.service.spinnerShow();
            this.getSubadminProfile();
            this.edit = true;
        }
    };
    SubAdminAddComponent.prototype.save = function () {
        var _this = this;
        this.service.clear();
        this.service.spinnerShow();
        if (this.edit) {
            var access = [];
            if (this.subadminForm.value.accessMerchant) {
                access.push('merchantManagement');
            }
            if (this.subadminForm.value.accessBanner) {
                access.push('bannerManagement');
            }
            if (this.subadminForm.value.accessStatic) {
                access.push('staticContentManagement');
            }
            var subadmin = {
                "_id": localStorage.subId,
                "name": this.subadminForm.value.name,
                "email": this.subadminForm.value.email,
                "phoneNumber": this.subadminForm.value.phone,
                "access": access,
                "image": this.imageUrl,
                "password": this.subadminForm.value.password
            };
            this.service.callPost('editSubAdmin', subadmin).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Sub admin added successfully');
                    _this.router.navigate(['/subadmin-management']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
        else {
            var access = [];
            if (this.subadminForm.value.accessMerchant) {
                access.push('merchantManagement');
            }
            if (this.subadminForm.value.accessBanner) {
                access.push('bannerManagement');
            }
            if (this.subadminForm.value.accessStatic) {
                access.push('staticContentManagement');
            }
            var subadmin = {
                "name": this.subadminForm.value.name,
                "email": this.subadminForm.value.email,
                "phoneNumber": this.subadminForm.value.phone,
                "access": access,
                "image": this.imageUrl,
                "password": this.subadminForm.value.password
            };
            this.service.callPost('addSubAdmin', subadmin).subscribe(function (response) {
                _this.service.spinnerHide();
                if (response['responseCode'] == 200) {
                    _this.service.success('Sub admin added successfully');
                    _this.router.navigate(['/subadmin-management']);
                }
                else if (response['responseCode'] == 403) {
                    localStorage.removeItem('token');
                    _this.router.navigate(['/login']);
                    _this.service.error('Your token is expired!');
                }
                else if (response['responseCode'] == 404) {
                    console.log(response['responseMessage']);
                }
                else {
                    _this.service.error(response['responseMessage']);
                }
            }, function (error) {
                _this.service.spinnerHide();
                _this.service.error('Something went wrong!');
            });
        }
    };
    SubAdminAddComponent.prototype.cancel = function () {
        this.router.navigate(['/subadmin-management']);
    };
    SubAdminAddComponent.prototype.fileSelect = function (event) {
        var _this = this;
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var fileType = event.target.files[0].type;
            if (fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'image/jpg' || fileType === 'image/ico') {
                this.image = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    self.imageUrl = e.target['result'];
                    console.log('IMAGE--->', _this.image);
                    console.log('IMAGE URL--->', _this.imageUrl);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                // this.image = ''				
                //this.imageUrl = '';
                self.imageUrl = '';
                this.service.error('Please select image file only !');
            }
        }
    };
    SubAdminAddComponent.prototype.getSubadminProfile = function () {
        var _this = this;
        var view = {
            "_id": localStorage.subId
        };
        this.service.callPost('viewSubAdmin', view).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.profile = response['result'][0];
                _this.subadminForm.patchValue({
                    name: _this.profile.name,
                    email: _this.profile.email,
                    phone: _this.profile.phoneNumber,
                    password: _this.profile.password,
                    confirmPassword: _this.profile.password,
                    accessMerchant: _this.profile.access[0] ? true : false,
                    accessBanner: _this.profile.access[1] ? true : false,
                    accessStatic: _this.profile.access[2] ? true : false,
                });
                _this.imageUrl = _this.profile.image;
                console.log('PROFILE IS--->>>', _this.profile);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    SubAdminAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-admin-add',
            template: __webpack_require__(/*! ./sub-admin-add.component.html */ "./src/app/Components/sub-admin-add/sub-admin-add.component.html"),
            styles: [__webpack_require__(/*! ./sub-admin-add.component.css */ "./src/app/Components/sub-admin-add/sub-admin-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SubAdminAddComponent);
    return SubAdminAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/sub-admin-management/sub-admin-management.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Components/sub-admin-management/sub-admin-management.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/sub-admin-management/sub-admin-management.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/sub-admin-management/sub-admin-management.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Subadmin Management</h1>\n        <!-- <div class=\"common-bredcrumb\">\n            <ol class=\"breadcrumb\">\n\n                <li class=\"breadcrumb-item active\">User Management</li>\n            </ol>\n\n        </div> -->\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n      <div class=\"sec_head_new sec_head_new_after\">\n          <div class=\"row align-items-center\">\n            <!-- <div class=\"col-md-6 col-xl-3\">\n                <div class=\"form-group\">\n                   <input type=\"text\" name=\"\" class=\"form-control datepicker\">\n                </div>\n            </div> -->\n            <div class=\"col-md-6 col-xl-3\">\n                <div class=\"filter_search mb10 width100\">\n                  <div class=\"input-group filter_search_group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search here\" id='search'>\n                      <div class=\"input-group-append\">\n                          <button class=\"btn btn_search_group\" type=\"button\" (click)='search()'><img src=\"assets/img/icon-search.png\" alt=\"Search\"></button>\n                      </div>\n                  </div>\n               </div>\n            </div>\n            <div class=\"col-md-6 col-xl-2\">\n                <div class=\"text-left mb10\">\n                    <button type=\"submit\" class=\"btn  btn-theme\" (click)='search()' >Search</button>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"> \n         <div class=\"mb10 show-txt f-left\">\n                <span>Show</span>\n                <select name=\"\" class=\"form-control form-control2 select_opt\" id='itemsPP' (change)='limitChange()'>\n                    <option value=\"5\" selected=\"\">5</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"15\">15</option>\n                </select>\n                <span>from all</span>\n              </div>\n              <div class=\"f-right\">\n                 <a class=\"btn btn-primary\" (click)='addSubadmin()' style=\"color: white; cursor: pointer;\" >\n                    <i class=\"fa fa-plus\" ></i> Add Subadmin\n                 </a>\n              </div>\n      </div>\n        <div class=\"outer-box\">\n\n            <!-- Gloabl Table Box Start -->\n            <div class=\"global-table no-radius p0\">\n\n                <div class=\"tab-content1\">\n                    <div class=\"tab-pane1\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr class=\"no_wrap_th\">\n                                      <th>ID</th>\n                                        <th>Username</th>\n                                        <th>Email </th>\n                                        <th>Phone No. </th>\n                                        <th>Last Logged In </th>\n                                        <th class=\"action_td_btn3\">Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor='let subAdmin of subAdmins | paginate: { itemsPerPage:itemPP, currentPage: currPage, totalItems: pageSize }; let i=index'>\n                                      <td>{{subAdmin.subAdmin_id}}</td>\n                                        <td>{{subAdmin.name}}</td>\n                                        <td>{{subAdmin.email}}</td>\n                                        <td>{{subAdmin.phoneNumber}}</td>\n                                        <td>{{subAdmin.lastLogin}}</td>\n                                        <td class=\"action_td_btn3\">\n                                            <a (click)='view(subAdmin)'><i class=\"fa fa-eye\"></i></a>\n                                             <a (click)='banModal(subAdmin)' href=\"#block_modal\" data-toggle=\"modal\"><i class=\"fa fa-ban\"></i></a>\n                                             <a (click)='trashModal(subAdmin)' href=\"#delete_modal\" data-toggle=\"modal\"><i class=\"fa fa-trash\"></i></a>\n                                        </td>\n                                    </tr>\n                                 \n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"custom-pagination mt20 text-right\">\n                            <nav aria-label=\"Page navigation example\">\n                                    <div class=\"pagination_block\" *ngIf=\"subAdmins.length \">\n                                            <ul class=\"pagination\">\n                                              <pagination-controls (pageChange)=\"changePage($event)\"></pagination-controls>\n                                            </ul>\n                                    </div>\n                            </nav>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- Table Responsive End -->\n</main>\n<app-header-footer></app-header-footer>\n\n<div class=\"modal fade global-modal reset-modal\" id=\"block_modal\">\n    <div class=\"modal-dialog max-WT-500\">\n        <div class=\"modal-content\">\n            <div>\n                <!-- Modal body -->\n                <div class=\"modal-body  text-center\">\n                    <div class=\"row align-items-center modal_flax_height\">\n                        <div class=\"col\">\n                            <div class=\"box-title mb40 d-inline-block\">\n                                <i class=\"fas fa-ban off-icon\"></i>\n                                <p class=\"mt40\">Are you sure you want to block the Sub Admin ?</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <a style=\"color: white; cursor: pointer;\" data-dismiss=\"modal\" class=\"btn btn-blue btn-noYes\">BACK</a>\n                                <button style=\"color: white; cursor: pointer;\" type=\"button\" class=\"btn btn-red btn-noYes\"  (click)='banYes()'>YES</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- block_modal Modal -->\n\n  <div class=\"modal fade global-modal reset-modal\" id=\"delete_modal\">\n    <div class=\"modal-dialog max-WT-500\">\n        <div class=\"modal-content\">\n            <div>\n                <!-- Modal body -->\n                <div class=\"modal-body  text-center\">\n                    <div class=\"row align-items-center modal_flax_height\">\n                        <div class=\"col\">\n                            <div class=\"box-title mb40 d-inline-block\">\n                                <i class=\"fas fa-trash off-icon\"></i>\n                                <p class=\"mt40\">Are you sure you want to delete this sub-admin ?</p>\n                            </div>\n                            <div class=\"text-center\">\n                                <a style=\"color: white; cursor: pointer;\" data-dismiss=\"modal\" class=\"btn btn-blue btn-noYes\">BACK</a>\n                                <button style=\"color: white; cursor: pointer;\" type=\"button\" class=\"btn btn-red btn-noYes\" (click)='deleteYes()'>YES</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- block_modal Modal -->"

/***/ }),

/***/ "./src/app/Components/sub-admin-management/sub-admin-management.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/sub-admin-management/sub-admin-management.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SubAdminManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminManagementComponent", function() { return SubAdminManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubAdminManagementComponent = /** @class */ (function () {
    function SubAdminManagementComponent(service, router) {
        this.service = service;
        this.router = router;
        this.subAdmins = [];
        this.pageSize = 0;
        this.itemPP = 5;
        this.currPage = 1;
        this.srNo = 0;
    }
    SubAdminManagementComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('subId');
        this.getSubadminLists();
    };
    SubAdminManagementComponent.prototype.view = function (e) {
        localStorage.subId = e._id;
        this.router.navigate(['/subadmin-view']);
    };
    SubAdminManagementComponent.prototype.addSubadmin = function () {
        localStorage.removeItem('subId');
        localStorage.removeItem('email');
        this.router.navigate(['/subadmin-add']);
    };
    SubAdminManagementComponent.prototype.banModal = function (e) {
        $('#block_modal').modal('show');
        localStorage.email = e.email;
    };
    SubAdminManagementComponent.prototype.trashModal = function (e) {
        $('#delete_modal').modal('show');
        localStorage.email = e.email;
    };
    SubAdminManagementComponent.prototype.getSubadminLists = function () {
        var _this = this;
        console.log('GET LIST CALLED!!!!!');
        this.service.spinnerShow();
        var subadmin = {
            "page": this.currPage,
            "limit": parseInt($('#itemsPP').val())
        };
        this.service.callPost('subAdminList', subadmin).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.subAdmins = response['result'].docs;
                _this.pageSize = response['result'].total;
                console.log('TOTAL -->', _this.pageSize);
                _this.srNo = response['result'].limit * (response['result'].page - 1);
                console.log('LIST IS-->>>', _this.subAdmins);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    SubAdminManagementComponent.prototype.changePage = function (p) {
        this.currPage = p;
        this.getSubadminLists();
    };
    SubAdminManagementComponent.prototype.limitChange = function () {
        this.itemPP = parseInt($('#itemsPP').val());
        this.getSubadminLists();
    };
    SubAdminManagementComponent.prototype.banYes = function () {
        var _this = this;
        this.service.spinnerShow();
        var ban = {
            "status": "block",
            "email": localStorage.email
        };
        this.service.callPost('blockAndDeleteSubAdmin', ban).subscribe(function (response) {
            $('#block_modal').modal('hide');
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.service.success('Sub admin banned');
                _this.getSubadminLists();
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            $('#block_modal').modal('hide');
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    SubAdminManagementComponent.prototype.deleteYes = function () {
        var _this = this;
        this.service.spinnerShow();
        var del = {
            "status": "delete",
            "email": localStorage.email
        };
        this.service.callPost('blockAndDeleteSubAdmin', del).subscribe(function (response) {
            $('#delete_modal').modal('hide');
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.service.success('Sub admin deleted successfully');
                _this.getSubadminLists();
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            $('#delete_modal').modal('hide');
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    SubAdminManagementComponent.prototype.search = function () {
        var _this = this;
        this.service.spinnerShow();
        var searchData = {
            "userName": $('#search').val(),
            "page": this.currPage
        };
        this.service.callPost('filterSubAdmin', searchData).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.subAdmins = response['result'].docs;
                _this.pageSize = response['result'].total;
                console.log('TOTAL -->', _this.pageSize);
                _this.srNo = response['result'].limit * (response['result'].page - 1);
                console.log('LIST IS-->>>', _this.subAdmins);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    SubAdminManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-admin-management',
            template: __webpack_require__(/*! ./sub-admin-management.component.html */ "./src/app/Components/sub-admin-management/sub-admin-management.component.html"),
            styles: [__webpack_require__(/*! ./sub-admin-management.component.css */ "./src/app/Components/sub-admin-management/sub-admin-management.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubAdminManagementComponent);
    return SubAdminManagementComponent;
}());



/***/ }),

/***/ "./src/app/Components/sub-admin-view/sub-admin-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/sub-admin-view/sub-admin-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/sub-admin-view/sub-admin-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/sub-admin-view/sub-admin-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"middle-content\">\n    <!-- Page Title Start -->\n    <div class=\"page_title_block\">\n        <h1 class=\"page_title\">Subadmin View </h1>\n    </div>\n    <!-- Page Title End -->\n    <div class=\"content-section\">\n        <form class=\"login_box_outer\" >\n          <div class=\"order-view mt30 max-WT-700 mrgn-0-auto\">\n            <div class=\"main-block-innner mb40 mt40\">\n                <div class=\"add-store-block input-style\">\n                  <div class=\"user-profile\">\n                     <div class=\"image-box\">\n                         <img src=\"{{profile?.image || 'assets/img/profile-img.jpg'}}\" class=\"profile-pic\"> \n                    </div>\n\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Name :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.name}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Email :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.email}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Phone No :</label>\n                        <div class=\"col-md-6\">\n                            <label>{{profile?.phoneNumber}}</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row align-items-baseline\">\n                        <label class=\"col-md-6\">Access Given :</label>\n                        <div class=\"col-md-6\" >\n                            <label class=\"mb5\" *ngFor='let access of profile?.access; let i=index' >{{access}}</label>\n                            <!-- <label>Edit Merchant Management</label> -->\n                        </div>\n                    </div>\n                    <div class=\"text-center mt40\">\n                        <a  [routerLink]=\"['/subadmin-add']\" class=\"btn btn-large  max-WT-200 font-100 btn-green\">Edit</a>\n                        <a  [routerLink]=\"['/subadmin-management']\" class=\"btn btn-large  max-WT-200 font-100 btn-grey ml5\">Back</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </form>\n    </div>\n</main>\n<app-header-footer></app-header-footer>\n"

/***/ }),

/***/ "./src/app/Components/sub-admin-view/sub-admin-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/sub-admin-view/sub-admin-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: SubAdminViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminViewComponent", function() { return SubAdminViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/provider.service */ "./src/app/Services/provider.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubAdminViewComponent = /** @class */ (function () {
    function SubAdminViewComponent(service, router) {
        this.service = service;
        this.router = router;
        this.profile = [];
    }
    SubAdminViewComponent.prototype.ngOnInit = function () {
        this.service.spinnerShow();
        this.getSubadminProfile();
    };
    SubAdminViewComponent.prototype.getSubadminProfile = function () {
        var _this = this;
        var view = {
            "_id": localStorage.subId
        };
        this.service.callPost('viewSubAdmin', view).subscribe(function (response) {
            _this.service.spinnerHide();
            if (response['responseCode'] == 200) {
                _this.profile = response['result'][0];
                console.log('PROFILE IS--->>>', _this.profile);
            }
            else if (response['responseCode'] == 403) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                _this.service.error('Your token is expired!');
            }
            else if (response['responseCode'] == 404) {
                console.log(response['responseMessage']);
            }
            else {
                _this.service.error(response['responseMessage']);
            }
        }, function (error) {
            _this.service.spinnerHide();
            _this.service.error('Something went wrong!');
        });
    };
    SubAdminViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-admin-view',
            template: __webpack_require__(/*! ./sub-admin-view.component.html */ "./src/app/Components/sub-admin-view/sub-admin-view.component.html"),
            styles: [__webpack_require__(/*! ./sub-admin-view.component.css */ "./src/app/Components/sub-admin-view/sub-admin-view.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_provider_service__WEBPACK_IMPORTED_MODULE_1__["ProviderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubAdminViewComponent);
    return SubAdminViewComponent;
}());



/***/ }),

/***/ "./src/app/Services/provider.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/provider.service.ts ***!
  \**********************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProviderService = /** @class */ (function () {
    function ProviderService(toastr, http, spinner) {
        this.toastr = toastr;
        this.http = http;
        this.spinner = spinner;
        this.pageIs = '';
        // baseUrl='http://172.16.16.220:1419/v2/'
        this.baseUrl = 'http://ec2-52-76-162-65.ap-southeast-1.compute.amazonaws.com:1419/v2/';
        this.getHttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    ProviderService.prototype.success = function (msg) {
        this.toastr.success(msg);
    };
    ProviderService.prototype.clear = function () {
        this.toastr.clear();
    };
    ProviderService.prototype.error = function (msg) {
        this.toastr.error(msg);
    };
    ProviderService.prototype.getApi = function (url) {
        return this.http.get(this.baseUrl + url, this.getHttpOptions);
    };
    ProviderService.prototype.postApi = function (url, data) {
        return this.http.post(this.baseUrl + url, data, this.getHttpOptions);
    };
    ProviderService.prototype.getCountryCodeJson = function () {
        return this.http.get('assets/json/countryCodes.json');
    };
    ProviderService.prototype.getCountryCJson = function () {
        return this.http.get('assets/json/countries.json');
    };
    ProviderService.prototype.callGet = function (url) {
        var HttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'token': JSON.parse(localStorage.token).token
            })
        };
        return this.http.get(this.baseUrl + url, HttpOptions);
    };
    ProviderService.prototype.callPost = function (url, data) {
        var HttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'token': JSON.parse(localStorage.token).token
            })
        };
        return this.http.post(this.baseUrl + url, data, HttpOptions);
    };
    ProviderService.prototype.spinnerShow = function () {
        this.spinner.show();
    };
    ProviderService.prototype.spinnerHide = function () {
        this.spinner.hide();
    };
    ProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/Services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Base64 } from 'js-base64';
// import * as rncryptor from 'jscryptor';
var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        //  private url = 'http://172.16.16.220:1419';
        // private url= 'http://172.16.6.178:8088';
        this.url = 'http://ec2-52-76-162-65.ap-southeast-1.compute.amazonaws.com:1419';
        this.getMessages = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('userInfo', function (message) {
                    observer.next(message);
                    console.log('getMessages USERINFO-->>>>', message);
                });
            });
        };
        this.getRefresh = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('refreshedList', function (message) {
                    observer.next(message);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url, { query: 'token=AwGVsWriItQ+IwDJZTk0fajLVqsQknZgmLxRaY2qJNd/hwb/1fIW2K37w40zoWQJYOIeW92eAx91tFy0LrC40xLTFmEZSphEQ6+OcziBrydEX8EQ/vHHEow4Xk4aI9EBFRcbervIRREfwHyNaTMKkxqi4Krc9ebrM51KH/i/U857Ry/hj2Z3LO0FDzE4Hu8bZAKbfh5hQiEgcXyxocfnPbbwRfvxFoIrzxCKY+nQ6jh6V0WD5DdFNL8qWuV0hTMW6X9i4OZIa8fAd+uzDyLk+YDw' });
        // let password ="base64:OrC1q3MNTUtKJpFaHMBmU036W+x3o+/DvPdXZt9lOVY="
        // var decoded = Base64.decode('ODIgYnl0ZXM6ODIgYnl0ZXM=')
        // var res = decoded.split(":");
        // let finalResult1 = rncryptor.Decrypt(res[0].toString(), password);
        // let finalResult12 = rncryptor.Decrypt(res[1].toString(), password);
        // console.log(`result1 is ${finalResult1}   and result2 is   ${finalResult12}`)
        console.log("socket instance is ", this.socket);
        this.socket.on('connect_error', function (data) {
            console.log('connection_error', data);
        });
    }
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('userInfo', message);
        console.log('sendMessage USERINFO-->>>>', message);
    };
    SocketService.prototype.refreshMessage = function (message) {
        console.log('emit');
        this.socket.emit('refreshedList', message);
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/change-password/change-password.component */ "./src/app/Components/change-password/change-password.component.ts");
/* harmony import */ var _Components_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/static-content-management/static-content-management.component */ "./src/app/Components/static-content-management/static-content-management.component.ts");
/* harmony import */ var _Components_static_content_edit_static_content_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/static-content-edit/static-content-edit.component */ "./src/app/Components/static-content-edit/static-content-edit.component.ts");
/* harmony import */ var _Components_static_content_view_static_content_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/static-content-view/static-content-view.component */ "./src/app/Components/static-content-view/static-content-view.component.ts");
/* harmony import */ var _Components_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/merchant-management/merchant-management.component */ "./src/app/Components/merchant-management/merchant-management.component.ts");
/* harmony import */ var _Components_merchant_view_merchant_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/merchant-view/merchant-view.component */ "./src/app/Components/merchant-view/merchant-view.component.ts");
/* harmony import */ var _Components_banner_management_banner_management_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/banner-management/banner-management.component */ "./src/app/Components/banner-management/banner-management.component.ts");
/* harmony import */ var _Components_banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/banner-view/banner-view.component */ "./src/app/Components/banner-view/banner-view.component.ts");
/* harmony import */ var _Components_banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/banner-edit/banner-edit.component */ "./src/app/Components/banner-edit/banner-edit.component.ts");
/* harmony import */ var _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/forgot-password/forgot-password.component */ "./src/app/Components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ "./src/app/Components/reset-password/reset-password.component.ts");
/* harmony import */ var _Components_sub_admin_management_sub_admin_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/sub-admin-management/sub-admin-management.component */ "./src/app/Components/sub-admin-management/sub-admin-management.component.ts");
/* harmony import */ var _Components_merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/merchant-edit/merchant-edit.component */ "./src/app/Components/merchant-edit/merchant-edit.component.ts");
/* harmony import */ var _Components_sub_admin_add_sub_admin_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/sub-admin-add/sub-admin-add.component */ "./src/app/Components/sub-admin-add/sub-admin-add.component.ts");
/* harmony import */ var _Components_sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/sub-admin-view/sub-admin-view.component */ "./src/app/Components/sub-admin-view/sub-admin-view.component.ts");
/* harmony import */ var _Components_merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/merchant-form/merchant-form.component */ "./src/app/Components/merchant-form/merchant-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'change-password', component: _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"] },
    { path: 'static-contents', component: _Components_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_5__["StaticContentManagementComponent"] },
    { path: 'static-edit', component: _Components_static_content_edit_static_content_edit_component__WEBPACK_IMPORTED_MODULE_6__["StaticContentEditComponent"] },
    { path: 'static-view', component: _Components_static_content_view_static_content_view_component__WEBPACK_IMPORTED_MODULE_7__["StaticContentViewComponent"] },
    { path: 'merchant-management', component: _Components_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_8__["MerchantManagementComponent"] },
    { path: 'merchant-view', component: _Components_merchant_view_merchant_view_component__WEBPACK_IMPORTED_MODULE_9__["MerchantViewComponent"] },
    { path: 'merchant-edit', component: _Components_merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_16__["MerchantEditComponent"] },
    { path: 'banner-management', component: _Components_banner_management_banner_management_component__WEBPACK_IMPORTED_MODULE_10__["BannerManagementComponent"] },
    { path: 'banner-view', component: _Components_banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_11__["BannerViewComponent"] },
    { path: 'banner-edit', component: _Components_banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_12__["BannerEditComponent"] },
    { path: 'forgot-password', component: _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"] },
    { path: 'reset-password', component: _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"] },
    { path: 'subadmin-management', component: _Components_sub_admin_management_sub_admin_management_component__WEBPACK_IMPORTED_MODULE_15__["SubAdminManagementComponent"] },
    { path: 'subadmin-add', component: _Components_sub_admin_add_sub_admin_add_component__WEBPACK_IMPORTED_MODULE_17__["SubAdminAddComponent"] },
    { path: 'subadmin-view', component: _Components_sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_18__["SubAdminViewComponent"] },
    { path: 'merchant-form', component: _Components_merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_19__["MerchantFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'app';
        this.router.events.subscribe(function (x) {
            if (x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                window.scroll(0, 0);
                var currUrl = _this.router.url.indexOf('?') == -1 ? _this.router.url.split('/')[1] : _this.router.url.slice(1, _this.router.url.indexOf('?'));
                if (localStorage.getItem('token') === null) {
                    console.log(_this.router.url);
                    /* if(!(this.router.url === '/login' || this.router.url === '/forgot-password' || this.router.url.substring(this.router.url.lastIndexOf("4200/") + 4,this.router.url.lastIndexOf("/?token")) === '/reset-password')){
                      this.router.navigate(['/login']);
                    }   */
                    if (!(currUrl === 'login' || currUrl === 'forgot-password' || currUrl === 'reset-password')) {
                        _this.router.navigate(['/login']);
                    }
                }
                else {
                    /* if(this.router.url === '/login' || this.router.url === '/forgot-password' || this.router.url.substring(this.router.url.lastIndexOf("4200/") + 4,this.router.url.lastIndexOf("/?token")) === '/reset-password'){
                      this.router.navigate(['/dashboard'])
                    } */
                    if (currUrl === 'login' || currUrl === 'forgot-password' || currUrl === 'reset-password') {
                        _this.router.navigate(['/dashboard']);
                    }
                }
            }
        });
        console.log('this.router.url', this.router.url);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/forgot-password/forgot-password.component */ "./src/app/Components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
/* harmony import */ var _Components_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/merchant-management/merchant-management.component */ "./src/app/Components/merchant-management/merchant-management.component.ts");
/* harmony import */ var _Components_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/static-content-management/static-content-management.component */ "./src/app/Components/static-content-management/static-content-management.component.ts");
/* harmony import */ var _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/change-password/change-password.component */ "./src/app/Components/change-password/change-password.component.ts");
/* harmony import */ var _Components_static_content_view_static_content_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/static-content-view/static-content-view.component */ "./src/app/Components/static-content-view/static-content-view.component.ts");
/* harmony import */ var _Components_static_content_edit_static_content_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/static-content-edit/static-content-edit.component */ "./src/app/Components/static-content-edit/static-content-edit.component.ts");
/* harmony import */ var _Components_banner_management_banner_management_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/banner-management/banner-management.component */ "./src/app/Components/banner-management/banner-management.component.ts");
/* harmony import */ var _Components_banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/banner-edit/banner-edit.component */ "./src/app/Components/banner-edit/banner-edit.component.ts");
/* harmony import */ var _Components_banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/banner-view/banner-view.component */ "./src/app/Components/banner-view/banner-view.component.ts");
/* harmony import */ var _Components_merchant_view_merchant_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/merchant-view/merchant-view.component */ "./src/app/Components/merchant-view/merchant-view.component.ts");
/* harmony import */ var _Common_header_footer_header_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Common/header-footer/header-footer.component */ "./src/app/Common/header-footer/header-footer.component.ts");
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ "./src/app/Components/reset-password/reset-password.component.ts");
/* harmony import */ var _Components_merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/merchant-edit/merchant-edit.component */ "./src/app/Components/merchant-edit/merchant-edit.component.ts");
/* harmony import */ var _Components_sub_admin_management_sub_admin_management_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/sub-admin-management/sub-admin-management.component */ "./src/app/Components/sub-admin-management/sub-admin-management.component.ts");
/* harmony import */ var _Components_sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/sub-admin-view/sub-admin-view.component */ "./src/app/Components/sub-admin-view/sub-admin-view.component.ts");
/* harmony import */ var _Components_sub_admin_add_sub_admin_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/sub-admin-add/sub-admin-add.component */ "./src/app/Components/sub-admin-add/sub-admin-add.component.ts");
/* harmony import */ var _Services_socket_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Services/socket.service */ "./src/app/Services/socket.service.ts");
/* harmony import */ var _Components_merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/merchant-form/merchant-form.component */ "./src/app/Components/merchant-form/merchant-form.component.ts");
/* harmony import */ var _google_places_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./google-places.directive */ "./src/app/google-places.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { CKEditorModule } from 'ngx-ckeditor';
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
                _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _Components_merchant_management_merchant_management_component__WEBPACK_IMPORTED_MODULE_15__["MerchantManagementComponent"],
                _Components_static_content_management_static_content_management_component__WEBPACK_IMPORTED_MODULE_16__["StaticContentManagementComponent"],
                _Components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"],
                _Components_static_content_view_static_content_view_component__WEBPACK_IMPORTED_MODULE_18__["StaticContentViewComponent"],
                _Components_static_content_edit_static_content_edit_component__WEBPACK_IMPORTED_MODULE_19__["StaticContentEditComponent"],
                _Components_banner_management_banner_management_component__WEBPACK_IMPORTED_MODULE_20__["BannerManagementComponent"],
                _Components_banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_21__["BannerEditComponent"],
                _Components_banner_view_banner_view_component__WEBPACK_IMPORTED_MODULE_22__["BannerViewComponent"],
                _Components_merchant_view_merchant_view_component__WEBPACK_IMPORTED_MODULE_23__["MerchantViewComponent"],
                _Common_header_footer_header_footer_component__WEBPACK_IMPORTED_MODULE_24__["HeaderFooterComponent"],
                _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_25__["ResetPasswordComponent"],
                _Components_merchant_edit_merchant_edit_component__WEBPACK_IMPORTED_MODULE_26__["MerchantEditComponent"],
                _Components_sub_admin_management_sub_admin_management_component__WEBPACK_IMPORTED_MODULE_27__["SubAdminManagementComponent"],
                _Components_sub_admin_view_sub_admin_view_component__WEBPACK_IMPORTED_MODULE_28__["SubAdminViewComponent"],
                _Components_sub_admin_add_sub_admin_add_component__WEBPACK_IMPORTED_MODULE_29__["SubAdminAddComponent"],
                _Components_merchant_form_merchant_form_component__WEBPACK_IMPORTED_MODULE_31__["MerchantFormComponent"],
                _google_places_directive__WEBPACK_IMPORTED_MODULE_32__["GooglePlacesDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _Services_socket_service__WEBPACK_IMPORTED_MODULE_30__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-places.directive.ts":
/*!********************************************!*\
  !*** ./src/app/google-places.directive.ts ***!
  \********************************************/
/*! exports provided: GooglePlacesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlacesDirective", function() { return GooglePlacesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// declare function require(path: string): any;
// var google = require('@types/googlemaps');
// declare const google: any;
// const google = require('@types/googlemaps');
var GooglePlacesDirective = /** @class */ (function () {
    function GooglePlacesDirective(elRef) {
        this.elRef = elRef;
        this.latng = {};
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.element = elRef.nativeElement;
    }
    GooglePlacesDirective.prototype.getFormattedAddress = function (place, lat, lng) {
        //@params: place - Google Autocomplete place object
        //@returns: location_obj - An address object in human readable format
        var location_obj = {};
        for (var i in place.address_components) {
            var item = place.address_components[i];
            location_obj['lat'] = lat;
            location_obj['lng'] = lng;
            location_obj['formatted_address'] = place.formatted_address;
            if (item['types'].indexOf("locality") > -1) {
                location_obj['locality'] = item['long_name'];
            }
            else if (item['types'].indexOf("administrative_area_level_1") > -1) {
                location_obj['admin_area_l1'] = item['short_name'];
            }
            else if (item['types'].indexOf("street_number") > -1) {
                location_obj['street_number'] = item['short_name'];
            }
            else if (item['types'].indexOf("route") > -1) {
                location_obj['route'] = item['long_name'];
            }
            else if (item['types'].indexOf("country") > -1) {
                location_obj['country'] = item['long_name'];
            }
            else if (item['types'].indexOf("postal_code") > -1) {
                location_obj['postal_code'] = item['short_name'];
            }
        }
        return location_obj;
    };
    GooglePlacesDirective.prototype.ngOnInit = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.element);
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            //Emit the new address object for the updated place
            console.log("latitude is " + autocomplete.getPlace().geometry.location.lat());
            _this.latng = {
                place: autocomplete.getPlace(),
                lat: autocomplete.getPlace().geometry.location.lat(),
                lng: autocomplete.getPlace().geometry.location.lng()
            };
            _this.onSelect.emit(_this.getFormattedAddress(autocomplete.getPlace(), autocomplete.getPlace().geometry.location.lat(), autocomplete.getPlace().geometry.location.lng()));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GooglePlacesDirective.prototype, "onSelect", void 0);
    GooglePlacesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[google-place]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GooglePlacesDirective);
    return GooglePlacesDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/BMTCAdmin/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map