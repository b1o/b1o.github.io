var ac_main =
webpackJsonpac__name_([1],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(42);

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(203);

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(205);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Init app');
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        styles: [
            __webpack_require__(49)
        ],
        template: "\n    <h1>Helo</h1>\n    <router-outlet></router-outlet>\n  "
    })
], AppComponent);



/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_posts_post_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_tumblrApi_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_emitter_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_mdl_core__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tests_test_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_tests_question_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_audio_visualizer_audio_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_jquery__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });









// App is our top level component











var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_posts_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_user_user_component__["a" /* UserCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_tests_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_tests_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_audio_visualizer_audio_component__["a" /* AudioComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__["InfiniteScrollModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["JsonpModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_mdl_core__["a" /* MdlModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["PreloadAllModules"] })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__environment__["b" /* ENV_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_12__services_tumblrApi_service__["a" /* TumblrApi */],
            __WEBPACK_IMPORTED_MODULE_13__services_emitter_service__["a" /* EmitterService */]
        ],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"]])
], AppModule);



/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tests_test_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_audio_visualizer_audio_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });



var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_audio_visualizer_audio_component__["a" /* AudioComponent */] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */], children: [
            { path: 'tagged/:tag', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] }
        ]
    },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_1__components_tests_test_component__["a" /* TestComponent */] },
    { path: 'music', component: __WEBPACK_IMPORTED_MODULE_2__components_audio_visualizer_audio_component__["a" /* AudioComponent */] }
];


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_emitter_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });



var PostComponent = (function () {
    function PostComponent(emitter) {
        this.emitter = emitter;
        this.photos = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        console.log('init for post', this.post);
        this.getPhoto();
        if (this.post.photoset_layout) {
            this.getPhotosFromPost();
        }
    };
    PostComponent.prototype.tagClicked = function (tag) {
        this.emitter.send({ cmd: 'tagClicked', msg: tag });
    };
    PostComponent.prototype.getPhoto = function () {
        this.photo = this.post.photos[0].original_size.url;
    };
    PostComponent.prototype.getPhotosFromPost = function () {
        if (this.post.photoset_layout) {
            var photoIndex = 0;
            var layoutArray = this.layoutToArray(this.post.photoset_layout);
            console.log('layout array', layoutArray);
            for (var _i = 0, layoutArray_1 = layoutArray; _i < layoutArray_1.length; _i++) {
                var row = layoutArray_1[_i];
                var temp = [];
                for (var i = 0; i < row; i++) {
                    console.log(photoIndex);
                    temp.push(this.post.photos[photoIndex++]);
                }
                this.photos.push(temp);
            }
        }
        else {
            this.photos.push(this.post.photos[0]);
        }
        console.log('parsed photo layout', this.photos);
    };
    PostComponent.prototype.layoutToArray = function (layout) {
        var array = [];
        for (var i = 0; i < layout.length; i++) {
            var entry = +layout[i];
            array.push(entry);
        }
        return array;
    };
    return PostComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], PostComponent.prototype, "post", void 0);
PostComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'post',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(137)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_emitter_service__["a" /* EmitterService */]])
], PostComponent);



/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });


var QuestionComponent = (function () {
    function QuestionComponent() {
        this.isEditingTitle = false;
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent.prototype.editTitle = function () {
        this.isEditingTitle = true;
    };
    QuestionComponent.prototype.addAnswer = function () {
        if (!this.question.answers) {
            this.question.answers = [];
        }
        this.question.answers.push({
            name: "answers " + (this.question.answers.length + 1),
            isRight: false,
            isEditing: false,
            id: this.question.answers.length
        });
    };
    QuestionComponent.prototype.markAsRight = function (answer) {
        for (var _i = 0, _a = this.question.answers; _i < _a.length; _i++) {
            var answer_1 = _a[_i];
            answer_1.isRight = false;
        }
        answer.isRight = true;
    };
    QuestionComponent.prototype.editAnswer = function (answer) {
        for (var _i = 0, _a = this.question.answers; _i < _a.length; _i++) {
            var answer_2 = _a[_i];
            answer_2.isEditing = false;
        }
        answer.isEditing = true;
    };
    QuestionComponent.prototype.doneEditing = function (event) {
        console.log(event);
        for (var _i = 0, _a = this.question.answers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.isEditing = false;
        }
    };
    QuestionComponent.prototype.doneEditTitle = function (event) {
        if (event.keyCode === 13) {
            this.isEditingTitle = false;
        }
    };
    QuestionComponent.prototype.keyPressed = function (event, isTitle) {
        if (isTitle === void 0) { isTitle = false; }
        if (event.keyCode === 13) {
            this.doneEditing(event);
        }
    };
    return QuestionComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], QuestionComponent.prototype, "question", void 0);
QuestionComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'question',
        template: __webpack_require__(138),
        styles: [__webpack_require__(49)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], QuestionComponent);



/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tumblrApi_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_emitter_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardComponent; });




var UserCardComponent = (function () {
    function UserCardComponent(tumblrApi, emitter) {
        var _this = this;
        this.tumblrApi = tumblrApi;
        this.emitter = emitter;
        this.avatar = this.tumblrApi.getAvatarLink(512);
        this.emitter.get().subscribe(function (data) {
            if (data.cmd === 'subTitleChanged') {
                _this.subTitle = data.msg;
            }
        });
    }
    UserCardComponent.prototype.ngOnChanges = function () {
        console.log('init user card for', this.user);
    };
    return UserCardComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], UserCardComponent.prototype, "user", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], UserCardComponent.prototype, "subTitle", void 0);
UserCardComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'user-card',
        template: __webpack_require__(140),
        styles: [__webpack_require__(143)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tumblrApi_service__["a" /* TumblrApi */], __WEBPACK_IMPORTED_MODULE_3__services_emitter_service__["a" /* EmitterService */]])
], UserCardComponent);



/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    OAuthKey: 'ndsAR5cxp2lEAk2YdUfGVLbNbf0i5A7XRJe7qQzxak3RZ8YpyP',
    tumblrBaseUrl: 'https://api.tumblr.com/v2/blog/',
    blogName: 'b1od.tumblr.com'
};


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostType; });
var PostType;
(function (PostType) {
    PostType[PostType["photo"] = 0] = "photo";
    PostType[PostType["text"] = 1] = "text";
    PostType[PostType["quote"] = 2] = "quote";
    PostType[PostType["link"] = 3] = "link";
    PostType[PostType["answer"] = 4] = "answer";
    PostType[PostType["video"] = 5] = "video";
    PostType[PostType["audio"] = 6] = "audio";
    PostType[PostType["chat"] = 7] = "chat";
})(PostType || (PostType = {}));


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)();
// imports


// module
exports.push([module.i, ".slick-slide img {\n  display: initial;\n}\n\n.aside {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 1000px;\n  width: 33%;\n}\n\n.isRight {\n  background: palegreen;\n}\n\n.fixed {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top:0;\n  right:0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n}\n\nbody {\n  background-image: url(" + __webpack_require__(135) + ")\n}\n\n.mdl-layout__drawer {\n  background: transparent;\n  border:none;\n}", ""]);

// exports


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)();
// imports


// module
exports.push([module.i, ".card-img-top {\n    width: 100%;\n}\n\n.card  {\n    max-width: 250px;\n}", ""]);

// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41856f4427be367ddb6e11c82d18e820.jpg";

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = "<style>\n  .fullscreen {\n    width:100%;\n    height:100%;\n    position: absolute;\n    top:0;\n    left:0;\n    z-index: -1;\n  }\n</style>\n\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <h1>Hello</h1>\n    <button mdl-button mdl-ripple mdl-button-type=\"raised\" (click)=\"changeInput()\">Use mic</button>\n    <button mdl-button mdl-ripple mdl-button-type=\"raised\" (click)=\"fullscreen = !fullscreen\">Full screen</button>\n\n<div>\n    <mdl-textfield *ngIf=\"audio\" type=\"file\" label=\"music link\" floating-label [(ngModel)]=\"file\" (change)=\"fileChanged($event)\"></mdl-textfield>\n  \n</div>\n    <div class=\"duration\">\n      {{currentTime}}/{{duration}}\n    </div>\n    {{this.progress}}%\n    <mdl-progress [progress]=\"progress\"></mdl-progress>\n    <button (click)=\"play()\" mdl-button mdl-ripple mdl-button-type=\"raised\">Play</button>\n    <button (click)=\"pause()\" mdl-button mdl-ripple mdl-button-type=\"raised\">Pause</button>\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col\">\n\n\n    <canvas #board [ngClass]=\"{'fullscreen': fullscreen}\" ></canvas>\n\n    <div style=\"width: 500px;\">\n      Bar count: {{barCount}}\n      <mdl-slider #slider [min]=\"2.5\" [max]=\"20\" [step]=\"0.5\" [(ngModel)]=\"barRatio\" (onchange)=\"getSliderStep()\"></mdl-slider>\n    </div>\n\n    <div style=\"width: 500px;\">\n      Bar height: {{barHeightRatio}}\n      <mdl-slider #slider [min]=\"0.1\" [max]=\"2\" [step]=\"0.1\" [(ngModel)]=\"barHeightRatio\" (onchange)=\"getSliderStep()\"></mdl-slider>\n    </div>\n\n    <div style=\"width: 500px;\">\n      Smoothing: {{smoothness}}\n      <mdl-slider #slider [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [(ngModel)]=\"analyzer.smoothingTimeConstant\" (onchange)=\"getSliderStep()\"></mdl-slider>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<style>\n  .photoset-row {\n    display: flex;\n    flex-direction: row;\n  }\n  \n  .post {\n    margin-bottom: 10px;\n    box-shadow: 0px 0px 15px black;\n    border: none;\n    transition: all .5s;\n    width: 100%;\n    border: none;\n    z-index:0;\n  }\n  \n  .post:hover .mdl-card__media{\n      transform: scale(1.1);\n      z-index:1;\n  }\n\n  .post-image img {\n    width: 100%;\n  }\n  \n  .photoset-row-1 img {\n    width: 100%;\n    margin: 0;\n  }\n  \n  .photoset-row-3 img {\n    width: 33.33%;\n  }\n  \n  .photoset-row-2 img {\n    width: 50%;\n  }\n\n  .tags {\n      opacity: 0;\n      transition: all .5s ease;\n      position: absolute;\n      bottom:50px;\n      background: rgba(0,0,0,0.5);\n      margin:5px;\n      word-break: break-all;\n  }\n\n  .post  * {\n    transition: all .5s;\n  }\n\n  .post:hover .tags {\n      opacity:1;\n      bottom:0;\n  }\n  .tag::before {\n      content: '#'\n  }\n  \n  .mdl-card__media {\n    width: 100%;\n  }\n\n  .post-image {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n</style>\n\n<mdl-card *ngIf=\"post\" class=\"post post-{{post.type}}\">\n  <mdl-card-media *ngIf=\"!post.photoset_layout\">\n    <img src=\"{{photo}}\" alt=\"broken\" class=\"post-image\">\n  </mdl-card-media>\n  \n</mdl-card>\n<!--\n<div class=\"photoset\" *ngIf=\"post.photoset_layout\">\n    <div class=\"photoset_row photoset-row-{{row.length}}\" *ngFor=\"let row of photos\">\n      <img *ngFor=\"let photo of row\" class=\"photoset-img\" src=\"{{photo.original_size.url}}\" alt=\"broken\">\n    </div>\n  </div>\n    <div class=\"btn-group tags\" *ngIf=\"post.tags\">\n        <button (click)=\"tagClicked(tag)\" class=\"btn btn-sm btn-primary tag\" *ngFor=\"let tag of post.tags\">{{tag}}</button>\n    </div>-->"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<mdl-card mdl-shadow=\"2\" style=\"width:100%\">\n  <mdl-card-title>\n    <h2 *ngIf=\"!isEditingTitle\" (click)=\"editTitle()\">{{question.name}}</h2>\n    <mdl-textfield *ngIf=\"isEditingTitle\"autofocus [(ngModel)]=\"question.name\" type=\"text\" value=\"{{question.name}}\" (keypress)=\"doneEditTitle($event)\" (blur)=\"isEditingTitle = false\"></mdl-textfield>\n    <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"accent\" mdl-ripple (click)=\"addAnswer()\">Add answer</button>\n  </mdl-card-title> \n  <mdl-card-supporting-text>\n    <div class=\"answers\">\n      <mdl-radio \n      (change)=\"markAsRight(answer)\"\n      style=\"display: block\" \n      *ngFor=\"let answer of question.answers; let i = index\" \n      name=\"group-{{question.name}}\" \n      value=\"{{i}}\" \n      [(ngModel)]=\"radioOption\" \n      [class.isRight]=\"answer.isRight\"\n      \n      mdl-ripple>\n        <span *ngIf=\"!answer.isEditing\" (click)=\"editAnswer(answer)\">{{answer.name}}</span>\n        <mdl-textfield *ngIf=\"answer.isEditing\" autofocus (keypress)=\"keyPressed($event)\" (blur)=\"doneEditing($event)\" [(ngModel)]=\"answer.name\" value=\"{{answer.name}}\" type=\"text\"></mdl-textfield>\n      </mdl-radio>\n    </div>\n  </mdl-card-supporting-text>\n</mdl-card>\n"

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "<div class=\"tests-container\" mdl-shadow=\"2\">\n  <mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed>\n    <mdl-layout-header>\n      <mdl-layout-header-row>\n        <mdl-layout-title>Title</mdl-layout-title>\n        <mdl-layout-spacer></mdl-layout-spacer>\n        <!-- Navigation. We hide it in small screens. -->\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n          <a class=\"mdl-navigation__link\">Link</a>\n          <a class=\"mdl-navigation__link\">Link</a>\n          <a class=\"mdl-navigation__link\">Link</a>\n        </nav>\n      </mdl-layout-header-row>\n    </mdl-layout-header>\n    <mdl-layout-drawer>\n      <mdl-layout-title>Title</mdl-layout-title>\n      <nav class=\"mdl-navigation\">\n        <a class=\"mdl-navigation__link\">Link</a>\n        <a class=\"mdl-navigation__link\">Link</a>\n        <a class=\"mdl-navigation__link\">Link</a>\n      </nav>\n    </mdl-layout-drawer>\n    <mdl-layout-content>\n\n      <div class=\"mdl-grid\">\n        <mdl-layout-spacer></mdl-layout-spacer>\n        <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"accent\" mdl-ripple (click)=\"addQuestion()\">Add question</button>\n        <button mdl-button mdl-button-type=\"raised\" mdl-colored=\"accent\" mdl-ripple (click)=\"exportTest()\">Export</button>\n        <mdl-layout-spacer></mdl-layout-spacer>\n      </div>\n\n      <div *ngIf=\"questions\" mdl-shadow=\"16\" class=\"question mdl-grid\">\n        <question *ngFor=\"let q of questions\" [question]=\"q\" class=\"mdl-cell mdl-cell--12-col\"></question>\n      </div>\n\n    </mdl-layout-content>\n  </mdl-layout>\n</div>\n"

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<mdl-card mdl-shadow=\"3\">\n    <mdl-card-media>\n      <img *ngIf=\"avatar\" class=\"card-img-top\" src=\"{{avatar}}\" alt=\"Card image cap\">\n    </mdl-card-media>\n    <mdl-card-title>\n        <a routerLink=\"/\"><h2 mdl-card-title-text>{{user.title}}</h2></a>\n    </mdl-card-title>\n    <mdl-card-supporting-text>\n        <h6>{{user.description}}</h6>\n        <h6>\n            {{subTitle}}\n        </h6>\n    </mdl-card-supporting-text>\n</mdl-card>"

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div mdl-shadow=\"2\">\n   <mdl-layout mdl-layout-fixed-drawer>\n      <mdl-layout-drawer style=\"width:25%; justify-content: center; align-items: center;\">\n         <user-card [subTitle]=\"subTitle\" [user]='blogInfo' class=\"\"></user-card>\n      </mdl-layout-drawer>\n      <mdl-layout-content style=\"margin-left:25%\" (scroll)=\"onScroll($event)\">\n         <div id=\"posts\" *ngIf=\"posts\" class=\"\" style=\"padding: 50px;\" >\n            <div *ngFor=\"let post of posts\">\n                <post *ngIf=\"post.type == 'photo'\" [post]=\"post\"></post>\n            </div>\n        </div>\n      </mdl-layout-content>\n   </mdl-layout>\n</div>"

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(134);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(123);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterService; });


var EmitterService = (function () {
    function EmitterService() {
        this.emitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    EmitterService.prototype.send = function (msg) {
        this.emitter.emit(msg);
    };
    ;
    EmitterService.prototype.get = function () {
        if (!this.emitter) {
            return this.emitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        }
        return this.emitter;
    };
    return EmitterService;
}());
EmitterService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], EmitterService);



/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(12);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(62);

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(412);

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(420);

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(426);

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(436);

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(444);

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(459);

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(469);

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(475);

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(513);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(520);

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(97);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(73);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumblrApi; });









var TumblrApi = (function () {
    function TumblrApi(http) {
        this.http = http;
    }
    TumblrApi.prototype.getPostsByTag = function (tag, offset, count) {
        var url = this.makeUrl('/posts');
        return __WEBPACK_IMPORTED_MODULE_5_jquery__["get"]({
            url: url,
            dataType: 'jsonp',
            data: {
                tag: tag,
                offset: offset,
                limit: count
            }
        });
    };
    TumblrApi.prototype.getAvatarLink = function (size) {
        return this.makeUrl('/avatar/' + size);
    };
    TumblrApi.prototype.getBlogInfo = function () {
        var url = this.makeUrl('/info');
        return __WEBPACK_IMPORTED_MODULE_5_jquery__["get"]({
            url: url,
            dataType: 'jsonp'
        });
    };
    TumblrApi.prototype.getBlogPosts = function (offset, count) {
        var url = this.makeUrl('/posts');
        return __WEBPACK_IMPORTED_MODULE_5_jquery__["get"]({
            url: url,
            dataType: 'jsonp',
            data: {
                offset: offset,
                limit: count
            }
        });
    };
    TumblrApi.prototype.makeUrl = function (path, params) {
        if (params === void 0) { params = []; }
        return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].tumblrBaseUrl
            + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].blogName
            + path
            + '?api_key='
            + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Constants */].OAuthKey;
    };
    TumblrApi.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || body;
    };
    TumblrApi.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return TumblrApi;
}());
TumblrApi = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Jsonp"]])
], TumblrApi);



/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(133);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(201);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_mdl_core__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioComponent; });



var AudioComponent = (function () {
    function AudioComponent() {
        this.progress = '0';
        this.bufferLength = 512;
        this.barRatio = 2.5;
        this.barHeightRatio = 2;
        this.useMic = false;
        this.fullscreen = true;
        this.audioContext = new AudioContext();
        this.analyzer = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.bufferLength);
        this.proportion = (300 / this.bufferLength);
        this.frameFinished = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    ;
    AudioComponent.prototype.play = function () {
        this.audio.play();
        requestAnimationFrame(this.draw.bind(this));
    };
    AudioComponent.prototype.pause = function () {
        var _this = this;
        this.audio.pause();
        this.frameFinished.subscribe(function () {
            cancelAnimationFrame(_this.requestId);
        });
    };
    AudioComponent.prototype.onSliderChange = function (value) {
        this.analyzer.fftSize = value;
    };
    AudioComponent.prototype.getSliderStep = function () {
        console.log(this.bufferLength);
    };
    AudioComponent.prototype.fileChanged = function (event) {
        var fileSrc = URL.createObjectURL(event.target.files[0]);
        this.audio.src = fileSrc;
    };
    AudioComponent.prototype.changeInput = function () {
        var _this = this;
        cancelAnimationFrame(this.requestId);
        this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        if (this.useMic) {
            this.mic.getTracks()[0].stop();
            this.source.disconnect();
            this.analyzer.disconnect();
            this.source = null;
            this.source = this.audioContext.createMediaElementSource(this.audio);
            this.source.connect(this.analyzer);
            this.analyzer.connect(this.audioContext.destination);
            this.analyzer.fftSize = this.bufferLength;
            this.analyzer.smoothingTimeConstant = 0.5;
            this.useMic = false;
        }
        else {
            this.source.disconnect();
            this.audio.pause();
            this.analyzer.disconnect();
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
                _this.mic = stream;
                _this.source = _this.audioContext.createMediaStreamSource(stream);
                _this.source.connect(_this.analyzer);
                _this.bufferLength = 2048;
                _this.dataArray = new Uint8Array(2048);
                _this.analyzer.fftSize = _this.bufferLength;
                _this.useMic = true;
                _this.draw();
            });
        }
    };
    AudioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas.nativeElement.width = window.innerWidth;
        this.canvas.nativeElement.height = window.innerHeight;
        this.canvasContext = this.canvas.nativeElement.getContext('2d');
        this.WIDTH = this.canvas.nativeElement.width;
        this.HEIGHT = this.canvas.nativeElement.height;
        if (this.useMic) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
                _this.source = _this.audioContext.createMediaStreamSource(stream);
                _this.source.connect(_this.analyzer);
                _this.analyzer.fftSize = _this.bufferLength;
            });
            return;
        }
        this.audio = new Audio();
        this.source = this.audioContext.createMediaElementSource(this.audio);
        this.source.connect(this.analyzer);
        this.analyzer.connect(this.audioContext.destination);
        this.analyzer.fftSize = this.bufferLength;
        this.analyzer.smoothingTimeConstant = 0.5;
        this.audio.addEventListener('loadedmetadata', function (data) {
            console.log(data);
            _this.duration = (_this.audio.duration / 60).toFixed(2);
        });
        this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    };
    AudioComponent.prototype.draw = function () {
        var self = this;
        this.currentTime = (this.audio.currentTime / 60).toFixed(2);
        this.progress = (((this.audio.currentTime / 60) / this.duration) * 100).toFixed(2);
        this.requestId = requestAnimationFrame(this.draw.bind(this));
        this.canvasContext.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this.canvasContext.fillStyle = 'rgb(200, 200, 200)';
        if (!this.useMic) {
            this.analyzer.getByteFrequencyData(this.dataArray);
            var x = 0;
            var barWidth = (this.WIDTH / this.bufferLength) * this.barRatio;
            this.barCount = Math.floor(this.WIDTH / barWidth);
            var barHeight = void 0;
            var finished = true;
            for (var i = 0; i < this.bufferLength; i += 2) {
                if (this.dataArray[i] > 0) {
                    finished = false;
                    var barHeight_1 = this.dataArray[i];
                    this.canvasContext.beginPath();
                    this.canvasContext.strokeStyle = "rgb(" + ((barHeight_1 * 2) - 1) + ", " + (255 - barHeight_1) + ", 0)";
                    this.canvasContext.lineWidth = 2;
                    this.canvasContext.arc(this.WIDTH / 2, this.HEIGHT / 2, (this.dataArray[i]) * 2, 0, 2 * Math.PI);
                    this.canvasContext.stroke();
                }
            }
            if (finished) {
                this.frameFinished.emit();
            }
        }
        else {
            this.canvasContext.lineWidth = 2;
            this.canvasContext.strokeStyle = 'rgb(0, 0, 0)';
            this.analyzer.getByteTimeDomainData(this.dataArray);
            this.canvasContext.beginPath();
            var sliceWidth = this.WIDTH / this.bufferLength;
            var x = 0;
            for (var i = 0; i < this.bufferLength; i++) {
                var v = this.dataArray[i] / 128.0;
                var y = v * this.HEIGHT / 2;
                if (i === 0) {
                    this.canvasContext.moveTo(x, y);
                }
                else {
                    this.canvasContext.lineTo(x, y);
                }
                x += sliceWidth;
            }
            this.canvasContext.lineTo(this.canvas.nativeElement.width, this.canvas.nativeElement.height / 2);
            this.canvasContext.stroke();
        }
    };
    return AudioComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('board'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], AudioComponent.prototype, "canvas", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('slider'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_mdl_core__["b" /* MdlSliderComponent */])
], AudioComponent.prototype, "slider", void 0);
AudioComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'audio-vis',
        template: __webpack_require__(136)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], AudioComponent);



/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });


var TestComponent = (function () {
    function TestComponent() {
        this.questions = [];
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.prototype.addQuestion = function () {
        this.questions.push({ name: 'Question' + (this.questions.length + 1) });
    };
    TestComponent.prototype.exportTest = function () {
        console.log(JSON.stringify(this.questions));
    };
    return TestComponent;
}());
TestComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'test.component.html',
        template: __webpack_require__(139),
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], TestComponent);



/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_post_type_enum__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tumblrApi_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_emitter_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slick_carousel__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slick_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_slick_carousel__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });








var HomeComponent = (function () {
    function HomeComponent(tumblrApi, emitter, route) {
        var _this = this;
        this.tumblrApi = tumblrApi;
        this.emitter = emitter;
        this.route = route;
        this.blogInfo = {};
        this.posts = [];
        this.PostType = __WEBPACK_IMPORTED_MODULE_3__enums_post_type_enum__["a" /* PostType */];
        this.currentPostCount = 0;
        this.postOffset = 10;
        this.tagView = false;
        this.sub = this.route.params.subscribe(function (params) {
            _this.tagName = params['tag'];
        });
        this.emitter.get().subscribe(function (data) {
            if (data.cmd === 'tagClicked') {
                _this.getPostsByTag(data.msg);
            }
        });
    }
    HomeComponent.prototype.getPostsByTag = function (tag) {
        var _this = this;
        this.currentPostCount = 0;
        this.tumblrApi.getPostsByTag(tag, this.currentPostCount, this.postOffset).then(function (result) {
            console.log('got tagged posts');
            _this.tagView = true;
            _this.tagName = tag;
            _this.posts = result.response.posts;
            _this.currentPostCount = result.response.posts.length;
            _this.subTitle = 'Tagged: ' + _this.tagName;
            document.body.scrollTop = 0;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__(document).scroll(function (event) {
            console.log(__WEBPACK_IMPORTED_MODULE_6_jquery__(document).height, __WEBPACK_IMPORTED_MODULE_6_jquery__(document).scrollTop());
        });
        var self = this;
        this.tumblrApi.getBlogInfo().then(function (data) {
            self.blogInfo = data.response.blog;
        });
        this.tumblrApi.getBlogPosts(this.currentPostCount, this.postOffset).then(function (result) {
            _this.tagView = false;
            _this.posts = result.response.posts;
            _this.currentPostCount = result.response.posts.length;
            _this.subTitle = 'Home';
            _this.emitter.send({ cmd: 'subTitleChanged', msg: _this.subTitle });
            console.log('got posts');
        });
    };
    HomeComponent.prototype.loadMore = function () {
        var _this = this;
        var self = this;
        if (!this.tagView) {
            this.tumblrApi.getBlogPosts(this.currentPostCount, this.postOffset).then(function (result) {
                result.response.posts.forEach(function (post) {
                    self.posts.push(post);
                });
                _this.currentPostCount += result.response.posts.length;
                console.log('got more posts');
            });
        }
        else {
            this.tumblrApi.getPostsByTag(this.tagName, this.currentPostCount, this.postOffset).then(function (result) {
                result.response.posts.forEach(function (post) {
                    self.posts.push(post);
                });
                _this.currentPostCount += result.response.posts.length;
                console.log('got more tagged posts');
            });
        }
    };
    HomeComponent.prototype.onScroll = function (event) {
        if (event.target.scrollHeight == __WEBPACK_IMPORTED_MODULE_6_jquery__(event.target).scrollTop() + __WEBPACK_IMPORTED_MODULE_6_jquery__(event.target).height()) {
            this.loadMore();
        }
    };
    HomeComponent.prototype.scrolled = function () {
        console.log('scrilled');
    };
    return HomeComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('scroll', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:returntype", void 0)
], HomeComponent.prototype, "onScroll", null);
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'home',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(49)
        ],
        template: __webpack_require__(141)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_tumblrApi_service__["a" /* TumblrApi */],
        __WEBPACK_IMPORTED_MODULE_5__services_emitter_service__["a" /* EmitterService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
], HomeComponent);



/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(202);

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(204);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ })

},[292]);
//# sourceMappingURL=main.bundle.js.map