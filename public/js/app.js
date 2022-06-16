(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/useLanguage */ "./resources/js/composables/useLanguage.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'LanguageCard',
  props: {
    languages: {
      type: Array,
      required: true
    }
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var cardFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(); // eslint-disable-next-line prefer-const

    var activeIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();

    function pickLang(language) {
      var _cardFooter$value;

      activeIndex.value = language.uuid;
      (_cardFooter$value = cardFooter.value) === null || _cardFooter$value === void 0 ? void 0 : _cardFooter$value.classList.add('is-visible');
    }

    var __returned__ = {
      cardFooter: cardFooter,
      activeIndex: activeIndex,
      pickLang: pickLang,
      useLanguage: _composables_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_useLanguage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/useLanguage */ "./resources/js/composables/useLanguage.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Navigation',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,_composables_useLanguage__WEBPACK_IMPORTED_MODULE_1__.useLanguage)();
    var __returned__ = {
      store: store
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Nav_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Nav/Navigation.vue */ "./resources/js/components/Nav/Navigation.vue");
/* harmony import */ var _pages_ChooseLanguage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/pages/ChooseLanguage.vue */ "./resources/js/pages/ChooseLanguage.vue");
/* harmony import */ var _pages_CreateCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/CreateCard.vue */ "./resources/js/pages/CreateCard.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Default',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      AppNavbar: _components_Nav_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_Card_LanguageCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Card/LanguageCard.vue */ "./resources/js/components/Card/LanguageCard.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ChooseLanguage',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var languages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.value.languages;
    });
    var __returned__ = {
      languages: languages,
      AppLanguageCard: _components_Card_LanguageCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-77406cec"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = ["onClick"];
var _hoisted_3 = {
  ref: "cardFooter",
  "class": "card__footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.languages, function (language) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: language.uuid,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        selected: $setup.activeIndex === language.uuid
      }),
      "aria-hidden": "true",
      onClick: function onClick($event) {
        return $setup.pickLang(language);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.language), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_2);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.useLanguage().setLanguage();
    })
  }, " Create card ")], 512
  /* NEED_PATCH */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-74ab25cb"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Logo", -1
  /* HOISTED */
  );
});

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Chose language ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", null, [_hoisted_1, $setup.store.languageIsSet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 0,
    to: "\\/",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.store.setLanguage();
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "main-layout"
};
var _hoisted_2 = {
  "class": "head"
};
var _hoisted_3 = {
  "class": "body"
};
var _hoisted_4 = {
  "class": "container-layout"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "foot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <AppFooter /> ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppNavbar"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]), _hoisted_5]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3b19ce50"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "content"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Choose your language", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppLanguageCard"], {
    languages: $setup.languages
  }, null, 8
  /* PROPS */
  , ["languages"])]);
}

/***/ }),

/***/ "./resources/js/composables/useLanguage.ts":
/*!*************************************************!*\
  !*** ./resources/js/composables/useLanguage.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useLanguage": () => (/* binding */ useLanguage)
/* harmony export */ });
function useLanguage() {
  var languageIsSet = false;

  function setLanguage() {
    languageIsSet = !languageIsSet;
    return languageIsSet;
  }

  return {
    languageIsSet: languageIsSet,
    setLanguage: setLanguage
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLanguage);

/***/ }),

/***/ "./resources/js/main.ts":
/*!******************************!*\
  !*** ./resources/js/main.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var _layouts_Default_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/Default.vue */ "./resources/js/layouts/Default.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  eslint-disable
  global-require,
  import/no-dynamic-require,
  @typescript-eslint/no-var-requires,
  vue/component-api-style
*/


 // import FloatingVue, { VTooltip } from 'floating-vue';
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginVue from '@bugsnag/plugin-vue';

 // import type { Plugin } from 'vue';
// FloatingVue.options.distance = 10;
// Bugsnag.start({
//   apiKey: process.env.MIX_BUGSNAG_API_KEY,
//   releaseStage: process.env.MIX_APP_ENV,
//   enabledReleaseStages: (
//     process.env.MIX_BUGSNAG_NOTIFY_RELEASE_STAGES || 'none'
//   ).split(','),
//   plugins: [new BugsnagPluginVue()],
//   autoTrackSessions: false,
// });

(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  title: function title(_title) {
    return "".concat(_title, " - BS-X-Mas Cards");
  },
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(name) {
      var _page$layout;

      var page;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              page = _context.sent["default"];
              (_page$layout = page.layout) !== null && _page$layout !== void 0 ? _page$layout : page.layout = _layouts_Default_vue__WEBPACK_IMPORTED_MODULE_3__["default"];
              return _context.abrupt("return", page);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        app = _ref.app,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(app, props);
      }
    }).use(plugin) // .use(Bugsnag.getPlugin('vue') as Plugin)
    .component('Link', _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link) // .directive('tooltip', VTooltip)
    .mount(el);
  }
});
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__.InertiaProgress.init({
  delay: 100,
  color: '#e10'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CreateCard.vue?vue&type=template&id=5e9d8e75":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CreateCard.vue?vue&type=template&id=5e9d8e75 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "This is the create card page", -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, _hoisted_3);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n*[data-v-77406cec],\n*[data-v-77406cec]:before,\n*[data-v-77406cec]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-77406cec],\nbody[data-v-77406cec],\ndiv[data-v-77406cec],\nspan[data-v-77406cec],\nobject[data-v-77406cec],\niframe[data-v-77406cec],\nfigure[data-v-77406cec],\nh1[data-v-77406cec],\nh2[data-v-77406cec],\nh3[data-v-77406cec],\nh4[data-v-77406cec],\nh5[data-v-77406cec],\nh6[data-v-77406cec],\np[data-v-77406cec],\nblockquote[data-v-77406cec],\npre[data-v-77406cec],\na[data-v-77406cec],\ncode[data-v-77406cec],\nem[data-v-77406cec],\nimg[data-v-77406cec],\nsmall[data-v-77406cec],\nstrike[data-v-77406cec],\nstrong[data-v-77406cec],\nsub[data-v-77406cec],\nsup[data-v-77406cec],\ntt[data-v-77406cec],\nb[data-v-77406cec],\nu[data-v-77406cec],\ni[data-v-77406cec],\nol[data-v-77406cec],\nul[data-v-77406cec],\nli[data-v-77406cec],\nfieldset[data-v-77406cec],\nform[data-v-77406cec],\nlabel[data-v-77406cec],\ntable[data-v-77406cec],\ncaption[data-v-77406cec],\ntbody[data-v-77406cec],\ntfoot[data-v-77406cec],\nthead[data-v-77406cec],\ntr[data-v-77406cec],\nth[data-v-77406cec],\ntd[data-v-77406cec],\nmain[data-v-77406cec],\ncanvas[data-v-77406cec],\nembed[data-v-77406cec],\nfooter[data-v-77406cec],\nheader[data-v-77406cec],\nnav[data-v-77406cec],\nsection[data-v-77406cec],\nvideo[data-v-77406cec] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-77406cec],\nbody[data-v-77406cec] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-77406cec],\nheader[data-v-77406cec],\nnav[data-v-77406cec],\nsection[data-v-77406cec],\nmain[data-v-77406cec] {\n  display: block;\n}\nbody[data-v-77406cec] {\n  line-height: 1;\n}\nol[data-v-77406cec],\nul[data-v-77406cec] {\n  list-style: none;\n}\nblockquote[data-v-77406cec],\nq[data-v-77406cec] {\n  quotes: none;\n}\nblockquote[data-v-77406cec]:before,\nblockquote[data-v-77406cec]:after,\nq[data-v-77406cec]:before,\nq[data-v-77406cec]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-77406cec] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-77406cec] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-77406cec] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-77406cec] {\n  color: #fff !important;\n}\n.text-grey[data-v-77406cec] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-77406cec] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-77406cec] {\n  color: #f8f8f8 !important;\n}\n.bg-black[data-v-77406cec] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-77406cec] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-77406cec] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-77406cec] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-77406cec] {\n  background-color: #f8f8f8 !important;\n}\na[data-v-77406cec] {\n  color: inherit;\n}\na[data-v-77406cec]:hover {\n  color: #ed1c24;\n}\nem[data-v-77406cec] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-77406cec] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n.text-bold[data-v-77406cec] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-77406cec] {\n  text-transform: uppercase;\n}\n.text-center[data-v-77406cec] {\n  text-align: center;\n}\n.hide[data-v-77406cec] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-77406cec] {\n  position: relative;\n}\n.card[data-v-77406cec] {\n  background-color: #faebd7;\n  font-size: 1.75rem;\n  width: 40rem;\n}\n.card ul[data-v-77406cec] {\n  align-content: space-around;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: auto;\n  max-height: 350px;\n  padding: 1rem 0;\n}\n.card ul li[data-v-77406cec] {\n  color: rgb(72, 61, 139);\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n  text-align: center;\n}\n.card li[data-v-77406cec]:hover {\n  background: #ed1c24;\n  color: #fff;\n  cursor: pointer;\n}\n.card__footer[data-v-77406cec] {\n  display: none;\n  opacity: 0;\n  padding: 1rem 0;\n  transition: opacity 1s ease-in;\n  width: 100%;\n}\n.card__footer button[data-v-77406cec] {\n  background: #ed1c24;\n  border: 0;\n  border-radius: 0.2rem;\n  color: #fff;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n}\n.card__footer button[data-v-77406cec]:hover {\n  background: #fff;\n  color: #ed1c24;\n}\n.card .selected[data-v-77406cec] {\n  background: #ed1c24;\n  color: #fff;\n}\n.card .is-visible[data-v-77406cec] {\n  display: flex;\n  justify-content: center;\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./resources/scss/fonts.scss","webpack://./resources/js/components/Card/LanguageCard.vue","webpack://./resources/scss/global-resets.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ACAJ;ADIA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;ACHJ;ADOA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;ACNJ;ADUA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ACTJ;ACzBA;;;EAGE,sBAAA;AD2BF;ACxBA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;AD2BF;ACxBA;;EAEE,uBAAA;AD2BF;ACxBA;;;;;EAKE,cAAA;AD2BF;ACxBA;EACE,cAAA;AD2BF;ACxBA;;EAEE,gBAAA;AD2BF;ACxBA;;EAEE,YAAA;AD2BF;ACxBA;;;;EAIE,WAAA;EACA,aAAA;AD2BF;ACxBA;EACE,yBAAA;EACA,iBAAA;AD2BF;ACxBA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;AD2BF;;AE3IA,WAAA;AASA,YAAA;ACPI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AGnJI;EACE,oCAAA;AHsJN;AGvJI;EACE,iCAAA;AHyJN;AG1JI;EACE,oCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AG7JA;EACE,cAAA;AHgKF;AG9JE;EACE,cDfM;AF+KV;AG5JA;EACE,cDpBQ;ECqBR,kBAAA;AH+JF;AG5JA;EACE,cAAA;EACA,0BAAA;AH+JF;AG5JA;EACE,wBAAA;AH+JF;AG5JA;EACE,yBAAA;AH+JF;AG5JA;EACE,kBAAA;AH+JF;AG5JA;EACE,UAAA;EACA,sBAAA;AH+JF;AG5JA;EACE,kBAAA;AH+JF;AA3MA;EACE,yBAAA;EACA,kBAAA;EACA,YAAA;AA8MF;AA5ME;EACE,2BAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AA8MJ;AA5MI;EACE,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;AA8MN;AAzMI;EACE,mBE5BI;EF6BJ,WEhCE;EFiCF,eAAA;AA2MN;AAvME;EACE,aAAA;EACA,UAAA;EACA,eAAA;EACA,8BAAA;EACA,WAAA;AAyMJ;AAvMI;EACE,mBE1CI;EF2CJ,SAAA;EACA,qBAAA;EACA,WEhDE;EFiDF,eAAA;EACA,oBAAA;EACA,qBAAA;AAyMN;AAvMM;EACE,gBEtDA;EFuDA,cEpDE;AF6PV;AApME;EACE,mBE1DM;EF2DN,WE9DI;AFoQR;AAnME;EACE,aAAA;EACA,uBAAA;EACA,UAAA;AAqMJ","sourcesContent":["@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","@import '../../../scss/fonts';\n@import '../../../scss/global-resets';\n@import '../../../scss/variables';\n@import '../../../scss/functions';\n@import '../../../scss/mixins';\n@import '../../../scss/global-styles';\n\n\n.card {\n  background-color: #faebd7;\n  font-size: 1.75rem;\n  width: 40rem;\n\n  ul {\n    align-content: space-around;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: auto;\n    max-height: 350px;\n    padding: 1rem 0;\n\n    li {\n      color: rgb(72, 61, 139);\n      font-size: 1.1rem;\n      font-weight: bold;\n      padding: 0.5rem 1rem;\n      text-align: center;\n    }\n  }\n\n  li {\n    &:hover {\n      background: $primary;\n      color: $white;\n      cursor: pointer;\n    }\n  }\n\n  &__footer {\n    display: none;\n    opacity: 0;\n    padding: 1rem 0;\n    transition: opacity 1s ease-in;\n    width: 100%;\n\n    button {\n      background: $primary;\n      border: 0;\n      border-radius: 0.2rem;\n      color: $white;\n      cursor: pointer;\n      padding: 0.5rem 1rem;\n      text-decoration: none;\n\n      &:hover {\n        background: $white;\n        color: $primary;\n      }\n    }\n  }\n\n  .selected {\n    background: $primary;\n    color: $white;\n  }\n\n  .is-visible {\n    display: flex;\n    justify-content: center;\n    opacity: 1;\n  }\n}\n","// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light\n);\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n$spacing-values: (\n  '0': 0,\n  '1': rem(10),\n  '2': rem(20),\n  '3': rem(30),\n  '4': rem(40),\n  '5': rem(50),\n  '6': rem(60),\n);\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n*[data-v-74ab25cb],\n*[data-v-74ab25cb]:before,\n*[data-v-74ab25cb]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-74ab25cb],\nbody[data-v-74ab25cb],\ndiv[data-v-74ab25cb],\nspan[data-v-74ab25cb],\nobject[data-v-74ab25cb],\niframe[data-v-74ab25cb],\nfigure[data-v-74ab25cb],\nh1[data-v-74ab25cb],\nh2[data-v-74ab25cb],\nh3[data-v-74ab25cb],\nh4[data-v-74ab25cb],\nh5[data-v-74ab25cb],\nh6[data-v-74ab25cb],\np[data-v-74ab25cb],\nblockquote[data-v-74ab25cb],\npre[data-v-74ab25cb],\na[data-v-74ab25cb],\ncode[data-v-74ab25cb],\nem[data-v-74ab25cb],\nimg[data-v-74ab25cb],\nsmall[data-v-74ab25cb],\nstrike[data-v-74ab25cb],\nstrong[data-v-74ab25cb],\nsub[data-v-74ab25cb],\nsup[data-v-74ab25cb],\ntt[data-v-74ab25cb],\nb[data-v-74ab25cb],\nu[data-v-74ab25cb],\ni[data-v-74ab25cb],\nol[data-v-74ab25cb],\nul[data-v-74ab25cb],\nli[data-v-74ab25cb],\nfieldset[data-v-74ab25cb],\nform[data-v-74ab25cb],\nlabel[data-v-74ab25cb],\ntable[data-v-74ab25cb],\ncaption[data-v-74ab25cb],\ntbody[data-v-74ab25cb],\ntfoot[data-v-74ab25cb],\nthead[data-v-74ab25cb],\ntr[data-v-74ab25cb],\nth[data-v-74ab25cb],\ntd[data-v-74ab25cb],\nmain[data-v-74ab25cb],\ncanvas[data-v-74ab25cb],\nembed[data-v-74ab25cb],\nfooter[data-v-74ab25cb],\nheader[data-v-74ab25cb],\nnav[data-v-74ab25cb],\nsection[data-v-74ab25cb],\nvideo[data-v-74ab25cb] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-74ab25cb],\nbody[data-v-74ab25cb] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-74ab25cb],\nheader[data-v-74ab25cb],\nnav[data-v-74ab25cb],\nsection[data-v-74ab25cb],\nmain[data-v-74ab25cb] {\n  display: block;\n}\nbody[data-v-74ab25cb] {\n  line-height: 1;\n}\nol[data-v-74ab25cb],\nul[data-v-74ab25cb] {\n  list-style: none;\n}\nblockquote[data-v-74ab25cb],\nq[data-v-74ab25cb] {\n  quotes: none;\n}\nblockquote[data-v-74ab25cb]:before,\nblockquote[data-v-74ab25cb]:after,\nq[data-v-74ab25cb]:before,\nq[data-v-74ab25cb]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-74ab25cb] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-74ab25cb] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-74ab25cb] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-74ab25cb] {\n  color: #fff !important;\n}\n.text-grey[data-v-74ab25cb] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-74ab25cb] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-74ab25cb] {\n  color: #f8f8f8 !important;\n}\n.bg-black[data-v-74ab25cb] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-74ab25cb] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-74ab25cb] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-74ab25cb] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-74ab25cb] {\n  background-color: #f8f8f8 !important;\n}\na[data-v-74ab25cb] {\n  color: inherit;\n}\na[data-v-74ab25cb]:hover {\n  color: #ed1c24;\n}\nem[data-v-74ab25cb] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-74ab25cb] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n.text-bold[data-v-74ab25cb] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-74ab25cb] {\n  text-transform: uppercase;\n}\n.text-center[data-v-74ab25cb] {\n  text-align: center;\n}\n.hide[data-v-74ab25cb] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-74ab25cb] {\n  position: relative;\n}\nnav[data-v-74ab25cb] {\n  display: flex;\n  height: 2rem;\n  justify-content: space-between;\n  width: 100%;\n}\nnav a[data-v-74ab25cb] {\n  color: rgb(255, 255, 255);\n  padding: 0.2rem 1rem;\n  text-decoration: none;\n}\nnav a[data-v-74ab25cb]:hover {\n  background: rgb(255, 0, 0);\n}", "",{"version":3,"sources":["webpack://./resources/scss/fonts.scss","webpack://./resources/js/components/Nav/Navigation.vue","webpack://./resources/scss/global-resets.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ACAJ;ADIA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;ACHJ;ADOA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;ACNJ;ADUA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ACTJ;ACzBA;;;EAGE,sBAAA;AD2BF;ACxBA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;AD2BF;ACxBA;;EAEE,uBAAA;AD2BF;ACxBA;;;;;EAKE,cAAA;AD2BF;ACxBA;EACE,cAAA;AD2BF;ACxBA;;EAEE,gBAAA;AD2BF;ACxBA;;EAEE,YAAA;AD2BF;ACxBA;;;;EAIE,WAAA;EACA,aAAA;AD2BF;ACxBA;EACE,yBAAA;EACA,iBAAA;AD2BF;ACxBA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;AD2BF;;AE3IA,WAAA;AASA,YAAA;ACPI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AGnJI;EACE,oCAAA;AHsJN;AGvJI;EACE,iCAAA;AHyJN;AG1JI;EACE,oCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AG7JA;EACE,cAAA;AHgKF;AG9JE;EACE,cDfM;AF+KV;AG5JA;EACE,cDpBQ;ECqBR,kBAAA;AH+JF;AG5JA;EACE,cAAA;EACA,0BAAA;AH+JF;AG5JA;EACE,wBAAA;AH+JF;AG5JA;EACE,yBAAA;AH+JF;AG5JA;EACE,kBAAA;AH+JF;AG5JA;EACE,UAAA;EACA,sBAAA;AH+JF;AG5JA;EACE,kBAAA;AH+JF;AA3MA;EACE,aAAA;EACA,YAAA;EACA,8BAAA;EACA,WAAA;AA8MF;AA5ME;EACE,yBAAA;EACA,oBAAA;EACA,qBAAA;AA8MJ;AA5MI;EACE,0BAAA;AA8MN","sourcesContent":["@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","@import '../../../scss/fonts';\n@import '../../../scss/global-resets';\n@import '../../../scss/variables';\n@import '../../../scss/functions';\n@import '../../../scss/mixins';\n@import '../../../scss/global-styles';\n\n\nnav {\n  display: flex;\n  height: 2rem;\n  justify-content: space-between;\n  width: 100%;\n\n  a {\n    color: rgb(255, 255, 255);\n    padding: 0.2rem 1rem;\n    text-decoration: none;\n\n    &:hover {\n      background: rgb(255, 0, 0);\n    }\n  }\n}\n","// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light\n);\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n$spacing-values: (\n  '0': 0,\n  '1': rem(10),\n  '2': rem(20),\n  '3': rem(30),\n  '4': rem(40),\n  '5': rem(50),\n  '6': rem(60),\n);\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n*[data-v-3b19ce50],\n*[data-v-3b19ce50]:before,\n*[data-v-3b19ce50]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-3b19ce50],\nbody[data-v-3b19ce50],\ndiv[data-v-3b19ce50],\nspan[data-v-3b19ce50],\nobject[data-v-3b19ce50],\niframe[data-v-3b19ce50],\nfigure[data-v-3b19ce50],\nh1[data-v-3b19ce50],\nh2[data-v-3b19ce50],\nh3[data-v-3b19ce50],\nh4[data-v-3b19ce50],\nh5[data-v-3b19ce50],\nh6[data-v-3b19ce50],\np[data-v-3b19ce50],\nblockquote[data-v-3b19ce50],\npre[data-v-3b19ce50],\na[data-v-3b19ce50],\ncode[data-v-3b19ce50],\nem[data-v-3b19ce50],\nimg[data-v-3b19ce50],\nsmall[data-v-3b19ce50],\nstrike[data-v-3b19ce50],\nstrong[data-v-3b19ce50],\nsub[data-v-3b19ce50],\nsup[data-v-3b19ce50],\ntt[data-v-3b19ce50],\nb[data-v-3b19ce50],\nu[data-v-3b19ce50],\ni[data-v-3b19ce50],\nol[data-v-3b19ce50],\nul[data-v-3b19ce50],\nli[data-v-3b19ce50],\nfieldset[data-v-3b19ce50],\nform[data-v-3b19ce50],\nlabel[data-v-3b19ce50],\ntable[data-v-3b19ce50],\ncaption[data-v-3b19ce50],\ntbody[data-v-3b19ce50],\ntfoot[data-v-3b19ce50],\nthead[data-v-3b19ce50],\ntr[data-v-3b19ce50],\nth[data-v-3b19ce50],\ntd[data-v-3b19ce50],\nmain[data-v-3b19ce50],\ncanvas[data-v-3b19ce50],\nembed[data-v-3b19ce50],\nfooter[data-v-3b19ce50],\nheader[data-v-3b19ce50],\nnav[data-v-3b19ce50],\nsection[data-v-3b19ce50],\nvideo[data-v-3b19ce50] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-3b19ce50],\nbody[data-v-3b19ce50] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-3b19ce50],\nheader[data-v-3b19ce50],\nnav[data-v-3b19ce50],\nsection[data-v-3b19ce50],\nmain[data-v-3b19ce50] {\n  display: block;\n}\nbody[data-v-3b19ce50] {\n  line-height: 1;\n}\nol[data-v-3b19ce50],\nul[data-v-3b19ce50] {\n  list-style: none;\n}\nblockquote[data-v-3b19ce50],\nq[data-v-3b19ce50] {\n  quotes: none;\n}\nblockquote[data-v-3b19ce50]:before,\nblockquote[data-v-3b19ce50]:after,\nq[data-v-3b19ce50]:before,\nq[data-v-3b19ce50]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-3b19ce50] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-3b19ce50] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-3b19ce50] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-3b19ce50] {\n  color: #fff !important;\n}\n.text-grey[data-v-3b19ce50] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-3b19ce50] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-3b19ce50] {\n  color: #f8f8f8 !important;\n}\n.bg-black[data-v-3b19ce50] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-3b19ce50] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-3b19ce50] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-3b19ce50] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-3b19ce50] {\n  background-color: #f8f8f8 !important;\n}\na[data-v-3b19ce50] {\n  color: inherit;\n}\na[data-v-3b19ce50]:hover {\n  color: #ed1c24;\n}\nem[data-v-3b19ce50] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-3b19ce50] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n.text-bold[data-v-3b19ce50] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-3b19ce50] {\n  text-transform: uppercase;\n}\n.text-center[data-v-3b19ce50] {\n  text-align: center;\n}\n.hide[data-v-3b19ce50] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-3b19ce50] {\n  position: relative;\n}\n.content[data-v-3b19ce50] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n.content h1[data-v-3b19ce50] {\n  /* font-size: xx-large; */\n  margin-bottom: 2rem;\n}", "",{"version":3,"sources":["webpack://./resources/scss/fonts.scss","webpack://./resources/js/pages/ChooseLanguage.vue","webpack://./resources/scss/global-resets.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ACAJ;ADIA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;ACHJ;ADOA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;ACNJ;ADUA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ACTJ;ACzBA;;;EAGE,sBAAA;AD2BF;ACxBA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;AD2BF;ACxBA;;EAEE,uBAAA;AD2BF;ACxBA;;;;;EAKE,cAAA;AD2BF;ACxBA;EACE,cAAA;AD2BF;ACxBA;;EAEE,gBAAA;AD2BF;ACxBA;;EAEE,YAAA;AD2BF;ACxBA;;;;EAIE,WAAA;EACA,aAAA;AD2BF;ACxBA;EACE,yBAAA;EACA,iBAAA;AD2BF;ACxBA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;AD2BF;;AE3IA,WAAA;AASA,YAAA;ACPI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AGnJI;EACE,oCAAA;AHsJN;AGvJI;EACE,iCAAA;AHyJN;AG1JI;EACE,oCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AG7JA;EACE,cAAA;AHgKF;AG9JE;EACE,cDfM;AF+KV;AG5JA;EACE,cDpBQ;ECqBR,kBAAA;AH+JF;AG5JA;EACE,cAAA;EACA,0BAAA;AH+JF;AG5JA;EACE,wBAAA;AH+JF;AG5JA;EACE,yBAAA;AH+JF;AG5JA;EACE,kBAAA;AH+JF;AG5JA;EACE,UAAA;EACA,sBAAA;AH+JF;AG5JA;EACE,kBAAA;AH+JF;AA3MA;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;AA8MF;AA5ME;EACE,yBAAA;EACA,mBAAA;AA8MJ","sourcesContent":["@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","@import '../../scss/fonts';\n@import '../../scss/global-resets';\n@import '../../scss/variables';\n@import '../../scss/functions';\n@import '../../scss/mixins';\n@import '../../scss/global-styles';\n\n\n.content {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    /* font-size: xx-large; */\n    margin-bottom: 2rem;\n  }\n}\n","// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light\n);\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n$spacing-values: (\n  '0': 0,\n  '1': rem(10),\n  '2': rem(20),\n  '3': rem(30),\n  '4': rem(40),\n  '5': rem(50),\n  '6': rem(60),\n);\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_style_index_0_id_77406cec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_style_index_0_id_77406cec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_style_index_0_id_77406cec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_style_index_0_id_74ab25cb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_style_index_0_id_74ab25cb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_style_index_0_id_74ab25cb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_style_index_0_id_3b19ce50_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_style_index_0_id_3b19ce50_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_style_index_0_id_3b19ce50_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Card/LanguageCard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Card/LanguageCard.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LanguageCard_vue_vue_type_template_id_77406cec_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true */ "./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true");
/* harmony import */ var _LanguageCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageCard.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _LanguageCard_vue_vue_type_style_index_0_id_77406cec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true */ "./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true");
/* harmony import */ var _app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LanguageCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LanguageCard_vue_vue_type_template_id_77406cec_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-77406cec"],['__file',"resources/js/components/Card/LanguageCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Nav/Navigation.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Nav/Navigation.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_74ab25cb_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true */ "./resources/js/components/Nav/Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true");
/* harmony import */ var _Navigation_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/components/Nav/Navigation.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_74ab25cb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true */ "./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true");
/* harmony import */ var _app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Navigation_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navigation_vue_vue_type_template_id_74ab25cb_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-74ab25cb"],['__file',"resources/js/components/Nav/Navigation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/layouts/Default.vue":
/*!******************************************!*\
  !*** ./resources/js/layouts/Default.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Default_vue_vue_type_template_id_6a25d30d_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default.vue?vue&type=template&id=6a25d30d&ts=true */ "./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&ts=true");
/* harmony import */ var _Default_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Default.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Default_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Default_vue_vue_type_template_id_6a25d30d_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/layouts/Default.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChooseLanguage_vue_vue_type_template_id_3b19ce50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true */ "./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true");
/* harmony import */ var _ChooseLanguage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChooseLanguage.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _ChooseLanguage_vue_vue_type_style_index_0_id_3b19ce50_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true */ "./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true");
/* harmony import */ var _app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ChooseLanguage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ChooseLanguage_vue_vue_type_template_id_3b19ce50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3b19ce50"],['__file',"resources/js/pages/ChooseLanguage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/CreateCard.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/CreateCard.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateCard_vue_vue_type_template_id_5e9d8e75__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCard.vue?vue&type=template&id=5e9d8e75 */ "./resources/js/pages/CreateCard.vue?vue&type=template&id=5e9d8e75");
/* harmony import */ var _app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_CreateCard_vue_vue_type_template_id_5e9d8e75__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/CreateCard.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/js/components/Nav/Navigation.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Nav/Navigation.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts":
/*!*****************************************************************************!*\
  !*** ./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Default.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChooseLanguage.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_template_id_77406cec_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_template_id_77406cec_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true");


/***/ }),

/***/ "./resources/js/components/Nav/Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Nav/Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_template_id_74ab25cb_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_template_id_74ab25cb_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=template&id=74ab25cb&scoped=true&ts=true");


/***/ }),

/***/ "./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&ts=true":
/*!********************************************************************************!*\
  !*** ./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&ts=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_template_id_6a25d30d_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_template_id_6a25d30d_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Default.vue?vue&type=template&id=6a25d30d&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&ts=true");


/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_template_id_3b19ce50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_template_id_3b19ce50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true");


/***/ }),

/***/ "./resources/js/pages/CreateCard.vue?vue&type=template&id=5e9d8e75":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/CreateCard.vue?vue&type=template&id=5e9d8e75 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateCard_vue_vue_type_template_id_5e9d8e75__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateCard_vue_vue_type_template_id_5e9d8e75__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateCard.vue?vue&type=template&id=5e9d8e75 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/CreateCard.vue?vue&type=template&id=5e9d8e75");


/***/ }),

/***/ "./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_style_index_0_id_77406cec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navigation_vue_vue_type_style_index_0_id_74ab25cb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Nav/Navigation.vue?vue&type=style&index=0&id=74ab25cb&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_style_index_0_id_3b19ce50_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ChooseLanguage": [
		"./resources/js/pages/ChooseLanguage.vue"
	],
	"./ChooseLanguage.vue": [
		"./resources/js/pages/ChooseLanguage.vue"
	],
	"./CreateCard": [
		"./resources/js/pages/CreateCard.vue"
	],
	"./CreateCard.vue": [
		"./resources/js/pages/CreateCard.vue"
	],
	"./ViewCard": [
		"./resources/js/pages/ViewCard.vue",
		"resources_js_pages_ViewCard_vue"
	],
	"./ViewCard.vue": [
		"./resources/js/pages/ViewCard.vue",
		"resources_js_pages_ViewCard_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/main.ts"), __webpack_exec__("./resources/scss/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.js.map