webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toBoolean;
function toBoolean(value) {
    return value != null && "" + value !== 'false';
}
//# sourceMappingURL=boolean-property.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* unused harmony export __param */
/* harmony export (immutable) */ __webpack_exports__["b"] = __metadata;
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
    return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
    function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
    function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
    function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { c = void 0, f(v), next(); }
};

function __asyncDelegator(o) {
    var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
    return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_native_support__ = __webpack_require__(17);
/* unused harmony export MdlUnsupportedButtonTypeError */
/* unused harmony export MdlUnsupportedColoredTypeError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlButtonModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var MdlUnsupportedButtonTypeError = (function (_super) {
    __extends(MdlUnsupportedButtonTypeError, _super);
    function MdlUnsupportedButtonTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Button type \"" + type + "\" isn't supported (allowed: raised, fab, mini-fab, icon, '').") || this;
    }
    return MdlUnsupportedButtonTypeError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MdlUnsupportedColoredTypeError = (function (_super) {
    __extends(MdlUnsupportedColoredTypeError, _super);
    function MdlUnsupportedColoredTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Colored type \"" + type + "\" isn't supported (allowed: primary, accent, '').") || this;
    }
    return MdlUnsupportedColoredTypeError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MDL_BUTTON_TYPES = [
    'raised',
    'fab',
    'mini-fab',
    'icon',
    ''
];
var MDL_COLORED_TYPES = [
    'primary',
    'accent',
    ''
];
var MdlButtonComponent = (function () {
    function MdlButtonComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlButtonComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlButtonComponent.prototype.ngOnChanges = function (changes) {
        if (this.mdlButtonType && MDL_BUTTON_TYPES.indexOf(this.mdlButtonType) === -1) {
            throw new MdlUnsupportedButtonTypeError(this.mdlButtonType);
        }
        if (this.mdlColoredType && MDL_COLORED_TYPES.indexOf(this.mdlColoredType) === -1) {
            throw new MdlUnsupportedColoredTypeError(this.mdlColoredType);
        }
    };
    MdlButtonComponent.prototype.onMouseUp = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.onMouseLeave = function () {
        this.blurIt();
    };
    MdlButtonComponent.prototype.blurIt = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_native_support__["a" /* callNative */])(this.element, 'blur');
    };
    return MdlButtonComponent;
}());

MdlButtonComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-button, button[mdl-button], a[mdl-button]',
                host: {
                    '[attr.disabled]': 'disabled ? "disabled" : null',
                    '(mouseup)': 'onMouseUp()',
                    '(mouseleave)': 'onMouseLeave()',
                    '[class.mdl-button]': 'true',
                    '[class.mdl-button--raised]': 'mdlButtonType == "raised"',
                    '[class.mdl-button--fab]': 'mdlButtonType == "fab" || mdlButtonType == "mini-fab"',
                    '[class.mdl-button--mini-fab]': 'mdlButtonType == "mini-fab"',
                    '[class.mdl-button--icon]': 'mdlButtonType == "icon"',
                    '[class.mdl-button--primary]': 'mdlColoredType == "primary"',
                    '[class.mdl-button--accent]': 'mdlColoredType == "accent"'
                },
                exportAs: 'mdlButton',
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlButtonComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlButtonComponent.propDecorators = {
    'mdlButtonType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-button-type',] },],
    'mdlColoredType': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-colored',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MDL_BUTTON_DIRECTIVES = [MdlButtonComponent];
var MdlButtonModule = (function () {
    function MdlButtonModule() {
    }
    MdlButtonModule.forRoot = function () {
        return {
            ngModule: MdlButtonModule,
            providers: []
        };
    };
    return MdlButtonModule;
}());

MdlButtonModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_BUTTON_DIRECTIVES,
                declarations: MDL_BUTTON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlButtonModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-button.component.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlStructureError; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Wrapper for mdl error messages.
 */
var MdlError = (function (_super) {
    __extends(MdlError, _super);
    function MdlError(value) {
        /* istanbul ignore next */
        return _super.call(this, value) || this;
    }
    return MdlError;
}(Error));

var MdlStructureError = (function (_super) {
    __extends(MdlStructureError, _super);
    function MdlStructureError(child, requiredParent) {
        /* istanbul ignore next */
        return _super.call(this, "\"" + child + "\" requires \"" + requiredParent + "\" as a parent.") || this;
    }
    return MdlStructureError;
}(MdlError));

//# sourceMappingURL=mdl-error.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_simple_dialog_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_dialog_host_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_outlet_mdl_dialog_outlet_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MDL_CONFIGUARTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MIN_DIALOG_Z_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlDialogReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogService; });







var MDL_CONFIGUARTION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('MDL_CONFIGUARTION');
var MIN_DIALOG_Z_INDEX = 100000;
/**
 * The reference to the created and displayed dialog.
 */
var MdlDialogReference = (function () {
    function MdlDialogReference(internaleRef) {
        this.internaleRef = internaleRef;
        internaleRef.dialogRef = this;
    }
    /**
     * closes the dialog
     */
    MdlDialogReference.prototype.hide = function (data) {
        this.internaleRef.hide(data);
    };
    /**
     * Observable that emits, if the dialog was closed.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onHide = function () {
        return this.internaleRef.onHide();
    };
    /**
     * Observable that emits, if the dialog is really visible and not only created.
     * @returns {Observable<void>}
     */
    MdlDialogReference.prototype.onVisible = function () {
        return this.internaleRef.onVisible();
    };
    return MdlDialogReference;
}());

/**
 * The MdlDialogService is used to open different kind of dialogs. SimpleDialogs and Custom Dialogs.
 * @experimental
  */
var MdlDialogService = (function () {
    function MdlDialogService(componentFactoryResolver, doc, appRef, mdlDialogOutletService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.doc = doc;
        this.appRef = appRef;
        this.mdlDialogOutletService = mdlDialogOutletService;
        this.openDialogs = new Array();
        /**
         * Emits an event when either all modals are closed, or one gets opened.
         * @returns A subscribable event emitter that provides a boolean indicating whether a modal is open or not.
         */
        this.onDialogsOpenChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mdlDialogOutletService.backdropClickEmitter.subscribe(function () {
            _this.onBackdropClick();
        });
    }
    /**
     * Shows a dialog that is just an alert - e.g. with one button.
     * @param alertMessage The message that should be displayed.
     * @param okText The text that the button should have
     * @param title The optional title of the dialog
     * @returns An Observable that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.alert = function (alertMessage, okText, title) {
        if (okText === void 0) { okText = 'Ok'; }
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.showDialog({
            title: title,
            message: alertMessage,
            actions: [
                { handler: function () {
                        result.next(null);
                        result.complete();
                    }, text: okText }
            ],
            isModal: true
        });
        return result;
    };
    /**
     * Shows a dialog that is just a confirm message - e.g. with two button.
     * @param question The question that should be displayed.
     * @param title The title that should be displayed on top of Question.
     * @param declineText The text for decline button. defaults to Cancel
     * @param confirmText The text for the confirm button . defaults to Ok
     * @returns An Observable that is called if the user hits the Ok button.
     */
    MdlDialogService.prototype.confirm = function (question, declineText, confirmText, title) {
        if (declineText === void 0) { declineText = 'Cancel'; }
        if (confirmText === void 0) { confirmText = 'Ok'; }
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.showDialog({
            title: title,
            message: question,
            actions: [
                {
                    handler: function () {
                        result.next(null);
                        result.complete();
                    }, text: confirmText
                },
                {
                    handler: function () {
                        result.error(null);
                    }, text: declineText, isClosingAction: true
                }
            ],
            isModal: true
        });
        return result.asObservable();
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The simple dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showDialog = function (config) {
        if (config.actions.length === 0) {
            throw new Error('a dialog mus have at least one action');
        }
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var providers = [
            { provide: MdlDialogReference, useValue: new MdlDialogReference(internalDialogRef) },
            { provide: MDL_CONFIGUARTION, useValue: config }
        ];
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        var cRef = this.createComponentInstance(hostComponentRef.instance.dialogTarget, providers, __WEBPACK_IMPORTED_MODULE_3__mdl_simple_dialog_component__["a" /* MdlSimpleDialogComponent */]);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    /**
     * Shows a dialog that is specified by the provided configuration.
     * @param config The custom dialog configuration.
     * @returns An Observable that returns the MdlDialogReference.
     */
    MdlDialogService.prototype.showCustomDialog = function (config) {
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var providers = [
            { provide: MdlDialogReference, useValue: new MdlDialogReference(internalDialogRef) }
        ];
        if (config.providers) {
            providers.push.apply(providers, config.providers);
        }
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        this.createComponentInstance(hostComponentRef.instance.dialogTarget, providers, config.component);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    MdlDialogService.prototype.showDialogTemplate = function (template, config) {
        var internalDialogRef = new __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */](config);
        var hostComponentRef = this.createHostDialog(internalDialogRef, config);
        hostComponentRef.instance.dialogTarget.createEmbeddedView(template);
        return this.showHostDialog(internalDialogRef.dialogRef, hostComponentRef);
    };
    MdlDialogService.prototype.showHostDialog = function (dialogRef, hostComponentRef) {
        var result = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        setTimeout(function () {
            result.next(dialogRef);
            result.complete();
            hostComponentRef.instance.show();
        });
        return result.asObservable();
    };
    MdlDialogService.prototype.createHostDialog = function (internalDialogRef, dialogConfig) {
        var _this = this;
        var viewContainerRef = this.mdlDialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var providers = [
            { provide: MDL_CONFIGUARTION, useValue: dialogConfig },
            { provide: __WEBPACK_IMPORTED_MODULE_5__internal_dialog_reference__["a" /* InternalMdlDialogReference */], useValue: internalDialogRef }
        ];
        var hostDialogComponent = this.createComponentInstance(viewContainerRef, providers, __WEBPACK_IMPORTED_MODULE_4__mdl_dialog_host_component__["a" /* MdlDialogHostComponent */]);
        internalDialogRef.hostDialogComponentRef = hostDialogComponent;
        internalDialogRef.isModal = dialogConfig.isModal;
        internalDialogRef.closeCallback = function () {
            _this.popDialog(internalDialogRef);
            hostDialogComponent.instance.hide(hostDialogComponent);
        };
        this.pushDialog(internalDialogRef);
        return hostDialogComponent;
    };
    MdlDialogService.prototype.pushDialog = function (dialogRef) {
        if (this.openDialogs.length == 0) {
            this.onDialogsOpenChanged.emit(true);
        }
        this.openDialogs.push(dialogRef);
        this.orderDialogStack();
    };
    MdlDialogService.prototype.popDialog = function (dialogRef) {
        this.openDialogs.splice(this.openDialogs.indexOf(dialogRef), 1);
        this.orderDialogStack();
        if (this.openDialogs.length == 0) {
            this.onDialogsOpenChanged.emit(false);
        }
    };
    MdlDialogService.prototype.orderDialogStack = function () {
        // +1 because the overlay may have MIN_DIALOG_Z_INDEX if the dialog is modal.
        var zIndex = MIN_DIALOG_Z_INDEX + 1;
        this.openDialogs.forEach(function (iDialogRef) {
            iDialogRef.hostDialog.zIndex = zIndex;
            // +2 to make room for the overlay if a dialog is modal
            zIndex += 2;
        });
        this.mdlDialogOutletService.hideBackdrop();
        // if there is a modal dialog append the overloay to the dom - if not remove the overlay from the body
        var topMostModalDialog = this.getTopMostInternalDialogRef();
        if (topMostModalDialog) {
            // move the overlay diredct under the topmos modal dialog
            this.mdlDialogOutletService.showBackdropWithZIndex(topMostModalDialog.hostDialog.zIndex - 1);
        }
    };
    MdlDialogService.prototype.getTopMostInternalDialogRef = function () {
        var topMostModalDialog = null;
        for (var i = (this.openDialogs.length - 1); i >= 0; i--) {
            if (this.openDialogs[i].isModal) {
                topMostModalDialog = this.openDialogs[i];
                break;
            }
        }
        return topMostModalDialog;
    };
    MdlDialogService.prototype.onBackdropClick = function () {
        var topMostModalDialog = this.getTopMostInternalDialogRef();
        if (topMostModalDialog.config.clickOutsideToClose) {
            topMostModalDialog.hide();
        }
    };
    MdlDialogService.prototype.createComponentInstance = function (viewContainerRef, providers, component) {
        var cFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolve(providers);
        var parentInjector = viewContainerRef.parentInjector;
        var childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].fromResolvedProviders(resolvedProviders, parentInjector);
        return viewContainerRef.createComponent(cFactory, viewContainerRef.length, childInjector);
    };
    return MdlDialogService;
}());

MdlDialogService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlDialogService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"],] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_6__dialog_outlet_mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */], },
]; };
//# sourceMappingURL=mdl-dialog.service.js.map

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export MdlIconComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlIconModule; });

var MdlIconComponent = (function () {
    function MdlIconComponent() {
    }
    return MdlIconComponent;
}());

MdlIconComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-icon',
                host: {
                    '[class.material-icons]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlIconComponent.ctorParameters = function () { return []; };
var MDL_ICON_DIRECTIVES = [MdlIconComponent];
var MdlIconModule = (function () {
    function MdlIconModule() {
    }
    MdlIconModule.forRoot = function () {
        return {
            ngModule: MdlIconModule,
            providers: []
        };
    };
    return MdlIconModule;
}());

MdlIconModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_ICON_DIRECTIVES,
                declarations: MDL_ICON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlIconModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-icon.component.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_noop__ = __webpack_require__(18);
/* unused harmony export CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCheckboxModule; });





var IS_FOCUSED = 'is-focused';
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlCheckboxComponent; }),
    multi: true
};
var MdlCheckboxComponent = (function () {
    function MdlCheckboxComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._disabled = false;
        this.tabindex = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.value_ = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlCheckboxComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlCheckboxComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.onChangeCallback(v);
            this.change.emit(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlCheckboxComponent.prototype.writeValue = function (value) {
        this.value_ = value;
    };
    MdlCheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlCheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlCheckboxComponent.prototype.onFocus = function () {
        this.renderer.addClass(this.el, IS_FOCUSED);
    };
    MdlCheckboxComponent.prototype.onBlur = function () {
        this.renderer.removeClass(this.el, IS_FOCUSED);
        this.onTouchedCallback();
    };
    MdlCheckboxComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.value = !this.value;
    };
    return MdlCheckboxComponent;
}());

MdlCheckboxComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-checkbox',
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-checkbox]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'value',
                    '[class.is-disabled]': 'disabled'
                },
                template: "\n  <input type=\"checkbox\" class=\"mdl-checkbox__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [ngModel]=\"value\">\n  <span class=\"mdl-checkbox__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-checkbox__focus-helper\"></span>\n  <span class=\"mdl-checkbox__box-outline\">\n    <span class=\"mdl-checkbox__tick-outline\"></span>\n  </span>\n  ",
                inputs: ['value'],
                outputs: ['change'],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
MdlCheckboxComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlCheckboxComponent.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MDL_CHECKBOX_DIRECTIVES = [MdlCheckboxComponent];
var MdlCheckboxModule = (function () {
    function MdlCheckboxModule() {
    }
    MdlCheckboxModule.forRoot = function () {
        return {
            ngModule: MdlCheckboxModule,
            providers: []
        };
    };
    return MdlCheckboxModule;
}());

MdlCheckboxModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                exports: MDL_CHECKBOX_DIRECTIVES,
                declarations: MDL_CHECKBOX_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlCheckboxModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-checkbox.component.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ripple_vendor__ = __webpack_require__(120);
/* unused harmony export MdlRippleDirective */
/* unused harmony export MdlButtonRippleDirective */
/* unused harmony export MdlCheckboxRippleDirective */
/* unused harmony export MdlRadioRippleDirective */
/* unused harmony export MdlIconToggleRippleDirective */
/* unused harmony export MdlSwitchRippleDirective */
/* unused harmony export MdlMenuItemRippleDirective */
/* unused harmony export MdlAnchorRippleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlRippleModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


// known bugs: https://github.com/google/material-design-lite/issues/4215
var MdlRippleDirective = (function () {
    function MdlRippleDirective(elementRef, renderer, cssContainerClasses) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cssContainerClasses = cssContainerClasses;
        this.RIPPLE = 'mdl-ripple';
        this.rippleActive = true;
        this.el = elementRef.nativeElement;
    }
    MdlRippleDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // remove any existing ripple container
        if (this.rippleContainer) {
            this.el.removeChild(this.rippleContainer);
            delete this.rippleContainer;
            delete this.ripple;
        }
        // if used as mdl-ripple without property binding it is an empty string
        // otherwise (e.g. [mdl-ripple] it is a boolean - may be with the default value true.
        if (this.rippleActive === '' || this.rippleActive) {
            this.rippleContainer = this.renderer.createElement('span');
            this.cssContainerClasses.forEach(function (cssClass) {
                _this.renderer.addClass(_this.rippleContainer, cssClass);
            });
            var rippleElement = this.renderer.createElement('span');
            this.renderer.addClass(rippleElement, this.RIPPLE);
            this.rippleContainer.appendChild(rippleElement);
            this.el.appendChild(this.rippleContainer);
            this.ripple = new __WEBPACK_IMPORTED_MODULE_1__ripple_vendor__["a" /* MaterialRipple */](this.renderer, this.el);
        }
    };
    return MdlRippleDirective;
}());

var MdlButtonRippleDirective = (function (_super) {
    __extends(MdlButtonRippleDirective, _super);
    function MdlButtonRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-button__ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlButtonRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlButtonRippleDirective;
}(MdlRippleDirective));

MdlButtonRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-button[mdl-ripple], button[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlButtonRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlButtonRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MdlCheckboxRippleDirective = (function (_super) {
    __extends(MdlCheckboxRippleDirective, _super);
    function MdlCheckboxRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-checkbox__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlCheckboxRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlCheckboxRippleDirective;
}(MdlRippleDirective));

MdlCheckboxRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-checkbox[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlCheckboxRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlCheckboxRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MdlRadioRippleDirective = (function (_super) {
    __extends(MdlRadioRippleDirective, _super);
    function MdlRadioRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-radio__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlRadioRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlRadioRippleDirective;
}(MdlRippleDirective));

MdlRadioRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-radio[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlRadioRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlRadioRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MdlIconToggleRippleDirective = (function (_super) {
    __extends(MdlIconToggleRippleDirective, _super);
    function MdlIconToggleRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-icon-toggle__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlIconToggleRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlIconToggleRippleDirective;
}(MdlRippleDirective));

MdlIconToggleRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-icon-toggle[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlIconToggleRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlIconToggleRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MdlSwitchRippleDirective = (function (_super) {
    __extends(MdlSwitchRippleDirective, _super);
    function MdlSwitchRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-switch__ripple-container', 'mdl-ripple--center']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlSwitchRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlSwitchRippleDirective;
}(MdlRippleDirective));

MdlSwitchRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-switch[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlSwitchRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlSwitchRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MdlMenuItemRippleDirective = (function (_super) {
    __extends(MdlMenuItemRippleDirective, _super);
    function MdlMenuItemRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-menu__item--ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlMenuItemRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlMenuItemRippleDirective;
}(MdlRippleDirective));

MdlMenuItemRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-menu-item[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlMenuItemRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlMenuItemRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MdlAnchorRippleDirective = (function (_super) {
    __extends(MdlAnchorRippleDirective, _super);
    function MdlAnchorRippleDirective(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, ['mdl-tabs__ripple-container', 'mdl-layout__tab-ripple-container']) || this;
        _this.rippleActive = true;
        return _this;
    }
    // AOT is not able to call lifecycle hooks if a base class :(
    MdlAnchorRippleDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    return MdlAnchorRippleDirective;
}(MdlRippleDirective));

MdlAnchorRippleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'a[mdl-ripple],div[mdl-ripple]'
            },] },
];
/** @nocollapse */
MdlAnchorRippleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlAnchorRippleDirective.propDecorators = {
    'rippleActive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
};
var MDL_COMMON_DIRECTIVES = [
    MdlCheckboxRippleDirective,
    MdlButtonRippleDirective,
    MdlRadioRippleDirective,
    MdlIconToggleRippleDirective,
    MdlSwitchRippleDirective,
    MdlMenuItemRippleDirective,
    MdlAnchorRippleDirective
];
var MdlRippleModule = (function () {
    function MdlRippleModule() {
    }
    MdlRippleModule.forRoot = function () {
        return {
            ngModule: MdlRippleModule,
            providers: []
        };
    };
    return MdlRippleModule;
}());

MdlRippleModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_COMMON_DIRECTIVES,
                declarations: MDL_COMMON_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlRippleModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-ripple.directive.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toNumber;
function toNumber(value) {
    if (typeof value === 'undefined') {
        return null;
    }
    else if (typeof value === 'string') {
        return parseInt(value);
    }
    return value;
}
//# sourceMappingURL=number.property.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_backdrop_overlay_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletService; });



var MdlDialogOutletService = (function () {
    function MdlDialogOutletService(appRef, componentFactoryResolver) {
        this.appRef = appRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.backdropClickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var dialogOutletCompRef = null;
        try {
            dialogOutletCompRef = this.appRef.bootstrap(__WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogOutletComponent */]);
        }
        catch (e) {
        }
        if (dialogOutletCompRef) {
            this.setViewContainerRef(dialogOutletCompRef.instance.viewContainerRef);
        }
    }
    MdlDialogOutletService.prototype.setDefaultViewContainerRef = function (vCRef) {
        this.setViewContainerRef(vCRef);
    };
    Object.defineProperty(MdlDialogOutletService.prototype, "viewContainerRef", {
        get: function () {
            return this.viewContainerRef_;
        },
        enumerable: true,
        configurable: true
    });
    MdlDialogOutletService.prototype.setViewContainerRef = function (value) {
        var _this = this;
        this.viewContainerRef_ = value;
        if (this.viewContainerRef_) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]);
            this.backdropComponent = this.viewContainerRef_.createComponent(cFactory).instance;
            this.backdropComponent.clickEmitter.subscribe(function () {
                _this.backdropClickEmitter.emit();
            });
        }
    };
    MdlDialogOutletService.prototype.hideBackdrop = function () {
        this.backdropComponent.hide();
    };
    MdlDialogOutletService.prototype.showBackdropWithZIndex = function (zIndex) {
        this.backdropComponent.showWithZIndex(zIndex);
    };
    return MdlDialogOutletService;
}());

MdlDialogOutletService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlDialogOutletService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
]; };
//# sourceMappingURL=mdl-dialog-outlet.service.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = callNative;
function callNative(el, method, arg) {
    if (arg === void 0) { arg = null; }
    /* istanbul ignore next */ // if this code runs in browser this is allways true!
    if (el[method]) {
        el[method](arg);
    }
}
//# sourceMappingURL=native-support.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
/* istanbul ignore next */
/* istanbul ignore next */ var noop = function (_) { };
//# sourceMappingURL=noop.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletModule; });






var PUBLIC_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["b" /* MdlDialogInnerOutletComponent */]
];
var PRIVATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogOutletComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]
];
var MdlDialogOutletModule = (function () {
    function MdlDialogOutletModule() {
    }
    MdlDialogOutletModule.forRoot = function () {
        return {
            ngModule: MdlDialogOutletModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]]
        };
    };
    return MdlDialogOutletModule;
}());

MdlDialogOutletModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: PUBLIC_COMPONENTS,
                declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                entryComponents: [
                    __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_component__["a" /* MdlDialogOutletComponent */],
                    __WEBPACK_IMPORTED_MODULE_3__mdl_backdrop_overlay_component__["a" /* MdlBackdropOverlayComponent */]
                ]
            },] },
];
/** @nocollapse */
MdlDialogOutletModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_number_property__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_layout_drawer_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_layout_content_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__);
/* unused harmony export LAYOUT_SCREEN_SIZE_THRESHOLD */
/* unused harmony export MdLUnsupportedLayoutTypeError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlScreenSizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









var ESCAPE = 27;
var STANDARD = 'standard';
var WATERFALL = 'waterfall';
var SCROLL = 'scroll';
/**
 * The LAYOUT_SCREEN_SIZE_THRESHOLD can be changed at the root module. Just provide a value for this OpaqueToken:
 *
 * providers: [
 *  {provide:LAYOUT_SCREEN_SIZE_THRESHOLD, useValue: 768 }
 * ]
 *
 * you also need to change the scss variable to the same value: $layout-screen-size-threshold: 768px.
 *
 * It should be clear that this can only be used if you are using the scss and not the pre compiled css from getmdl.io.
 *
 * @type {OpaqueToken}
 */
var LAYOUT_SCREEN_SIZE_THRESHOLD = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('layoutScreenSizeThreshold');
var MdLUnsupportedLayoutTypeError = (function (_super) {
    __extends(MdLUnsupportedLayoutTypeError, _super);
    function MdLUnsupportedLayoutTypeError(type) {
        /* istanbul ignore next */
        return _super.call(this, "Layout type \"" + type + "\" isn't supported by mdl-layout (allowed: standard, waterfall, scroll).") || this;
    }
    return MdLUnsupportedLayoutTypeError;
}(__WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["a" /* MdlError */]));

var MdlScreenSizeService = (function () {
    function MdlScreenSizeService(layoutScreenSizeThreshold) {
        var _this = this;
        this.layoutScreenSizeThreshold = layoutScreenSizeThreshold;
        this.sizesSubject = new __WEBPACK_IMPORTED_MODULE_8_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // if no value is injected the default size wil be used. same as $layout-screen-size-threshold in scss
        if (!this.layoutScreenSizeThreshold) {
            this.layoutScreenSizeThreshold = 1024;
        }
        // do not try to access the window object if rendered on the server
        if (typeof window === 'object' && 'matchMedia' in window) {
            var query_1 = window.matchMedia("(max-width: " + this.layoutScreenSizeThreshold + "px)");
            var queryListener_1 = function () {
                _this.sizesSubject.next(query_1.matches);
            };
            query_1.addListener(queryListener_1);
            this.windowMediaQueryListener = function () {
                query_1.removeListener(queryListener_1);
            };
            // set the initial state
            this.sizesSubject.next(query_1.matches);
        }
    }
    MdlScreenSizeService.prototype.sizes = function () {
        return this.sizesSubject.asObservable();
    };
    MdlScreenSizeService.prototype.destroy = function () {
        if (this.windowMediaQueryListener) {
            this.windowMediaQueryListener();
            this.windowMediaQueryListener = null;
        }
    };
    return MdlScreenSizeService;
}());

MdlScreenSizeService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlScreenSizeService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [LAYOUT_SCREEN_SIZE_THRESHOLD,] },] },
]; };
var MdlLayoutComponent = (function () {
    function MdlLayoutComponent(renderer, evm, el, screenSizeService) {
        this.renderer = renderer;
        this.evm = evm;
        this.el = el;
        this.screenSizeService = screenSizeService;
        this.mode = STANDARD;
        this._isFixedDrawer = false;
        this._isFixedHeader = false;
        this._isSeamed = false;
        this._selectedIndex = 0;
        this._isNoDrawer = false;
        this.selectedTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouseoverTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mouseoutTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onOpen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDrawerVisible = false;
        this.isSmallScreen = false;
    }
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedDrawer", {
        get: function () { return this._isFixedDrawer; },
        set: function (value) { this._isFixedDrawer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isFixedHeader", {
        get: function () { return this._isFixedHeader; },
        set: function (value) { this._isFixedHeader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isSeamed", {
        get: function () { return this._isSeamed; },
        set: function (value) { this._isSeamed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlLayoutComponent.prototype, "isNoDrawer", {
        get: function () { return this._isNoDrawer; },
        set: function (value) { this._isNoDrawer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlLayoutComponent.prototype.ngAfterContentInit = function () {
        this.validateMode();
        if (this.header && this.content && this.content.tabs) {
            this.header.tabs = this.content.tabs;
            this.updateSelectedTabIndex();
        }
        // set this.drawer to null, if the drawer is not a direct child if this layout. It may be a drywer of a sub layout.
        if (this.drawer && !this.drawer.isDrawerDirectChildOf(this)) {
            this.drawer = null;
        }
    };
    MdlLayoutComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlLayoutComponent.prototype.updateSelectedTabIndex = function () {
        if (this.header && this.header.tabs) {
            this.header.tabs.forEach(function (tab) { return tab.isActive = false; });
            if (this.header.tabs.toArray().length > 0 && this.selectedIndex < this.header.tabs.toArray().length) {
                this.header.tabs.toArray()[this.selectedIndex].isActive = true;
            }
        }
    };
    MdlLayoutComponent.prototype.validateMode = function () {
        var _this = this;
        if (this.mode === '') {
            this.mode = STANDARD;
        }
        if ([STANDARD, WATERFALL, SCROLL].indexOf(this.mode) === -1) {
            throw new MdLUnsupportedLayoutTypeError(this.mode);
        }
        if (this.header) {
            // inform the header about the mode
            this.header.mode = this.mode;
            this.header.isSeamed = this.isSeamed;
        }
        if (this.content) {
            this.scrollListener = this.renderer.listen(this.content.el, 'scroll', function (e) {
                _this.onScroll(_this.content.el.scrollTop);
                return true;
            });
            this.screenSizeService.sizes().subscribe(function (isSmall) {
                _this.onQueryChange(isSmall);
            });
        }
    };
    MdlLayoutComponent.prototype.onScroll = function (scrollTop) {
        if (this.mode !== WATERFALL) {
            return;
        }
        if (this.header.isAnimating) {
            return;
        }
        var headerVisible = !this.isSmallScreen || this.isFixedHeader;
        if (scrollTop > 0 && !this.header.isCompact) {
            this.header.isCompact = true;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
        else if (scrollTop <= 0 && this.header.isCompact) {
            this.header.isCompact = false;
            if (headerVisible) {
                this.header.isAnimating = true;
            }
        }
    };
    MdlLayoutComponent.prototype.onQueryChange = function (isSmall) {
        if (isSmall) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.toggleDrawer = function () {
        this.isDrawerVisible = !this.isDrawerVisible;
        if (this.drawer) {
            this.setDrawerVisible(this.isDrawerVisible);
        }
    };
    MdlLayoutComponent.prototype.closeDrawer = function () {
        this.isDrawerVisible = false;
        if (this.drawer) {
            this.setDrawerVisible(false);
        }
    };
    MdlLayoutComponent.prototype.setDrawerVisible = function (visible) {
        this.drawer.isDrawerVisible = visible;
        this.drawer.isDrawerVisible ? this.onOpen.emit() : this.onClose.emit();
    };
    MdlLayoutComponent.prototype.obfuscatorKeyDown = function ($event) {
        if ($event.keyCode === ESCAPE) {
            this.toggleDrawer();
        }
    };
    MdlLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.scrollListener) {
            this.scrollListener();
            this.scrollListener = null;
        }
        this.screenSizeService.destroy();
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.tabSelected = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseover = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoverTabEmitter.emit({ index: index });
    };
    // triggered from mdl-layout-header.component
    MdlLayoutComponent.prototype.onTabMouseout = function (tab) {
        var index = this.header.tabs.toArray().indexOf(tab);
        this.mouseoutTabEmitter.emit({ index: index });
    };
    MdlLayoutComponent.prototype.closeDrawerOnSmallScreens = function () {
        if (this.isSmallScreen && this.isDrawerVisible) {
            this.closeDrawer();
        }
    };
    MdlLayoutComponent.prototype.hasDrawer = function () {
        return !!this.drawer;
    };
    return MdlLayoutComponent;
}());

MdlLayoutComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout',
                template: "\n    <div class=\"mdl-layout__container\" [ngClass]=\"{'has-scrolling-header': mode==='scroll'}\">\n     <div class=\"mdl-layout is-upgraded\"\n          [ngClass]=\"{\n          'is-small-screen': isSmallScreen,\n          'mdl-layout--fixed-drawer': isFixedDrawer,\n          'mdl-layout--fixed-header': isFixedHeader,\n          'mdl-layout--fixed-tabs': 'tabs.toArray().length > 0'\n          }\">\n        <ng-content select=\"mdl-layout-header\"></ng-content>\n        <ng-content select=\"mdl-layout-drawer\"></ng-content>\n        <div *ngIf=\"drawer && isNoDrawer==false\" class=\"mdl-layout__drawer-button\" (click)=\"toggleDrawer()\">\n           <mdl-icon>&#xE5D2;</mdl-icon>\n        </div>\n        <ng-content select=\"mdl-layout-content\"></ng-content>\n        <div class=\"mdl-layout__obfuscator\"\n             [ngClass]=\"{'is-visible':isDrawerVisible}\"\n             (click)=\"toggleDrawer()\"\n             (keydown)=\"obfuscatorKeyDown($event)\"></div>\n     </div>\n    </div>\n  ",
                exportAs: 'mdlLayout',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["EventManager"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: MdlScreenSizeService, },
]; };
MdlLayoutComponent.propDecorators = {
    'header': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_component__["a" /* MdlLayoutHeaderComponent */],] },],
    'drawer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_6__mdl_layout_drawer_component__["a" /* MdlLayoutDrawerComponent */],] },],
    'content': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_7__mdl_layout_content_component__["a" /* MdlLayoutContentComponent */],] },],
    'mode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-mode',] },],
    'isFixedDrawer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-fixed-drawer',] },],
    'isFixedHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-fixed-header',] },],
    'isSeamed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-header-seamed',] },],
    'selectedIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-tab-active-index',] },],
    'isNoDrawer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-no-drawer-button',] },],
    'selectedTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mdl-layout-tab-active-changed',] },],
    'mouseoverTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mdl-layout-tab-mouseover',] },],
    'mouseoutTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mdl-layout-tab-mouseout',] },],
    'onOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['open',] },],
    'onClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['close',] },],
};
//# sourceMappingURL=mdl-layout.component.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_mdl_ripple_directive__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabsModule; });










var MDL_TABS_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__mdl_tabs_component__["a" /* MdlTabsComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["a" /* MdlTabPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tab_panel_title_component__["a" /* MdlTabPanelTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_component__["b" /* MdlTabPanelContent */]
];
var MdlTabsModule = (function () {
    function MdlTabsModule() {
    }
    MdlTabsModule.forRoot = function () {
        return {
            ngModule: MdlTabsModule,
            providers: []
        };
    };
    return MdlTabsModule;
}());

MdlTabsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_4__common_mdl_ripple_directive__["a" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_5__common_index__["a" /* MdlCommonsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"]],
                exports: MDL_TABS_DIRECTIVES,
                declarations: MDL_TABS_DIRECTIVES.slice(),
            },] },
];
/** @nocollapse */
MdlTabsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var AxisResolverFactory = (function () {
    function AxisResolverFactory() {
    }
    AxisResolverFactory.prototype.create = function (vertical) {
        if (vertical === void 0) { vertical = true; }
        return new AxisResolver(vertical);
    };
    AxisResolverFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AxisResolverFactory.ctorParameters = function () { return []; };
    return AxisResolverFactory;
}());
exports.AxisResolverFactory = AxisResolverFactory;
var AxisResolver = (function () {
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
    }
    AxisResolver.prototype.clientHeightKey = function () { return this.vertical ? 'clientHeight' : 'clientWidth'; };
    AxisResolver.prototype.offsetHeightKey = function () { return this.vertical ? 'offsetHeight' : 'offsetWidth'; };
    AxisResolver.prototype.scrollHeightKey = function () { return this.vertical ? 'scrollHeight' : 'scrollWidth'; };
    AxisResolver.prototype.pageYOffsetKey = function () { return this.vertical ? 'pageYOffset' : 'pageXOffset'; };
    AxisResolver.prototype.offsetTopKey = function () { return this.vertical ? 'offsetTop' : 'offsetLeft'; };
    AxisResolver.prototype.scrollTopKey = function () { return this.vertical ? 'scrollTop' : 'scrollLeft'; };
    AxisResolver.prototype.topKey = function () { return this.vertical ? 'top' : 'left'; };
    return AxisResolver;
}());
exports.AxisResolver = AxisResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF4aXMtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUduRDtJQUNFO0lBQWdCLENBQUM7SUFFakIsb0NBQU0sR0FBTixVQUFPLFFBQXdCO1FBQXhCLHdCQUF3QixHQUF4QixlQUF3QjtRQUM3QixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNJLDhCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7S0FDbkIsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLGtDQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDJCQUFtQixzQkFZL0IsQ0FBQTtBQUVEO0lBQ0Usc0JBQW9CLFFBQXdCO1FBQWhDLHdCQUFnQyxHQUFoQyxlQUFnQztRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtJQUM1QyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZixjQUFvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM1RSxzQ0FBZSxHQUFmLGNBQW9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzVFLHNDQUFlLEdBQWYsY0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDNUUscUNBQWMsR0FBZCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxRSxtQ0FBWSxHQUFaLGNBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLG1DQUFZLEdBQVosY0FBaUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDckUsNkJBQU0sR0FBTixjQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JELG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxvQkFBWSxlQVV4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIEF4aXNSZXNvbHZlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGNyZWF0ZSh2ZXJ0aWNhbDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICByZXR1cm4gbmV3IEF4aXNSZXNvbHZlcih2ZXJ0aWNhbCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5leHBvcnQgY2xhc3MgQXhpc1Jlc29sdmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZXJ0aWNhbDogYm9vbGVhbiA9IHRydWUpIHtcbiAgfVxuICBjbGllbnRIZWlnaHRLZXkoKSB7IHJldHVybiB0aGlzLnZlcnRpY2FsID8gJ2NsaWVudEhlaWdodCcgOiAnY2xpZW50V2lkdGgnOyB9XG4gIG9mZnNldEhlaWdodEtleSgpIHsgcmV0dXJuIHRoaXMudmVydGljYWwgPyAnb2Zmc2V0SGVpZ2h0JyA6ICdvZmZzZXRXaWR0aCc7IH1cbiAgc2Nyb2xsSGVpZ2h0S2V5KCkgeyByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdzY3JvbGxIZWlnaHQnIDogJ3Njcm9sbFdpZHRoJzsgfVxuICBwYWdlWU9mZnNldEtleSgpIHsgcmV0dXJuIHRoaXMudmVydGljYWwgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JzsgfVxuICBvZmZzZXRUb3BLZXkoKSB7IHJldHVybiB0aGlzLnZlcnRpY2FsID8gJ29mZnNldFRvcCcgOiAnb2Zmc2V0TGVmdCc7IH1cbiAgc2Nyb2xsVG9wS2V5KCkgeyByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnOyB9XG4gIHRvcEtleSgpIHsgcmV0dXJuIHRoaXMudmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JzsgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var axis_resolver_1 = __webpack_require__(23);
var PositionResolverFactory = (function () {
    function PositionResolverFactory(axisResolver) {
        this.axisResolver = axisResolver;
    }
    PositionResolverFactory.prototype.create = function (options) {
        return new PositionResolver(this.axisResolver.create(!options.horizontal), options);
    };
    PositionResolverFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PositionResolverFactory.ctorParameters = function () { return [
        { type: axis_resolver_1.AxisResolverFactory, },
    ]; };
    return PositionResolverFactory;
}());
exports.PositionResolverFactory = PositionResolverFactory;
var PositionResolver = (function () {
    function PositionResolver(axis, options) {
        this.axis = axis;
        this.options = options;
        this.resolveContainer(this.options.windowElement);
        this.defineContainer(this.options.windowElement);
    }
    PositionResolver.prototype.defineContainer = function (windowElement) {
        if (this.resolveContainer(windowElement) || !windowElement.nativeElement) {
            this.container = windowElement;
        }
        else {
            this.container = windowElement.nativeElement;
        }
        return this.container;
    };
    PositionResolver.prototype.resolveContainer = function (windowElement) {
        var isContainerWindow = Object.prototype.toString.call(windowElement).includes('Window');
        this.isContainerWindow = isContainerWindow;
        return isContainerWindow;
    };
    PositionResolver.prototype.getDocumentElement = function () {
        return this.isContainerWindow
            ? this.options.windowElement.document.documentElement
            : null;
    };
    PositionResolver.prototype.calculatePoints = function (element) {
        return this.isContainerWindow
            ? this.calculatePointsForWindow(element)
            : this.calculatePointsForElement(element);
    };
    PositionResolver.prototype.calculatePointsForWindow = function (element) {
        // container's height
        var height = this.height(this.container);
        // scrolled until now / current y point
        var scrolledUntilNow = height + this.pageYOffset(this.getDocumentElement());
        // total height / most bottom y point
        var totalToScroll = this.offsetTop(element.nativeElement) + this.height(element.nativeElement);
        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
    };
    PositionResolver.prototype.calculatePointsForElement = function (element) {
        var scrollTop = this.axis.scrollTopKey();
        var scrollHeight = this.axis.scrollHeightKey();
        var container = this.container;
        var height = this.height(container);
        // perhaps use this.container.offsetTop instead of 'scrollTop'
        var scrolledUntilNow = container[scrollTop];
        var containerTopOffset = 0;
        var offsetTop = this.offsetTop(container);
        if (offsetTop !== void 0) {
            containerTopOffset = offsetTop;
        }
        var totalToScroll = container[scrollHeight];
        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
    };
    PositionResolver.prototype.height = function (elem) {
        var offsetHeight = this.axis.offsetHeightKey();
        var clientHeight = this.axis.clientHeightKey();
        // elem = elem.nativeElement;
        if (isNaN(elem[offsetHeight])) {
            return this.getDocumentElement()[clientHeight];
        }
        else {
            return elem[offsetHeight];
        }
    };
    PositionResolver.prototype.offsetTop = function (elem) {
        var top = this.axis.topKey();
        // elem = elem.nativeElement;
        if (!elem.getBoundingClientRect) {
            return;
        }
        return elem.getBoundingClientRect()[top] + this.pageYOffset(elem);
    };
    PositionResolver.prototype.pageYOffset = function (elem) {
        var pageYOffset = this.axis.pageYOffsetKey();
        var scrollTop = this.axis.scrollTopKey();
        var offsetTop = this.axis.offsetTopKey();
        // elem = elem.nativeElement;
        if (isNaN(window[pageYOffset])) {
            return this.getDocumentElement()[scrollTop];
        }
        else if (elem.ownerDocument) {
            return elem.ownerDocument.defaultView[pageYOffset];
        }
        else {
            return elem[offsetTop];
        }
    };
    return PositionResolver;
}());
exports.PositionResolver = PositionResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3NpdGlvbi1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELDhCQUFrRCxpQkFBaUIsQ0FBQyxDQUFBO0FBSXBFO0lBRUUsaUNBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUNyRCxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFRLE9BQXlCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDSSxrQ0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO0tBQ25CLENBQUM7SUFDRixrQkFBa0I7SUFDWCxzQ0FBYyxHQUFtRSxjQUFNLE9BQUE7UUFDOUYsRUFBQyxJQUFJLEVBQUUsbUNBQW1CLEdBQUc7S0FDNUIsRUFGNkYsQ0FFN0YsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSwrQkFBdUIsMEJBZW5DLENBQUE7QUFFRDtJQUtFLDBCQUFxQixJQUFrQixFQUFVLE9BQXlCO1FBQXJELFNBQUksR0FBSixJQUFJLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsYUFBMkI7UUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQy9DLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLGFBQTJCO1FBQzFDLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtjQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZTtjQUNuRCxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFpQixPQUFtQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtjQUN6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDO2NBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbURBQXdCLEdBQXhCLFVBQTBCLE9BQW1CO1FBQzNDLHFCQUFxQjtRQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyx1Q0FBdUM7UUFDdkMsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLHFDQUFxQztRQUNyQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRyxNQUFNLENBQUMsRUFBRSxjQUFNLEVBQUUsa0NBQWdCLEVBQUUsNEJBQWEsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxvREFBeUIsR0FBekIsVUFBMkIsT0FBbUI7UUFDNUMsSUFBSSxTQUFTLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9DLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFakMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0Qyw4REFBOEQ7UUFDOUQsSUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxFQUFFLGNBQU0sRUFBRSxrQ0FBZ0IsRUFBRSw0QkFBYSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVPLGlDQUFNLEdBQWQsVUFBZ0IsSUFBUztRQUN2QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFL0MsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFtQixJQUFTO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFN0IsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBYSxJQUFTO1FBQ3BCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxJQUFJLFNBQVMsR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNDLDZCQUE2QjtRQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcEdELElBb0dDO0FBcEdZLHdCQUFnQixtQkFvRzVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBeGlzUmVzb2x2ZXIsIEF4aXNSZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyUmVmLCBQb3NpdGlvbkVsZW1lbnRzLCBQb3NpdGlvblN0YXRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBheGlzUmVzb2x2ZXI6IEF4aXNSZXNvbHZlckZhY3RvcnkpIHtcbiAgfVxuXG4gIGNyZWF0ZSAob3B0aW9uczogUG9zaXRpb25FbGVtZW50cykge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb25SZXNvbHZlcih0aGlzLmF4aXNSZXNvbHZlci5jcmVhdGUoIW9wdGlvbnMuaG9yaXpvbnRhbCksIG9wdGlvbnMpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEF4aXNSZXNvbHZlckZhY3RvcnksIH0sXG5dO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25SZXNvbHZlciB7XG4gIHByaXZhdGUgZG9jdW1lbnRFbGVtZW50OiBDb250YWluZXJSZWY7XG4gIHByaXZhdGUgaXNDb250YWluZXJXaW5kb3c6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250YWluZXI6IENvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBheGlzOiBBeGlzUmVzb2x2ZXIsIHByaXZhdGUgb3B0aW9uczogUG9zaXRpb25FbGVtZW50cykge1xuICAgIHRoaXMucmVzb2x2ZUNvbnRhaW5lcih0aGlzLm9wdGlvbnMud2luZG93RWxlbWVudCk7XG4gICAgdGhpcy5kZWZpbmVDb250YWluZXIodGhpcy5vcHRpb25zLndpbmRvd0VsZW1lbnQpO1xuICB9XG5cbiAgZGVmaW5lQ29udGFpbmVyKHdpbmRvd0VsZW1lbnQ6IENvbnRhaW5lclJlZikge1xuICAgIGlmICh0aGlzLnJlc29sdmVDb250YWluZXIod2luZG93RWxlbWVudCkgfHwgIXdpbmRvd0VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB3aW5kb3dFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHdpbmRvd0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgcmVzb2x2ZUNvbnRhaW5lcih3aW5kb3dFbGVtZW50OiBDb250YWluZXJSZWYpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0NvbnRhaW5lcldpbmRvdyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3dFbGVtZW50KS5pbmNsdWRlcygnV2luZG93Jyk7XG4gICAgdGhpcy5pc0NvbnRhaW5lcldpbmRvdyA9IGlzQ29udGFpbmVyV2luZG93O1xuICAgIHJldHVybiBpc0NvbnRhaW5lcldpbmRvdztcbiAgfVxuXG4gIGdldERvY3VtZW50RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbnRhaW5lcldpbmRvd1xuICAgICAgPyB0aGlzLm9wdGlvbnMud2luZG93RWxlbWVudC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50cyAoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHJldHVybiB0aGlzLmlzQ29udGFpbmVyV2luZG93XG4gICAgICA/IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yV2luZG93KGVsZW1lbnQpXG4gICAgICA6IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yRWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50c0ZvcldpbmRvdyAoZWxlbWVudDogRWxlbWVudFJlZik6IFBvc2l0aW9uU3RhdHMge1xuICAgIC8vIGNvbnRhaW5lcidzIGhlaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KHRoaXMuY29udGFpbmVyKTtcbiAgICAvLyBzY3JvbGxlZCB1bnRpbCBub3cgLyBjdXJyZW50IHkgcG9pbnRcbiAgICBjb25zdCBzY3JvbGxlZFVudGlsTm93ID0gaGVpZ2h0ICsgdGhpcy5wYWdlWU9mZnNldCh0aGlzLmdldERvY3VtZW50RWxlbWVudCgpKTtcbiAgICAvLyB0b3RhbCBoZWlnaHQgLyBtb3N0IGJvdHRvbSB5IHBvaW50XG4gICAgY29uc3QgdG90YWxUb1Njcm9sbCA9IHRoaXMub2Zmc2V0VG9wKGVsZW1lbnQubmF0aXZlRWxlbWVudCkgKyB0aGlzLmhlaWdodChlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiB7IGhlaWdodCwgc2Nyb2xsZWRVbnRpbE5vdywgdG90YWxUb1Njcm9sbCB9O1xuICB9XG5cbiAgY2FsY3VsYXRlUG9pbnRzRm9yRWxlbWVudCAoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIGxldCBzY3JvbGxUb3AgICAgPSB0aGlzLmF4aXMuc2Nyb2xsVG9wS2V5KCk7XG4gICAgbGV0IHNjcm9sbEhlaWdodCA9IHRoaXMuYXhpcy5zY3JvbGxIZWlnaHRLZXkoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KGNvbnRhaW5lcik7XG4gICAgLy8gcGVyaGFwcyB1c2UgdGhpcy5jb250YWluZXIub2Zmc2V0VG9wIGluc3RlYWQgb2YgJ3Njcm9sbFRvcCdcbiAgICBjb25zdCBzY3JvbGxlZFVudGlsTm93ID0gY29udGFpbmVyW3Njcm9sbFRvcF07XG4gICAgbGV0IGNvbnRhaW5lclRvcE9mZnNldCA9IDA7XG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gdGhpcy5vZmZzZXRUb3AoY29udGFpbmVyKTtcbiAgICBpZiAob2Zmc2V0VG9wICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnRhaW5lclRvcE9mZnNldCA9IG9mZnNldFRvcDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxUb1Njcm9sbCA9IGNvbnRhaW5lcltzY3JvbGxIZWlnaHRdO1xuICAgIHJldHVybiB7IGhlaWdodCwgc2Nyb2xsZWRVbnRpbE5vdywgdG90YWxUb1Njcm9sbCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBoZWlnaHQgKGVsZW06IGFueSkge1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSB0aGlzLmF4aXMub2Zmc2V0SGVpZ2h0S2V5KCk7XG4gICAgbGV0IGNsaWVudEhlaWdodCA9IHRoaXMuYXhpcy5jbGllbnRIZWlnaHRLZXkoKTtcblxuICAgIC8vIGVsZW0gPSBlbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGlzTmFOKGVsZW1bb2Zmc2V0SGVpZ2h0XSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50RWxlbWVudCgpW2NsaWVudEhlaWdodF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtW29mZnNldEhlaWdodF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvZmZzZXRUb3AgKGVsZW06IGFueSkge1xuICAgIGxldCB0b3AgPSB0aGlzLmF4aXMudG9wS2V5KCk7XG5cbiAgICAvLyBlbGVtID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHsgLy8gfHwgZWxlbS5jc3MoJ25vbmUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0b3BdICsgdGhpcy5wYWdlWU9mZnNldChlbGVtKTtcbiAgfVxuXG4gIHBhZ2VZT2Zmc2V0IChlbGVtOiBhbnkpIHtcbiAgICBsZXQgcGFnZVlPZmZzZXQgPSB0aGlzLmF4aXMucGFnZVlPZmZzZXRLZXkoKTtcbiAgICBsZXQgc2Nyb2xsVG9wICAgPSB0aGlzLmF4aXMuc2Nyb2xsVG9wS2V5KCk7XG4gICAgbGV0IG9mZnNldFRvcCAgID0gdGhpcy5heGlzLm9mZnNldFRvcEtleSgpO1xuXG4gICAgLy8gZWxlbSA9IGVsZW0ubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoaXNOYU4od2luZG93W3BhZ2VZT2Zmc2V0XSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50RWxlbWVudCgpW3Njcm9sbFRvcF07XG4gICAgfSBlbHNlIGlmIChlbGVtLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXdbcGFnZVlPZmZzZXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbVtvZmZzZXRUb3BdO1xuICAgIH1cbiAgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipContactDirective; });



var MdlChipContactDirective = (function () {
    function MdlChipContactDirective(mdlChipComponent) {
        this.mdlChipComponent = mdlChipComponent;
    }
    MdlChipContactDirective.prototype.ngOnInit = function () {
        if (!this.mdlChipComponent) {
            throw new __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["b" /* MdlStructureError */]('mdl-chip-contact', 'mdl-chip');
        }
    };
    return MdlChipContactDirective;
}());

MdlChipContactDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-chip-contact]',
                host: {
                    '[class.mdl-chip__contact]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlChipContactDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__["a" /* MdlChipComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_chip_component__["a" /* MdlChipComponent */]; }),] },] },
]; };
//# sourceMappingURL=mdl-chip-contact.directive.js.map

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipComponent; });


var MdlChipComponent = (function () {
    function MdlChipComponent() {
        this.actionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MdlChipComponent.prototype.action = function () {
        this.actionClick.emit();
    };
    return MdlChipComponent;
}());

MdlChipComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-chip',
                host: {
                    '[class.mdl-chip]': 'true',
                    '[class.mdl-chip--contact]': 'chipContact'
                },
                template: "\n    <ng-content></ng-content>\n    <span *ngIf=\"mdlLabel\" class=\"mdl-chip__text\">{{mdlLabel}}</span>\n    <button *ngIf=\"mdlActionIcon\" (click)=\"action()\" type=\"button\" class=\"mdl-chip__action\">\n      <mdl-icon>{{mdlActionIcon}}</mdl-icon>\n    </button>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlChipComponent.ctorParameters = function () { return []; };
MdlChipComponent.propDecorators = {
    'mdlLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-label',] },],
    'mdlActionIcon': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-action-icon',] },],
    'actionClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['action-click',] },],
    'chipContact': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */],] },],
};
//# sourceMappingURL=mdl-chip.component.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(55);
/* unused harmony export instantiateSupportedAnimationDriver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCommonsModule; });



function isWebAnimationsSupported() {
    return typeof Element !== 'undefined' && typeof Element.prototype['animate'] === 'function';
}
function instantiateSupportedAnimationDriver() {
    /* istanbul ignore next */
    if (isWebAnimationsSupported()) {
        return new __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* NativeWebAnimations */]();
    }
    /* istanbul ignore next */
    return new __WEBPACK_IMPORTED_MODULE_2__animations__["b" /* NoopWebAnimations */]();
}
var MdlCommonsModule = (function () {
    function MdlCommonsModule() {
    }
    return MdlCommonsModule;
}());

MdlCommonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: [__WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__["a" /* AppendViewContainerRefDirective */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_1__append_view_container_ref_directive__["a" /* AppendViewContainerRefDirective */]],
                providers: [
                    { provide: __WEBPACK_IMPORTED_MODULE_2__animations__["c" /* Animations */], useFactory: instantiateSupportedAnimationDriver }
                ]
            },] },
];
/** @nocollapse */
MdlCommonsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlBackdropOverlayComponent; });

var MdlBackdropOverlayComponent = (function () {
    function MdlBackdropOverlayComponent() {
        this.clickEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visible = false;
        this.zIndex = 0;
    }
    Object.defineProperty(MdlBackdropOverlayComponent.prototype, "display", {
        get: function () {
            return this.visible ? null : 'none';
        },
        enumerable: true,
        configurable: true
    });
    MdlBackdropOverlayComponent.prototype.onBackdropClick = function (e) {
        this.clickEmitter.emit();
        e.stopPropagation();
    };
    MdlBackdropOverlayComponent.prototype.hide = function () {
        this.visible = false;
    };
    MdlBackdropOverlayComponent.prototype.showWithZIndex = function (zIndex) {
        this.zIndex = zIndex;
        this.visible = true;
    };
    return MdlBackdropOverlayComponent;
}());

MdlBackdropOverlayComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-backdrop-overlay',
                host: {
                    '[class.dialog-backdrop]': 'true',
                },
                template: "",
                styles: [
                    "    \n      .dialog-backdrop {\n        position: fixed;\n        top: 0; right: 0; bottom: 0; left: 0;\n        background: rgba(0,0,0,0.1);\n      }\n    "
                ],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlBackdropOverlayComponent.ctorParameters = function () { return []; };
MdlBackdropOverlayComponent.propDecorators = {
    'display': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.display',] },],
    'zIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['style.zIndex',] },],
    'onBackdropClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
};
//# sourceMappingURL=mdl-backdrop-overlay.component.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlDialogInnerOutletComponent; });


// the componnet is used outside the app-root. injecting MdlDialogService would not work
// this component is not exported - needs to be instanciated by
//    let x = this.appRef.bootstrap(MdlDialogOutletComponent);
var MdlDialogOutletComponent = (function () {
    function MdlDialogOutletComponent(vCRef) {
        this.vCRef = vCRef;
    }
    Object.defineProperty(MdlDialogOutletComponent.prototype, "viewContainerRef", {
        get: function () {
            return this.vCRef;
        },
        enumerable: true,
        configurable: true
    });
    return MdlDialogOutletComponent;
}());

MdlDialogOutletComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'dialog-outlet',
                template: ''
            },] },
];
/** @nocollapse */
MdlDialogOutletComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
]; };
// the component is used inside the app-root. this is possible because this component
// is exported from the module
var MdlDialogInnerOutletComponent = (function () {
    function MdlDialogInnerOutletComponent(vCRef, service) {
        this.vCRef = vCRef;
        service.setDefaultViewContainerRef(vCRef);
    }
    return MdlDialogInnerOutletComponent;
}());

MdlDialogInnerOutletComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'dialog-outlet',
                template: ''
            },] },
];
/** @nocollapse */
MdlDialogInnerOutletComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */]; }),] },] },
]; };
//# sourceMappingURL=mdl-dialog-outlet.component.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_dialog_reference__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_animations__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogHostComponent; });





var enterTransitionDuration = 300;
var leaveTransitionDuration = 250;
var enterTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
var leaveTransitionEasingCurve = 'cubic-bezier(0.0, 0.0, 0.2, 1)';
// @experimental
var MdlDialogHostComponent = (function () {
    function MdlDialogHostComponent(ngZone, renderer, animations, elementRef, config, internalDialogRef) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.animations = animations;
        this.elementRef = elementRef;
        this.config = config;
        this.internalDialogRef = internalDialogRef;
        this.visible = false;
        this.showAnimationStartStyle = {
            top: '38%',
            opacity: '0'
        };
        this.showStyle = {
            top: '50%',
            opacity: '1'
        };
        this.hideAnimationEndStyle = {
            top: '63%',
            opacity: '0'
        };
        this.zIndex = __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["d" /* MIN_DIALOG_Z_INDEX */] + 1;
    }
    MdlDialogHostComponent.prototype.show = function () {
        var _this = this;
        this.visible = true;
        // give the dialogs time to draw so that a focus can be set
        setTimeout(function () {
            _this.internalDialogRef.visible();
        });
        if (this.isAnimateEnabled()) {
            if (this.config.openFrom || this.config.closeTo) {
                // transform is modified during anmiation and must be part of each animation keyframe.
                this.showStyle['transform'] = 'translate(0, -50%) scale(1.0)';
                var targetClientRect = this.elementRef.nativeElement.getBoundingClientRect();
                var openFromRect = this.getClientRect(this.config.openFrom);
                var closeToRect = this.config.closeTo ? this.getClientRect(this.config.closeTo) : openFromRect;
                var centerTarget = this.getCenterInScreen(targetClientRect);
                var centerFrom = this.getCenterInScreen(openFromRect);
                var centerTo = this.getCenterInScreen(closeToRect);
                var translationFrom = {
                    x: Math.round(centerFrom.cx - centerTarget.cx),
                    y: Math.round(centerFrom.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, openFromRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, openFromRect.height / targetClientRect.height)) / 100
                };
                this.showAnimationStartStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    transform: "translate(" + translationFrom.x + "px, " + translationFrom.y + "px) scale(" + translationFrom.scaleX + ", " + translationFrom.scaleY + ")"
                };
                var translationTo = {
                    x: Math.round(centerTo.cx - centerTarget.cx),
                    y: Math.round(centerTo.cy - centerTarget.cy),
                    scaleX: Math.round(100 * Math.min(0.25, closeToRect.width / targetClientRect.width)) / 100,
                    scaleY: Math.round(100 * Math.min(0.25, closeToRect.height / targetClientRect.height)) / 100
                };
                this.hideAnimationEndStyle = {
                    top: targetClientRect.top + "px",
                    opacity: '0',
                    transform: "translate(" + translationTo.x + "px, " + translationTo.y + "px) scale(" + translationTo.scaleX + ", " + translationTo.scaleY + ")"
                };
            }
            var animation = this.animations.animate(this.elementRef.nativeElement, [
                this.showAnimationStartStyle,
                this.showStyle
            ], this.config.enterTransitionDuration || enterTransitionDuration, this.config.enterTransitionEasingCurve || enterTransitionEasingCurve);
            animation.play();
        }
    };
    MdlDialogHostComponent.prototype.hide = function (selfComponentRef) {
        if (this.isAnimateEnabled()) {
            var animation = this.animations.animate(this.elementRef.nativeElement, [
                this.showStyle,
                this.hideAnimationEndStyle
            ], this.config.leaveTransitionDuration || leaveTransitionDuration, this.config.leaveTransitionEasingCurve || leaveTransitionEasingCurve);
            animation.onDone(function () {
                selfComponentRef.destroy();
            });
            animation.play();
        }
        else {
            selfComponentRef.destroy();
        }
    };
    MdlDialogHostComponent.prototype.ngOnInit = function () {
        this.applyStyle(this.config.styles);
        this.applyClasses(this.config.classes ? this.config.classes : '');
    };
    MdlDialogHostComponent.prototype.applyStyle = function (styles) {
        if (styles) {
            for (var style in styles) {
                this.renderer.setStyle(this.elementRef.nativeElement, style, styles[style]);
            }
        }
    };
    MdlDialogHostComponent.prototype.applyClasses = function (classes) {
        var _this = this;
        classes.split(' ').filter(function (cssClass) { return !!cssClass; }).forEach(function (cssClass) {
            _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
        });
    };
    MdlDialogHostComponent.prototype.isAnimateEnabled = function () {
        // not present?  assume it is true.
        if (typeof this.config.animate === 'undefined') {
            return true;
        }
        return this.config.animate;
    };
    MdlDialogHostComponent.prototype.getClientRect = function (input) {
        if (input instanceof __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["b" /* MdlButtonComponent */]) {
            var elRef = input.elementRef;
            var rect = elRef.nativeElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        else if (input instanceof MouseEvent) {
            var evt = input;
            // just to make it possible to test this code with a fake event - target is
            // readonly and con not be mutated.
            var htmlElement = (evt.target || evt['testtarget']);
            var rect = htmlElement.getBoundingClientRect();
            return this.createOpenCloseRect(rect);
        }
        return input;
    };
    MdlDialogHostComponent.prototype.createOpenCloseRect = function (rect) {
        return {
            height: rect.top - rect.bottom,
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left
        };
    };
    MdlDialogHostComponent.prototype.getCenterInScreen = function (rect) {
        return {
            cx: Math.round(rect.left + (rect.width / 2)),
            cy: Math.round(rect.top + (rect.height / 2))
        };
    };
    return MdlDialogHostComponent;
}());

MdlDialogHostComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-dialog-host-component',
                host: {
                    '[class.mdl-dialog]': 'true',
                    '[class.open]': 'visible',
                    '[style.zIndex]': 'zIndex',
                },
                template: "<div #dialogTarget></div>",
                styles: [
                    "\n    mdl-dialog-host-component {\n      width: -moz-fit-content;\n      width: -webkit-fit-content;\n      width: fit-content;\n      height: -moz-fit-content;\n      height: -webkit-fit-content;\n      height: fit-content;\n      padding: 1em;\n      background: white;\n      color: black;\n      opacity: 1;\n      visibility: hidden;\n      display: block;\n      position: fixed;\n      margin: auto;\n      left: 0;\n      right: 0;\n      transition: all;\n      top: 50%;\n      transform: translate(0, -50%);\n    }\n    \n    mdl-dialog-host-component.open {\n      visibility: visible;\n    }\n    \n    "
                ],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlDialogHostComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__common_animations__["c" /* Animations */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["c" /* MDL_CONFIGUARTION */]; }),] },] },
    { type: __WEBPACK_IMPORTED_MODULE_3__internal_dialog_reference__["a" /* InternalMdlDialogReference */], },
]; };
MdlDialogHostComponent.propDecorators = {
    'dialogTarget': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['dialogTarget', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] },] },],
};
//# sourceMappingURL=mdl-dialog-host.component.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSimpleDialogComponent; });



var MdlSimpleDialogComponent = (function () {
    // why do i need forwardRef at this point, the demo LoginDialog dosn't need this!?!?
    function MdlSimpleDialogComponent(dialogConfiguration, dialog) {
        var _this = this;
        this.dialogConfiguration = dialogConfiguration;
        this.dialog = dialog;
        dialog.onVisible().subscribe(function () {
            if (_this.buttons) {
                _this.buttons.first.elementRef.nativeElement.focus();
            }
        });
    }
    MdlSimpleDialogComponent.prototype.actionClicked = function (action) {
        action.handler();
        this.dialog.hide();
    };
    MdlSimpleDialogComponent.prototype.onEsc = function () {
        // run the first action that is marked as closing action
        var closeAction = this.dialogConfiguration.actions.find(function (action) { return action.isClosingAction; });
        if (closeAction) {
            closeAction.handler();
            this.dialog.hide();
        }
    };
    return MdlSimpleDialogComponent;
}());

MdlSimpleDialogComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-dialog-component',
                template: "\n      <h3 class=\"mdl-dialog__title\" *ngIf=\"dialogConfiguration?.title\">{{dialogConfiguration?.title}}</h3>\n      <div class=\"mdl-dialog__content\" [innerHTML]=\"dialogConfiguration?.message\"></div>\n      <div \n        class=\"mdl-dialog__actions\" \n        [ngClass]=\"{'mdl-dialog__actions--full-width': dialogConfiguration?.fullWidthAction}\">\n        <button\n          mdl-button mdl-colored=\"primary\"\n          type=\"button\" \n          *ngFor=\"let action of dialogConfiguration?.actions\" \n          (click)=\"actionClicked(action)\"\n          [ngClass]=\"{'close': action.isClosingAction}\">{{action.text}}</button>\n      </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSimpleDialogComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["c" /* MDL_CONFIGUARTION */]; }),] },] },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MdlDialogReference */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MdlDialogReference */]; }),] },] },
]; };
MdlSimpleDialogComponent.propDecorators = {
    'buttons': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["b" /* MdlButtonComponent */],] },],
    'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown.esc',] },],
};
//# sourceMappingURL=mdl-simple-dialog.component.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_tab_panel_component__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutContentComponent; });


var MdlLayoutContentComponent = (function () {
    function MdlLayoutContentComponent(elRef) {
        this.elRef = elRef;
        this.el = elRef.nativeElement;
    }
    return MdlLayoutContentComponent;
}());

MdlLayoutContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-content',
                host: {
                    '[class.mdl-layout__content]': 'true',
                },
                template: "<ng-content></ng-content>",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            },] },
];
/** @nocollapse */
MdlLayoutContentComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
MdlLayoutContentComponent.propDecorators = {
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_layout_tab_panel_component__["a" /* MdlLayoutTabPanelComponent */],] },],
};
//# sourceMappingURL=mdl-layout-content.component.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutDrawerComponent; });


var MdlLayoutDrawerComponent = (function () {
    function MdlLayoutDrawerComponent(parentLayout) {
        this.parentLayout = parentLayout;
        this.isDrawerVisible = false;
    }
    MdlLayoutDrawerComponent.prototype.isDrawerDirectChildOf = function (layout) {
        return this.parentLayout === layout;
    };
    return MdlLayoutDrawerComponent;
}());

MdlLayoutDrawerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-drawer',
                host: {
                    '[class.mdl-layout__drawer]': 'true',
                    '[class.is-visible]': 'isDrawerVisible'
                },
                template: "<ng-content></ng-content>",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutDrawerComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]; }),] },] },
]; };
//# sourceMappingURL=mdl-layout-drawer.component.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderComponent; });


var MdlLayoutHeaderComponent = (function () {
    function MdlLayoutHeaderComponent(elementRef, renderer, mdlLayout) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlLayout = mdlLayout;
        this.isCompact = false;
        this.isAnimating = false;
        this.isSeamed = false;
        this.isRipple = true;
        this.el = elementRef.nativeElement;
    }
    MdlLayoutHeaderComponent.prototype.onTransitionEnd = function () {
        this.isAnimating = false;
    };
    MdlLayoutHeaderComponent.prototype.onClick = function () {
        if (this.isCompact) {
            this.isCompact = false;
            this.isAnimating = true;
        }
    };
    return MdlLayoutHeaderComponent;
}());

MdlLayoutHeaderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-header',
                host: {
                    '[class.mdl-layout__header]': 'true',
                    '[class.is-casting-shadow]': 'mode==="standard" || isCompact',
                    '[class.mdl-layout__header--seamed]': 'isSeamed',
                    '[class.mdl-layout__header--waterfall]': 'mode==="waterfall"',
                    '[class.mdl-layout__header--scroll]': 'mode==="scroll"',
                    '[class.is-compact]': 'isCompact',
                    '(transitionend)': 'onTransitionEnd()',
                    '(click)': 'onClick()'
                },
                template: "\n     <ng-content></ng-content>\n     <div *ngIf=\"tabs?.toArray()?.length > 0\" class=\"mdl-layout__tab-bar-container\">\n         <div class=\"mdl-layout__tab-bar is-casting-shadow\">\n           <div *ngFor=\"let tab of tabs.toArray()\" \n                class=\"mdl-layout__tab\" \n                [ngClass]=\"{'is-active': tab.isActive}\"\n                (mouseover)=\"mdlLayout.onTabMouseover(tab)\" \n                (mouseout)=\"mdlLayout.onTabMouseout(tab)\">\n              <div \n                *ngIf=\"tab.titleComponent\" \n                (click)=\"mdlLayout.tabSelected(tab)\"\n                [mdl-ripple]=\"isRipple\"\n                [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n              <a *ngIf=\"!tab.titleComponent\" \n                    href=\"javascript:void(0)\"   \n                    (click)=\"mdlLayout.tabSelected(tab)\"\n                    class=\"mdl-layout__tab\" \n                    [ngClass]=\"{'is-active': tab.isActive}\"\n                    [mdl-ripple]=\"isRipple\"\n                   >{{tab.title}}</a>\n             </div>\n         </div>\n     </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutHeaderComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */]; }),] },] },
]; };
//# sourceMappingURL=mdl-layout-header.component.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_index__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutTabPanelComponent; });


var MdlLayoutTabPanelComponent = (function () {
    function MdlLayoutTabPanelComponent() {
        this.isActive = false;
    }
    return MdlLayoutTabPanelComponent;
}());

MdlLayoutTabPanelComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-tab-panel',
                host: {
                    '[class.mdl-layout__tab-panel]': 'true',
                    '[class.is-active]': 'isActive'
                },
                template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutTabPanelComponent.ctorParameters = function () { return []; };
MdlLayoutTabPanelComponent.propDecorators = {
    'titleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_1__tabs_index__["b" /* MdlTabPanelTitleComponent */],] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-layout-tab-panel-title',] },],
};
//# sourceMappingURL=mdl-layout-tab-panel.component.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_native_support__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuItemComponent; });




var MdlMenuItemComponent = (function () {
    // forwardRef is needed because of he circular dependency menu queries menuitems; menuitem needs the parent
    function MdlMenuItemComponent(elementRef, renderer, mdlMenu) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.mdlMenu = mdlMenu;
        this._disabled = false;
        this.element = elementRef.nativeElement;
    }
    Object.defineProperty(MdlMenuItemComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlMenuItemComponent.prototype.onClick = function ($event) {
        $event.stopPropagation();
        if (this.disabled) {
            this.mdlMenu.hide();
            return;
        }
        this.mdlMenu.hideOnItemClicked();
    };
    // we need to register a touchstart at the window to get informed if the user taps outside the menu.
    // But if we register a touchstart event - safari will no longer convert touch events to click events.
    // So we need to convert touch to click and the user still needs to register a (click) listener to be
    // informed if the menu item has clicked.
    MdlMenuItemComponent.prototype.onTouch = function ($event) {
        // ensure that this event is totally consumed
        $event.stopPropagation();
        $event.preventDefault();
        var event = new MouseEvent('click', { bubbles: true });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_native_support__["a" /* callNative */])(this.element, 'dispatchEvent', event);
    };
    return MdlMenuItemComponent;
}());

MdlMenuItemComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-menu-item',
                host: {
                    '[class.mdl-menu__item]': 'true',
                    'tabindex': '-1',
                    '(click)': 'onClick($event)',
                    '(touchstart)': 'onTouch($event)'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlMenuItemComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */]; }),] },] },
]; };
MdlMenuItemComponent.propDecorators = {
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=mdl-menu-item.component.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_item_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_mdl_error__ = __webpack_require__(9);
/* unused harmony export MdlMenuError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlMenuRegisty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var BOTTOM_LEFT = 'bottom-left';
var BOTTOM_RIGHT = 'bottom-right';
var TOP_LEFT = 'top-left';
var TOP_RIGHT = 'top-right';
var UNALIGNED = 'unaligned';
// Total duration of the menu animation.
var TRANSITION_DURATION_SECONDS = 0.3;
// The fraction of the total duration we want to use for menu item animations.
var TRANSITION_DURATION_FRACTION = 0.8;
// How long the menu stays open after choosing an option (so the user can see
// the ripple).
var CLOSE_TIMEOUT = 175;
var CSS_ALIGN_MAP = {};
CSS_ALIGN_MAP[BOTTOM_LEFT] = 'mdl-menu--bottom-left';
CSS_ALIGN_MAP[BOTTOM_RIGHT] = 'mdl-menu--bottom-right';
CSS_ALIGN_MAP[TOP_LEFT] = 'mdl-menu--top-left';
CSS_ALIGN_MAP[TOP_RIGHT] = 'mdl-menu--top-right';
CSS_ALIGN_MAP[UNALIGNED] = 'mdl-menu--unaligned';
var MdlMenuError = (function (_super) {
    __extends(MdlMenuError, _super);
    function MdlMenuError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MdlMenuError;
}(__WEBPACK_IMPORTED_MODULE_2__common_mdl_error__["a" /* MdlError */]));

var MdlMenuRegisty = (function () {
    function MdlMenuRegisty() {
        this.menuComponents = [];
    }
    MdlMenuRegisty.prototype.add = function (menuComponent) {
        this.menuComponents.push(menuComponent);
    };
    MdlMenuRegisty.prototype.remove = function (menuComponent) {
        this.menuComponents.slice(this.menuComponents.indexOf(menuComponent), 1);
    };
    MdlMenuRegisty.prototype.hideAllExcept = function (menuComponent) {
        this.menuComponents.forEach(function (component) {
            if (component !== menuComponent) {
                component.hide();
            }
        });
    };
    return MdlMenuRegisty;
}());

MdlMenuRegisty.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlMenuRegisty.ctorParameters = function () { return []; };
var MdlMenuComponent = (function () {
    function MdlMenuComponent(renderer, menuRegistry) {
        this.renderer = renderer;
        this.menuRegistry = menuRegistry;
        this.cssPosition = 'mdl-menu--bottom-left';
        this.isVisible = false;
        this.menuRegistry.add(this);
    }
    MdlMenuComponent.prototype.ngOnInit = function () {
        this.cssPosition = CSS_ALIGN_MAP[this.position] || BOTTOM_LEFT;
    };
    MdlMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.containerChild.nativeElement;
        this.menuElement = this.menuElementChild.nativeElement;
        this.outline = this.outlineChild.nativeElement;
        // Add a click listener to the document, to close the menu.
        var callback = function () {
            if (_this.isVisible) {
                _this.hide();
            }
            return true;
        };
        this.renderer.listen('window', 'click', callback);
        this.renderer.listen('window', 'touchstart', callback);
    };
    MdlMenuComponent.prototype.toggle = function (event, mdlButton) {
        if (!mdlButton) {
            throw new MdlMenuError("MdlButtonComponent is required");
        }
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show(event, mdlButton);
        }
    };
    MdlMenuComponent.prototype.hideOnItemClicked = function () {
        var _this = this;
        // Wait some time before closing menu, so the user can see the ripple.
        setTimeout(function () {
            _this.hide();
        }, CLOSE_TIMEOUT);
    };
    MdlMenuComponent.prototype.hide = function () {
        // Remove all transition delays; menu items fade out concurrently.
        this.menuItemComponents.toArray().forEach(function (mi) {
            mi.element.style.removeProperty('transition-delay');
        });
        // Measure the inner element.
        var rect = this.menuElement.getBoundingClientRect();
        var height = rect.height;
        var width = rect.width;
        // Turn on animation, and apply the final clip. Also make invisible.
        // This triggers the transitions.
        this.renderer.addClass(this.menuElement, 'is-animating');
        this.applyClip(height, width);
        this.renderer.removeClass(this.container, 'is-visible');
        // Clean up after the animation is complete.
        this.addAnimationEndListener();
        this.isVisible = false;
    };
    MdlMenuComponent.prototype.show = function (event, mdlButton) {
        var _this = this;
        this.menuRegistry.hideAllExcept(this);
        event.stopPropagation();
        var forElement = mdlButton.element;
        var rect = forElement.getBoundingClientRect();
        var forRect = forElement.parentElement.getBoundingClientRect();
        if (this.position == UNALIGNED) {
        }
        else if (this.position == BOTTOM_RIGHT) {
            // Position below the "for" element, aligned to its right.
            this.container.style.right = (forRect.right - rect.right) + 'px';
            this.container.style.top = forElement.offsetTop + forElement.offsetHeight + 'px';
        }
        else if (this.position == TOP_LEFT) {
            // Position above the "for" element, aligned to its left.
            this.container.style.left = forElement.offsetLeft + 'px';
            this.container.style.bottom = (forRect.bottom - rect.top) + 'px';
        }
        else if (this.position == TOP_RIGHT) {
            // Position above the "for" element, aligned to its right.
            this.container.style.right = (forRect.right - rect.right) + 'px';
            this.container.style.bottom = (forRect.bottom - rect.top) + 'px';
        }
        else {
            // Default: position below the "for" element, aligned to its left.
            this.container.style.left = forElement.offsetLeft + 'px';
            this.container.style.top = forElement.offsetTop + forElement.offsetHeight + 'px';
        }
        // Measure the inner element.
        var height = this.menuElement.getBoundingClientRect().height;
        var width = this.menuElement.getBoundingClientRect().width;
        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.outline.style.width = width + 'px';
        this.outline.style.height = height + 'px';
        var transitionDuration = TRANSITION_DURATION_SECONDS * TRANSITION_DURATION_FRACTION;
        this.menuItemComponents.toArray().forEach(function (mi) {
            var itemDelay = null;
            if ((_this.position == TOP_LEFT) || _this.position == TOP_RIGHT) {
                itemDelay = ((height - mi.element.offsetTop - mi.element.offsetHeight) / height * transitionDuration) + 's';
            }
            else {
                itemDelay = (mi.element.offsetTop / height * transitionDuration) + 's';
            }
            mi.element.style.transitionDelay = itemDelay;
        });
        // Apply the initial clip to the text before we start animating.
        this.applyClip(height, width);
        this.renderer.addClass(this.container, 'is-visible');
        this.menuElement.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
        this.renderer.addClass(this.menuElement, 'is-animating');
        this.addAnimationEndListener();
        this.isVisible = true;
    };
    MdlMenuComponent.prototype.addAnimationEndListener = function () {
        var _this = this;
        this.renderer.listen(this.menuElement, 'transitionend', function () {
            _this.renderer.removeClass(_this.menuElement, 'is-animating');
            return true;
        });
    };
    MdlMenuComponent.prototype.applyClip = function (height, width) {
        if (this.position == UNALIGNED) {
            // Do not clip.
            this.menuElement.style.clip = '';
        }
        else if (this.position == BOTTOM_RIGHT) {
            // Clip to the top right corner of the menu.
            this.menuElement.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
        }
        else if (this.position == TOP_LEFT) {
            // Clip to the bottom left corner of the menu.
            this.menuElement.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
        }
        else if (this.position == TOP_RIGHT) {
            // Clip to the bottom right corner of the menu.
            this.menuElement.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
        }
        else {
            // Default: do not clip (same as clipping to the top left corner).
            this.menuElement.style.clip = '';
        }
    };
    MdlMenuComponent.prototype.ngOnDestroy = function () {
        this.menuRegistry.remove(this);
    };
    return MdlMenuComponent;
}());

MdlMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-menu',
                host: {},
                exportAs: 'mdlMenu',
                template: "\n   <div #container class=\"mdl-menu__container is-upgraded\">\n      <div #outline class=\"mdl-menu__outline\"\n         [ngClass]=\"cssPosition\"\n      ></div>\n      <div class=\"mdl-menu\" #menuElement>\n         <ng-content></ng-content>\n      </div>\n   </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlMenuComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: MdlMenuRegisty, },
]; };
MdlMenuComponent.propDecorators = {
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-menu-position',] },],
    'containerChild': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['container',] },],
    'menuElementChild': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['menuElement',] },],
    'outlineChild': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['outline',] },],
    'menuItemComponents': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_menu_item_component__["a" /* MdlMenuItemComponent */],] },],
};
//# sourceMappingURL=mdl-menu.component.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabPanelTitleComponent; });

var MdlTabPanelTitleComponent = (function () {
    function MdlTabPanelTitleComponent(vcRef) {
        this.vcRef = vcRef;
    }
    return MdlTabPanelTitleComponent;
}());

MdlTabPanelTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-tab-panel-title',
                template: "\n   <ng-content></ng-content>\n   ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTabPanelTitleComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
]; };
//# sourceMappingURL=mdl-tab-panel-title.component.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_title_component__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTabPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabPanelComponent; });


var MdlTabPanelContent = (function () {
    function MdlTabPanelContent() {
    }
    return MdlTabPanelContent;
}());

MdlTabPanelContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-tab-panel-content',
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTabPanelContent.ctorParameters = function () { return []; };
var MdlTabPanelComponent = (function () {
    function MdlTabPanelComponent() {
        this.isActive = false;
    }
    return MdlTabPanelComponent;
}());

MdlTabPanelComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-tab-panel',
                host: {
                    '[class.mdl-tabs__panel]': 'true',
                    '[class.is-active]': 'isActive'
                },
                template: "\n   <ng-content *ngIf=\"titleComponent\" select=\"mdl-tab-panel-content\"></ng-content>\n   <ng-content *ngIf=\"!titleComponent\"></ng-content>\n   ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTabPanelComponent.ctorParameters = function () { return []; };
MdlTabPanelComponent.propDecorators = {
    'titleComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: [__WEBPACK_IMPORTED_MODULE_1__mdl_tab_panel_title_component__["a" /* MdlTabPanelTitleComponent */],] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-tab-panel-title',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
//# sourceMappingURL=mdl-tab-panel.component.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSimpleTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var IS_ACTIVE = 'is-active';
var host = {
    '[class.mdl-tooltip]': 'true',
    '[class.mdl-tooltip--large]': 'large',
    '[class.mdl-tooltip--left]': 'position=="left"',
    '[class.mdl-tooltip--right]': 'position=="right"',
    '[class.mdl-tooltip--top]': 'position=="top"',
    '[class.mdl-tooltip--bottom]': 'position=="bottom"'
};
var MdlSimpleTooltipComponent = (function () {
    function MdlSimpleTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.mdlTooltipPositionService = mdlTooltipPositionService;
        this.large = false;
        this.active = false;
        this.element = elRef.nativeElement;
    }
    MdlSimpleTooltipComponent.prototype.mouseLeave = function () {
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
        this.setActive(false);
    };
    MdlSimpleTooltipComponent.prototype.mouseEnter = function (event) {
        var _this = this;
        if (this.delay) {
            this.delayTimeout = setTimeout(function () {
                _this.show(event.target);
            }, this.delay);
        }
        else {
            this.show(event.target);
        }
    };
    MdlSimpleTooltipComponent.prototype.show = function (element) {
        var props = element.getBoundingClientRect();
        var offsetWidth = this.element.offsetWidth;
        var offsetHeight = this.element.offsetHeight;
        var style = this.mdlTooltipPositionService.calcStyle(offsetWidth, offsetHeight, props, this.position);
        for (var key in style) {
            this.renderer.setStyle(this.elRef.nativeElement, key, style[key]);
        }
        this.setActive(true);
    };
    MdlSimpleTooltipComponent.prototype.setActive = function (active) {
        this.active = active;
        if (active) {
            this.renderer.addClass(this.elRef.nativeElement, IS_ACTIVE);
        }
        else {
            this.renderer.removeClass(this.elRef.nativeElement, IS_ACTIVE);
        }
    };
    MdlSimpleTooltipComponent.prototype.isActive = function () {
        return this.active;
    };
    return MdlSimpleTooltipComponent;
}());

MdlSimpleTooltipComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-simple-tooltip',
                host: host,
                template: '<div>{{tooltipText}}</div>',
                providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSimpleTooltipComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */], },
]; };
MdlSimpleTooltipComponent.propDecorators = {
    'delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MdlTooltipComponent = (function (_super) {
    __extends(MdlTooltipComponent, _super);
    function MdlTooltipComponent(elRef, renderer, mdlTooltipPositionService) {
        return _super.call(this, elRef, renderer, mdlTooltipPositionService) || this;
    }
    return MdlTooltipComponent;
}(MdlSimpleTooltipComponent));

MdlTooltipComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-tooltip',
                template: '<div><ng-content></ng-content></div>',
                exportAs: 'mdlTooltip',
                host: host,
                providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */]],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTooltipComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_position_service__["a" /* MdlTooltipPositionService */], },
]; };
//# sourceMappingURL=mdl-tooltip.component.js.map

/***/ }),
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var position_resolver_1 = __webpack_require__(24);
var scroll_register_1 = __webpack_require__(47);
var scroll_resolver_1 = __webpack_require__(48);
var InfiniteScroll = (function () {
    function InfiniteScroll(element, zone, positionResolverFactory, scrollRegister, scrollerResolver) {
        this.element = element;
        this.zone = zone;
        this.positionResolverFactory = positionResolverFactory;
        this.scrollRegister = scrollRegister;
        this.scrollerResolver = scrollerResolver;
        this.scrolled = new core_1.EventEmitter();
        this.scrolledUp = new core_1.EventEmitter();
        this._distanceDown = 2;
        this._distanceUp = 1.5;
        this._throttle = 300;
        this._disabled = false;
        this._container = null;
        this.scrollWindow = true;
        this._immediate = false;
        this._horizontal = false;
        this._alwaysCallback = false;
        this.throttleType = 'throttle';
    }
    Object.defineProperty(InfiniteScroll.prototype, "debounce", {
        set: function (value) {
            this.throttleType = value === '' || !!value ? 'debounce' : 'throttle';
        },
        enumerable: true,
        configurable: true
    });
    InfiniteScroll.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            var containerElement = this.resolveContainerElement();
            var positionResolver_1 = this.positionResolverFactory.create({
                windowElement: containerElement,
                horizontal: this._horizontal
            });
            var options = {
                container: positionResolver_1.container,
                throttleType: this.throttleType,
                throttleDuration: this._throttle,
                filterBefore: function () { return !_this._disabled; },
                mergeMap: function () { return positionResolver_1.calculatePoints(_this.element); },
                scrollHandler: function (container) { return _this.handleOnScroll(container); }
            };
            this.disposeScroller = this.scrollRegister.attachEvent(options);
        }
    };
    InfiniteScroll.prototype.handleOnScroll = function (container) {
        var scrollResolverConfig = {
            distance: {
                down: this._distanceDown,
                up: this._distanceUp
            }
        };
        var scrollStats = this.scrollerResolver.getScrollStats(container, scrollResolverConfig);
        if (this.shouldTriggerEvents(scrollStats.shouldScroll)) {
            var infiniteScrollEvent = {
                currentScrollPosition: container.scrolledUntilNow
            };
            if (scrollStats.isScrollingDown) {
                this.onScrollDown(infiniteScrollEvent);
            }
            else {
                this.onScrollUp(infiniteScrollEvent);
            }
        }
    };
    InfiniteScroll.prototype.shouldTriggerEvents = function (shouldScroll) {
        return (this._alwaysCallback || shouldScroll) && !this._disabled;
    };
    InfiniteScroll.prototype.ngOnDestroy = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    InfiniteScroll.prototype.onScrollDown = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolled.emit(data); });
    };
    InfiniteScroll.prototype.onScrollUp = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolledUp.emit(data); });
    };
    InfiniteScroll.prototype.resolveContainerElement = function () {
        if (this._container) {
            return typeof (this._container) === 'string' ? window.document.querySelector(this._container) : this._container;
        }
        else {
            return this.scrollWindow ? window : this.element;
        }
    };
    InfiniteScroll.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[infinite-scroll]'
                },] },
    ];
    /** @nocollapse */
    InfiniteScroll.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: position_resolver_1.PositionResolverFactory, },
        { type: scroll_register_1.ScrollRegister, },
        { type: scroll_resolver_1.ScrollResolver, },
    ]; };
    InfiniteScroll.propDecorators = {
        'scrolled': [{ type: core_1.Output },],
        'scrolledUp': [{ type: core_1.Output },],
        '_distanceDown': [{ type: core_1.Input, args: ['infiniteScrollDistance',] },],
        '_distanceUp': [{ type: core_1.Input, args: ['infiniteScrollUpDistance',] },],
        '_throttle': [{ type: core_1.Input, args: ['infiniteScrollThrottle',] },],
        '_disabled': [{ type: core_1.Input, args: ['infiniteScrollDisabled',] },],
        '_container': [{ type: core_1.Input, args: ['infiniteScrollContainer',] },],
        'scrollWindow': [{ type: core_1.Input, args: ['scrollWindow',] },],
        '_immediate': [{ type: core_1.Input, args: ['immediateCheck',] },],
        '_horizontal': [{ type: core_1.Input, args: ['horizontal',] },],
        '_alwaysCallback': [{ type: core_1.Input, args: ['alwaysCallback',] },],
        'debounce': [{ type: core_1.Input },],
    };
    return InfiniteScroll;
}());
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFJTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixrQ0FBd0MscUJBQXFCLENBQUMsQ0FBQTtBQUM5RCxnQ0FBcUQsbUJBQW1CLENBQUMsQ0FBQTtBQUN6RSxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUtuRDtJQXFCRSx3QkFDVSxPQUFtQixFQUNuQixJQUFZLEVBQ1osdUJBQWdELEVBQ2hELGNBQThCLEVBQzlCLGdCQUFnQztRQUpoQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO1FBekJ6QyxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUF1QixDQUFDO1FBQ25ELGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQXVCLENBQUM7UUFFckQsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQU0xQixpQkFBWSxHQUFXLFVBQVUsQ0FBQztJQVN2QyxDQUFDO0lBYkosc0JBQUksb0NBQVE7YUFBWixVQUFhLEtBQXVCO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFhRCxpQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUN4RCxJQUFNLGtCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7Z0JBQzNELGFBQWEsRUFBRSxnQkFBZ0I7Z0JBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVzthQUM3QixDQUFDLENBQUM7WUFDSCxJQUFNLE9BQU8sR0FBeUI7Z0JBQ3BDLFNBQVMsRUFBRSxrQkFBZ0IsQ0FBQyxTQUFTO2dCQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNoQyxZQUFZLEVBQUUsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBZixDQUFlO2dCQUNuQyxRQUFRLEVBQUUsY0FBTSxPQUFBLGtCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDO2dCQUM5RCxhQUFhLEVBQUUsVUFBQyxTQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBOUIsQ0FBOEI7YUFDNUUsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsU0FBd0I7UUFDckMsSUFBTSxvQkFBb0IsR0FBRztZQUMzQixRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUN4QixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDckI7U0FDRixDQUFDO1FBQ0YsSUFBTSxXQUFXLEdBQWdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDdkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBTSxtQkFBbUIsR0FBd0I7Z0JBQy9DLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxnQkFBZ0I7YUFDbEQsQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsWUFBcUI7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLElBQXdEO1FBQXJFLGlCQUVDO1FBRlksb0JBQXdELEdBQXhELFNBQThCLHFCQUFxQixFQUFFLENBQUMsRUFBRTtRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQXdEO1FBQW5FLGlCQUVDO1FBRlUsb0JBQXdELEdBQXhELFNBQThCLHFCQUFxQixFQUFFLENBQUMsRUFBRTtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sZ0RBQXVCLEdBQS9CO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxHQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBQ0kseUJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUIsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDZCQUFjLEdBQW1FLGNBQU0sT0FBQTtRQUM5RixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGFBQU0sR0FBRztRQUNoQixFQUFDLElBQUksRUFBRSwyQ0FBdUIsR0FBRztRQUNqQyxFQUFDLElBQUksRUFBRSxnQ0FBYyxHQUFHO1FBQ3hCLEVBQUMsSUFBSSxFQUFFLGdDQUFjLEdBQUc7S0FDdkIsRUFONkYsQ0FNN0YsQ0FBQztJQUNLLDZCQUFjLEdBQTJDO1FBQ2hFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQy9CLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQ2pDLGVBQWUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRyxFQUFFLEVBQUU7UUFDdkUsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLDBCQUEwQixFQUFHLEVBQUUsRUFBRTtRQUN2RSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUcsRUFBRSxFQUFFO1FBQ25FLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRyxFQUFFLEVBQUU7UUFDbkUsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLHlCQUF5QixFQUFHLEVBQUUsRUFBRTtRQUNyRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFHLEVBQUUsRUFBRTtRQUM1RCxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUcsRUFBRSxFQUFFO1FBQzVELGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUcsRUFBRSxFQUFFO1FBQ3pELGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFHLEVBQUUsRUFBRTtRQUNqRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtLQUM3QixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDO0FBeEhZLHNCQUFjLGlCQXdIMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZmluaXRlU2Nyb2xsRXZlbnQsIFNjcm9sbFN0YXRzLCBQb3NpdGlvblN0YXRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb24tcmVzb2x2ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVnaXN0ZXIsIFNjcm9sbFJlZ2lzdGVyQ29uZmlnIH0gZnJvbSAnLi9zY3JvbGwtcmVnaXN0ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVzb2x2ZXIgfSBmcm9tICcuL3Njcm9sbC1yZXNvbHZlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuXG5cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgIHNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbEV2ZW50PigpO1xuICAgc2Nyb2xsZWRVcCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxFdmVudD4oKTtcblxuICAgX2Rpc3RhbmNlRG93bjogbnVtYmVyID0gMjtcbiAgIF9kaXN0YW5jZVVwOiBudW1iZXIgPSAxLjU7XG4gICBfdGhyb3R0bGU6IG51bWJlciA9IDMwMDtcbiAgIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgX2NvbnRhaW5lcjogYW55ID0gbnVsbDtcbiAgIHNjcm9sbFdpbmRvdzogYm9vbGVhbiA9IHRydWU7XG4gICBfaW1tZWRpYXRlOiBib29sZWFuID0gZmFsc2U7XG4gICBfaG9yaXpvbnRhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgX2Fsd2F5c0NhbGxiYWNrOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBzZXQgZGVib3VuY2UodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRocm90dGxlVHlwZSA9IHZhbHVlID09PSAnJyB8fCAhIXZhbHVlID8gJ2RlYm91bmNlJyA6ICd0aHJvdHRsZSc7XG4gIH1cblxuICBwcml2YXRlIHRocm90dGxlVHlwZTogc3RyaW5nID0gJ3Rocm90dGxlJztcbiAgcHJpdmF0ZSBkaXNwb3NlU2Nyb2xsZXI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwb3NpdGlvblJlc29sdmVyRmFjdG9yeTogUG9zaXRpb25SZXNvbHZlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBzY3JvbGxSZWdpc3RlcjogU2Nyb2xsUmVnaXN0ZXIsXG4gICAgcHJpdmF0ZSBzY3JvbGxlclJlc29sdmVyOiBTY3JvbGxSZXNvbHZlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5yZXNvbHZlQ29udGFpbmVyRWxlbWVudCgpO1xuICAgICAgY29uc3QgcG9zaXRpb25SZXNvbHZlciA9IHRoaXMucG9zaXRpb25SZXNvbHZlckZhY3RvcnkuY3JlYXRlKHtcbiAgICAgICAgd2luZG93RWxlbWVudDogY29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgaG9yaXpvbnRhbDogdGhpcy5faG9yaXpvbnRhbFxuICAgICAgfSk7XG4gICAgICBjb25zdCBvcHRpb25zOiBTY3JvbGxSZWdpc3RlckNvbmZpZyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBwb3NpdGlvblJlc29sdmVyLmNvbnRhaW5lcixcbiAgICAgICAgdGhyb3R0bGVUeXBlOiB0aGlzLnRocm90dGxlVHlwZSxcbiAgICAgICAgdGhyb3R0bGVEdXJhdGlvbjogdGhpcy5fdGhyb3R0bGUsXG4gICAgICAgIGZpbHRlckJlZm9yZTogKCkgPT4gIXRoaXMuX2Rpc2FibGVkLFxuICAgICAgICBtZXJnZU1hcDogKCkgPT4gcG9zaXRpb25SZXNvbHZlci5jYWxjdWxhdGVQb2ludHModGhpcy5lbGVtZW50KSxcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cykgPT4gdGhpcy5oYW5kbGVPblNjcm9sbChjb250YWluZXIpXG4gICAgICB9O1xuICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsZXIgPSB0aGlzLnNjcm9sbFJlZ2lzdGVyLmF0dGFjaEV2ZW50KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9uU2Nyb2xsKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cykge1xuICAgIGNvbnN0IHNjcm9sbFJlc29sdmVyQ29uZmlnID0ge1xuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgZG93bjogdGhpcy5fZGlzdGFuY2VEb3duLFxuICAgICAgICB1cDogdGhpcy5fZGlzdGFuY2VVcFxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2Nyb2xsU3RhdHM6IFNjcm9sbFN0YXRzID0gdGhpcy5zY3JvbGxlclJlc29sdmVyLmdldFNjcm9sbFN0YXRzKGNvbnRhaW5lciwgc2Nyb2xsUmVzb2x2ZXJDb25maWcpO1xuICAgIGlmICh0aGlzLnNob3VsZFRyaWdnZXJFdmVudHMoc2Nyb2xsU3RhdHMuc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgY29uc3QgaW5maW5pdGVTY3JvbGxFdmVudDogSW5maW5pdGVTY3JvbGxFdmVudCA9IHtcbiAgICAgICAgY3VycmVudFNjcm9sbFBvc2l0aW9uOiBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vd1xuICAgICAgfTtcbiAgICAgIGlmIChzY3JvbGxTdGF0cy5pc1Njcm9sbGluZ0Rvd24pIHtcbiAgICAgICAgdGhpcy5vblNjcm9sbERvd24oaW5maW5pdGVTY3JvbGxFdmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsVXAoaW5maW5pdGVTY3JvbGxFdmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkVHJpZ2dlckV2ZW50cyhzaG91bGRTY3JvbGw6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gKHRoaXMuX2Fsd2F5c0NhbGxiYWNrIHx8IHNob3VsZFNjcm9sbCkgJiYgIXRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2VTY3JvbGxlcikge1xuICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbERvd24oZGF0YTogSW5maW5pdGVTY3JvbGxFdmVudCA9IHsgY3VycmVudFNjcm9sbFBvc2l0aW9uOiAwIH0pIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuc2Nyb2xsZWQuZW1pdChkYXRhKSk7XG4gIH1cblxuICBvblNjcm9sbFVwKGRhdGE6IEluZmluaXRlU2Nyb2xsRXZlbnQgPSB7IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogMCB9KSB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnNjcm9sbGVkVXAuZW1pdChkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDb250YWluZXJFbGVtZW50KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHR5cGVvZih0aGlzLl9jb250YWluZXIpID09PSAnc3RyaW5nJyA/ICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb250YWluZXIpIDogdGhpcy5fY29udGFpbmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxXaW5kb3cgPyB3aW5kb3cgOiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW2luZmluaXRlLXNjcm9sbF0nXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogTmdab25lLCB9LFxue3R5cGU6IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5LCB9LFxue3R5cGU6IFNjcm9sbFJlZ2lzdGVyLCB9LFxue3R5cGU6IFNjcm9sbFJlc29sdmVyLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nc2Nyb2xsZWQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3Njcm9sbGVkVXAnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ19kaXN0YW5jZURvd24nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbERpc3RhbmNlJywgXSB9LF0sXG4nX2Rpc3RhbmNlVXAnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbFVwRGlzdGFuY2UnLCBdIH0sXSxcbidfdGhyb3R0bGUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbFRocm90dGxlJywgXSB9LF0sXG4nX2Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaW5maW5pdGVTY3JvbGxEaXNhYmxlZCcsIF0gfSxdLFxuJ19jb250YWluZXInOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbENvbnRhaW5lcicsIF0gfSxdLFxuJ3Njcm9sbFdpbmRvdyc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3Njcm9sbFdpbmRvdycsIF0gfSxdLFxuJ19pbW1lZGlhdGUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbW1lZGlhdGVDaGVjaycsIF0gfSxdLFxuJ19ob3Jpem9udGFsJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaG9yaXpvbnRhbCcsIF0gfSxdLFxuJ19hbHdheXNDYWxsYmFjayc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Fsd2F5c0NhbGxiYWNrJywgXSB9LF0sXG4nZGVib3VuY2UnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(88);
__webpack_require__(282);
__webpack_require__(284);
__webpack_require__(283);
__webpack_require__(286);
__webpack_require__(290);
__webpack_require__(287);
__webpack_require__(289);
var ScrollRegister = (function () {
    function ScrollRegister() {
    }
    ScrollRegister.prototype.attachEvent = function (options) {
        var scroller$ = Observable_1.Observable.fromEvent(options.container, 'scroll')[options.throttleType](function () { return Observable_1.Observable.timer(options.throttleDuration); })
            .filter(options.filterBefore)
            .mergeMap(function (ev) { return Observable_1.Observable.of(options.mergeMap(ev)); })
            .subscribe(options.scrollHandler);
        return scroller$;
    };
    ScrollRegister.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScrollRegister.ctorParameters = function () { return []; };
    return ScrollRegister;
}());
exports.ScrollRegister = ScrollRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLXJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUNuQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BDLFFBQU8sNEJBQTRCLENBQUMsQ0FBQTtBQUNwQyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBYXBDO0lBQUE7SUFlQSxDQUFDO0lBZEMsb0NBQVcsR0FBWCxVQUFhLE9BQTZCO1FBQ3hDLElBQU0sU0FBUyxHQUFpQix1QkFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUM5RSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO2FBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2FBQzVCLFFBQVEsQ0FBQyxVQUFDLEVBQU8sSUFBSyxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzthQUMxRCxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNJLHlCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7S0FDbkIsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDZCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLHNCQUFjLGlCQWUxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyUmVmIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aW1lcic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rocm90dGxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsUmVnaXN0ZXJDb25maWcge1xuICBjb250YWluZXI6IENvbnRhaW5lclJlZjtcbiAgdGhyb3R0bGVUeXBlOiBzdHJpbmc7XG4gIHRocm90dGxlRHVyYXRpb246IG51bWJlcjtcbiAgZmlsdGVyQmVmb3JlOiBGdW5jdGlvbjtcbiAgbWVyZ2VNYXA6IEZ1bmN0aW9uO1xuICBzY3JvbGxIYW5kbGVyOiBGdW5jdGlvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsUmVnaXN0ZXIge1xuICBhdHRhY2hFdmVudCAob3B0aW9uczogU2Nyb2xsUmVnaXN0ZXJDb25maWcpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHNjcm9sbGVyJDogU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQob3B0aW9ucy5jb250YWluZXIsICdzY3JvbGwnKVxuICAgICAgW29wdGlvbnMudGhyb3R0bGVUeXBlXSgoKSA9PiBPYnNlcnZhYmxlLnRpbWVyKG9wdGlvbnMudGhyb3R0bGVEdXJhdGlvbikpXG4gICAgICAuZmlsdGVyKG9wdGlvbnMuZmlsdGVyQmVmb3JlKVxuICAgICAgLm1lcmdlTWFwKChldjogYW55KSA9PiBPYnNlcnZhYmxlLm9mKG9wdGlvbnMubWVyZ2VNYXAoZXYpKSlcbiAgICAgIC5zdWJzY3JpYmUob3B0aW9ucy5zY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gc2Nyb2xsZXIkO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var ScrollResolver = (function () {
    function ScrollResolver() {
        this.lastScrollPosition = 0;
    }
    ScrollResolver.prototype.shouldScroll = function (container, config, scrollingDown) {
        var distance = config.distance;
        var remaining;
        var containerBreakpoint;
        if (scrollingDown) {
            remaining = container.totalToScroll - container.scrolledUntilNow;
            containerBreakpoint = container.height * distance.down + 1;
        }
        else {
            remaining = container.scrolledUntilNow;
            containerBreakpoint = container.height * distance.up + 1;
        }
        var shouldScroll = remaining <= containerBreakpoint;
        this.lastScrollPosition = container.scrolledUntilNow;
        return shouldScroll;
    };
    ScrollResolver.prototype.isScrollingDown = function (container) {
        return this.lastScrollPosition < container.scrolledUntilNow;
    };
    ScrollResolver.prototype.getScrollStats = function (container, config) {
        var isScrollingDown = this.isScrollingDown(container);
        var shouldScroll = this.shouldScroll(container, config, isScrollingDown);
        return { isScrollingDown: isScrollingDown, shouldScroll: shouldScroll };
    };
    ScrollResolver.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScrollResolver.ctorParameters = function () { return []; };
    return ScrollResolver;
}());
exports.ScrollResolver = ScrollResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFHM0M7SUFBQTtRQUNTLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQWlDeEMsQ0FBQztJQS9CQyxxQ0FBWSxHQUFaLFVBQWMsU0FBd0IsRUFBRSxNQUFzQixFQUFFLGFBQXNCO1FBQ3BGLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxTQUFpQixDQUFDO1FBQ3RCLElBQUksbUJBQTJCLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQixTQUFTLEdBQUcsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7WUFDakUsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQU0sWUFBWSxHQUFZLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBaUIsU0FBd0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7SUFDOUQsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZ0IsU0FBd0IsRUFBRSxNQUFzQjtRQUM5RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsRUFBRSxnQ0FBZSxFQUFFLDBCQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0kseUJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtLQUNuQixDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsNkJBQWMsR0FBbUUsY0FBTSxPQUFBLEVBQzdGLEVBRDZGLENBQzdGLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0JBQWMsaUJBa0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zaXRpb25TdGF0cywgU2Nyb2xsZXJDb25maWcgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNjcm9sbFJlc29sdmVyIHtcbiAgcHVibGljIGxhc3RTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuICBzaG91bGRTY3JvbGwgKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cywgY29uZmlnOiBTY3JvbGxlckNvbmZpZywgc2Nyb2xsaW5nRG93bjogYm9vbGVhbikge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gY29uZmlnLmRpc3RhbmNlO1xuICAgIGxldCByZW1haW5pbmc6IG51bWJlcjtcbiAgICBsZXQgY29udGFpbmVyQnJlYWtwb2ludDogbnVtYmVyO1xuICAgIGlmIChzY3JvbGxpbmdEb3duKSB7XG4gICAgICByZW1haW5pbmcgPSBjb250YWluZXIudG90YWxUb1Njcm9sbCAtIGNvbnRhaW5lci5zY3JvbGxlZFVudGlsTm93O1xuICAgICAgY29udGFpbmVyQnJlYWtwb2ludCA9IGNvbnRhaW5lci5oZWlnaHQgKiBkaXN0YW5jZS5kb3duICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtYWluaW5nID0gY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3c7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gY29udGFpbmVyLmhlaWdodCAqIGRpc3RhbmNlLnVwICsgMTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkU2Nyb2xsOiBib29sZWFuID0gcmVtYWluaW5nIDw9IGNvbnRhaW5lckJyZWFrcG9pbnQ7XG4gICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgICByZXR1cm4gc2hvdWxkU2Nyb2xsO1xuICB9XG5cbiAgaXNTY3JvbGxpbmdEb3duIChjb250YWluZXI6IFBvc2l0aW9uU3RhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPCBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgfVxuXG4gIGdldFNjcm9sbFN0YXRzIChjb250YWluZXI6IFBvc2l0aW9uU3RhdHMsIGNvbmZpZzogU2Nyb2xsZXJDb25maWcpIHtcbiAgICBjb25zdCBpc1Njcm9sbGluZ0Rvd24gPSB0aGlzLmlzU2Nyb2xsaW5nRG93bihjb250YWluZXIpO1xuICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IHRoaXMuc2hvdWxkU2Nyb2xsKGNvbnRhaW5lciwgY29uZmlnLCBpc1Njcm9sbGluZ0Rvd24pO1xuICAgIHJldHVybiB7IGlzU2Nyb2xsaW5nRG93biwgc2hvdWxkU2Nyb2xsIH07XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export MdlBadgeDirective */
/* unused harmony export MdlBadgeOverlapDirective */
/* unused harmony export MdlBadgeNoBackgroundDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlBadgeModule; });

var MdlBadgeDirective = (function () {
    function MdlBadgeDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.el = elementRef.nativeElement;
    }
    MdlBadgeDirective.prototype.ngOnChanges = function (changes) {
        this.renderer.setAttribute(this.el, 'data-badge', this.mdlBadgeContent);
    };
    return MdlBadgeDirective;
}());

MdlBadgeDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-badge]',
                host: {
                    '[class.mdl-badge]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlBadgeDirective.propDecorators = {
    'mdlBadgeContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-badge',] },],
};
var MdlBadgeOverlapDirective = (function () {
    function MdlBadgeOverlapDirective() {
    }
    return MdlBadgeOverlapDirective;
}());

MdlBadgeOverlapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-badge-overlap]',
                host: {
                    '[class.mdl-badge--overlap]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeOverlapDirective.ctorParameters = function () { return []; };
var MdlBadgeNoBackgroundDirective = (function () {
    function MdlBadgeNoBackgroundDirective() {
    }
    return MdlBadgeNoBackgroundDirective;
}());

MdlBadgeNoBackgroundDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-badge-no-background]',
                host: {
                    '[class.mdl-badge--no-background]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlBadgeNoBackgroundDirective.ctorParameters = function () { return []; };
var MDL_BADGE_DIRECTIVES = [MdlBadgeDirective, MdlBadgeOverlapDirective, MdlBadgeNoBackgroundDirective];
var MdlBadgeModule = (function () {
    function MdlBadgeModule() {
    }
    MdlBadgeModule.forRoot = function () {
        return {
            ngModule: MdlBadgeModule,
            providers: []
        };
    };
    return MdlBadgeModule;
}());

MdlBadgeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_BADGE_DIRECTIVES,
                declarations: MDL_BADGE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlBadgeModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-badge.directive.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(9);
/* unused harmony export MdlCardComponent */
/* unused harmony export MdlCardChildStructure */
/* unused harmony export MdlCardTitleComponent */
/* unused harmony export MdlCardSupportingTextComponent */
/* unused harmony export MdlCardMediaComponent */
/* unused harmony export MdlCardActionsComponent */
/* unused harmony export MdlCardMenuComponent */
/* unused harmony export MdlCardTitleTextDirective */
/* unused harmony export MdlCardBorderDirective */
/* unused harmony export MdlCardExpandDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlCardModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var MdlCardComponent = (function () {
    function MdlCardComponent() {
    }
    return MdlCardComponent;
}());

MdlCardComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-card',
                host: {
                    '[class.mdl-card]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlCardComponent.ctorParameters = function () { return []; };
var MdlCardChildStructure = (function () {
    function MdlCardChildStructure(mdlCardComponent, childComponentName) {
        this.mdlCardComponent = mdlCardComponent;
        this.childComponentName = childComponentName;
    }
    MdlCardChildStructure.prototype.ngOnInit = function () {
        if (this.mdlCardComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */](this.childComponentName, 'mdl-card');
        }
    };
    return MdlCardChildStructure;
}());

var MdlCardTitleComponent = (function (_super) {
    __extends(MdlCardTitleComponent, _super);
    function MdlCardTitleComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-title') || this;
    }
    MdlCardTitleComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardTitleComponent;
}(MdlCardChildStructure));

MdlCardTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-card-title',
                host: {
                    '[class.mdl-card__title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlCardTitleComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlCardSupportingTextComponent = (function (_super) {
    __extends(MdlCardSupportingTextComponent, _super);
    function MdlCardSupportingTextComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-supporting-text') || this;
    }
    MdlCardSupportingTextComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardSupportingTextComponent;
}(MdlCardChildStructure));

MdlCardSupportingTextComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-card-supporting-text',
                host: {
                    '[class.mdl-card__supporting-text]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlCardSupportingTextComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlCardMediaComponent = (function (_super) {
    __extends(MdlCardMediaComponent, _super);
    function MdlCardMediaComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-media') || this;
    }
    MdlCardMediaComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardMediaComponent;
}(MdlCardChildStructure));

MdlCardMediaComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-card-media',
                host: {
                    '[class.mdl-card__media]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlCardMediaComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlCardActionsComponent = (function (_super) {
    __extends(MdlCardActionsComponent, _super);
    function MdlCardActionsComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-actions') || this;
    }
    MdlCardActionsComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardActionsComponent;
}(MdlCardChildStructure));

MdlCardActionsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-card-actions',
                host: {
                    '[class.mdl-card__actions]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlCardActionsComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlCardMenuComponent = (function (_super) {
    __extends(MdlCardMenuComponent, _super);
    function MdlCardMenuComponent(mdlCardComponent) {
        return _super.call(this, mdlCardComponent, 'mdl-card-menu') || this;
    }
    MdlCardMenuComponent.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    return MdlCardMenuComponent;
}(MdlCardChildStructure));

MdlCardMenuComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-card-menu',
                host: {
                    '[class.mdl-card__menu]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlCardMenuComponent.ctorParameters = function () { return [
    { type: MdlCardComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlCardTitleTextDirective = (function () {
    function MdlCardTitleTextDirective() {
    }
    return MdlCardTitleTextDirective;
}());

MdlCardTitleTextDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-card-title-text]',
                host: {
                    '[class.mdl-card__title-text]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlCardTitleTextDirective.ctorParameters = function () { return []; };
var MdlCardBorderDirective = (function () {
    function MdlCardBorderDirective() {
    }
    return MdlCardBorderDirective;
}());

MdlCardBorderDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-card-border]',
                host: {
                    '[class.mdl-card--border]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlCardBorderDirective.ctorParameters = function () { return []; };
var MdlCardExpandDirective = (function () {
    function MdlCardExpandDirective() {
    }
    return MdlCardExpandDirective;
}());

MdlCardExpandDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-card-expand]',
                host: {
                    '[class.mdl-card--expand]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlCardExpandDirective.ctorParameters = function () { return []; };
var MDL_CARD_DIRECTIVES = [
    MdlCardComponent,
    MdlCardTitleComponent,
    MdlCardMediaComponent,
    MdlCardSupportingTextComponent,
    MdlCardActionsComponent,
    MdlCardMenuComponent,
    MdlCardTitleTextDirective,
    MdlCardBorderDirective,
    MdlCardExpandDirective
];
var MdlCardModule = (function () {
    function MdlCardModule() {
    }
    MdlCardModule.forRoot = function () {
        return {
            ngModule: MdlCardModule,
            providers: []
        };
    };
    return MdlCardModule;
}());

MdlCardModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_CARD_DIRECTIVES,
                declarations: MDL_CARD_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlCardModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-card.component.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_mdl_icon_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlChipModule; });







var DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_3__mdl_chip_component__["a" /* MdlChipComponent */], __WEBPACK_IMPORTED_MODULE_4__mdl_chip_contact_directive__["a" /* MdlChipContactDirective */]];
var MdlChipModule = (function () {
    function MdlChipModule() {
    }
    MdlChipModule.forRoot = function () {
        return {
            ngModule: MdlChipModule,
            providers: []
        };
    };
    return MdlChipModule;
}());

MdlChipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                exports: DIRECTIVES,
                declarations: DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlChipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NativeWebAnimationPlayer */
/* unused harmony export NoopAnimationPlayer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeWebAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NoopWebAnimations; });
var NativeWebAnimationPlayer = (function () {
    function NativeWebAnimationPlayer(element, keyframes, duration, easing) {
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.easing = easing;
        this.onDoneCallback = [];
    }
    NativeWebAnimationPlayer.prototype.onDone = function (fn) {
        this.onDoneCallback.push(fn);
    };
    NativeWebAnimationPlayer.prototype.play = function () {
        var _this = this;
        var animation = this.element['animate'](this.keyframes, { duration: this.duration,
            easing: this.easing,
            fill: 'forwards' });
        animation.addEventListener('finish', function () { return _this.onDoneCallback.forEach(function (fn) { return fn(); }); });
    };
    return NativeWebAnimationPlayer;
}());

var NoopAnimationPlayer = (function () {
    function NoopAnimationPlayer(element, keyframes, duration, easing) {
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.easing = easing;
        this.onDoneCallback = [];
    }
    NoopAnimationPlayer.prototype.onDone = function (fn) {
        this.onDoneCallback.push(fn);
    };
    NoopAnimationPlayer.prototype.play = function () {
        this.onDoneCallback.forEach(function (fn) { return fn(); });
    };
    return NoopAnimationPlayer;
}());

var Animations = (function () {
    function Animations() {
    }
    return Animations;
}());

var NativeWebAnimations = (function () {
    function NativeWebAnimations() {
    }
    NativeWebAnimations.prototype.animate = function (element, keyframes, duration, easing) {
        return new NativeWebAnimationPlayer(element, keyframes, duration, easing);
    };
    return NativeWebAnimations;
}());

var NoopWebAnimations = (function () {
    function NoopWebAnimations() {
    }
    NoopWebAnimations.prototype.animate = function (element, keyframes, duration, easing) {
        return new NoopAnimationPlayer(element, keyframes, duration, easing);
    };
    return NoopWebAnimations;
}());

//# sourceMappingURL=animations.js.map

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppendViewContainerRefDirective; });

var AppendViewContainerRefDirective = (function () {
    function AppendViewContainerRefDirective(viewRef, renderer) {
        this.viewRef = viewRef;
        this.renderer = renderer;
    }
    AppendViewContainerRefDirective.prototype.ngAfterViewInit = function () {
        this.renderer.appendChild(this.viewRef.element.nativeElement, this.viewContainerRefToAppend.element.nativeElement);
    };
    return AppendViewContainerRefDirective;
}());

AppendViewContainerRefDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[append-view-container-ref]'
            },] },
];
/** @nocollapse */
AppendViewContainerRefDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
AppendViewContainerRefDirective.propDecorators = {
    'viewContainerRefToAppend': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['append-view-container-ref',] },],
};
//# sourceMappingURL=append-view-container-ref-directive.js.map

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_simple_dialog_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_dialog_host_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__button_mdl_button_component__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogModule; });













var PUBLIC_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__mdl_dialog_component__["a" /* MdlDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_7__mdl_alert_component__["a" /* MdlAlertComponent */]
];
var PRIVATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__mdl_dialog_host_component__["a" /* MdlDialogHostComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mdl_simple_dialog_component__["a" /* MdlSimpleDialogComponent */]
];
var MdlDialogModule = (function () {
    function MdlDialogModule() {
    }
    MdlDialogModule.forRoot = function () {
        return {
            ngModule: MdlDialogModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["a" /* MdlDialogService */]]
        };
    };
    return MdlDialogModule;
}());

MdlDialogModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_5__common_index__["a" /* MdlCommonsModule */],
                    __WEBPACK_IMPORTED_MODULE_9__button_mdl_button_component__["a" /* MdlButtonModule */],
                    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot()
                ],
                exports: PUBLIC_COMPONENTS.slice(),
                declarations: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS),
                entryComponents: PUBLIC_COMPONENTS.concat(PRIVATE_COMPONENTS)
            },] },
];
/** @nocollapse */
MdlDialogModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalMdlDialogReference; });


/**
 * Internal representation of the dialog ref. the service
 * user should not have access to the created components
 * and internal implementations.
 */
var InternalMdlDialogReference = (function () {
    function InternalMdlDialogReference(config) {
        this.config = config;
        this.onHideSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.onVisibleSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.isModal = false;
        this.dialogRef = new __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["b" /* MdlDialogReference */](this);
    }
    Object.defineProperty(InternalMdlDialogReference.prototype, "hostDialog", {
        get: function () {
            return this.hostDialogComponentRef.instance;
        },
        enumerable: true,
        configurable: true
    });
    InternalMdlDialogReference.prototype.hide = function (data) {
        this.onHideSubject.next(data);
        this.onHideSubject.complete();
        this.closeCallback();
    };
    InternalMdlDialogReference.prototype.visible = function () {
        this.onVisibleSubject.next();
        this.onVisibleSubject.complete();
    };
    InternalMdlDialogReference.prototype.onHide = function () {
        return this.onHideSubject.asObservable();
    };
    InternalMdlDialogReference.prototype.onVisible = function () {
        return this.onVisibleSubject.asObservable();
    };
    return InternalMdlDialogReference;
}());

//# sourceMappingURL=internal-dialog-reference.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlAlertComponent; });


var MdlAlertComponent = (function () {
    function MdlAlertComponent(mdlDialogService) {
        this.mdlDialogService = mdlDialogService;
        this.confirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MdlAlertComponent.prototype.show = function () {
        var _this = this;
        this.mdlDialogService.alert(this.message, this.okText, this.title).subscribe(function () {
            _this.confirmed.emit();
        });
    };
    return MdlAlertComponent;
}());

MdlAlertComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-alert',
                host: {
                    '[style.display]': '"none"'
                },
                template: "\n  ",
                exportAs: 'mdlAlert'
            },] },
];
/** @nocollapse */
MdlAlertComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__mdl_dialog_service__["a" /* MdlDialogService */], },
]; };
MdlAlertComponent.propDecorators = {
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'message': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'okText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'confirmed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=mdl-alert.component.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlDialogComponent; });




var MdlDialogComponent = (function () {
    function MdlDialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.showEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hideEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isShown = false;
        this.dialogRef = null;
    }
    Object.defineProperty(MdlDialogComponent.prototype, "modal", {
        get: function () { return this._modal; },
        set: function (value) { this._modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlDialogComponent.prototype.show = function () {
        var _this = this;
        if (this.isShown) {
            throw new Error('Only one instance of an embedded mdl-dialog can exist!');
        }
        this.isShown = true;
        var mergedConfig = this.config || {};
        // mdl-modal overwrites config.isModal if present
        mergedConfig.isModal = typeof this.modal !== 'undefined' ? this.modal : mergedConfig.isModal;
        // default is true
        if (typeof mergedConfig.isModal === 'undefined') {
            mergedConfig.isModal = true;
        }
        var result = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        var p = this.dialogService.showDialogTemplate(this.template, mergedConfig);
        p.subscribe(function (dialogRef) {
            _this.dialogRef = dialogRef;
            _this.dialogRef.onVisible().subscribe(function () {
                _this.showEmitter.emit(dialogRef);
                result.next(dialogRef);
                result.complete();
            });
            _this.dialogRef.onHide().subscribe(function () {
                _this.hideEmitter.emit(null);
                _this.dialogRef = null;
                _this.isShown = false;
            });
        });
        return result.asObservable();
    };
    MdlDialogComponent.prototype.close = function () {
        if (this.dialogRef) {
            this.dialogRef.hide();
        }
    };
    return MdlDialogComponent;
}());

MdlDialogComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-dialog',
                template: "\n    <div *dialogTemplate>\n      <ng-content></ng-content>\n    </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlDialogComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__mdl_dialog_service__["a" /* MdlDialogService */], },
]; };
MdlDialogComponent.propDecorators = {
    'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],] },],
    'modal': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-modal',] },],
    'config': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-dialog-config',] },],
    'showEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['show',] },],
    'hideEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['hide',] },],
};
//# sourceMappingURL=mdl-dialog.component.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_mdl_icon_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbox_mdl_checkbox_component__ = __webpack_require__(13);
/* unused harmony export MdlIconToggleComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlIconToggleModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





var MdlIconToggleComponent = (function (_super) {
    __extends(MdlIconToggleComponent, _super);
    function MdlIconToggleComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    return MdlIconToggleComponent;
}(__WEBPACK_IMPORTED_MODULE_4__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxComponent */]));

MdlIconToggleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-icon-toggle',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlIconToggleComponent; }),
                        multi: true
                    }],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-icon-toggle]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'value',
                    '[class.is-disabled]': 'disabled'
                },
                outputs: ['change'],
                template: "\n  <input type=\"checkbox\" class=\"mdl-icon-toggle__input\" \n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    [disabled]=\"disabled\"\n    [(ngModel)]=\"value\">\n  <mdl-icon class=\"mdl-icon-toggle__label\"><ng-content></ng-content></mdl-icon>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlIconToggleComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
var MDL_ICON_TOGGLE_DIRECTIVES = [MdlIconToggleComponent];
var MdlIconToggleModule = (function () {
    function MdlIconToggleModule() {
    }
    MdlIconToggleModule.forRoot = function () {
        return {
            ngModule: MdlIconToggleModule,
            providers: []
        };
    };
    return MdlIconToggleModule;
}());

MdlIconToggleModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_3__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
                exports: MDL_ICON_TOGGLE_DIRECTIVES,
                declarations: MDL_ICON_TOGGLE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlIconToggleModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-icon-toggle.component.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chips_index__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_index__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tooltip_index__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__table_index__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__menu_index__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layout_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tabs_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["b"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dialog_outlet_mdl_backdrop_overlay_component__ = __webpack_require__(32);
/* unused harmony reexport Private1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dialog_mdl_dialog_host_component__ = __webpack_require__(34);
/* unused harmony reexport Private2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dialog_mdl_simple_dialog_component__ = __webpack_require__(35);
/* unused harmony reexport Private3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_append_view_container_ref_directive__ = __webpack_require__(56);
/* unused harmony reexport Private4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlModule; });
/* unused harmony export MdlNonRootModule */

















































// AOT :( https://github.com/angular/angular/issues/11606




var MDL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["a" /* MdlButtonModule */],
    __WEBPACK_IMPORTED_MODULE_22__layout_index__["a" /* MdlLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["a" /* MdlCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__chips_index__["a" /* MdlChipModule */],
    __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a" /* MdlDialogModule */],
    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */],
    __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["a" /* MdlSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["a" /* MdlRippleModule */],
    __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["a" /* MdlBadgeModule */],
    __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["a" /* MdlShadowModule */],
    __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["a" /* MdlCardModule */],
    __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["a" /* MdlRadioModule */],
    __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["a" /* MdlProgressModule */],
    __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["a" /* MdlIconModule */],
    __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["a" /* MdlIconToggleModule */],
    __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["a" /* MdlListModule */],
    __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["a" /* MdlSliderModule */],
    __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["a" /* MdlSwitchModule */],
    __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["a" /* MdlSnackbaModule */],
    __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a" /* MdlTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_20__table_index__["a" /* MdlTableModule */],
    __WEBPACK_IMPORTED_MODULE_21__menu_index__["a" /* MdlMenuModule */],
    __WEBPACK_IMPORTED_MODULE_23__tabs_index__["a" /* MdlTabsModule */],
    __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["a" /* MdlTextFieldModule */]
];
var MdlModule = (function () {
    function MdlModule() {
    }
    return MdlModule;
}());

MdlModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__button_mdl_button_component__["a" /* MdlButtonModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_22__layout_index__["a" /* MdlLayoutModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_9__checkbox_mdl_checkbox_component__["a" /* MdlCheckboxModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_6__chips_index__["a" /* MdlChipModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_7__dialog_index__["a" /* MdlDialogModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_8__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_15__spinner_mdl_spinner_component__["a" /* MdlSpinnerModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_1__common_mdl_ripple_directive__["a" /* MdlRippleModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_3__badge_mdl_badge_directive__["a" /* MdlBadgeModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_4__shadow_mdl_shadow_directive__["a" /* MdlShadowModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_5__card_mdl_card_component__["a" /* MdlCardModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_10__radio_mdl_radio_component__["a" /* MdlRadioModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_11__progress_mdl_progress_component__["a" /* MdlProgressModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_12__icon_mdl_icon_component__["a" /* MdlIconModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_13__icon_toggle_mdl_icon_toggle_component__["a" /* MdlIconToggleModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_14__list_mdl_list_component__["a" /* MdlListModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_16__slider_mdl_slider_component__["a" /* MdlSliderModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_17__switch_mdl_switch_component__["a" /* MdlSwitchModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_18__snackbar_mdl_snackbar_service__["a" /* MdlSnackbaModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_19__tooltip_index__["a" /* MdlTooltipModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_20__table_index__["a" /* MdlTableModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_21__menu_index__["a" /* MdlMenuModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_23__tabs_index__["a" /* MdlTabsModule */].forRoot(),
                    __WEBPACK_IMPORTED_MODULE_24__textfield_mdl_textfield_component__["a" /* MdlTextFieldModule */].forRoot()
                ],
                exports: MDL_MODULES,
                providers: []
            },] },
];
/** @nocollapse */
MdlModule.ctorParameters = function () { return []; };
var MdlNonRootModule = (function () {
    function MdlNonRootModule() {
    }
    MdlNonRootModule.forRoot = function () {
        return { ngModule: MdlModule };
    };
    return MdlNonRootModule;
}());

MdlNonRootModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: MDL_MODULES,
                exports: MDL_MODULES
            },] },
];
/** @nocollapse */
MdlNonRootModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__icon_mdl_icon_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_mdl_ripple_directive__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_index__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutModule; });















var MDL_LAYOUT_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["a" /* MdlLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_layout_header_component__["a" /* MdlLayoutHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_layout_drawer_component__["a" /* MdlLayoutDrawerComponent */],
    __WEBPACK_IMPORTED_MODULE_4__mdl_layout_content_component__["a" /* MdlLayoutContentComponent */],
    __WEBPACK_IMPORTED_MODULE_5__mdl_layout_header_transparent_directive__["a" /* MdlLayoutHeaderTransparentDirective */],
    __WEBPACK_IMPORTED_MODULE_6__mdl_layout_header_row_component__["a" /* MdlLayoutHeaderRowComponent */],
    __WEBPACK_IMPORTED_MODULE_7__mdl_layout_title_component__["a" /* MdlLayoutTitleComponent */],
    __WEBPACK_IMPORTED_MODULE_8__mdl_layout_spacer_component__["a" /* MdlLayoutSpacerComponent */],
    __WEBPACK_IMPORTED_MODULE_9__mdl_layout_tab_panel_component__["a" /* MdlLayoutTabPanelComponent */]
];









var MdlLayoutModule = (function () {
    function MdlLayoutModule() {
    }
    MdlLayoutModule.forRoot = function () {
        return {
            ngModule: MdlLayoutModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__mdl_layout_component__["b" /* MdlScreenSizeService */]
            ]
        };
    };
    return MdlLayoutModule;
}());

MdlLayoutModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_10__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_11__common_mdl_ripple_directive__["a" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_12__common_index__["a" /* MdlCommonsModule */], __WEBPACK_IMPORTED_MODULE_14__tabs_index__["a" /* MdlTabsModule */], __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"]],
                exports: MDL_LAYOUT_DIRECTIVES,
                declarations: MDL_LAYOUT_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlLayoutModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderRowComponent; });

var MdlLayoutHeaderRowComponent = (function () {
    function MdlLayoutHeaderRowComponent() {
    }
    return MdlLayoutHeaderRowComponent;
}());

MdlLayoutHeaderRowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-header-row',
                host: {
                    '[class.mdl-layout__header-row]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutHeaderRowComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-header-row.component.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutHeaderTransparentDirective; });

var MdlLayoutHeaderTransparentDirective = (function () {
    function MdlLayoutHeaderTransparentDirective() {
    }
    return MdlLayoutHeaderTransparentDirective;
}());

MdlLayoutHeaderTransparentDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-layout-header[mdl-layout-header-transparent]',
                host: {
                    '[class.mdl-layout__header--transparent]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlLayoutHeaderTransparentDirective.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-header-transparent.directive.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutSpacerComponent; });

var MdlLayoutSpacerComponent = (function () {
    function MdlLayoutSpacerComponent() {
    }
    return MdlLayoutSpacerComponent;
}());

MdlLayoutSpacerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-spacer',
                host: {
                    '[class.mdl-layout-spacer]': 'true'
                },
                template: '',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutSpacerComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-spacer.component.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlLayoutTitleComponent; });

var MdlLayoutTitleComponent = (function () {
    function MdlLayoutTitleComponent() {
    }
    return MdlLayoutTitleComponent;
}());

MdlLayoutTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-layout-title',
                host: {
                    '[class.mdl-layout-title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlLayoutTitleComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-layout-title.component.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__(15);
/* unused harmony export MdlUnsupportedCountOfListItemLinesError */
/* unused harmony export MdlListComponent */
/* unused harmony export MdlListItemComponent */
/* unused harmony export MdlListItemPrimaryContentComponent */
/* unused harmony export MdlListItemSecondaryContentComponent */
/* unused harmony export MdlListItemSecondaryActionComponent */
/* unused harmony export MdlListItemSubTitleComponent */
/* unused harmony export MdlListItemSecondaryInfoComponent */
/* unused harmony export MdlListItemTextBodyComponent */
/* unused harmony export MdlListItemIconDirective */
/* unused harmony export MdlListItemAvatarDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlListModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var MdlUnsupportedCountOfListItemLinesError = (function (_super) {
    __extends(MdlUnsupportedCountOfListItemLinesError, _super);
    function MdlUnsupportedCountOfListItemLinesError(lines) {
        /* istanbul ignore next */
        return _super.call(this, "\"" + lines + "\" is not supported - max 3 lines please.") || this;
    }
    return MdlUnsupportedCountOfListItemLinesError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MdlListComponent = (function () {
    function MdlListComponent() {
    }
    return MdlListComponent;
}());

MdlListComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list',
                host: {
                    '[class.mdl-list]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListComponent.ctorParameters = function () { return []; };
var MdlListItemComponent = (function () {
    function MdlListItemComponent(mdlListComponent) {
        this.mdlListComponent = mdlListComponent;
        this._lines = 1;
    }
    Object.defineProperty(MdlListItemComponent.prototype, "lines", {
        get: function () { return this._lines; },
        set: function (value) { this._lines = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlListItemComponent.prototype.ngOnInit = function () {
        if (this.mdlListComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item', 'mdl-list');
        }
    };
    MdlListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.lines && this.lines > 3) {
            throw new MdlUnsupportedCountOfListItemLinesError(this.lines);
        }
    };
    return MdlListItemComponent;
}());

/**
 * TODO check these conditions
 * .mdl-list__item-secondary-content	Defines the secondary content sub-division
 * requires .mdl-list__item-two-line or .mdl-list__item-three-line
 .mdl-list__item-secondary-info	Defines the information sub-division
 requires .mdl-list__item-two-line or .mdl-list__item-three-line
 .mdl-list__item-secondary-action	Defines the Action sub-division
 requires .mdl-list__item-two-line or .mdl-list__item-three-line
 .mdl-list__item-text-body	Defines the Text Body sub-division
 requires .mdl-list__item-three-line
 */
MdlListItemComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item',
                host: {
                    '[class.mdl-list__item]': 'true',
                    '[class.mdl-list__item--two-line]': 'lines==2',
                    '[class.mdl-list__item--three-line]': 'lines==3'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemComponent.ctorParameters = function () { return [
    { type: MdlListComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
MdlListItemComponent.propDecorators = {
    'lines': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MdlListItemPrimaryContentComponent = (function () {
    function MdlListItemPrimaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemPrimaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-primary-content', 'mdl-list-item');
        }
    };
    return MdlListItemPrimaryContentComponent;
}());

MdlListItemPrimaryContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item-primary-content',
                host: {
                    '[class.mdl-list__item-primary-content]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemPrimaryContentComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlListItemSecondaryContentComponent = (function () {
    function MdlListItemSecondaryContentComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryContentComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-content', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryContentComponent;
}());

MdlListItemSecondaryContentComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item-secondary-content',
                host: {
                    '[class.mdl-list__item-secondary-content]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryContentComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlListItemSecondaryActionComponent = (function () {
    function MdlListItemSecondaryActionComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryActionComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-action', 'mdl-list-item');
        }
    };
    return MdlListItemSecondaryActionComponent;
}());

MdlListItemSecondaryActionComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item-secondary-action',
                host: {
                    '[class.mdl-list__item-secondary-action]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryActionComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlListItemSubTitleComponent = (function () {
    function MdlListItemSubTitleComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSubTitleComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-sub-title', 'mdl-list-item-primary-content');
        }
    };
    return MdlListItemSubTitleComponent;
}());

MdlListItemSubTitleComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item-sub-title',
                host: {
                    '[class.mdl-list__item-sub-title]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemSubTitleComponent.ctorParameters = function () { return [
    { type: MdlListItemPrimaryContentComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlListItemSecondaryInfoComponent = (function () {
    function MdlListItemSecondaryInfoComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemSecondaryInfoComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-secondary-info', 'mdl-list-item-secondary-content');
        }
    };
    return MdlListItemSecondaryInfoComponent;
}());

MdlListItemSecondaryInfoComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item-secondary-info',
                host: {
                    '[class.mdl-list__item-secondary-info]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemSecondaryInfoComponent.ctorParameters = function () { return [
    { type: MdlListItemSecondaryContentComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlListItemTextBodyComponent = (function () {
    function MdlListItemTextBodyComponent(mdlListItemComponent) {
        this.mdlListItemComponent = mdlListItemComponent;
    }
    MdlListItemTextBodyComponent.prototype.ngOnInit = function () {
        if (this.mdlListItemComponent === null) {
            throw new __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["b" /* MdlStructureError */]('mdl-list-item-text-body', 'mdl-list-item');
        }
    };
    return MdlListItemTextBodyComponent;
}());

MdlListItemTextBodyComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-list-item-text-body',
                host: {
                    '[class.mdl-list__item-text-body]': 'true'
                },
                template: '<ng-content></ng-content>',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlListItemTextBodyComponent.ctorParameters = function () { return [
    { type: MdlListItemComponent, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
var MdlListItemIconDirective = (function () {
    function MdlListItemIconDirective() {
    }
    return MdlListItemIconDirective;
}());

MdlListItemIconDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-icon[mdl-list-item-icon]',
                host: {
                    '[class.mdl-list__item-icon]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlListItemIconDirective.ctorParameters = function () { return []; };
var MdlListItemAvatarDirective = (function () {
    function MdlListItemAvatarDirective() {
    }
    return MdlListItemAvatarDirective;
}());

MdlListItemAvatarDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'mdl-icon[mdl-list-item-avatar]',
                host: {
                    '[class.mdl-list__item-avatar]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlListItemAvatarDirective.ctorParameters = function () { return []; };
var MDL_LIST_DIRECTIVES = [
    MdlListComponent,
    MdlListItemComponent,
    MdlListItemPrimaryContentComponent,
    MdlListItemIconDirective,
    MdlListItemAvatarDirective,
    MdlListItemSecondaryContentComponent,
    MdlListItemSecondaryActionComponent,
    MdlListItemSubTitleComponent,
    MdlListItemSecondaryInfoComponent,
    MdlListItemTextBodyComponent
];
var MdlListModule = (function () {
    function MdlListModule() {
    }
    MdlListModule.forRoot = function () {
        return {
            ngModule: MdlListModule,
            providers: []
        };
    };
    return MdlListModule;
}());

MdlListModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_LIST_DIRECTIVES,
                declarations: MDL_LIST_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlListModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-list.component.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdl_toggle_menu_directive__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuModule; });






var MDL_MENU_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["a" /* MdlMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_menu_item_component__["a" /* MdlMenuItemComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mdl_menu_item_directive__["a" /* MdlMenuItemFullBleedDeviderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__mdl_toggle_menu_directive__["a" /* MdlToggleMenuDirective */]
];



var MdlMenuModule = (function () {
    function MdlMenuModule() {
    }
    MdlMenuModule.forRoot = function () {
        return {
            ngModule: MdlMenuModule,
            providers: [__WEBPACK_IMPORTED_MODULE_1__mdl_menu_component__["b" /* MdlMenuRegisty */]]
        };
    };
    return MdlMenuModule;
}());

MdlMenuModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"]],
                exports: MDL_MENU_DIRECTIVES,
                declarations: MDL_MENU_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlMenuModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlMenuItemFullBleedDeviderComponent; });

var MdlMenuItemFullBleedDeviderComponent = (function () {
    function MdlMenuItemFullBleedDeviderComponent() {
    }
    return MdlMenuItemFullBleedDeviderComponent;
}());

MdlMenuItemFullBleedDeviderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-menu-item-full-bleed-divider]',
                host: {
                    '[class.mdl-menu__item--full-bleed-divider]': 'true'
                }
            },] },
];
/** @nocollapse */
MdlMenuItemFullBleedDeviderComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-menu-item.directive.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* unused harmony export MdlProgressComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlProgressModule; });



var MdlProgressComponent = (function () {
    function MdlProgressComponent() {
        this.progress = 0;
        this.buffer = 100;
        this.aux = 0;
        this._indeterminate = false;
    }
    Object.defineProperty(MdlProgressComponent.prototype, "indeterminate", {
        get: function () { return this._indeterminate; },
        set: function (value) { this._indeterminate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlProgressComponent.prototype.ngOnChanges = function (changes) {
        if (changes['buffer']) {
            this.setBuffer(changes['buffer'].currentValue);
        }
    };
    MdlProgressComponent.prototype.setBuffer = function (b) {
        this.aux = 100 - b;
    };
    return MdlProgressComponent;
}());

MdlProgressComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-progress',
                host: {
                    '[class.mdl-progress]': 'true',
                    '[class.mdl-progress__indeterminate]': 'indeterminate===true'
                },
                template: "\n    <div class=\"progressbar bar bar1\" [style.width]=\"progress + '%'\"></div>\n    <div class=\"bufferbar bar bar2\" [style.width]=\"buffer + '%'\"></div>\n    <div class=\"auxbar bar bar3\" [ngStyle]=\"{'width': aux+'%'}\"></div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MdlProgressComponent.ctorParameters = function () { return []; };
MdlProgressComponent.propDecorators = {
    'progress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'buffer': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'aux': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'indeterminate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MDL_PROGRESS_DIRECTIVES = [MdlProgressComponent];
var MdlProgressModule = (function () {
    function MdlProgressModule() {
    }
    MdlProgressModule.forRoot = function () {
        return {
            ngModule: MdlProgressModule,
            providers: []
        };
    };
    return MdlProgressModule;
}());

MdlProgressModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
                exports: MDL_PROGRESS_DIRECTIVES,
                declarations: MDL_PROGRESS_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlProgressModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-progress.component.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_noop__ = __webpack_require__(18);
/* unused harmony export MdlRadioGroupRegisty */
/* unused harmony export MdlRadioComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlRadioModule; });





var IS_FOCUSED = 'is-focused';
// Registry for mdl-readio compnents. Is responsible to keep the
// right state of the radio buttons of a radio group. It would be
// easier if i had a mdl-radio-group component. but this would be
// a big braking change.
var MdlRadioGroupRegisty = (function () {
    function MdlRadioGroupRegisty() {
        this.defaultFormGroup = 'defaultFromGroup';
        this.radioComponents = [];
    }
    MdlRadioGroupRegisty.prototype.add = function (radioComponent, formGroupName) {
        this.radioComponents.push({
            radio: radioComponent,
            group: formGroupName || this.defaultFormGroup
        });
    };
    MdlRadioGroupRegisty.prototype.remove = function (radioComponent) {
        this.radioComponents = this.radioComponents.filter(function (radioComponentInArray) {
            return (radioComponentInArray.radio !== radioComponent);
        });
    };
    MdlRadioGroupRegisty.prototype.select = function (radioComponent, formGroupName) {
        // unselect every radioComponent that is not the provided radiocomponent
        // and has the same name and is in teh same group.
        var groupToTest = formGroupName || this.defaultFormGroup;
        this.radioComponents.forEach(function (component) {
            if (component.radio.name === radioComponent.name && component.group === groupToTest) {
                if (component.radio !== radioComponent) {
                    component.radio.deselect(radioComponent.value);
                }
            }
        });
    };
    return MdlRadioGroupRegisty;
}());

MdlRadioGroupRegisty.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlRadioGroupRegisty.ctorParameters = function () { return []; };
/*
 <mdl-radio name="group1" value="1" [(ngModel)]="radioOption">Value 1</mdl-radio>
 */
var MdlRadioComponent = (function () {
    function MdlRadioComponent(elementRef, renderer, radioGroupRegistry, formGroupName) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.radioGroupRegistry = radioGroupRegistry;
        this.formGroupName = formGroupName;
        this._disabled = false;
        this.tabindex = null;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // the internal state - used to set the underlaying radio button state.
        this.checked = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlRadioComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlRadioComponent.prototype.ngOnInit = function () {
        // we need a name and it must be the same as in the formcontrol.
        // a radio group without name is useless.
        this.checkName();
        // register the radio button - this is the only chance to unselect the
        // radio button that is no longer active - scope the radio button with it's group
        // if there is one.
        this.radioGroupRegistry.add(this, this.formGroupName);
    };
    MdlRadioComponent.prototype.ngOnDestroy = function () {
        this.radioGroupRegistry.remove(this);
    };
    MdlRadioComponent.prototype.writeValue = function (optionValue) {
        this.optionValue = optionValue;
        this.updateCheckState();
    };
    MdlRadioComponent.prototype.deselect = function (value) {
        // called from the registry. the value is the value of the selected radio button
        // e.g. the radio button get unselected if it isnÄt the selected one.
        this.writeValue(value);
    };
    MdlRadioComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        // wrap the callback, so that we can call select on the registry
        this.onChangeCallback = function () {
            fn(_this.value);
            _this.radioGroupRegistry.select(_this, _this.formGroupName);
        };
    };
    MdlRadioComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlRadioComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlRadioComponent.prototype.onFocus = function () {
        this.renderer.addClass(this.el, IS_FOCUSED);
    };
    MdlRadioComponent.prototype.onBlur = function () {
        this.renderer.removeClass(this.el, IS_FOCUSED);
    };
    MdlRadioComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.optionValue = this.value;
        this.updateCheckState();
        this.onChangeCallback();
        this.change.emit(this.optionValue);
    };
    MdlRadioComponent.prototype.updateCheckState = function () {
        this.checked = this.optionValue === this.value;
    };
    MdlRadioComponent.prototype.checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this.throwNameError();
        }
        if (!this.name && this.formControlName) {
            this.name = this.formControlName;
        }
    };
    MdlRadioComponent.prototype.throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <mdl-radio formControlName=\"food\" name=\"food\"></mdl-radio>\n    ");
    };
    MdlRadioComponent.prototype.spaceKeyPress = function (event) {
        this.checked = false; //in case of space key is pressed radio button value must remain same
    };
    return MdlRadioComponent;
}());

MdlRadioComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-radio',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlRadioComponent; }),
                        multi: true
                    }],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-radio]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'checked',
                    '[class.is-disabled]': 'disabled'
                },
                template: "\n  <input type=\"checkbox\" class=\"mdl-radio__button\" \n    [attr.name]=\"name\"\n    (focus)=\"onFocus()\" \n    (blur)=\"onBlur()\"\n    (keyup.space)=\"spaceKeyPress($event)\"\n    [disabled]=\"disabled\"\n    [attr.tabindex]=\"tabindex\"\n    [(ngModel)]=\"checked\">\n  <span class=\"mdl-radio__label\"><ng-content></ng-content></span>\n  <span class=\"mdl-radio__outer-circle\"></span>\n  <span class=\"mdl-radio__inner-circle\"></span>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlRadioComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: MdlRadioGroupRegisty, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroupName"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] },] },
]; };
MdlRadioComponent.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'change': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
var MdlRadioModule = (function () {
    function MdlRadioModule() {
    }
    MdlRadioModule.forRoot = function () {
        return {
            ngModule: MdlRadioModule,
            providers: [MdlRadioGroupRegisty]
        };
    };
    return MdlRadioModule;
}());

MdlRadioModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                exports: [MdlRadioComponent],
                declarations: [MdlRadioComponent]
            },] },
];
/** @nocollapse */
MdlRadioModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-radio.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_mdl_error__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__(15);
/* unused harmony export MdlUnsupportedShadowValueError */
/* unused harmony export MdlShadowDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlShadowModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var MdlUnsupportedShadowValueError = (function (_super) {
    __extends(MdlUnsupportedShadowValueError, _super);
    function MdlUnsupportedShadowValueError(value) {
        /* istanbul ignore next */
        return _super.call(this, "Shadow value \"" + value + "\" isn't supported (allowed: 2,3,4,6,8,16,24).") || this;
    }
    return MdlUnsupportedShadowValueError;
}(__WEBPACK_IMPORTED_MODULE_1__common_mdl_error__["a" /* MdlError */]));

var MDL_SHADOW_VALUES = [0, 2, 3, 4, 6, 8, 16, 24];
var MdlShadowDirective = (function () {
    function MdlShadowDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._mdlShadow = 2;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(MdlShadowDirective.prototype, "mdlShadow", {
        get: function () { return this._mdlShadow; },
        set: function (value) { this._mdlShadow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlShadowDirective.prototype.ngOnChanges = function (changes) {
        if (MDL_SHADOW_VALUES.indexOf(Number(this.mdlShadow)) === -1) {
            throw new MdlUnsupportedShadowValueError(this.mdlShadow);
        }
        var change = changes['mdlShadow'];
        if (!change.isFirstChange()) {
            this.renderer.removeClass(this.el, "mdl-shadow--" + change.previousValue + "dp");
        }
        this.renderer.addClass(this.el, "mdl-shadow--" + change.currentValue + "dp");
    };
    return MdlShadowDirective;
}());

MdlShadowDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-shadow]'
            },] },
];
/** @nocollapse */
MdlShadowDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlShadowDirective.propDecorators = {
    'mdlShadow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-shadow',] },],
};
var MDL_SHADOW_DIRECTIVES = [MdlShadowDirective];
var MdlShadowModule = (function () {
    function MdlShadowModule() {
    }
    MdlShadowModule.forRoot = function () {
        return {
            ngModule: MdlShadowModule,
            providers: []
        };
    };
    return MdlShadowModule;
}());

MdlShadowModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_SHADOW_DIRECTIVES,
                declarations: MDL_SHADOW_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlShadowModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-shadow.directive.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_noop__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_native_support__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSliderModule; });






var MdlSliderComponent = (function () {
    function MdlSliderComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this._disabled = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_4__common_noop__["a" /* noop */];
    }
    Object.defineProperty(MdlSliderComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSliderComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = v;
            this.updateSliderUI();
            this.onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    MdlSliderComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.updateSliderUI();
    };
    MdlSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlSliderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlSliderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlSliderComponent.prototype.updateSliderUI = function () {
        var fraction = (this.value_ - this.min) / (this.max - this.min);
        if (fraction === 0) {
            this.renderer.addClass(this.inputEl.nativeElement, 'is-lowest-value');
        }
        else {
            this.renderer.removeClass(this.inputEl.nativeElement, 'is-lowest-value');
        }
        this.renderer.setStyle(this.lowerEl.nativeElement, 'flex', '' + fraction);
        this.renderer.setStyle(this.upperEl.nativeElement, 'flex', '' + (1 - fraction));
    };
    MdlSliderComponent.prototype.onMouseUp = function (event) {
        event.target.blur();
    };
    MdlSliderComponent.prototype.onMouseDown = function (event) {
        if (event.target !== this.elRef.nativeElement) {
            return;
        }
        // Discard the original event and create a new event that
        // is on the slider element.
        event.preventDefault();
        var newEvent = new MouseEvent('mousedown', {
            relatedTarget: event.relatedTarget,
            button: event.button,
            buttons: event.buttons,
            clientX: event.clientX,
            clientY: this.inputEl.nativeElement.getBoundingClientRect().y,
            screenX: event.screenX,
            screenY: event.screenY
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__common_native_support__["a" /* callNative */])(this.inputEl.nativeElement, 'dispatchEvent', newEvent);
    };
    return MdlSliderComponent;
}());

MdlSliderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-slider',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlSliderComponent; }),
                        multi: true
                    }],
                host: {
                    '[class.mdl-slider__container]': 'true',
                    '(mouseup)': 'onMouseUp($event)',
                    '(mousedown)': 'onMouseDown($event)'
                },
                template: "\n    <input class=\"mdl-slider is-upgraded\" \n            type=\"range\" \n            [min]=\"min\" \n            [max]=\"max\" \n            [step]=\"step\" \n            [(ngModel)]=\"value\" \n            [disabled]=\"disabled\"\n            tabindex=\"0\"\n            #input>\n    <div class=\"mdl-slider__background-flex\">\n      <div class=\"mdl-slider__background-lower\" #lower></div>\n      <div class=\"mdl-slider__background-upper\" #uppper></div>\n  </div>\n  ",
                styles: [
                    "\n    :host {\n        height: 22px;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n    }\n    "
                ],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSliderComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
MdlSliderComponent.propDecorators = {
    'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'step': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'lowerEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['lower',] },],
    'upperEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['uppper',] },],
    'inputEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['input',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MDL_SLIDER_DIRECTIVES = [MdlSliderComponent];
var MdlSliderModule = (function () {
    function MdlSliderModule() {
    }
    MdlSliderModule.forRoot = function () {
        return {
            ngModule: MdlSliderModule,
            providers: []
        };
    };
    return MdlSliderModule;
}());

MdlSliderModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
                exports: MDL_SLIDER_DIRECTIVES,
                declarations: MDL_SLIDER_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlSliderModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-slider.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_outlet_mdl_dialog_outlet_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_outlet_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* unused harmony export MdlSnackbarComponent */
/* unused harmony export MdlSnackbarService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSnackbaModule; });





var ANIMATION_TIME = 250;
var MdlSnackbarComponent = (function () {
    function MdlSnackbarComponent() {
        this.showIt = false;
    }
    MdlSnackbarComponent.prototype.onClick = function () {
        this.onAction();
    };
    MdlSnackbarComponent.prototype.isActive = function () {
        return this.showIt;
    };
    MdlSnackbarComponent.prototype.show = function () {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // wait unit the dom is in place - then showIt will change the css class
        setTimeout(function () {
            _this.showIt = true;
            // fire after the view animation is done
            setTimeout(function () {
                result.next(null);
                result.complete();
            }, ANIMATION_TIME);
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    MdlSnackbarComponent.prototype.hide = function () {
        this.showIt = false;
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        // fire after the view animation is done
        setTimeout(function () {
            result.next(null);
            result.complete();
        }, ANIMATION_TIME);
        return result.asObservable();
    };
    return MdlSnackbarComponent;
}());

MdlSnackbarComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-snackbar-component',
                template: "\n    <div id=\"demo-toast-example\" class=\" mdl-snackbar\" [ngClass]=\"{'mdl-snackbar--active': showIt }\">\n      <div class=\"mdl-snackbar__text\">{{message}}</div>\n      <button *ngIf=\"onAction\" class=\"mdl-snackbar__action\" type=\"button\" (click)=\"onClick()\" >{{actionText}}</button>\n    </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSnackbarComponent.ctorParameters = function () { return []; };
var MdlSnackbarService = (function () {
    function MdlSnackbarService(componentFactoryResolver, dialogOutletService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dialogOutletService = dialogOutletService;
        this.cFactory = this.componentFactoryResolver.resolveComponentFactory(MdlSnackbarComponent);
    }
    MdlSnackbarService.prototype.showToast = function (message, timeout) {
        return this.showSnackbar({
            message: message,
            timeout: timeout
        });
    };
    MdlSnackbarService.prototype.showSnackbar = function (snackbarMessage) {
        var optTimeout = snackbarMessage.timeout || 2750;
        var closeAfterTimeout = !!snackbarMessage.closeAfterTimeout;
        var viewContainerRef = this.dialogOutletService.viewContainerRef;
        if (!viewContainerRef) {
            throw new Error('You did not provide a ViewContainerRef. ' +
                'Please see https://github.com/mseemann/angular2-mdl/wiki/How-to-use-the-MdlDialogService');
        }
        var cRef = viewContainerRef.createComponent(this.cFactory, viewContainerRef.length);
        var mdlSnackbarComponent = cRef.instance;
        mdlSnackbarComponent.message = snackbarMessage.message;
        if (this.previousSnack) {
            var previousSnack_1 = this.previousSnack;
            var subscription_1 = previousSnack_1.component.hide()
                .subscribe(function () {
                previousSnack_1.cRef.destroy();
                subscription_1.unsubscribe();
            });
        }
        this.previousSnack = {
            component: mdlSnackbarComponent,
            cRef: cRef
        };
        if (snackbarMessage.action) {
            if (closeAfterTimeout) {
                this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
            }
            mdlSnackbarComponent.actionText = snackbarMessage.action.text;
            mdlSnackbarComponent.onAction = function () {
                mdlSnackbarComponent.hide().subscribe(function () {
                    cRef.destroy();
                    snackbarMessage.action.handler();
                });
            };
        }
        else {
            this.hideAndDestroySnack(mdlSnackbarComponent, cRef, optTimeout);
        }
        var result = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        mdlSnackbarComponent.show().subscribe(function () {
            result.next(mdlSnackbarComponent);
            result.complete();
        });
        return result.asObservable();
    };
    MdlSnackbarService.prototype.hideAndDestroySnack = function (component, componentRef, timeOut) {
        setTimeout(function () {
            component.hide()
                .subscribe(function () {
                componentRef.destroy();
            });
        }, timeOut);
    };
    return MdlSnackbarService;
}());

MdlSnackbarService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlSnackbarService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__dialog_outlet_mdl_dialog_outlet_service__["a" /* MdlDialogOutletService */], },
]; };
var MdlSnackbaModule = (function () {
    function MdlSnackbaModule() {
    }
    MdlSnackbaModule.forRoot = function () {
        return {
            ngModule: MdlSnackbaModule,
            providers: [MdlSnackbarService]
        };
    };
    return MdlSnackbaModule;
}());

MdlSnackbaModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__dialog_outlet_index__["a" /* MdlDialogOutletModule */].forRoot()],
                exports: [MdlSnackbarComponent],
                declarations: [MdlSnackbarComponent],
                entryComponents: [MdlSnackbarComponent]
            },] },
];
/** @nocollapse */
MdlSnackbaModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-snackbar.service.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* unused harmony export MdlSpinnerComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSpinnerModule; });



var MdlSpinnerComponent = (function () {
    function MdlSpinnerComponent() {
        this.layers = [1, 2, 3, 4];
        this._active = false;
        this._singleColor = false;
    }
    Object.defineProperty(MdlSpinnerComponent.prototype, "active", {
        get: function () { return this._active; },
        set: function (value) { this._active = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlSpinnerComponent.prototype, "singleColor", {
        get: function () { return this._singleColor; },
        set: function (value) { this._singleColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    return MdlSpinnerComponent;
}());

MdlSpinnerComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-spinner',
                host: {
                    '[class.mdl-spinner]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-active]': 'active',
                    '[class.mdl-spinner--single-color]': 'singleColor',
                },
                // must be one line - otherwise the spinner is broken in the ui
                /* tslint:disable */
                template: "\n    <div *ngFor=\"let layer of layers;\" \n            class=\"mdl-spinner__layer mdl-spinner__layer-{{layer}}\">\n      <div class=\"mdl-spinner__circle-clipper mdl-spinner__left\">\n         <div class=\"mdl-spinner__circle\"></div>\n      </div><div class=\"mdl-spinner__gap-patch\"><div class=\"mdl-spinner__circle\"></div></div><div class=\"mdl-spinner__circle-clipper mdl-spinner__right\"><div class=\"mdl-spinner__circle\"></div></div>\n    </div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSpinnerComponent.ctorParameters = function () { return []; };
MdlSpinnerComponent.propDecorators = {
    'active': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'singleColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['single-color',] },],
};
var MDL_SPINNER_DIRECTIVES = [MdlSpinnerComponent];
var MdlSpinnerModule = (function () {
    function MdlSpinnerModule() {
    }
    MdlSpinnerModule.forRoot = function () {
        return {
            ngModule: MdlSpinnerModule,
            providers: []
        };
    };
    return MdlSpinnerModule;
}());

MdlSpinnerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
                exports: MDL_SPINNER_DIRECTIVES,
                declarations: MDL_SPINNER_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlSpinnerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-spinner.component.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(4);
/* unused harmony export MdlSwitchComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlSwitchModule; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




var MdlSwitchComponent = (function (_super) {
    __extends(MdlSwitchComponent, _super);
    function MdlSwitchComponent(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    return MdlSwitchComponent;
}(__WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__["b" /* MdlCheckboxComponent */]));

MdlSwitchComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-switch',
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlSwitchComponent; }),
                        multi: true
                    }],
                host: {
                    '(click)': 'onClick()',
                    '[class.mdl-switch]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.is-checked]': 'value',
                    '[class.is-disabled]': 'disabled'
                },
                outputs: ['change'],
                template: "\n    <input type=\"checkbox\" class=\"mdl-switch__input\" \n      (focus)=\"onFocus()\" \n      (blur)=\"onBlur()\"\n      [disabled]=\"disabled\"\n      [(ngModel)]=\"value\">\n    <span class=\"mdl-switch__label\"><ng-content></ng-content></span>\n    <div class=\"mdl-switch__track\"></div>\n    <div class=\"mdl-switch__thumb\"><span class=\"mdl-switch__focus-helper\"></span></div>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSwitchComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
var MDL_SWITCH_DIRECTIVES = [MdlSwitchComponent];
var MdlSwitchModule = (function () {
    function MdlSwitchModule() {
    }
    MdlSwitchModule.forRoot = function () {
        return {
            ngModule: MdlSwitchModule,
            providers: []
        };
    };
    return MdlSwitchModule;
}());

MdlSwitchModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                exports: MDL_SWITCH_DIRECTIVES,
                declarations: MDL_SWITCH_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlSwitchModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-switch.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_mdl_ripple_directive__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTableModule; });







var MDL_TABLE_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["a" /* MdlTableComponent */],
    __WEBPACK_IMPORTED_MODULE_1__mdl_table_component__["b" /* MdlSelectableTableComponent */]
];
var MdlTableModule = (function () {
    function MdlTableModule() {
    }
    MdlTableModule.forRoot = function () {
        return {
            ngModule: MdlTableModule,
            providers: []
        };
    };
    return MdlTableModule;
}());

MdlTableModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__checkbox_mdl_checkbox_component__["a" /* MdlCheckboxModule */], __WEBPACK_IMPORTED_MODULE_3__common_mdl_ripple_directive__["a" /* MdlRippleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"]],
                exports: MDL_TABLE_DIRECTIVES,
                declarations: MDL_TABLE_DIRECTIVES,
            },] },
];
/** @nocollapse */
MdlTableModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export MdlDefaultTableModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlSelectableTableComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var MdlDefaultTableModel = (function () {
    function MdlDefaultTableModel(columns) {
        this.data = [];
        this.columns = columns;
    }
    MdlDefaultTableModel.prototype.addAll = function (data) {
        (_a = this.data).push.apply(_a, data);
        var _a;
    };
    return MdlDefaultTableModel;
}());

var template = "\n        <table class=\"mdl-data-table\">\n           <thead>\n           <tr>\n              <th *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple [ngModel]=\"isAllSelected()\" (ngModelChange)=\"toogleAll()\"></mdl-checkbox>\n              </th>\n              <th *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\">\n                 {{column.name}}\n              </th>\n           </tr>\n           </thead>\n           <tbody>\n           <tr *ngFor=\"let data of model.data; let i = index\" [ngClass]=\"{'is-selected': selectable && data.selected}\">\n              <td *ngIf=\"selectable\">\n                 <mdl-checkbox mdl-ripple\n                      [(ngModel)]=\"data.selected\"\n                      (ngModelChange)=\"selectionChanged(data)\"></mdl-checkbox>\n              </td>\n              <td *ngFor=\"let column of model.columns\"\n                  [ngClass]=\"{'mdl-data-table__cell--non-numeric': !column.numeric}\"\n                  [innerHTML]=\"data[column.key]\">\n              </td>\n           </tr>\n           </tbody>\n        </table>  \n    ";
var styles = [
    "\n    :host{\n      display:inline-block;\n    }\n    "
];
var MdlTableComponent = (function () {
    function MdlTableComponent() {
        this.selectable = false;
    }
    return MdlTableComponent;
}());

MdlTableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-table',
                template: template,
                styles: styles,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTableComponent.ctorParameters = function () { return []; };
MdlTableComponent.propDecorators = {
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['table-model',] },],
};
var MdlSelectableTableComponent = (function (_super) {
    __extends(MdlSelectableTableComponent, _super);
    function MdlSelectableTableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.selectable = true;
        _this.allSelected = false;
        return _this;
    }
    MdlSelectableTableComponent.prototype.isAllSelected = function () {
        return this.model.data.every(function (data) { return data.selected; });
    };
    MdlSelectableTableComponent.prototype.toogleAll = function () {
        var selected = !this.isAllSelected();
        this.model.data.forEach(function (data) { return data.selected = selected; });
        this.updateSelected();
    };
    MdlSelectableTableComponent.prototype.updateSelected = function () {
        this.selected = this.model.data.filter(function (data) { return data.selected; });
        this.selectionChange.emit({ value: this.selected });
    };
    MdlSelectableTableComponent.prototype.selectionChanged = function (data) {
        this.updateSelected();
    };
    return MdlSelectableTableComponent;
}(MdlTableComponent));

MdlSelectableTableComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-table-selectable',
                template: template,
                styles: styles,
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlSelectableTableComponent.ctorParameters = function () { return []; };
MdlSelectableTableComponent.propDecorators = {
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['table-model',] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['table-model-selected',] },],
    'selectionChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['table-model-selectionChanged',] },],
};
//# sourceMappingURL=mdl-table.component.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_number_property__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdl_tab_panel_component__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTabsComponent; });




var MdlTabsComponent = (function () {
    function MdlTabsComponent() {
        this._selectedIndex = 0;
        this._isRipple = false;
        this.selectedTabEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(MdlTabsComponent.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) { this._selectedIndex = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTabsComponent.prototype, "isRipple", {
        get: function () { return this._isRipple; },
        set: function (value) { this._isRipple = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlTabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // the initial tabs
        this.updateSelectedTabIndex();
        // listen to tab changes - this would not be necessary if this would be fixed:
        // https://github.com/angular/angular/issues/12818
        this.tabs.changes.subscribe(function () {
            _this.updateSelectedTabIndex();
        });
    };
    MdlTabsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['selectedIndex']) {
            this.updateSelectedTabIndex();
        }
    };
    MdlTabsComponent.prototype.updateSelectedTabIndex = function () {
        var _this = this;
        if (this.tabs) {
            // https://github.com/angular/angular/issues/6005
            // this would not be necessare if this would be fixed: https://github.com/angular/angular/issues/12818
            setTimeout(function () {
                _this.tabs.forEach(function (tab, idx) {
                    tab.isActive = _this.selectedIndex === idx;
                });
            }, 1);
        }
    };
    MdlTabsComponent.prototype.tabSelected = function (tab) {
        if (tab.disabled) {
            return;
        }
        var index = this.tabs.toArray().indexOf(tab);
        if (index != this.selectedIndex) {
            this.selectedIndex = index;
            this.updateSelectedTabIndex();
            this.selectedTabEmitter.emit({ index: this.selectedIndex });
        }
    };
    return MdlTabsComponent;
}());

MdlTabsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-tabs',
                host: {
                    '[class.mdl-tabs]': 'true',
                    '[class.is-upgraded]': 'true'
                },
                template: "\n   <div class=\"mdl-tabs__tab-bar\">\n      <div *ngFor=\"let tab of tabs.toArray()\">\n        <div\n          *ngIf=\"tab.titleComponent\"\n          class=\"mdl-tabs__tab\"\n          (click)=\"tabSelected(tab)\"\n          [mdl-ripple]=\"isRipple && !tab.disabled\"\n          [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\"\n          [append-view-container-ref]=\"tab.titleComponent.vcRef\"></div>\n        <a *ngIf=\"!tab.titleComponent\" href=\"javascript:void(0)\"\n              (click)=\"tabSelected(tab)\"\n              class=\"mdl-tabs__tab\"\n              [mdl-ripple]=\"isRipple && !tab.disabled\"\n              [ngClass]=\"{'is-active': tab.isActive, 'disabled': tab.disabled}\">{{tab.title}}</a>\n       </div>\n  </div>\n  <ng-content></ng-content>\n  ",
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTabsComponent.ctorParameters = function () { return []; };
MdlTabsComponent.propDecorators = {
    'selectedIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-tab-active-index',] },],
    'isRipple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-ripple',] },],
    'selectedTabEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['mdl-tab-active-changed',] },],
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_3__mdl_tab_panel_component__["a" /* MdlTabPanelComponent */],] },],
};
//# sourceMappingURL=mdl-tabs.component.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_boolean_property__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_number_property__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_mdl_button_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_mdl_icon_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_noop__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_native_support__ = __webpack_require__(17);
/* unused harmony export DISABLE_NATIVE_VALIDITY_CHECKING */
/* unused harmony export MdlTextFieldComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTextFieldModule; });










var DISABLE_NATIVE_VALIDITY_CHECKING = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('disableNativeValidityChecking');
var nextId = 0;
var IS_FOCUSED = 'is-focused';
var IS_DISABLED = 'is-disabled';
var IS_INVALID = 'is-invalid';
var IS_DIRTY = 'is-dirty';
var MdlTextFieldComponent = (function () {
    function MdlTextFieldComponent(renderer, elmRef, nativeCheckGlobalDisabled) {
        this.renderer = renderer;
        this.elmRef = elmRef;
        this.nativeCheckGlobalDisabled = nativeCheckGlobalDisabled;
        this.blurEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focusEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyupEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = 'text';
        this.id = "mdl-textfield-" + nextId++;
        this._disabled = false;
        this._readonly = false;
        this._required = false;
        this._autofocus = false;
        this._isFloatingLabel = false;
        this._rows = null;
        this._maxrows = -1;
        this.tabindex = null;
        this.maxlength = null;
        // @experimental
        this._disableNativeValidityChecking = false;
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_7__common_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_7__common_noop__["a" /* noop */];
        this.el = elmRef.nativeElement;
    }
    Object.defineProperty(MdlTextFieldComponent.prototype, "value", {
        get: function () { return this.value_; },
        set: function (v) {
            this.value_ = this.type === 'number' ? (v === '' ? null : parseFloat(v)) : v;
            this.onChangeCallback(this.value);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MdlTextFieldComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (value) { this._autofocus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "isFloatingLabel", {
        get: function () { return this._isFloatingLabel; },
        set: function (value) { this._isFloatingLabel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "rows", {
        get: function () { return this._rows; },
        set: function (value) { this._rows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "maxrows", {
        get: function () { return this._maxrows; },
        set: function (value) { this._maxrows = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_number_property__["a" /* toNumber */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdlTextFieldComponent.prototype, "disableNativeValidityChecking", {
        get: function () { return this._disableNativeValidityChecking; },
        set: function (value) { this._disableNativeValidityChecking = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_boolean_property__["a" /* toBoolean */])(value); },
        enumerable: true,
        configurable: true
    });
    MdlTextFieldComponent.prototype.writeValue = function (value) {
        this.value_ = value;
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    MdlTextFieldComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    MdlTextFieldComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdlTextFieldComponent.prototype.ngOnChanges = function (changes) {
        this.checkDisabled();
    };
    MdlTextFieldComponent.prototype.ngDoCheck = function () {
        this.checkValidity();
        this.checkDirty();
    };
    MdlTextFieldComponent.prototype.setFocus = function () {
        if (!this.inputEl) {
            return;
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__common_native_support__["a" /* callNative */])(this.inputEl.nativeElement, 'focus');
    };
    MdlTextFieldComponent.prototype.onFocus = function (event) {
        this.renderer.addClass(this.el, IS_FOCUSED);
        this.focusEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onBlur = function (event) {
        this.renderer.removeClass(this.el, IS_FOCUSED);
        this.onTouchedCallback();
        this.blurEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.onKeyup = function (event) {
        this.keyupEmitter.emit(event);
    };
    MdlTextFieldComponent.prototype.checkDisabled = function () {
        if (this.disabled) {
            this.renderer.addClass(this.el, IS_DISABLED);
        }
        else {
            this.renderer.removeClass(this.el, IS_DISABLED);
        }
    };
    MdlTextFieldComponent.prototype.checkValidity = function () {
        // check the global setting - if globally disabled do no check
        if (this.nativeCheckGlobalDisabled === true) {
            return;
        }
        // check local setting - if locally disabled do no check
        if (this.disableNativeValidityChecking) {
            return;
        }
        if (this.inputEl && this.inputEl.nativeElement.validity) {
            if (!this.inputEl.nativeElement.validity.valid) {
                this.renderer.addClass(this.el, IS_INVALID);
            }
            else {
                this.renderer.removeClass(this.el, IS_INVALID);
            }
        }
    };
    MdlTextFieldComponent.prototype.checkDirty = function () {
        var dirty = this.inputEl && this.inputEl.nativeElement.value && this.inputEl.nativeElement.value.length > 0;
        if (dirty) {
            this.renderer.addClass(this.el, IS_DIRTY);
        }
        else {
            this.renderer.removeClass(this.el, IS_DIRTY);
        }
    };
    MdlTextFieldComponent.prototype.keydownTextarea = function ($event) {
        var currentRowCount = this.inputEl.nativeElement.value.split('\n').length;
        if ($event.keyCode === 13) {
            if (currentRowCount >= this.maxrows && this.maxrows !== -1) {
                $event.preventDefault();
            }
        }
    };
    // hm only for test purposes to simulate a change to the input field that will change the
    // model value.
    MdlTextFieldComponent.prototype.triggerChange = function (event) {
        this.value = event.target.value;
        this.onTouchedCallback();
    };
    return MdlTextFieldComponent;
}());

MdlTextFieldComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'mdl-textfield',
                host: {
                    '[class.mdl-textfield]': 'true',
                    '[class.is-upgraded]': 'true',
                    '[class.mdl-textfield--expandable]': 'icon',
                    '[class.mdl-textfield--floating-label]': 'isFloatingLabel',
                    '[class.has-placeholder]': 'placeholder'
                },
                template: "\n   <div *ngIf=\"!icon\">\n     <textarea\n        *ngIf=\"rows\"\n        #input\n        [rows]=\"rows\"\n        class=\"mdl-textfield__input\"\n        type=\"text\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keydown)=\"keydownTextarea($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        ></textarea>\n     <input\n        *ngIf=\"!rows\"\n        #input\n        class=\"mdl-textfield__input\"\n        [type]=\"type\"\n        [attr.name]=\"name\"\n        [id]=\"id\"\n        [pattern]=\"pattern ? pattern : '.*'\"\n        [attr.min]=\"min\"\n        [attr.max]=\"max\"\n        [attr.step]=\"step\"\n        [placeholder]=\"placeholder ? placeholder : ''\"\n        [autocomplete]=\"autocomplete ? autocomplete : ''\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (keyup)=\"onKeyup($event)\"\n        [(ngModel)]=\"value\"\n        [disabled]=\"disabled\"\n        [required]=\"required\"\n        [autofocus]=\"autofocus\"\n        [readonly]=\"readonly\"\n        [attr.tabindex]=\"tabindex\"\n        [maxlength]=\"maxlength\"\n        >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n   </div>\n   <div *ngIf=\"icon\">\n      <button mdl-button mdl-button-type=\"icon\" (click)=\"setFocus()\">\n         <mdl-icon>{{icon}}</mdl-icon>\n      </button>\n      <div class=\"mdl-textfield__expandable-holder\">\n       <input\n          #input\n          class=\"mdl-textfield__input\"\n          [type]=\"type\"\n          [attr.name]=\"name\"\n          [id]=\"id\"\n          [pattern]=\"pattern ? pattern : '.*'\"\n          [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [attr.step]=\"step\"\n          [placeholder]=\"placeholder ? placeholder : ''\"\n          [autocomplete]=\"autocomplete ? autocomplete : ''\"\n          (focus)=\"onFocus($event)\"\n          (blur)=\"onBlur($event)\"\n          (keyup)=\"onKeyup($event)\"\n          [(ngModel)]=\"value\"\n          [disabled]=\"disabled\"\n          [required]=\"required\"\n          [autofocus]=\"autofocus\"\n          [readonly]=\"readonly\"\n          [attr.tabindex]=\"tabindex\"\n          [maxlength]=\"maxlength\"\n         >\n     <label class=\"mdl-textfield__label\" [attr.for]=\"id\">{{label}}</label>\n     <span class=\"mdl-textfield__error\">{{errorMessage}}</span>\n      </div>\n   </div>\n   ",
                providers: [{
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                        useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MdlTextFieldComponent; }),
                        multi: true
                    }],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
MdlTextFieldComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: Boolean, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [DISABLE_NATIVE_VALIDITY_CHECKING,] },] },
]; };
MdlTextFieldComponent.propDecorators = {
    'blurEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['blur',] },],
    'focusEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['focus',] },],
    'keyupEmitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['keyup',] },],
    'inputEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['input',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'min': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'step': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'errorMessage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['error-msg',] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autofocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isFloatingLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['floating-label',] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autocomplete': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'rows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxrows': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'icon': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tabindex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disableNativeValidityChecking': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var MdlTextFieldModule = (function () {
    function MdlTextFieldModule() {
    }
    MdlTextFieldModule.forRoot = function () {
        return {
            ngModule: MdlTextFieldModule,
            providers: []
        };
    };
    return MdlTextFieldModule;
}());

MdlTextFieldModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_5__icon_mdl_icon_component__["a" /* MdlIconModule */], __WEBPACK_IMPORTED_MODULE_4__button_mdl_button_component__["a" /* MdlButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"]],
                exports: [MdlTextFieldComponent],
                declarations: [MdlTextFieldComponent],
            },] },
];
/** @nocollapse */
MdlTextFieldModule.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-textfield.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__ = __webpack_require__(83);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipModule; });



var MDL_TOOLTIP_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlTooltipComponent */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["a" /* MdlTooltipLargeDirective */],
    __WEBPACK_IMPORTED_MODULE_2__mdl_tooltip_directive__["b" /* MdlTooltipDirective */]
];


var MdlTooltipModule = (function () {
    function MdlTooltipModule() {
    }
    MdlTooltipModule.forRoot = function () {
        return {
            ngModule: MdlTooltipModule,
            providers: []
        };
    };
    return MdlTooltipModule;
}());

MdlTooltipModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [],
                exports: MDL_TOOLTIP_DIRECTIVES,
                declarations: MDL_TOOLTIP_DIRECTIVES.concat([__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlSimpleTooltipComponent */]]),
                entryComponents: [__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlSimpleTooltipComponent */]]
            },] },
];
/** @nocollapse */
MdlTooltipModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__ = __webpack_require__(44);
/* unused harmony export AbstractMdlTooltipDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MdlTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipLargeDirective; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var AbstractMdlTooltipDirective = (function () {
    function AbstractMdlTooltipDirective(vcRef, large, componentFactoryResolver, renderer) {
        this.vcRef = vcRef;
        this.large = large;
        this.componentFactoryResolver = componentFactoryResolver;
        this.renderer = renderer;
    }
    AbstractMdlTooltipDirective.prototype.ngOnInit = function () {
        // if the tooltip is not an instance of MdlTooltipComponent
        // we create a simpleTooltipComponent on the fly.
        if (!(this.tooltip instanceof __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlTooltipComponent */])) {
            var cFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["b" /* MdlSimpleTooltipComponent */]);
            var cRef = this.vcRef.createComponent(cFactory);
            this.tooltipComponent = cRef.instance;
            this.tooltipComponent.tooltipText = this.tooltip;
            this.configureTooltipComponent();
        }
        else {
            this.tooltipComponent = this.tooltip;
            this.configureTooltipComponent();
        }
    };
    AbstractMdlTooltipDirective.prototype.ngOnChanges = function (changes) {
        if (changes['tooltip'] && !changes['tooltip'].isFirstChange()) {
            if (!(this.tooltip instanceof __WEBPACK_IMPORTED_MODULE_1__mdl_tooltip_component__["a" /* MdlTooltipComponent */])) {
                this.tooltipComponent.tooltipText = this.tooltip;
            }
        }
    };
    AbstractMdlTooltipDirective.prototype.configureTooltipComponent = function () {
        this.tooltipComponent.large = this.large;
        this.tooltipComponent.position = this.position;
    };
    AbstractMdlTooltipDirective.prototype.onMouseEnter = function (event) {
        this.tooltipComponent.mouseEnter(event);
    };
    AbstractMdlTooltipDirective.prototype.onMouseLeave = function () {
        this.tooltipComponent.mouseLeave();
    };
    return AbstractMdlTooltipDirective;
}());

AbstractMdlTooltipDirective.propDecorators = {
    'onMouseLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:touchstart',] },],
};
var host = {
    '(mouseenter)': 'onMouseEnter($event)',
    '(touchend)': 'onMouseEnter($event)',
    '(mouseleave)': 'onMouseLeave()'
};
var MdlTooltipDirective = (function (_super) {
    __extends(MdlTooltipDirective, _super);
    function MdlTooltipDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, false, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlTooltipDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    ;
    return MdlTooltipDirective;
}(AbstractMdlTooltipDirective));

MdlTooltipDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-tooltip]',
                host: host
            },] },
];
/** @nocollapse */
MdlTooltipDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlTooltipDirective.propDecorators = {
    'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-tooltip',] },],
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-tooltip-position',] },],
};
var MdlTooltipLargeDirective = (function (_super) {
    __extends(MdlTooltipLargeDirective, _super);
    function MdlTooltipLargeDirective(vcRef, componentFactoryResolver, renderer) {
        return _super.call(this, vcRef, true, componentFactoryResolver, renderer) || this;
    }
    MdlTooltipLargeDirective.prototype.ngOnInit = function () { _super.prototype.ngOnInit.call(this); };
    MdlTooltipLargeDirective.prototype.ngOnChanges = function (changes) { _super.prototype.ngOnChanges.call(this, changes); };
    ;
    return MdlTooltipLargeDirective;
}(AbstractMdlTooltipDirective));

MdlTooltipLargeDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-tooltip-large]',
                host: host
            },] },
];
/** @nocollapse */
MdlTooltipLargeDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
MdlTooltipLargeDirective.propDecorators = {
    'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-tooltip-large',] },],
    'position': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-tooltip-position',] },],
};
//# sourceMappingURL=mdl-tooltip.directive.js.map

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MaterialRipple;
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Class constructor for Ripple MDL component.
 * Implements MDL component design pattern defined at:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 *
 * @constructor
 * @param {HTMLElement} element The element that will be upgraded.
 */
function MaterialRipple(renderer, element) {
    this.renderer_ = renderer;
    this.element_ = element;
    // Initialize instance.
    this.init();
}
;
/**
 * Store constants in one place so they can be updated easily.
 *
 * @enum {string | number}
 * @private
 */
MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    INITIAL_SIZE: '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY: '0',
    FINAL_SCALE: ''
};
/**
 * Store strings for class names defined by this component that are used in
 * JavaScript. This allows us to simply change it in one place should we
 * decide to modify at a later date.
 *
 * @enum {string}
 * @private
 */
MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE: 'is-visible'
};
/**
 * Handle mouse / finger down on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
MaterialRipple.prototype.downHandler_ = function (event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
        var rect = this.element_.getBoundingClientRect();
        this.boundHeight = rect.height;
        this.boundWidth = rect.width;
        this.rippleSize_ = Math.sqrt(rect.width * rect.width +
            rect.height * rect.height) * 2 + 2;
        this.rippleElement_.style.width = this.rippleSize_ + 'px';
        this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }
    this.renderer_.addClass(this.rippleElement_, this.CssClasses_.IS_VISIBLE);
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
        this.ignoringMouseDown_ = false;
    }
    else {
        if (event.type === 'touchstart') {
            this.ignoringMouseDown_ = true;
        }
        var frameCount = this.getFrameCount();
        if (frameCount > 0) {
            return;
        }
        this.setFrameCount(1);
        var bound = event.currentTarget.getBoundingClientRect();
        var x;
        var y;
        // Check if we are handling a keyboard click.
        if (event.clientX === 0 && event.clientY === 0) {
            x = Math.round(bound.width / 2);
            y = Math.round(bound.height / 2);
        }
        else {
            var clientX = event.clientX !== undefined ? event.clientX : event.touches[0].clientX;
            var clientY = event.clientY !== undefined ? event.clientY : event.touches[0].clientY;
            x = Math.round(clientX - bound.left);
            y = Math.round(clientY - bound.top);
        }
        this.setRippleXY(x, y);
        this.setRippleStyles(true);
        window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
};
/**
 * Handle mouse / finger up on element.
 *
 * @param {Event} event The event that fired.
 * @private
 */
MaterialRipple.prototype.upHandler_ = function (event) {
    // Don't fire for the artificial "mouseup" generated by a double-click.
    if (event && event.detail !== 2) {
        // Allow a repaint to occur before removing this class, so the animation
        // shows for tap events, which seem to trigger a mouseup too soon after
        // mousedown.
        setTimeout(function () {
            this.renderer_.removeClass(this.rippleElement_, this.CssClasses_.IS_VISIBLE);
        }.bind(this), 0);
    }
};
/**
 * Initialize element.
 */
MaterialRipple.prototype.init = function () {
    if (this.element_) {
        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
            this.rippleElement_ = this.element_.querySelector('.' +
                this.CssClasses_.RIPPLE);
            this.frameCount_ = 0;
            this.rippleSize_ = 0;
            this.x_ = 0;
            this.y_ = 0;
            // Touch start produces a compat mouse down event, which would cause a
            // second ripples. To avoid that, we use this property to ignore the first
            // mouse down after a touch start.
            this.ignoringMouseDown_ = false;
            this.boundDownHandler = this.downHandler_.bind(this);
            this.element_.addEventListener('mousedown', this.boundDownHandler);
            this.element_.addEventListener('touchstart', this.boundDownHandler);
            this.boundUpHandler = this.upHandler_.bind(this);
            this.element_.addEventListener('mouseup', this.boundUpHandler);
            this.element_.addEventListener('mouseleave', this.boundUpHandler);
            this.element_.addEventListener('touchend', this.boundUpHandler);
            this.element_.addEventListener('blur', this.boundUpHandler);
            /**
             * Getter for frameCount_.
             * @return {number} the frame count.
             */
            this.getFrameCount = function () {
                return this.frameCount_;
            };
            /**
             * Setter for frameCount_.
             * @param {number} fC the frame count.
             */
            this.setFrameCount = function (fC) {
                this.frameCount_ = fC;
            };
            /**
             * Getter for rippleElement_.
             * @return {Element} the ripple element.
             */
            this.getRippleElement = function () {
                return this.rippleElement_;
            };
            /**
             * Sets the ripple X and Y coordinates.
             * @param  {number} newX the new X coordinate
             * @param  {number} newY the new Y coordinate
             */
            this.setRippleXY = function (newX, newY) {
                this.x_ = newX;
                this.y_ = newY;
            };
            /**
             * Sets the ripple styles.
             * @param  {boolean} start whether or not this is the start frame.
             */
            this.setRippleStyles = function (start) {
                if (this.rippleElement_ !== null) {
                    var transformString;
                    var scale;
                    var size;
                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
                    if (start) {
                        scale = this.Constant_.INITIAL_SCALE;
                        size = this.Constant_.INITIAL_SIZE;
                    }
                    else {
                        scale = this.Constant_.FINAL_SCALE;
                        size = this.rippleSize_ + 'px';
                        if (recentering) {
                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' +
                                this.boundHeight / 2 + 'px)';
                        }
                    }
                    transformString = 'translate(-50%, -50%) ' + offset + scale;
                    this.rippleElement_.style.webkitTransform = transformString;
                    this.rippleElement_.style.msTransform = transformString;
                    this.rippleElement_.style.transform = transformString;
                    if (start) {
                        this.renderer_.removeClass(this.rippleElement_, this.CssClasses_.IS_ANIMATING);
                    }
                    else {
                        this.renderer_.addClass(this.rippleElement_, this.CssClasses_.IS_ANIMATING);
                    }
                }
            };
            /**
             * Handles an animation frame.
             */
            this.animFrameHandler = function () {
                if (this.frameCount_-- > 0) {
                    window.requestAnimationFrame(this.animFrameHandler.bind(this));
                }
                else {
                    this.setRippleStyles(false);
                }
            };
        }
    }
};
//# sourceMappingURL=ripple.vendor.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_mdl_button_component__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlToggleMenuDirective; });


var MdlToggleMenuDirective = (function () {
    function MdlToggleMenuDirective(button) {
        this.button = button;
    }
    MdlToggleMenuDirective.prototype.onClick = function ($event) {
        this.menu.toggle($event, this.button);
    };
    return MdlToggleMenuDirective;
}());

MdlToggleMenuDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[mdl-button][mdl-toggle-menu]'
            },] },
];
/** @nocollapse */
MdlToggleMenuDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__button_mdl_button_component__["b" /* MdlButtonComponent */], },
]; };
MdlToggleMenuDirective.propDecorators = {
    'menu': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mdl-toggle-menu',] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click', ['$event'],] },],
};
//# sourceMappingURL=mdl-toggle-menu.directive.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdlTooltipPositionService; });

var MdlTooltipPositionService = (function () {
    function MdlTooltipPositionService() {
    }
    MdlTooltipPositionService.prototype.calcStyle = function (offsetWidth, offsetHeight, props, position) {
        var result = {};
        var left = props.left + (props.width / 2);
        var top = props.top + (props.height / 2);
        var marginLeft = -1 * (offsetWidth / 2);
        var marginTop = -1 * (offsetHeight / 2);
        if (position == 'left' || position == 'right') {
            left = (props.width / 2);
            if (top + marginTop < 0) {
                result.top = '0';
                result.marginTop = '0';
            }
            else {
                result.top = top + 'px';
                result.marginTop = marginTop + 'px';
            }
        }
        else {
            if (left + marginLeft < 0) {
                result.left = '0';
                result.marginLeft = '0';
            }
            else {
                result.left = left + 'px';
                result.marginLeft = marginLeft + 'px';
            }
        }
        if (position == 'top') {
            result.top = props.top - offsetHeight - 10 + 'px';
        }
        else if (position == 'right') {
            result.left = props.left + props.width + 10 + 'px';
        }
        else if (position == 'left') {
            result.left = props.left - offsetWidth - 10 + 'px';
        }
        else {
            result.top = props.top + props.height + 10 + 'px';
        }
        return result;
    };
    return MdlTooltipPositionService;
}());

MdlTooltipPositionService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MdlTooltipPositionService.ctorParameters = function () { return []; };
//# sourceMappingURL=mdl-tooltip-position.service.js.map

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var infinite_scroll_1 = __webpack_require__(46);
var position_resolver_1 = __webpack_require__(24);
var axis_resolver_1 = __webpack_require__(23);
var infinite_scroll_2 = __webpack_require__(46);
exports.InfiniteScroll = infinite_scroll_2.InfiniteScroll;
var position_resolver_2 = __webpack_require__(24);
exports.PositionResolver = position_resolver_2.PositionResolver;
exports.PositionResolverFactory = position_resolver_2.PositionResolverFactory;
var axis_resolver_2 = __webpack_require__(23);
exports.AxisResolver = axis_resolver_2.AxisResolver;
exports.AxisResolverFactory = axis_resolver_2.AxisResolverFactory;
var index_1 = __webpack_require__(132);
exports.InfiniteScrollModule = index_1.InfiniteScrollModule;
var scroll_register_1 = __webpack_require__(47);
exports.ScrollRegister = scroll_register_1.ScrollRegister;
var scroll_resolver_1 = __webpack_require__(48);
exports.ScrollResolver = scroll_resolver_1.ScrollResolver;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [infinite_scroll_1.InfiniteScroll, axis_resolver_1.AxisResolver, position_resolver_1.PositionResolver]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBK0IsdUJBQXVCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUluRCxnQ0FBK0IsdUJBQXVCLENBQUM7QUFBOUMsMERBQThDO0FBQ3ZELGtDQUEwRCx5QkFBeUIsQ0FBQztBQUEzRSxnRUFBZ0I7QUFBRSw4RUFBeUQ7QUFDcEYsOEJBQWtELHFCQUFxQixDQUFDO0FBQS9ELG9EQUFZO0FBQUUsa0VBQWlEO0FBQ3hFLHNCQUFxQyxhQUFhLENBQUM7QUFBMUMsNERBQTBDO0FBQ25ELGdDQUErQix1QkFBdUIsQ0FBQztBQUE5QywwREFBOEM7QUFDdkQsZ0NBQStCLHVCQUF1QixDQUFDO0FBQTlDLDBEQUE4QztBQUd2RDtrQkFBZTtJQUNkLFVBQVUsRUFBRSxDQUFFLGdDQUFjLEVBQUUsNEJBQVksRUFBRSxvQ0FBZ0IsQ0FBRTtDQUM5RCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL3NyYy9pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgUG9zaXRpb25SZXNvbHZlciB9IGZyb20gJy4vc3JjL3Bvc2l0aW9uLXJlc29sdmVyJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciB9IGZyb20gJy4vc3JjL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVnaXN0ZXIgfSBmcm9tICcuL3NyYy9zY3JvbGwtcmVnaXN0ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVzb2x2ZXIgfSBmcm9tICcuL3NyYy9zY3JvbGwtcmVzb2x2ZXInO1xuXG5leHBvcnQgeyBJbmZpbml0ZVNjcm9sbCB9IGZyb20gJy4vc3JjL2luZmluaXRlLXNjcm9sbCc7XG5leHBvcnQgeyBQb3NpdGlvblJlc29sdmVyLCBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vc3JjL3Bvc2l0aW9uLXJlc29sdmVyJztcbmV4cG9ydCB7IEF4aXNSZXNvbHZlciwgQXhpc1Jlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vc3JjL2F4aXMtcmVzb2x2ZXInO1xuZXhwb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICcuL3NyYy9pbmRleCc7XG5leHBvcnQgeyBTY3JvbGxSZWdpc3RlciB9IGZyb20gJy4vc3JjL3Njcm9sbC1yZWdpc3Rlcic7XG5leHBvcnQgeyBTY3JvbGxSZXNvbHZlciB9IGZyb20gJy4vc3JjL3Njcm9sbC1yZXNvbHZlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRpcmVjdGl2ZXM6IFsgSW5maW5pdGVTY3JvbGwsIEF4aXNSZXNvbHZlciwgUG9zaXRpb25SZXNvbHZlciBdXG59XG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(1);
var infinite_scroll_1 = __webpack_require__(46);
var axis_resolver_1 = __webpack_require__(23);
var position_resolver_1 = __webpack_require__(24);
var scroll_register_1 = __webpack_require__(47);
var scroll_resolver_1 = __webpack_require__(48);
var InfiniteScrollModule = (function () {
    function InfiniteScrollModule() {
    }
    InfiniteScrollModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [infinite_scroll_1.InfiniteScroll],
                    exports: [infinite_scroll_1.InfiniteScroll],
                    providers: [
                        axis_resolver_1.AxisResolverFactory,
                        position_resolver_1.PositionResolverFactory,
                        scroll_register_1.ScrollRegister,
                        scroll_resolver_1.ScrollResolver
                    ]
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollModule.ctorParameters = function () { return []; };
    return InfiniteScrollModule;
}());
exports.InfiniteScrollModule = InfiniteScrollModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBR25EO0lBQUE7SUFnQkEsQ0FBQztJQWhCMEMsK0JBQVUsR0FBMEI7UUFDL0UsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUN6QixTQUFTLEVBQUU7d0JBQ1QsbUNBQW1CO3dCQUNuQiwyQ0FBdUI7d0JBQ3ZCLGdDQUFjO3dCQUNkLGdDQUFjO3FCQUNmO2lCQUNGLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCxtQ0FBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSw0QkFBb0IsdUJBZ0JoQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbCc7XG5pbXBvcnQgeyBBeGlzUmVzb2x2ZXJGYWN0b3J5IH0gZnJvbSAnLi9heGlzLXJlc29sdmVyJztcbmltcG9ydCB7IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbi1yZXNvbHZlcic7XG5pbXBvcnQgeyBTY3JvbGxSZWdpc3RlciB9IGZyb20gJy4vc2Nyb2xsLXJlZ2lzdGVyJztcbmltcG9ydCB7IFNjcm9sbFJlc29sdmVyIH0gZnJvbSAnLi9zY3JvbGwtcmVzb2x2ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB7IHN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbSW5maW5pdGVTY3JvbGxdLFxuICBleHBvcnRzOiBbSW5maW5pdGVTY3JvbGxdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBeGlzUmVzb2x2ZXJGYWN0b3J5LFxuICAgIFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5LFxuICAgIFNjcm9sbFJlZ2lzdGVyLFxuICAgIFNjcm9sbFJlc29sdmVyXG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(25)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ })
]);
//# sourceMappingURL=vendor.bundle.js.map