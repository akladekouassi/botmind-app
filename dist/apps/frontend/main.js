(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/kOT":
/*!*****************************************************!*\
  !*** ./libs/service/blogs/src/lib/blogs.service.ts ***!
  \*****************************************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../apps/frontend/src/environments/environment */ "9L3M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");








const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' });
class BlogsService {
    constructor(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    newBlog(blog) {
        return this.http.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ADD_NEW_BLOG_API_URL, blog, { headers });
    }
    // Function to get all blogs from the database
    getAllBlogs() {
        return this.http.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GET_ALL_BLOGS_API_URL, { headers });
    }
    getSingleBlog(id) {
        return this.http.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GET_SINGLE_BLOG_API_URL + id, { headers });
    }
    getBlogsForUser(userID) {
        return this.http.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GET_BLOGS_FOR_USER_API_URL + userID, { headers });
    }
    editBlog(blog) {
        return this.http.put(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].UPDATE_BLOG_API_URL, blog, { headers });
    }
    deleteBlog(id) {
        return this.http.delete(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DELETE_BLOG_API_URL + id, { headers });
    }
    // Function to like a blog post
    likeBlog(id) {
        const blogData = { id };
        return this.http.put(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].LIKE_A_BLOG_API_URL, blogData, { headers });
    }
    // Function to dislike a blog post
    dislikeBlog(id) {
        const blogData = { id };
        return this.http.put(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DISLIKE_A_BLOG_API_URL, blogData, { headers });
    }
    // Function to post a comment on a blog post
    postComment(id, comment) {
        const blogData = {
            id,
            comment: comment,
        };
        return this.http.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].COMMENT_A_BLOG_API_URL, blogData, { headers });
    }
}
BlogsService.ɵfac = function BlogsService_Factory(t) { return new (t || BlogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BlogsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: BlogsService, factory: BlogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "/xRh":
/*!************************************************************************!*\
  !*** ./libs/blogs/src/lib/containers/edit-blog/edit-blog.component.ts ***!
  \************************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/edit-blog-form/edit-blog-form.component */ "T7yY");


class EditBlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditBlogComponent.ɵfac = function EditBlogComponent_Factory(t) { return new (t || EditBlogComponent)(); };
EditBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditBlogComponent, selectors: [["botmind-app-edit-blog"]], decls: 1, vars: 0, template: function EditBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "botmind-app-edit-blog-form");
    } }, directives: [_components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_1__["EditBlogFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./apps/frontend/src/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aklade/Documents/PROJECTS/BOTMIND/botmind-app/apps/frontend/src/main.ts */"tFSE");


/***/ }),

/***/ "2p+g":
/*!******************************************************************************************!*\
  !*** ./libs/blogs/src/lib/containers/current-user-blogs/current-user-blogs.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CurrentUserBlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserBlogsComponent", function() { return CurrentUserBlogsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @botmind-app/service/blogs */ "uaq7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");















const _c0 = function (a1) { return ["/edit-blog/", a1]; };
function CurrentUserBlogsComponent_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "dialpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, blog_r2._id));
} }
function CurrentUserBlogsComponent_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentUserBlogsComponent_div_1_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.deleteBlog(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "notifications_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CurrentUserBlogsComponent_div_1_div_33_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const liker_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](liker_r15);
} }
function CurrentUserBlogsComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CurrentUserBlogsComponent_div_1_div_33_mat_list_item_2_Template, 4, 1, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", blog_r2.likedBy);
} }
function CurrentUserBlogsComponent_div_1_div_34_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disliker_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](disliker_r18);
} }
function CurrentUserBlogsComponent_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CurrentUserBlogsComponent_div_1_div_34_mat_list_item_2_Template, 4, 1, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", blog_r2.dislikedBy);
} }
function CurrentUserBlogsComponent_div_1_div_35_mat_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "H4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", comment_r21.commentator, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comment_r21.comment);
} }
function CurrentUserBlogsComponent_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CurrentUserBlogsComponent_div_1_div_35_mat_list_1_Template, 6, 2, "mat-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", blog_r2.comments);
} }
function CurrentUserBlogsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-menu", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CurrentUserBlogsComponent_div_1_button_9_Template, 5, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CurrentUserBlogsComponent_div_1_button_10_Template, 5, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentUserBlogsComponent_div_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const blog_r2 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.likeBlog(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentUserBlogsComponent_div_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const blog_r2 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.dislikeBlog(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentUserBlogsComponent_div_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const i_r3 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.canComment(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentUserBlogsComponent_div_1_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const i_r3 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.canDisplayLiker(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Lik\u00E9 par:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentUserBlogsComponent_div_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const i_r3 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.canDisplayDisLikers(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Dislik\u00E9 par:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CurrentUserBlogsComponent_div_1_div_33_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CurrentUserBlogsComponent_div_1_div_34_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, CurrentUserBlogsComponent_div_1_div_35_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.currentUser._id === blog_r2.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.currentUser._id === blog_r2.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", blog_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", blog_r2.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Publi\u00E9 le:", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 12, blog_r2.createdAt, "dd/MM/YYYY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Like: ", blog_r2.likes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Dislike: ", blog_r2.dislikes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Commentaires : ", blog_r2.comments.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canDisplayLikers && i_r3 === ctx_r0.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canDisplayDislikers && i_r3 === ctx_r0.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canDisplayCommentField && i_r3 === ctx_r0.activeIdx);
} }
function CurrentUserBlogsComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Vous n'avez aucun blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CurrentUserBlogsComponent {
    constructor(blogService, formBuilder, toastr, activatedRoute, router) {
        this.blogService = blogService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.blogs = [];
        this.foundBlog = false;
        this.processing = false;
        this.newPost = false;
        this.loadingBlogs = false;
        this.canDisplayCommentField = false;
        this.canDisplayLikers = false;
        this.canDisplayDislikers = false;
        this.newComment = [];
        this.enabledComments = [];
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.loadBlogs();
    }
    loadBlogs() {
        this.blogService.getBlogsForUser(this.currentUser._id).subscribe(response => {
            if (response.success) {
                this.blogs = response.blogs;
            }
        }, error => { });
    }
    canComment(i) {
        this.activeIdx = i;
        this.canDisplayDislikers = false;
        this.canDisplayLikers = false;
        return this.canDisplayCommentField ? (this.canDisplayCommentField = false) : (this.canDisplayCommentField = true);
    }
    canDisplayLiker(i) {
        this.activeIdx = i;
        this.canDisplayDislikers = false;
        this.canDisplayCommentField = false;
        return this.canDisplayLikers ? (this.canDisplayLikers = false) : (this.canDisplayLikers = true);
    }
    canDisplayDisLikers(i) {
        this.activeIdx = i;
        this.canDisplayLikers = false;
        this.canDisplayCommentField = false;
        return this.canDisplayDislikers ? (this.canDisplayDislikers = false) : (this.canDisplayDislikers = true);
    }
    deleteBlog(blogID) {
        this.processing = true;
        this.blogService.deleteBlog(blogID).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'SUCCESS');
            }
            else {
                this.loadBlogs();
                this.toastr.success(data.message, 'SUCCESS');
            }
        });
    }
}
CurrentUserBlogsComponent.ɵfac = function CurrentUserBlogsComponent_Factory(t) { return new (t || CurrentUserBlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_2__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CurrentUserBlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CurrentUserBlogsComponent, selectors: [["botmind-app-current-user-blogs"]], decls: 3, vars: 2, consts: [[1, "container"], ["flex", "15", 4, "ngFor", "ngForOf"], ["class", "container", "flex", "15", 4, "ngIf"], ["flex", "15"], [1, "example-card"], [1, "cardHeader"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-card-avatar", "", 1, "avatarImage"], [2, "margin", "10px"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [4, "ngIf"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"], ["role", "list", 4, "ngFor", "ngForOf"], ["flex", "15", 1, "container"]], template: function CurrentUserBlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CurrentUserBlogsComponent_div_1_Template, 36, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CurrentUserBlogsComponent_h1_2_Template, 2, 0, "h1", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.blogs.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: \"auto\";\n  margin: 4px;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 40px;\n}\n\n.cardHeader[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2N1cnJlbnQtdXNlci1ibG9ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0oiLCJmaWxlIjoiY3VycmVudC11c2VyLWJsb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiBcImF1dG9cIjtcbiAgICBtYXJnaW46IDRweDtcbn1cblxubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5jYXJkSGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"] });


/***/ }),

/***/ "3bmm":
/*!**************************************************!*\
  !*** ./libs/material/src/lib/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");



// import { MatIconModule } from '@angular/material/icon';













const MatModules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
    // MatAccordion,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[...MatModules], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        // MatAccordion,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        // MatAccordion,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        // MatAccordion,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]] }); })();


/***/ }),

/***/ "7zVD":
/*!*******************************************************!*\
  !*** ./libs/service/auth/src/lib/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthInterceptor {
    intercept(req, next) {
        const idToken = localStorage.getItem('id_token');
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', idToken),
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "9L3M":
/*!*******************************************************!*\
  !*** ./apps/frontend/src/environments/environment.ts ***!
  \*******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    LOCAL_API_URL: "http://localhost:3001",
    PROD_API_URL: "https://heroku.com",
    LOGIN_API_URL: "http://localhost:3001/login",
    LOGOUT_API_URL: "http://localhost:3001/logout",
    CHECKAUTH_API_URL: "http://localhost:3001/checkAuth",
    REGISTER_USER_API_URL: "http://localhost:3001/users/register",
    GET_USER_PROFILE_API_URL: "http://localhost:3001/users/profile",
    UPDATE_USER_PROFILE_API_URL: "http://localhost:3001/users/updateProfile/",
    ADD_NEW_BLOG_API_URL: "http://localhost:3001/blog/addNewBlog",
    GET_ALL_BLOGS_API_URL: "http://localhost:3001/blog/allBlogs",
    GET_SINGLE_BLOG_API_URL: "http://localhost:3001/blog/singleBlog/",
    GET_BLOGS_FOR_USER_API_URL: "http://localhost:3001/blog/blogs/",
    UPDATE_BLOG_API_URL: "http://localhost:3001/blog/updateBlog",
    DELETE_BLOG_API_URL: "http://localhost:3001/blog/deleteBlog/",
    LIKE_A_BLOG_API_URL: "http://localhost:3001/blog/like",
    DISLIKE_A_BLOG_API_URL: "http://localhost:3001/blog/dislike",
    COMMENT_A_BLOG_API_URL: "http://localhost:3001/blog/comment",
    CHECK_EMAIL_API_URL: "http://localhost:3001/users/checkEmail/",
    CHECK_USERNAME_API_URL: "http://localhost:3001/users/checkUsername/",
    DELETE_USER_ACCOUNT_API_URL: "http://localhost:3001/users/deleteAccount",
    GET_ALL_USERS_API_URL: "http://localhost:3001/users/getAllUsers",
    MONGODB_USER_PASS: "Akladekouassi:Akladekouassi",
    MONGODB_URL: "cluster0.8stux.mongodb.net",
    MONGODB_NAME: "Botmind",
    MONGODB_AUTH_SOURCE: "admin ",
    MONGODB_AUTH_MECHANISME: "SCRAM-SHA-1"
};


/***/ }),

/***/ "ABSY":
/*!*****************************************************************************************!*\
  !*** ./libs/authentication/src/lib/components/register-form/register-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function RegisterFormComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 3, Caract\u00E8res maximum autoris\u00E9s: 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pas de caract\u00E8res speciaux autoris\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 3, Caract\u00E8res maximum autoris\u00E9s: 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pas de caract\u00E8res speciaux autoris\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Entrez un num\u00E9ro de t\u00E9l\u00E9phone valide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " L'identifiant est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 3, Caract\u00E8res Maximum autoris\u00E9s: 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " L'identifiant ne doit pas contenir de caract\u00E8res sp\u00E9ciaux! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "L\"email est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 5, Caract\u00E8res Maximum autoris\u00E9s: 30 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Veillez saisir un email valide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Le mot de passe est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 8, Caract\u00E8res Maximum autoris\u00E9s: 35 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Une lettre majuscule au moins, un chiffre au moins et un caract\u00E8re sp\u00E9cial au moins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Veuillez confirmer le mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function RegisterFormComponent_li_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class RegisterFormComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.processing = false;
        this.createForm();
    }
    ngOnInit() { }
    createForm() {
        this.form = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(30),
                    this.validateEmail,
                ]),
            ],
            username: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15),
                    this.validateOrdinaryText,
                ]),
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(35),
                    this.validatePassword,
                ]),
            ],
            firstName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                    this.validateOrdinaryText,
                ]),
            ],
            lastName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                    this.validateOrdinaryText,
                ]),
            ],
            phoneNumber: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                    this.validatePhoneNumber,
                ]),
            ],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }, { validator: this.matchingPasswords('password', 'confirm') });
    }
    // Function to disable the registration form
    disableForm() {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['firstName'].disable();
        this.form.controls['lastName'].disable();
        this.form.controls['phoneNumber'].disable();
        this.form.controls['confirm'].disable();
    }
    // Function to enable the registration form
    enableForm() {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['firstName'].enable();
        this.form.controls['lastName'].enable();
        this.form.controls['phoneNumber'].enable();
        this.form.controls['confirm'].enable();
    }
    // Function to validate e-mail is proper format
    validateEmail(controls) {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validateEmail: true };
        }
    }
    // Function to validate username is proper format
    validatePhoneNumber(controls) {
        const regExp = new RegExp(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validatePhoneNumber: true };
        }
    }
    validateOrdinaryText(controls) {
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validateOrdinaryText: true };
        }
    }
    validatePassword(controls) {
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validatePassword: true };
        }
    }
    matchingPasswords(password, confirm) {
        return (group) => {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { matchingPasswords: true };
            }
        };
    }
    checkEmail() {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.form.get('email').value !== '' && regExp.test(this.form.get('email').value)) {
            this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
                if (!data.success) {
                    this.toastr.error(data.message, 'MESSAGE');
                }
                else {
                    this.toastr.success(data.message, 'MESSAGE');
                }
            });
        }
    }
    checkUsername() {
        if (this.form.get('username').value !== '' && this.form.get('username').value.length >= 3) {
            this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
                if (!data.success) {
                    this.toastr.error(data.message, 'MESSAGE');
                }
                else {
                    this.toastr.success(data.message, 'MESSAGE');
                }
            });
        }
    }
    // Function to submit form
    onRegisterSubmit() {
        this.processing = true;
        this.disableForm();
        const user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            lastName: this.form.get('lastName').value,
            firstName: this.form.get('firstName').value,
            phoneNumber: this.form.get('phoneNumber').value,
        };
        this.authService.registerUser(user).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'MESSAGE');
                this.processing = false;
                this.enableForm();
            }
            else {
                this.toastr.success(data.message, 'MESSAGE');
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            }
        });
    }
}
RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) { return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
RegisterFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["botmind-app-register-form"]], decls: 66, vars: 20, consts: [[1, "container"], ["fxLayout", "column", "fxLayoutAlign", "center none", 3, "formGroup", "submit"], [1, "example-full-width"], ["type", "text", "matInput", "", "name", "lastName", "autocomplete", "off", "placeholder", "Aklade", "formControlName", "lastName"], [4, "ngIf"], ["type", "text", "matInput", "", "name", "firstName", "autocomplete", "off", "placeholder", "Kouassi Sosthene", "formControlName", "firstName"], ["type", "tel", "matInput", "", "name", "phoneNumber", "autocomplete", "off", "placeholder", "+2250778942837", "formControlName", "phoneNumber"], ["type", "text", "matInput", "", "name", "username", "autocomplete", "off", "placeholder", "*Username", "formControlName", "username", 1, "form-control", 3, "blur"], ["type", "email", "matInput", "", "name", "email", "autocomplete", "off", "placeholder", "*akladekouassi@gmail.com", "formControlName", "email", 1, "form-control", 3, "blur"], [1, "help-block"], ["matInput", "", "type", "password", "name", "password", "autocomplete", "off", "placeholder", "***********", "formControlName", "password"], ["type", "password", "matInput", "", "name", "confirm", "autocomplete", "off", "placeholder", "************", "formControlName", "confirm"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "submit"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "INSCRIPTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function RegisterFormComponent_Template_form_submit_5_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, RegisterFormComponent_li_12_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, RegisterFormComponent_li_13_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RegisterFormComponent_li_14_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RegisterFormComponent_li_21_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, RegisterFormComponent_li_22_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, RegisterFormComponent_li_23_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Numero de t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, RegisterFormComponent_mat_error_28_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Identifiant");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function RegisterFormComponent_Template_input_blur_32_listener() { return ctx.checkUsername(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, RegisterFormComponent_li_35_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, RegisterFormComponent_li_36_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, RegisterFormComponent_li_37_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function RegisterFormComponent_Template_input_blur_41_listener() { return ctx.checkEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, RegisterFormComponent_li_44_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, RegisterFormComponent_li_45_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, RegisterFormComponent_li_46_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, RegisterFormComponent_li_53_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, RegisterFormComponent_li_54_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, RegisterFormComponent_li_55_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, RegisterFormComponent_li_62_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, RegisterFormComponent_li_63_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function RegisterFormComponent_Template_button_submit_64_listener() { return ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Valider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.lastName.errors == null ? null : ctx.form.controls.lastName.errors.required) || ctx.form.controls.lastName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.lastName.errors == null ? null : ctx.form.controls.lastName.errors.minlength) && ctx.form.controls.lastName.dirty || (ctx.form.controls.lastName.errors == null ? null : ctx.form.controls.lastName.errors.maxlength) && ctx.form.controls.lastName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.lastName.errors == null ? null : ctx.form.controls.lastName.errors.validateOrdinaryText) && ctx.form.controls.lastName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.firstName.errors == null ? null : ctx.form.controls.firstName.errors.required) || ctx.form.controls.firstName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.firstName.errors == null ? null : ctx.form.controls.firstName.errors.minlength) && ctx.form.controls.firstName.dirty || (ctx.form.controls.firstName.errors == null ? null : ctx.form.controls.firstName.errors.maxlength) && ctx.form.controls.firstName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.firstName.errors == null ? null : ctx.form.controls.firstName.errors.validateOrdinaryText) && ctx.form.controls.firstName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.phoneNumber.errors == null ? null : ctx.form.controls.phoneNumber.errors.required) || ctx.form.controls.phoneNumber.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.required) || ctx.form.controls.username.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.minlength) && ctx.form.controls.username.dirty || (ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.maxlength) && ctx.form.controls.username.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.validateOrdinaryText) && ctx.form.controls.username.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.email.errors == null ? null : ctx.form.controls.email.errors.required) || ctx.form.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.email.errors == null ? null : ctx.form.controls.email.errors.minlength) && ctx.form.controls.email.dirty || (ctx.form.controls.email.errors == null ? null : ctx.form.controls.email.errors.maxlength) && ctx.form.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.email.errors == null ? null : ctx.form.controls.email.errors.validateEmail) && ctx.form.controls.email.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.required) && ctx.form.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.minlength) && ctx.form.controls.password.dirty || (ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.maxlength) && ctx.form.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.validatePassword) && ctx.form.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.controls.confirm.errors == null ? null : ctx.form.controls.confirm.errors.required) && ctx.form.controls.confirm.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.form.errors == null ? null : ctx.form.errors.matchingPasswords) && ctx.form.controls.confirm.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.processing);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "B5q5":
/*!*************************************************************************!*\
  !*** ./libs/authentication/src/lib/containers/login/login.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["botmind-app-login"]], decls: 1, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "botmind-app-login-form");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Diay":
/*!********************************************!*\
  !*** ./libs/blogs/src/lib/blogs.module.ts ***!
  \********************************************/
/*! exports provided: BlogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return BlogsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _botmind_app_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @botmind-app/material */ "uLmI");
/* harmony import */ var _containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/blogs/blogs.component */ "brvr");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/blog/blog.component */ "FC4K");
/* harmony import */ var _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @botmind-app/authentication */ "bW1L");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @botmind-app/service/blogs */ "uaq7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _containers_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/add-blog/add-blog.component */ "iYLi");
/* harmony import */ var _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-blog-form/edit-blog-form.component */ "T7yY");
/* harmony import */ var _containers_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/edit-blog/edit-blog.component */ "/xRh");
/* harmony import */ var _components_add_blog_form_add_blog_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-blog-form/add-blog-form.component */ "lolV");
/* harmony import */ var _containers_current_user_blogs_current_user_blogs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/current-user-blogs/current-user-blogs.component */ "2p+g");
/* harmony import */ var _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/profile/profile.component */ "jXJY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



 // Added
















class BlogsModule {
}
BlogsModule.ɵfac = function BlogsModule_Factory(t) { return new (t || BlogsModule)(); };
BlogsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: BlogsModule });
BlogsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
        _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
            multi: true,
        },
        ,
        _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_9__["BlogsService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _botmind_app_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            // HttpClientModule,
            // HttpModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            // RouterModule.forChild([{ path: '', component: BlogsComponent }]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](BlogsModule, { declarations: [_containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"],
        _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
        _containers_add_blog_add_blog_component__WEBPACK_IMPORTED_MODULE_12__["AddBlogComponent"],
        _components_add_blog_form_add_blog_form_component__WEBPACK_IMPORTED_MODULE_15__["AddBlogFormComponent"],
        _components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_13__["EditBlogFormComponent"],
        _containers_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_14__["EditBlogComponent"],
        _containers_current_user_blogs_current_user_blogs_component__WEBPACK_IMPORTED_MODULE_16__["CurrentUserBlogsComponent"],
        _containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _botmind_app_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        // RouterModule.forChild([{ path: '', component: BlogsComponent }]),
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "EhMY":
/*!**********************************************************!*\
  !*** ./libs/authentication/src/lib/guards/auth.guard.ts ***!
  \**********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.redirectUrl = state.url;
            this.router.navigate(['auth/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FC4K":
/*!**************************************************************!*\
  !*** ./libs/blogs/src/lib/components/blog/blog.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-app/service/blogs */ "uaq7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");


















const _c0 = function (a1) { return ["/edit-blog/", a1]; };
function BlogComponent_div_1_div_4_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Modifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, blog_r2._id));
} }
function BlogComponent_div_1_div_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_div_4_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.deleteBlog(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Supprimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlogComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", null, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BlogComponent_div_1_div_4_button_6_Template, 3, 3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BlogComponent_div_1_div_4_button_7_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r4.currentUser == null ? null : ctx_r4.currentUser._id) === blog_r2.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.currentUser._id === blog_r2.createdBy);
} }
function BlogComponent_div_1_div_30_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const liker_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](liker_r17);
} }
function BlogComponent_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BlogComponent_div_1_div_30_mat_list_item_2_Template, 4, 1, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", blog_r2.likedBy);
} }
function BlogComponent_div_1_div_31_mat_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disliker_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](disliker_r20);
} }
function BlogComponent_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BlogComponent_div_1_div_31_mat_list_item_2_Template, 4, 1, "mat-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", blog_r2.dislikedBy);
} }
function BlogComponent_div_1_form_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "H4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", comment_r24.commentator, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](comment_r24.comment);
} }
function BlogComponent_div_1_form_32_div_2_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlogComponent_div_1_form_32_div_2_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Comment must be at least 1 character but no more than 200. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlogComponent_div_1_form_32_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-form-field", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Leave a comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BlogComponent_div_1_form_32_div_2_li_6_Template, 2, 0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BlogComponent_div_1_form_32_div_2_li_7_Template, 2, 0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_form_32_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.postComment(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Publier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r23.commentForm.controls.comment.errors == null ? null : ctx_r23.commentForm.controls.comment.errors.required) && ctx_r23.commentForm.controls.comment.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r23.commentForm.controls.comment.errors == null ? null : ctx_r23.commentForm.controls.comment.errors.maxlength) && ctx_r23.commentForm.controls.comment.dirty || (ctx_r23.commentForm.controls.comment.errors == null ? null : ctx_r23.commentForm.controls.comment.errors.minlength) && ctx_r23.commentForm.controls.comment.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r23.commentForm.valid || ctx_r23.processing);
} }
function BlogComponent_div_1_form_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BlogComponent_div_1_form_32_div_1_Template, 8, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BlogComponent_div_1_form_32_div_2_Template, 10, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r7.commentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", blog_r2.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r7.currentUser == null ? null : ctx_r7.currentUser._id) !== blog_r2.createdBy);
} }
function BlogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BlogComponent_div_1_div_4_Template, 8, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const blog_r2 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.likeBlog(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const blog_r2 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.dislikeBlog(blog_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r3 = ctx.index; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.canComment(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r3 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r35.canDisplayLiker(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Lik\u00E9 par:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlogComponent_div_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const i_r3 = ctx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.canDisplayDisLikers(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Dislik\u00E9 par:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, BlogComponent_div_1_div_30_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, BlogComponent_div_1_div_31_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, BlogComponent_div_1_form_32_Template, 3, 3, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.currentUser == null ? null : ctx_r0.currentUser._id) === blog_r2.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", blog_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", blog_r2.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Publi\u00E9 le: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 12, blog_r2.createdAt, "dd/MM/YYYY"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Publi\u00E9 par: ", ctx_r0.getBlogAutor(blog_r2.createdBy), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Like: ", blog_r2.likes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Dislike: ", blog_r2.dislikes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", blog_r2.createdBy === (ctx_r0.currentUser == null ? null : ctx_r0.currentUser._id) ? "Commentaires" : "Commenter", " : ", blog_r2.comments.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canDisplayLikers && i_r3 === ctx_r0.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canDisplayDislikers && i_r3 === ctx_r0.activeIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.canDisplayCommentField && i_r3 === ctx_r0.activeIdx);
} }
function BlogComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "AUCUN ARTICLE PUBLI\u00C9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class BlogComponent {
    constructor(blogService, formBuilder, toastr, authService) {
        this.blogService = blogService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.authService = authService;
        this.processing = false;
        this.canDisplayCommentField = false;
        this.canDisplayLikers = false;
        this.canDisplayDislikers = false;
        this.loadingBlogs = false;
        this.newComment = [];
        this.enabledComments = [];
        this.users = [];
        this.createCommentForm();
    }
    // Function to post a new comment on blog post
    draftComment(id) {
        this.commentForm.reset();
        this.newComment = [];
        this.newComment.push(id);
    }
    // Function to cancel new post transaction
    cancelSubmission(id) {
        const index = this.newComment.indexOf(id);
        this.newComment.splice(index, 1);
        this.commentForm.reset();
        this.enableCommentForm();
        this.processing = false;
    }
    reloadBlogs() {
        this.loadingBlogs = true;
        this.loadBlogs();
        setTimeout(() => {
            this.loadingBlogs = false;
        }, 4000);
    }
    canComment(i) {
        this.activeIdx = i;
        this.canDisplayDislikers = false;
        this.canDisplayLikers = false;
        return this.canDisplayCommentField ? (this.canDisplayCommentField = false) : (this.canDisplayCommentField = true);
    }
    canDisplayLiker(i) {
        this.activeIdx = i;
        this.canDisplayDislikers = false;
        this.canDisplayCommentField = false;
        return this.canDisplayLikers ? (this.canDisplayLikers = false) : (this.canDisplayLikers = true);
    }
    canDisplayDisLikers(i) {
        this.activeIdx = i;
        this.canDisplayLikers = false;
        this.canDisplayCommentField = false;
        return this.canDisplayDislikers ? (this.canDisplayDislikers = false) : (this.canDisplayDislikers = true);
    }
    // Create form for posting comments
    createCommentForm() {
        this.commentForm = this.formBuilder.group({
            comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)])],
        });
    }
    // Enable the comment form
    enableCommentForm() {
        this.commentForm.get('comment').enable();
    }
    // Disable the comment form
    disableCommentForm() {
        this.commentForm.get('comment').disable();
    }
    getBlogAutor(id) {
        if (id === this.currentUser._id) {
            return 'Moi';
        }
        else {
            return this.users.filter((user) => user._id === id).map((user) => user.username);
        }
    }
    loadUsers() {
        return this.authService.getAllUsers().subscribe(response => {
            this.users = response.users;
        });
    }
    loadBlogs() {
        this.blogService.getAllBlogs().subscribe(response => {
            if (response.success) {
                this.blogs = response.blogs;
            }
        }, error => { });
    }
    deleteBlog(blogID) {
        if (window.confirm('Voulez vous vraiment supprimer cet blog?')) {
            this.processing = true;
            this.blogService.deleteBlog(blogID).subscribe(data => {
                if (!data.success) {
                    this.toastr.error(data.message, 'SUCCESS');
                }
                else {
                    this.loadBlogs();
                    this.toastr.success(data.message, 'SUCCESS');
                }
            });
        }
    }
    // Function to like a blog post
    likeBlog(id) {
        this.blogService.likeBlog(id).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'ERROR');
            }
            else {
                this.loadBlogs();
                this.toastr.success(data.message, 'SUCCESS');
            }
        });
    }
    // Function to disliked a blog post
    dislikeBlog(id) {
        // Service to dislike a blog post
        this.blogService.dislikeBlog(id).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'ERROR');
            }
            else {
                this.loadBlogs();
                this.toastr.success(data.message, 'SUCCESS');
            }
        });
    }
    // Function to post a new comment
    postComment(id) {
        this.disableCommentForm();
        this.processing = true;
        const comment = this.commentForm.get('comment').value;
        this.blogService.postComment(id, comment).subscribe(data => {
            if (data.success) {
                this.toastr.success(data.message, 'SUCCESS');
                this.loadBlogs();
                const index = this.newComment.indexOf(id);
                this.newComment.splice(index, 1);
                this.enableCommentForm();
                this.commentForm.reset();
                this.processing = false;
            }
            else {
                this.toastr.error(data.message, 'ERROR');
            }
        });
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
        this.loadBlogs();
        this.loadUsers();
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_0__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["botmind-app-blog"]], decls: 3, vars: 2, consts: [[1, "container"], ["flex", "15", 4, "ngFor", "ngForOf"], ["class", "container", 4, "ngIf"], ["flex", "15"], [1, "example-card"], [1, "cardHeader"], [4, "ngIf"], ["mat-card-avatar", "", 1, "avatarImage"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["class", "example-form", 3, "formGroup", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["role", "list"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"], [1, "example-form", 3, "formGroup"], [4, "ngFor", "ngForOf"], [1, "example-full-width"], ["matInput", "", "name", "comment", "formControlName", "comment", "placeholder", "Ex. It makes me feel..."], [1, "help-block"], ["type", "submit", "name", "button", "mat-stroked-button", "", "color", "warn", 3, "disabled", "click"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BlogComponent_div_1_Template, 33, 15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BlogComponent_div_2_Template, 3, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.blogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.blogs.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: \"auto\";\n  margin: 4px;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\nmat-card-title[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 40px;\n}\n\n.cardHeader[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 10px 0 10px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  display: none;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Jsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogXCJhdXRvXCI7XG4gICAgbWFyZ2luOiA0cHg7XG59XG5cbm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uY2FyZEhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbn1cblxuLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLm1hdC1mb3JtLWZpZWxkKy5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */"] });


/***/ }),

/***/ "Iq4O":
/*!*********************************************!*\
  !*** ./apps/frontend/src/app/app.module.ts ***!
  \*********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _botmind_app_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @botmind-app/material */ "uLmI");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "zH8v");
/* harmony import */ var _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @botmind-app/authentication */ "bW1L");
/* harmony import */ var _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @botmind-app/blogs */ "S3HX");
/* harmony import */ var _containers_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/layout/layout.component */ "LyA7");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @botmind-app/service/blogs */ "uaq7");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "KoxI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");






 // Added











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_13__["BlogsService"], _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_9__["NotAuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            // CommonModule,
            _botmind_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_9__["AuthenticationModule"],
            _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_10__["BlogsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
        ], _botmind_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _containers_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        // CommonModule,
        _botmind_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_9__["AuthenticationModule"],
        _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_10__["BlogsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"]], exports: [_botmind_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]] }); })();


/***/ }),

/***/ "KoxI":
/*!*****************************************************!*\
  !*** ./apps/frontend/src/app/app-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-app/authentication */ "bW1L");
/* harmony import */ var _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @botmind-app/blogs */ "S3HX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






// Our Array of Angular 2 Routes
const appRoutes = [
    {
        path: '',
        component: _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    },
    {
        path: 'auth/register',
        component: _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["NotAuthGuard"]],
    },
    {
        path: 'auth/login',
        component: _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["NotAuthGuard"]],
    },
    {
        path: 'blogs',
        component: _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_2__["BlogsComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'blogs/add',
        component: _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_2__["AddBlogFormComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'blogs/users/:id',
        component: _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_2__["CurrentUserBlogsComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'edit-blog/:id',
        component: _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_2__["EditBlogComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    {
        path: 'profile',
        component: _botmind_app_blogs__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        canActivate: [_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
    },
    { path: '**', redirectTo: 'auth/login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "LyA7":
/*!*********************************************************************!*\
  !*** ./apps/frontend/src/app/containers/layout/layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");













function LayoutComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Accueil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r1.user == null ? null : ctx_r1.user.firstName, " ", ctx_r1.user == null ? null : ctx_r1.user.lastName, " ");
} }
function LayoutComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Connexion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
function LayoutComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Inscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function (a1) { return ["/blogs/users/", a1]; };
const _c3 = ["*"];
class LayoutComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    onLogoutClick() {
        this.authService.logout().subscribe(response => {
            if (response.success) {
                this.toastr.success(response.message, 'SUCCESS');
                this.router.navigate(['/auth/login']);
            }
        });
    }
    getUser() {
        this.authService.getProfile().subscribe(response => (this.user = response.user));
    }
    ngOnInit() {
        this.getUser();
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["botmind-app-layout"]], ngContentSelectors: _c3, decls: 24, vars: 7, consts: [["color", "primary", "fxLayout", "row"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["routerLink", "/blogs", "routerLinkActive", "active", "mat-button", "", 4, "ngIf"], ["mat-button", "", "class", "mat-select-arrow-wrapper", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["routerLink", "/blogs/add", "mat-menu-item", ""], ["routerLink", "profile", "mat-menu-item", ""], ["routerLinkActive", "active", "mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["routerLink", "/auth/login", "routerLinkActive", "active", "mat-button", "", 4, "ngIf"], ["routerLink", "/auth/register", "routerLinkActive", "active", "mat-button", "", 3, "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "/blogs", "routerLinkActive", "active", "mat-button", ""], ["mat-button", "", 1, "mat-select-arrow-wrapper", 3, "matMenuTriggerFor"], ["routerLink", "/auth/login", "routerLinkActive", "active", "mat-button", ""], ["routerLink", "/auth/register", "routerLinkActive", "active", "mat-button", "", 3, "routerLinkActive", "routerLinkActiveOptions"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "BOTMIND BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LayoutComponent_button_9_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LayoutComponent_button_10_Template, 4, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Ajouter un blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Mon profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Voire mes blogs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_19_listener() { return ctx.onLogoutClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Deconnexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, LayoutComponent_button_21_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LayoutComponent_button_22_Template, 2, 4, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authService == null ? null : ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authService == null ? null : ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c2, ctx.user == null ? null : ctx.user._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\nflexDisplay[_ngcontent-%COMP%] {\n  display: inline;\n  flex-direction: row;\n}\n\nsection[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDE7XG59XG5cbmZsZXhEaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtbGFiZWwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG5cbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "RmQy":
/*!*******************************************************************************!*\
  !*** ./libs/authentication/src/lib/containers/register/register.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/register-form/register-form.component */ "ABSY");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["botmind-app-register"]], decls: 1, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "botmind-app-register-form");
    } }, directives: [_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__["RegisterFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S+Ri":
/*!***************************************************!*\
  !*** ./libs/service/auth/src/lib/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../apps/frontend/src/environments/environment */ "9L3M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");








const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-type': 'application/json' });
class AuthService {
    constructor(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({
                'Content-Type': 'application/json',
            }),
        });
    }
    // Function to get token from client local storage
    loadCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    // Function to register user accounts
    registerUser(user) {
        return this.http.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].REGISTER_USER_API_URL, user, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.json()));
    }
    // Function to register user accounts
    modifyProfile(user, userID) {
        return this.httpClient.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].UPDATE_USER_PROFILE_API_URL + userID, user, { headers });
    }
    // Function to register user accounts
    deleteAccount(username, email) {
        return this.httpClient.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].LOCAL_API_URL + '/users/deleteAccount', { username, email }, { headers });
    }
    // Function to check if username is taken
    checkUsername(username) {
        return this.http.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].CHECK_USERNAME_API_URL + username, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.json()));
    }
    // Function to check if e-mail is taken
    checkEmail(email) {
        return this.http.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].CHECK_EMAIL_API_URL + email, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.json()));
    }
    // Function to login user
    login(username, password) {
        return this.http.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].LOGIN_API_URL, { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.json()));
    }
    // Function to logout
    logout() {
        localStorage.clear();
        return this.http.post(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].LOGOUT_API_URL, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res.json()));
    }
    getAllUsers() {
        return this.httpClient.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].LOCAL_API_URL + '/users/getAllUsers', { headers });
    }
    // Function to store user's data in client local storage
    storeUserData(user) {
        const expiresAt = moment__WEBPACK_IMPORTED_MODULE_2__().add(Number.parseInt(user.expiresIn), 'days');
        localStorage.setItem('user', JSON.stringify(user.user));
        localStorage.setItem('id_token', user.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
    isLoggedIn() {
        return moment__WEBPACK_IMPORTED_MODULE_2__().isBefore(this.getExpiration(), 'second');
    }
    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        if (expiration) {
            const expiresAt = JSON.parse(expiration);
            return moment__WEBPACK_IMPORTED_MODULE_2__(expiresAt);
        }
        else {
            return moment__WEBPACK_IMPORTED_MODULE_2__();
        }
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    }
    // Function to get user's profile data
    getProfile() {
        return this.httpClient.get(_apps_frontend_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].GET_USER_PROFILE_API_URL, { headers });
    }
    // Function to check if user is logged in
    loggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "S3HX":
/*!*********************************!*\
  !*** ./libs/blogs/src/index.ts ***!
  \*********************************/
/*! exports provided: BlogsModule, BlogsComponent, AddBlogFormComponent, EditBlogFormComponent, EditBlogComponent, CurrentUserBlogsComponent, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_blogs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/blogs.module */ "Diay");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsModule", function() { return _lib_blogs_module__WEBPACK_IMPORTED_MODULE_0__["BlogsModule"]; });

/* harmony import */ var _lib_containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/containers/blogs/blogs.component */ "brvr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return _lib_containers_blogs_blogs_component__WEBPACK_IMPORTED_MODULE_1__["BlogsComponent"]; });

/* harmony import */ var _lib_components_add_blog_form_add_blog_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/add-blog-form/add-blog-form.component */ "lolV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddBlogFormComponent", function() { return _lib_components_add_blog_form_add_blog_form_component__WEBPACK_IMPORTED_MODULE_2__["AddBlogFormComponent"]; });

/* harmony import */ var _lib_components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components/edit-blog-form/edit-blog-form.component */ "T7yY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditBlogFormComponent", function() { return _lib_components_edit_blog_form_edit_blog_form_component__WEBPACK_IMPORTED_MODULE_3__["EditBlogFormComponent"]; });

/* harmony import */ var _lib_containers_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/containers/edit-blog/edit-blog.component */ "/xRh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return _lib_containers_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_4__["EditBlogComponent"]; });

/* harmony import */ var _lib_containers_current_user_blogs_current_user_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/containers/current-user-blogs/current-user-blogs.component */ "2p+g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrentUserBlogsComponent", function() { return _lib_containers_current_user_blogs_current_user_blogs_component__WEBPACK_IMPORTED_MODULE_5__["CurrentUserBlogsComponent"]; });

/* harmony import */ var _lib_containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/containers/profile/profile.component */ "jXJY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _lib_containers_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]; });








// export { DialogModal } from './lib/components/blog/blog.component';


/***/ }),

/***/ "T7yY":
/*!**********************************************************************************!*\
  !*** ./libs/blogs/src/lib/components/edit-blog-form/edit-blog-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditBlogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogFormComponent", function() { return EditBlogFormComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @botmind-app/service/blogs */ "uaq7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function EditBlogFormComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EditBlogFormComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Max length: 50, Min length: 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EditBlogFormComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EditBlogFormComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Caract\u00E8res max: 500, Caract\u00E8res Min: 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class EditBlogFormComponent {
    constructor(location, activatedRoute, blogService, router, toastr, formBuilder) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.router = router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.processing = false;
        this.loading = true;
        this.createNewBlogForm();
    }
    createNewBlogForm() {
        this.form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(80), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
        });
    }
    enableFormNewBlogForm() {
        this.form.get('title').enable();
        this.form.get('body').enable();
    }
    // Disable new blog form
    disableFormNewBlogForm() {
        this.form.get('title').disable();
        this.form.get('body').disable();
    }
    // Function to Submit Update
    updateBlogSubmit() {
        const blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            _id: this.currentUrl.id,
        };
        this.processing = true;
        this.blogService.editBlog(blog).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'error');
                this.processing = false;
            }
            else {
                this.toastr.success(data.message, 'error');
                setTimeout(() => {
                    this.router.navigate(['/blogs']);
                }, 2000);
            }
        });
    }
    // Function to go back to previous page
    goBack() {
        this.location.back();
    }
    ngOnInit() {
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(data => {
            if (!data.success) {
            }
            else {
                this.form.get('title').setValue(data.blog.title);
                this.form.get('body').setValue(data.blog.body);
                this.loading = false;
            }
        });
    }
}
EditBlogFormComponent.ɵfac = function EditBlogFormComponent_Factory(t) { return new (t || EditBlogFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_3__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditBlogFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EditBlogFormComponent, selectors: [["botmind-app-edit-blog-form"]], decls: 27, vars: 9, consts: [[1, "container"], ["name", "blogForm", "fxLayout", "column", "fxLayoutAlign", "center none", 3, "formGroup", "submit"], [1, "example-full-width"], ["matInput", "", "type", "text", "name", "title", "placeholder", "*Blog Title", "formControlName", "title", 1, "form-control", 3, "disabled"], [1, "help-block"], [4, "ngIf"], ["matInput", "", "name", "body", "rows", "8", "cols", "80", "placeholder", "*Blog Body", "formControlName", "body", 3, "disabled"], ["mat-raised-button", "", "type", "button", "name", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], ["mat-raised-button", "", "type", "submit", "name", "button", 1, "btn", "btn-success", 3, "disabled", "submit"]], template: function EditBlogFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "AJOUTER UN BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function EditBlogFormComponent_Template_form_submit_5_listener() { return ctx.updateBlogSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Titre du blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, EditBlogFormComponent_li_12_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, EditBlogFormComponent_li_13_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Contenu du blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EditBlogFormComponent_li_20_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, EditBlogFormComponent_li_21_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EditBlogFormComponent_Template_button_click_23_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function EditBlogFormComponent_Template_button_submit_25_listener() { return ctx.updateBlogSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Valider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.processing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.title.dirty && (ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.title.dirty && (ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.minlength) || ctx.form.controls.title.dirty && (ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.processing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.body.dirty && (ctx.form.controls.body.errors == null ? null : ctx.form.controls.body.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.body.dirty && (ctx.form.controls.body.errors == null ? null : ctx.form.controls.body.errors.minlength) || ctx.form.controls.body.dirty && (ctx.form.controls.body.errors == null ? null : ctx.form.controls.body.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.processing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.processing);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VkaXQtYmxvZy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1ibG9nLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "bW1L":
/*!******************************************!*\
  !*** ./libs/authentication/src/index.ts ***!
  \******************************************/
/*! exports provided: AuthenticationModule, LoginComponent, RegisterComponent, AuthGuard, NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_authentication_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/authentication.module */ "nuUF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return _lib_authentication_module__WEBPACK_IMPORTED_MODULE_0__["AuthenticationModule"]; });

/* harmony import */ var _lib_containers_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/containers/login/login.component */ "B5q5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _lib_containers_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]; });

/* harmony import */ var _lib_containers_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/containers/register/register.component */ "RmQy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _lib_containers_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _lib_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/guards/auth.guard */ "EhMY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _lib_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]; });

/* harmony import */ var _lib_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/guards/notAuth.guard */ "uj+6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return _lib_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_4__["NotAuthGuard"]; });









/***/ }),

/***/ "brvr":
/*!****************************************************************!*\
  !*** ./libs/blogs/src/lib/containers/blogs/blogs.component.ts ***!
  \****************************************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/blog/blog.component */ "FC4K");


class BlogsComponent {
    constructor() { }
    ngOnInit() { }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["botmind-app-blogs"]], decls: 1, vars: 0, template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "botmind-app-blog");
    } }, directives: [_components_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__["BlogComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "iYLi":
/*!**********************************************************************!*\
  !*** ./libs/blogs/src/lib/containers/add-blog/add-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogComponent", function() { return AddBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_add_blog_form_add_blog_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/add-blog-form/add-blog-form.component */ "lolV");


class AddBlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddBlogComponent.ɵfac = function AddBlogComponent_Factory(t) { return new (t || AddBlogComponent)(); };
AddBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBlogComponent, selectors: [["botmind-app-add-blog"]], decls: 1, vars: 0, template: function AddBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "botmind-app-add-blog-form");
    } }, directives: [_components_add_blog_form_add_blog_form_component__WEBPACK_IMPORTED_MODULE_1__["AddBlogFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "jXJY":
/*!********************************************************************!*\
  !*** ./libs/blogs/src/lib/containers/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
















function ProfileComponent_div_21_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 3, Caract\u00E8res maximum autoris\u00E9s: 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pas de caract\u00E8res speciaux autoris\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ce champ est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 3, Caract\u00E8res maximum autoris\u00E9s: 20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pas de caract\u00E8res speciaux autoris\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Entrez un num\u00E9ro de t\u00E9l\u00E9phone valide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " L'identifiant est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 3, Caract\u00E8res Maximum autoris\u00E9s: 15 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " L'identifiant ne doit pas contenir de caract\u00E8res sp\u00E9ciaux! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "L\"email est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 5, Caract\u00E8res Maximum autoris\u00E9s: 30 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Veillez saisir un email valide ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Le mot de passe est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Caract\u00E8res minimum autoris\u00E9s: 8, Caract\u00E8res Maximum autoris\u00E9s: 35 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Une lettre majuscule au moins, un chiffre au moins et un caract\u00E8re sp\u00E9cial au moins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Veuillez confirmer le mot de passe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_li_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Modifier Mon Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ProfileComponent_div_21_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onRegisterSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ProfileComponent_div_21_li_12_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ProfileComponent_div_21_li_13_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ProfileComponent_div_21_li_14_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProfileComponent_div_21_li_21_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ProfileComponent_div_21_li_22_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ProfileComponent_div_21_li_23_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Numero de t\u00E9l\u00E9phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ProfileComponent_div_21_mat_error_28_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Identifiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function ProfileComponent_div_21_Template_input_blur_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.checkUsername(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ProfileComponent_div_21_li_35_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ProfileComponent_div_21_li_36_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ProfileComponent_div_21_li_37_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function ProfileComponent_div_21_Template_input_blur_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.checkEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ProfileComponent_div_21_li_44_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, ProfileComponent_div_21_li_45_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, ProfileComponent_div_21_li_46_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, ProfileComponent_div_21_li_53_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, ProfileComponent_div_21_li_54_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, ProfileComponent_div_21_li_55_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, ProfileComponent_div_21_li_62_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, ProfileComponent_div_21_li_63_Template, 2, 0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ProfileComponent_div_21_Template_button_submit_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.onRegisterSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " Valider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.lastName.errors == null ? null : ctx_r0.form.controls.lastName.errors.required) || ctx_r0.form.controls.lastName.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.lastName.errors == null ? null : ctx_r0.form.controls.lastName.errors.minlength) && ctx_r0.form.controls.lastName.dirty || (ctx_r0.form.controls.lastName.errors == null ? null : ctx_r0.form.controls.lastName.errors.maxlength) && ctx_r0.form.controls.lastName.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.lastName.errors == null ? null : ctx_r0.form.controls.lastName.errors.validateOrdinaryText) && ctx_r0.form.controls.lastName.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.firstName.errors == null ? null : ctx_r0.form.controls.firstName.errors.required) || ctx_r0.form.controls.firstName.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.firstName.errors == null ? null : ctx_r0.form.controls.firstName.errors.minlength) && ctx_r0.form.controls.firstName.dirty || (ctx_r0.form.controls.firstName.errors == null ? null : ctx_r0.form.controls.firstName.errors.maxlength) && ctx_r0.form.controls.firstName.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.firstName.errors == null ? null : ctx_r0.form.controls.firstName.errors.validateOrdinaryText) && ctx_r0.form.controls.firstName.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.phoneNumber.errors == null ? null : ctx_r0.form.controls.phoneNumber.errors.required) || ctx_r0.form.controls.phoneNumber.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username.errors == null ? null : ctx_r0.form.controls.username.errors.required) || ctx_r0.form.controls.username.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username.errors == null ? null : ctx_r0.form.controls.username.errors.minlength) && ctx_r0.form.controls.username.dirty || (ctx_r0.form.controls.username.errors == null ? null : ctx_r0.form.controls.username.errors.maxlength) && ctx_r0.form.controls.username.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username.errors == null ? null : ctx_r0.form.controls.username.errors.validateOrdinaryText) && ctx_r0.form.controls.username.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.email.errors == null ? null : ctx_r0.form.controls.email.errors.required) || ctx_r0.form.controls.email.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.email.errors == null ? null : ctx_r0.form.controls.email.errors.minlength) && ctx_r0.form.controls.email.dirty || (ctx_r0.form.controls.email.errors == null ? null : ctx_r0.form.controls.email.errors.maxlength) && ctx_r0.form.controls.email.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.email.errors == null ? null : ctx_r0.form.controls.email.errors.validateEmail) && ctx_r0.form.controls.email.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.password.errors == null ? null : ctx_r0.form.controls.password.errors.required) && ctx_r0.form.controls.password.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.password.errors == null ? null : ctx_r0.form.controls.password.errors.minlength) && ctx_r0.form.controls.password.dirty || (ctx_r0.form.controls.password.errors == null ? null : ctx_r0.form.controls.password.errors.maxlength) && ctx_r0.form.controls.password.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.password.errors == null ? null : ctx_r0.form.controls.password.errors.validatePassword) && ctx_r0.form.controls.password.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.confirm.errors == null ? null : ctx_r0.form.controls.confirm.errors.required) && ctx_r0.form.controls.confirm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r0.form.errors == null ? null : ctx_r0.form.errors.matchingPasswords) && ctx_r0.form.controls.confirm.dirty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.form.valid || ctx_r0.processing);
} }
class ProfileComponent {
    constructor(formBuilder, authService, router, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.canDisplayField = false;
        this.processing = false;
        this.createForm();
    }
    modify() {
        this.form.get('lastName').setValue(this.user.lastName);
        this.form.get('firstName').setValue(this.user.firstName);
        this.form.get('phoneNumber').setValue(this.user.phoneNumber);
        this.form.get('username').setValue(this.user.username);
        this.form.get('email').setValue(this.user.email);
        return this.canDisplayField ? (this.canDisplayField = false) : (this.canDisplayField = true);
    }
    getUser() {
        this.authService.getProfile().subscribe(response => (this.user = response.user));
    }
    deleteAccount() {
        if (window.confirm('Êtes vous sûr de cette action ? elle est irreversible!')) {
            this.authService.deleteAccount(this.user.username, this.user.email).subscribe(response => {
                this.toastr.success(response.message, 'SUCCESS');
                this.router.navigate(['/auth/login']);
                localStorage.clear();
            });
        }
    }
    ngOnInit() {
        this.getUser();
    }
    // Function to create registration form
    createForm() {
        this.form = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(30),
                    this.validateEmail,
                ]),
            ],
            username: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(15),
                    this.validateOrdinaryText,
                ]),
            ],
            // Password Input
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(35),
                    this.validatePassword,
                ]),
            ],
            firstName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                    this.validateOrdinaryText,
                ]),
            ],
            lastName: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                    this.validateOrdinaryText,
                ]),
            ],
            phoneNumber: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                    this.validatePhoneNumber,
                ]),
            ],
            // Confirm Password Input
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        }, { validator: this.matchingPasswords('password', 'confirm') });
    }
    // Function to disable the registration form
    disableForm() {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['firstName'].disable();
        this.form.controls['lastName'].disable();
        this.form.controls['phoneNumber'].disable();
        this.form.controls['confirm'].disable();
    }
    // Function to enable the registration form
    enableForm() {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['firstName'].enable();
        this.form.controls['lastName'].enable();
        this.form.controls['phoneNumber'].enable();
        this.form.controls['confirm'].enable();
    }
    // Function to validate e-mail is proper format
    validateEmail(controls) {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validateEmail: true };
        }
    }
    // Function to validate username is proper format
    validatePhoneNumber(controls) {
        const regExp = new RegExp(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validatePhoneNumber: true };
        }
    }
    validateOrdinaryText(controls) {
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validateOrdinaryText: true };
        }
    }
    validatePassword(controls) {
        const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { validatePassword: true };
        }
    }
    matchingPasswords(password, confirm) {
        return (group) => {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { matchingPasswords: true };
            }
        };
    }
    checkEmail() {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (this.form.get('email').value !== '' && regExp.test(this.form.get('email').value)) {
            this.authService.checkEmail(this.form.get('email').value).subscribe(data => {
                if (!data.success) {
                    this.toastr.error(data.message, 'MESSAGE');
                }
                else {
                    this.toastr.success(data.message, 'MESSAGE');
                }
            });
        }
    }
    checkUsername() {
        if (this.form.get('username').value !== '' && this.form.get('username').value.length >= 3) {
            this.authService.checkUsername(this.form.get('username').value).subscribe(data => {
                if (!data.success) {
                    this.toastr.error(data.message, 'MESSAGE');
                }
                else {
                    this.toastr.success(data.message, 'MESSAGE');
                }
            });
        }
    }
    // Function to submit form
    onRegisterSubmit() {
        this.processing = true;
        this.disableForm();
        const user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            lastName: this.form.get('lastName').value,
            firstName: this.form.get('firstName').value,
            phoneNumber: this.form.get('phoneNumber').value,
        };
        this.authService.modifyProfile(user, this.user._id).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'MESSAGE');
                this.processing = false;
                this.enableForm();
            }
            else {
                this.getUser();
                this.canDisplayField = false;
                this.toastr.success(data.message, 'MESSAGE');
                this.form.reset();
            }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["botmind-app-profile"]], decls: 22, vars: 7, consts: [[1, "container"], ["role", "list"], ["role", "listitem"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["class", "container", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center none", 3, "formGroup", "submit"], [1, "example-full-width"], ["type", "text", "matInput", "", "name", "lastName", "autocomplete", "off", "placeholder", "Aklade", "formControlName", "lastName"], [4, "ngIf"], ["type", "text", "matInput", "", "name", "firstName", "autocomplete", "off", "placeholder", "Kouassi Sosthene", "formControlName", "firstName"], ["type", "tel", "matInput", "", "name", "phoneNumber", "autocomplete", "off", "placeholder", "+2250778942837", "formControlName", "phoneNumber"], ["type", "text", "matInput", "", "name", "username", "autocomplete", "off", "placeholder", "*Username", "formControlName", "username", 1, "form-control", 3, "blur"], ["type", "email", "matInput", "", "name", "email", "autocomplete", "off", "placeholder", "*akladekouassi@gmail.com", "formControlName", "email", 1, "form-control", 3, "blur"], [1, "help-block"], ["matInput", "", "type", "password", "name", "password", "autocomplete", "off", "placeholder", "***********", "formControlName", "password"], ["type", "password", "matInput", "", "name", "confirm", "autocomplete", "off", "placeholder", "************", "formControlName", "confirm"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "submit"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Mon profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_17_listener() { return ctx.modify(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_19_listener() { return ctx.deleteAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Supprimer le compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ProfileComponent_div_21_Template, 66, 20, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Nom: ", ctx.user == null ? null : ctx.user.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Pr\u00E9nom: ", ctx.user == null ? null : ctx.user.firstName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("T\u00E9l\u00E9phone: ", ctx.user == null ? null : ctx.user.phoneNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Identifiant: ", ctx.user == null ? null : ctx.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Email: ", ctx.user == null ? null : ctx.user.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.canDisplayField ? "Annuler" : "Modifier", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.canDisplayField);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "lolV":
/*!********************************************************************************!*\
  !*** ./libs/blogs/src/lib/components/add-blog-form/add-blog-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddBlogFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogFormComponent", function() { return AddBlogFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-app/service/blogs */ "uaq7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
















function AddBlogFormComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddBlogFormComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Caract\u00E8res Max: 50, Caract\u00E8res Min: 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddBlogFormComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "This field is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddBlogFormComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Max length: 500, Min length: 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class AddBlogFormComponent {
    constructor(formBuilder, blogService, toastr, router, location) {
        this.formBuilder = formBuilder;
        this.blogService = blogService;
        this.toastr = toastr;
        this.router = router;
        this.location = location;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.createNewBlogForm();
    }
    // Function to create new blog form
    createNewBlogForm() {
        this.form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)])],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(5)])],
        });
    }
    // Enable new blog form
    enableFormNewBlogForm() {
        this.form.get('title').enable();
        this.form.get('body').enable();
    }
    // Disable new blog form
    disableFormNewBlogForm() {
        this.form.get('title').disable();
        this.form.get('body').disable();
    }
    // Reload blogs on current page
    reloadBlogs() {
        this.loadingBlogs = true;
        this.getAllBlogs();
        setTimeout(() => {
            this.loadingBlogs = false;
        }, 4000);
    }
    // Function to submit a new blog post
    onBlogSubmit() {
        this.processing = true;
        this.disableFormNewBlogForm();
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: currentUser._id,
        };
        this.blogService.newBlog(blog).subscribe(data => {
            if (!data.success) {
                this.toastr.error(data.message, 'ERROR');
                this.processing = false;
                this.enableFormNewBlogForm();
            }
            else {
                this.toastr.success(data.message, 'SUCCESS');
                this.getAllBlogs();
                setTimeout(() => {
                    this.router.navigate(['/blogs']);
                    this.processing = false;
                    this.form.reset();
                    this.enableFormNewBlogForm();
                }, 2000);
            }
        });
    }
    // Function to go back to previous page
    goBack() {
        window.location.reload();
        this.location.back();
    }
    // Function to get all blogs from the database
    getAllBlogs() {
        this.blogService.getAllBlogs().subscribe(data => {
            this.blogPosts = data.blogs;
        });
    }
    ngOnInit() {
        this.getAllBlogs();
    }
}
AddBlogFormComponent.ɵfac = function AddBlogFormComponent_Factory(t) { return new (t || AddBlogFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_botmind_app_service_blogs__WEBPACK_IMPORTED_MODULE_1__["BlogsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
AddBlogFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddBlogFormComponent, selectors: [["botmind-app-add-blog-form"]], decls: 27, vars: 7, consts: [[1, "container"], ["name", "blogForm", "fxLayout", "column", "fxLayoutAlign", "center none", 3, "formGroup", "submit"], [1, "example-full-width"], ["matInput", "", "type", "text", "name", "title", "placeholder", "*Blog Title", "autocomplete", "off", "formControlName", "title", 1, "form-control"], [1, "help-block"], [4, "ngIf"], ["matInput", "", "name", "body", "rows", "8", "cols", "80", "placeholder", "*Body", "formControlName", "body", 1, "form-control"], ["mat-raised-button", "", "type", "button", "name", "button", 1, "btn", "btn-warning", 3, "disabled", "click"], ["mat-raised-button", "", "type", "submit", "name", "button", 1, "btn", "btn-success", 3, "disabled", "submit"]], template: function AddBlogFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "AJOUTER UN BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddBlogFormComponent_Template_form_submit_5_listener() { return ctx.onBlogSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Titre du blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddBlogFormComponent_li_12_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddBlogFormComponent_li_13_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Contenu du blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddBlogFormComponent_li_20_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddBlogFormComponent_li_21_Template, 2, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddBlogFormComponent_Template_button_click_23_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AddBlogFormComponent_Template_button_submit_25_listener() { return ctx.onBlogSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Valider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.title.dirty && (ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.title.dirty && (ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.minlength) || ctx.form.controls.title.dirty && (ctx.form.controls.title.errors == null ? null : ctx.form.controls.title.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.body.dirty && (ctx.form.controls.body.errors == null ? null : ctx.form.controls.body.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.controls.body.dirty && (ctx.form.controls.body.errors == null ? null : ctx.form.controls.body.errors.minlength) || ctx.form.controls.body.dirty && (ctx.form.controls.body.errors == null ? null : ctx.form.controls.body.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.processing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.processing || !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FkZC1ibG9nLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJhZGQtYmxvZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "nuUF":
/*!**************************************************************!*\
  !*** ./libs/authentication/src/lib/authentication.module.ts ***!
  \**************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _botmind_app_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @botmind-app/material */ "uLmI");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/login/login.component */ "B5q5");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "ycVC");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/register/register.component */ "RmQy");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "ABSY");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");



 // Added







class AuthenticationModule {
}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
            multi: true,
        },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _botmind_app_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_containers_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"], _containers_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__["RegisterFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _botmind_app_material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetComponentScope"](_containers_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], [_components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"]], []);


/***/ }),

/***/ "tFSE":
/*!***********************************!*\
  !*** ./apps/frontend/src/main.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "Iq4O");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "9L3M");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "uLmI":
/*!************************************!*\
  !*** ./libs/material/src/index.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/material.module */ "3bmm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return _lib_material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"]; });




/***/ }),

/***/ "uaq7":
/*!*****************************************!*\
  !*** ./libs/service/blogs/src/index.ts ***!
  \*****************************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_blogs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/blogs.service */ "/kOT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return _lib_blogs_service__WEBPACK_IMPORTED_MODULE_0__["BlogsService"]; });




/***/ }),

/***/ "uj+6":
/*!*************************************************************!*\
  !*** ./libs/authentication/src/lib/guards/notAuth.guard.ts ***!
  \*************************************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class NotAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        else {
            return true;
        }
    }
}
NotAuthGuard.ɵfac = function NotAuthGuard_Factory(t) { return new (t || NotAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
NotAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotAuthGuard, factory: NotAuthGuard.ɵfac });


/***/ }),

/***/ "uzdX":
/*!****************************************!*\
  !*** ./libs/service/auth/src/index.ts ***!
  \****************************************/
/*! exports provided: AuthService, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.service */ "S+Ri");
/* empty/unused harmony star reexport *//* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _lib_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _lib_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/auth.interceptor */ "7zVD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return _lib_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"]; });






/***/ }),

/***/ "ycVC":
/*!***********************************************************************************!*\
  !*** ./libs/authentication/src/lib/components/login-form/login-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @botmind-app/service/auth */ "uzdX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _botmind_app_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @botmind-app/authentication */ "bW1L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

















function LoginFormComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " L'identifiant est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginFormComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Le mot de passe est obligatoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class LoginFormComponent {
    constructor(formBuilder, authService, router, authGuard, toastr) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.authGuard = authGuard;
        this.toastr = toastr;
        this.processing = false;
        this.createForm();
    }
    // Function to create login form
    createForm() {
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    // Function to disable form
    disableForm() {
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
    }
    // Function to enable form
    enableForm() {
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
    }
    // Functiont to submit form and login user
    onLoginSubmit() {
        this.processing = true;
        this.disableForm();
        const user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value,
        };
        this.authService.login(user.username, user.password).subscribe(data => {
            if (!data.success) {
                this.form.reset();
                this.toastr.error(data.msg, 'MESSAGE');
                this.processing = false;
                this.enableForm();
            }
            else {
                this.form.reset();
                this.authService.storeUserData(data);
                this.toastr.success(data.message, 'MESSAGE');
                setTimeout(() => {
                    this.enableForm();
                    this.router.navigate(['/blogs']);
                }, 2000);
            }
        }, error => {
            setTimeout(() => {
                this.processing = false;
                this.enableForm();
            }, 2000);
            this.toastr.error('Utilisateur introuvable', 'MESSAGE');
        });
    }
    ngOnInit() {
        if (this.authGuard.redirectUrl) {
            this.toastr.error('Vous devez être connecté pour acceder à cette page.', 'MESSAGE');
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_botmind_app_service_auth__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_botmind_app_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["botmind-app-login-form"]], decls: 22, vars: 4, consts: [[1, "container"], ["fxLayout", "column", "fxLayoutAlign", "center none", 3, "formGroup", "submit"], [1, "example-full-width"], ["type", "text", "matInput", "", "name", "username", "autocomplete", "off", "placeholder", "*Username", "formControlName", "username", 1, "form-control"], [4, "ngIf"], ["matInput", "", "type", "password", "name", "password", "autocomplete", "off", "placeholder", "***********", "formControlName", "password"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "CONNEXION");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function LoginFormComponent_Template_form_submit_5_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Identifiant");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, LoginFormComponent_li_12_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, LoginFormComponent_li_19_Template, 2, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Valider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.required) || ctx.form.controls.username.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.required) && ctx.form.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.processing);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "zH8v":
/*!************************************************!*\
  !*** ./apps/frontend/src/app/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _containers_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/layout/layout.component */ "LyA7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["botmind-app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "botmind-app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_containers_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  max-width: \"100%\";\n  margin: 50px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZW1vdmUgdGVtcGxhdGUgY29kZSBiZWxvd1xuICovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IFwiMTAwJVwiO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map