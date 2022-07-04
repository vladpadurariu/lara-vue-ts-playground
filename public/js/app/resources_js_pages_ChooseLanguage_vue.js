"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_ChooseLanguage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _composables_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/useLanguage */ "./resources/js/composables/useLanguage.ts");




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

    var _useLanguage = (0,_composables_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(),
        setLanguage = _useLanguage.setLanguage; // const { setLanguage } = useLanguage();


    var cardFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(); // eslint-disable-next-line prefer-const

    var activeIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(); // eslint-disable-next-line prefer-const

    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();

    function pickLang(language) {
      var _cardFooter$value;

      activeIndex.value = language.uuid;
      lang.value = language.abbreviation;
      (_cardFooter$value = cardFooter.value) === null || _cardFooter$value === void 0 ? void 0 : _cardFooter$value.classList.add('is-visible');
    }

    var __returned__ = {
      setLanguage: setLanguage,
      cardFooter: cardFooter,
      activeIndex: activeIndex,
      lang: lang,
      pickLang: pickLang,
      Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create card ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.languages, function (language) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: language.uuid,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        selected: $setup.activeIndex === language.uuid
      }, "text-center"]),
      "aria-hidden": "true",
      onClick: function onClick($event) {
        return $setup.pickLang(language);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.language), 11
    /* TEXT, CLASS, PROPS */
    , _hoisted_2);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Link"], {
    as: "button",
    type: "button",
    "class": "button",
    href: "/cards/create/".concat($setup.lang),
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.setLanguage(true, $setup.lang);
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])], 512
  /* NEED_PATCH */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Choose your language", -1
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-77406cec],\n*[data-v-77406cec]:before,\n*[data-v-77406cec]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-77406cec],\nbody[data-v-77406cec],\ndiv[data-v-77406cec],\nspan[data-v-77406cec],\nobject[data-v-77406cec],\niframe[data-v-77406cec],\nfigure[data-v-77406cec],\nh1[data-v-77406cec],\nh2[data-v-77406cec],\nh3[data-v-77406cec],\nh4[data-v-77406cec],\nh5[data-v-77406cec],\nh6[data-v-77406cec],\np[data-v-77406cec],\nblockquote[data-v-77406cec],\npre[data-v-77406cec],\na[data-v-77406cec],\ncode[data-v-77406cec],\nem[data-v-77406cec],\nimg[data-v-77406cec],\nsmall[data-v-77406cec],\nstrike[data-v-77406cec],\nstrong[data-v-77406cec],\nsub[data-v-77406cec],\nsup[data-v-77406cec],\ntt[data-v-77406cec],\nb[data-v-77406cec],\nu[data-v-77406cec],\ni[data-v-77406cec],\nol[data-v-77406cec],\nul[data-v-77406cec],\nli[data-v-77406cec],\nfieldset[data-v-77406cec],\nform[data-v-77406cec],\nlabel[data-v-77406cec],\ntable[data-v-77406cec],\ncaption[data-v-77406cec],\ntbody[data-v-77406cec],\ntfoot[data-v-77406cec],\nthead[data-v-77406cec],\ntr[data-v-77406cec],\nth[data-v-77406cec],\ntd[data-v-77406cec],\nmain[data-v-77406cec],\ncanvas[data-v-77406cec],\nembed[data-v-77406cec],\nfooter[data-v-77406cec],\nheader[data-v-77406cec],\nnav[data-v-77406cec],\nsection[data-v-77406cec],\nvideo[data-v-77406cec] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-77406cec],\nbody[data-v-77406cec] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-77406cec],\nheader[data-v-77406cec],\nnav[data-v-77406cec],\nsection[data-v-77406cec],\nmain[data-v-77406cec] {\n  display: block;\n}\nbody[data-v-77406cec] {\n  line-height: 1;\n}\nol[data-v-77406cec],\nul[data-v-77406cec] {\n  list-style: none;\n}\nblockquote[data-v-77406cec],\nq[data-v-77406cec] {\n  quotes: none;\n}\nblockquote[data-v-77406cec]:before,\nblockquote[data-v-77406cec]:after,\nq[data-v-77406cec]:before,\nq[data-v-77406cec]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-77406cec] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-77406cec] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-77406cec] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-77406cec] {\n  color: #fff !important;\n}\n.text-grey[data-v-77406cec] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-77406cec] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-77406cec] {\n  color: #f8f8f8 !important;\n}\n.text-night-blue[data-v-77406cec] {\n  color: #323975 !important;\n}\n.bg-black[data-v-77406cec] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-77406cec] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-77406cec] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-77406cec] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-77406cec] {\n  background-color: #f8f8f8 !important;\n}\n.bg-night-blue[data-v-77406cec] {\n  background-color: #323975 !important;\n}\nhtml[data-v-77406cec] {\n  background-color: #323975;\n}\na[data-v-77406cec] {\n  color: inherit;\n}\na[data-v-77406cec]:hover {\n  color: #ed1c24;\n}\nem[data-v-77406cec] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-77406cec] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\nh1[data-v-77406cec],\nh2[data-v-77406cec],\nh3[data-v-77406cec],\nh4[data-v-77406cec],\nh5[data-v-77406cec],\nh6[data-v-77406cec] {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\nh1[data-v-77406cec] {\n  font-size: 48px;\n  line-height: 53px;\n}\n@media all and (min-width:1024px) {\nh1[data-v-77406cec] {\n    font-size: 96px;\n    line-height: 106.8px;\n}\n}\nh2[data-v-77406cec] {\n  font-size: 30px;\n  line-height: 35px;\n}\n@media all and (min-width:1024px) {\nh2[data-v-77406cec] {\n    font-size: 48px;\n    line-height: 53px;\n}\n}\nh3[data-v-77406cec] {\n  font-size: 28px;\n  line-height: 40px;\n}\n@media all and (min-width:1024px) {\nh3[data-v-77406cec] {\n    font-size: 36px;\n    line-height: 52px;\n}\n}\nh4[data-v-77406cec] {\n  font-size: 20px;\n  line-height: 25px;\n}\n@media all and (min-width:1024px) {\nh4[data-v-77406cec] {\n    font-size: 24px;\n    line-height: 36px;\n}\n}\nh5[data-v-77406cec] {\n  font-size: 16px;\n  line-height: 24px;\n}\nh6[data-v-77406cec] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.text-bold[data-v-77406cec] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-77406cec] {\n  text-transform: uppercase;\n}\n.text-center[data-v-77406cec] {\n  text-align: center;\n}\n.hide[data-v-77406cec] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-77406cec] {\n  position: relative;\n}\n.button[data-v-77406cec] {\n  background-color: #fff;\n  border: 0.1rem solid #ed1c24;\n  border-radius: 0.2rem;\n  color: #ed1c24;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n}\n.button[data-v-77406cec]:hover {\n  background: #ed1c24;\n  color: #fff;\n}\n.container-layout[data-v-77406cec] {\n  margin: 0 auto;\n  max-width: 72.5rem;\n  width: 100%;\n}\n.container-layout.is-medium[data-v-77406cec] {\n  max-width: 60rem;\n}\n.container-layout.is-small[data-v-77406cec] {\n  max-width: 47.5rem;\n}\n.container-layout.is-smaller[data-v-77406cec] {\n  max-width: 33.75rem;\n}\n.container-layout.is-tiny[data-v-77406cec] {\n  max-width: 28.75rem;\n}\n.card[data-v-77406cec] {\n  background-color: #f8f8f8;\n  border-radius: 0.5rem;\n  font-size: 1.75rem;\n  width: 40rem;\n}\n.card ul[data-v-77406cec] {\n  align-content: space-around;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: auto;\n  max-height: 350px;\n  padding: 1rem 0;\n}\n.card ul li[data-v-77406cec] {\n  color: rgb(72, 61, 139);\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n}\n.card li[data-v-77406cec]:hover {\n  background: #ed1c24;\n  color: #fff;\n  cursor: pointer;\n}\n.card__footer[data-v-77406cec] {\n  display: none;\n  opacity: 0;\n  padding: 1rem 0;\n  transition: opacity 0.5s cubic-bezier(0.5, 0, 0, 1);\n  width: 100%;\n}\n.card .selected[data-v-77406cec] {\n  background: #ed1c24;\n  color: #fff;\n}\n.card .is-visible[data-v-77406cec] {\n  display: flex;\n  justify-content: center;\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./resources/scss/global-resets.scss","webpack://./resources/js/components/Card/LanguageCard.vue","webpack://./resources/scss/fonts.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss","webpack://./resources/scss/mixins.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;ACDF;ADIA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;ACDF;ADIA;;EAEE,uBAAA;ACDF;ADIA;;;;;EAKE,cAAA;ACDF;ADIA;EACE,cAAA;ACDF;ADIA;;EAEE,gBAAA;ACDF;ADIA;;EAEE,YAAA;ACDF;ADIA;;;;EAIE,WAAA;EACA,aAAA;ACDF;ADIA;EACE,yBAAA;EACA,iBAAA;ACDF;ADIA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;ACDF;AC/GA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ADiHJ;AC7GA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;AD8GJ;AC1GA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;AD2GJ;ACvGA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ADwGJ;AE5IA,WAAA;AAWA,YAAA;ACTI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AG3JI;EACE,yBAAA;AH6JN;AGtJI;EACE,oCAAA;AHyJN;AG1JI;EACE,iCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AGnKI;EACE,oCAAA;AHqKN;AGtKI;EACE,oCAAA;AHwKN;AGnKA;EACE,yBDRW;AF8Kb;AGnKA;EACE,cAAA;AHsKF;AGpKE;EACE,cDnBM;AFyLV;AGlKA;EACE,cDxBQ;ECyBR,kBAAA;AHqKF;AGlKA;EACE,cAAA;EACA,0BAAA;AHqKF;AGlKA;;;;;;EAME,oCAAA;AHqKF;AGlKA;EACE,eAAA;EACA,iBAAA;AHqKF;AIhNI;ADyCJ;IAII,eAAA;IACA,oBAAA;AHuKF;AACF;AGpKA;EACE,eAAA;EACA,iBAAA;AHuKF;AI3NI;ADkDJ;IAII,eAAA;IACA,iBAAA;AHyKF;AACF;AGtKA;EACE,eAAA;EACA,iBAAA;AHyKF;AItOI;AD2DJ;IAII,eAAA;IACA,iBAAA;AH2KF;AACF;AGxKA;EACE,eAAA;EACA,iBAAA;AH2KF;AIjPI;ADoEJ;IAII,eAAA;IACA,iBAAA;AH6KF;AACF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AGzKA;EACE,wBAAA;AH4KF;AGzKA;EACE,yBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,UAAA;EACA,sBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,sBDlHM;ECmHN,4BAAA;EACA,qBAAA;EACA,cDlHQ;ECmHR,eAAA;EACA,oBAAA;EACA,qBAAA;AH4KF;AG1KE;EACE,mBDxHM;ECyHN,WD5HI;AFwSR;AGxKA;EACE,cAAA;EACA,kBAAA;EACA,WAAA;AH2KF;AGzKE;EACE,gBAAA;AH2KJ;AGxKE;EACE,kBAAA;AH0KJ;AGvKE;EACE,mBAAA;AHyKJ;AGtKE;EACE,mBAAA;AHwKJ;AApTA;EACE,yBENM;EFON,qBAAA;EACA,kBAAA;EACA,YAAA;AAuTF;AArTE;EACE,2BAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AAuTJ;AArTI;EACE,uBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAuTN;AAlTI;EACE,mBE5BI;EF6BJ,WEhCE;EFiCF,eAAA;AAoTN;AAhTE;EACE,aAAA;EACA,UAAA;EACA,eAAA;EACA,mDAAA;EACA,WAAA;AAkTJ;AA/SE;EACE,mBE3CM;EF4CN,WE/CI;AFgWR;AA9SE;EACE,aAAA;EACA,uBAAA;EACA,UAAA;AAgTJ","sourcesContent":["// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","@import '../../../scss/global-resets';\n@import '../../../scss/fonts';\n@import '../../../scss/functions';\n@import '../../../scss/variables';\n@import '../../../scss/mixins';\n@import '../../../scss/global-styles';\n\n\n.card {\n  background-color: $light;\n  border-radius: 0.5rem;\n  font-size: 1.75rem;\n  width: 40rem;\n\n  ul {\n    align-content: space-around;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: auto;\n    max-height: 350px;\n    padding: 1rem 0;\n\n    li {\n      color: rgb(72, 61, 139);\n      font-size: 1.1rem;\n      font-weight: bold;\n      padding: 0.5rem 1rem;\n    }\n  }\n\n  li {\n    &:hover {\n      background: $primary;\n      color: $white;\n      cursor: pointer;\n    }\n  }\n\n  &__footer {\n    display: none;\n    opacity: 0;\n    padding: 1rem 0;\n    transition: opacity $transition-smooth;\n    width: 100%;\n  }\n\n  .selected {\n    background: $primary;\n    color: $white;\n  }\n\n  .is-visible {\n    display: flex;\n    justify-content: center;\n    opacity: 1;\n  }\n}\n","@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n$washed-red: #d59c9e;\n$night-blue: #323975;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light,\n  'night-blue': $night-blue,\n);\n\n// Fonts Weight\n$weight-light: 300;\n$weight-regular: 400;\n$weight-medium: 500;\n$weight-bold: 700;\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\nhtml {\n  background-color: $night-blue;\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\n\nh1 {\n  font-size: 48px;\n  line-height: 53px;\n  @include mq('min-desktop') {\n    font-size: 96px;\n    line-height: 106.8px;\n  }\n}\n\nh2 {\n  font-size: 30px;\n  line-height: 35px;\n  @include mq('min-desktop') {\n    font-size: 48px;\n    line-height: 53px;\n  }\n}\n\nh3 {\n  font-size: 28px;\n  line-height: 40px;\n  @include mq('min-desktop') {\n    font-size: 36px;\n    line-height: 52px;\n  }\n}\n\nh4 {\n  font-size: 20px;\n  line-height: 25px;\n  @include mq('min-desktop') {\n    font-size: 24px;\n    line-height: 36px;\n  }\n}\n\nh5 {\n  font-size: 16px;\n  line-height: 24px;\n}\n\nh6 {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n\n.button {\n  background-color: $white;\n  border: 0.1rem solid $primary;\n  border-radius: 0.2rem;\n  color: $primary;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n\n  &:hover {\n    background: $primary;\n    color: $white;\n  }\n}\n\n.container-layout {\n  margin: 0 auto;\n  max-width: rem(1160);\n  width: 100%;\n\n  &.is-medium {\n    max-width: rem(960);\n  }\n\n  &.is-small {\n    max-width: rem(760);\n  }\n\n  &.is-smaller {\n    max-width: rem(540);\n  }\n\n  &.is-tiny {\n    max-width: rem(460);\n  }\n}\n","@use 'sass:math';\n\n@mixin mq($breakpoint-name) {\n  $breakpoint-name: unquote($breakpoint-name);\n  @if map-has-key($breakpoints, $breakpoint-name) {\n    $query: map-get($breakpoints, $breakpoint-name);\n    @media all and #{$query} {\n      @content;\n    }\n  } @else {\n    @warn '#{$mq-name} is not a value defined in the 'breakpoints' map.';\n  }\n}\n\n// BACKGROUND GRADIENT\n// https://robots.thoughtbot.com/controlling-color-with-sass-color-functions\n// https://glennmccomb.com/articles/creating-smooth-sequential-animations-with-sass/\n@mixin bg-gradient($directionTo: top, $colorStart: black, $colorEnd: white , $upTo: 100%) {\n  background: linear-gradient(to $directionTo, $colorStart 0%, $colorEnd $upTo);\n}\n\n@mixin pseudo($display: block, $pos: absolute, $content: '') {\n  content: $content;\n  display: $display;\n  position: $pos;\n}\n\n@mixin responsive-ratio($x, $y, $pseudo: true) {\n  $padding: unquote(math.div($y, $x) * 100 + '%');\n  @if $pseudo {\n    &:before {\n      @include pseudo($pos: relative);\n      padding-top: $padding;\n      width: 100%;\n    }\n  } @else {\n    > .ratio:first-child {\n      display: block;\n      padding-top: $padding;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-3b19ce50],\n*[data-v-3b19ce50]:before,\n*[data-v-3b19ce50]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-3b19ce50],\nbody[data-v-3b19ce50],\ndiv[data-v-3b19ce50],\nspan[data-v-3b19ce50],\nobject[data-v-3b19ce50],\niframe[data-v-3b19ce50],\nfigure[data-v-3b19ce50],\nh1[data-v-3b19ce50],\nh2[data-v-3b19ce50],\nh3[data-v-3b19ce50],\nh4[data-v-3b19ce50],\nh5[data-v-3b19ce50],\nh6[data-v-3b19ce50],\np[data-v-3b19ce50],\nblockquote[data-v-3b19ce50],\npre[data-v-3b19ce50],\na[data-v-3b19ce50],\ncode[data-v-3b19ce50],\nem[data-v-3b19ce50],\nimg[data-v-3b19ce50],\nsmall[data-v-3b19ce50],\nstrike[data-v-3b19ce50],\nstrong[data-v-3b19ce50],\nsub[data-v-3b19ce50],\nsup[data-v-3b19ce50],\ntt[data-v-3b19ce50],\nb[data-v-3b19ce50],\nu[data-v-3b19ce50],\ni[data-v-3b19ce50],\nol[data-v-3b19ce50],\nul[data-v-3b19ce50],\nli[data-v-3b19ce50],\nfieldset[data-v-3b19ce50],\nform[data-v-3b19ce50],\nlabel[data-v-3b19ce50],\ntable[data-v-3b19ce50],\ncaption[data-v-3b19ce50],\ntbody[data-v-3b19ce50],\ntfoot[data-v-3b19ce50],\nthead[data-v-3b19ce50],\ntr[data-v-3b19ce50],\nth[data-v-3b19ce50],\ntd[data-v-3b19ce50],\nmain[data-v-3b19ce50],\ncanvas[data-v-3b19ce50],\nembed[data-v-3b19ce50],\nfooter[data-v-3b19ce50],\nheader[data-v-3b19ce50],\nnav[data-v-3b19ce50],\nsection[data-v-3b19ce50],\nvideo[data-v-3b19ce50] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-3b19ce50],\nbody[data-v-3b19ce50] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-3b19ce50],\nheader[data-v-3b19ce50],\nnav[data-v-3b19ce50],\nsection[data-v-3b19ce50],\nmain[data-v-3b19ce50] {\n  display: block;\n}\nbody[data-v-3b19ce50] {\n  line-height: 1;\n}\nol[data-v-3b19ce50],\nul[data-v-3b19ce50] {\n  list-style: none;\n}\nblockquote[data-v-3b19ce50],\nq[data-v-3b19ce50] {\n  quotes: none;\n}\nblockquote[data-v-3b19ce50]:before,\nblockquote[data-v-3b19ce50]:after,\nq[data-v-3b19ce50]:before,\nq[data-v-3b19ce50]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-3b19ce50] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-3b19ce50] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-3b19ce50] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-3b19ce50] {\n  color: #fff !important;\n}\n.text-grey[data-v-3b19ce50] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-3b19ce50] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-3b19ce50] {\n  color: #f8f8f8 !important;\n}\n.text-night-blue[data-v-3b19ce50] {\n  color: #323975 !important;\n}\n.bg-black[data-v-3b19ce50] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-3b19ce50] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-3b19ce50] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-3b19ce50] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-3b19ce50] {\n  background-color: #f8f8f8 !important;\n}\n.bg-night-blue[data-v-3b19ce50] {\n  background-color: #323975 !important;\n}\nhtml[data-v-3b19ce50] {\n  background-color: #323975;\n}\na[data-v-3b19ce50] {\n  color: inherit;\n}\na[data-v-3b19ce50]:hover {\n  color: #ed1c24;\n}\nem[data-v-3b19ce50] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-3b19ce50] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\nh1[data-v-3b19ce50],\nh2[data-v-3b19ce50],\nh3[data-v-3b19ce50],\nh4[data-v-3b19ce50],\nh5[data-v-3b19ce50],\nh6[data-v-3b19ce50] {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\nh1[data-v-3b19ce50] {\n  font-size: 48px;\n  line-height: 53px;\n}\n@media all and (min-width:1024px) {\nh1[data-v-3b19ce50] {\n    font-size: 96px;\n    line-height: 106.8px;\n}\n}\nh2[data-v-3b19ce50] {\n  font-size: 30px;\n  line-height: 35px;\n}\n@media all and (min-width:1024px) {\nh2[data-v-3b19ce50] {\n    font-size: 48px;\n    line-height: 53px;\n}\n}\nh3[data-v-3b19ce50] {\n  font-size: 28px;\n  line-height: 40px;\n}\n@media all and (min-width:1024px) {\nh3[data-v-3b19ce50] {\n    font-size: 36px;\n    line-height: 52px;\n}\n}\nh4[data-v-3b19ce50] {\n  font-size: 20px;\n  line-height: 25px;\n}\n@media all and (min-width:1024px) {\nh4[data-v-3b19ce50] {\n    font-size: 24px;\n    line-height: 36px;\n}\n}\nh5[data-v-3b19ce50] {\n  font-size: 16px;\n  line-height: 24px;\n}\nh6[data-v-3b19ce50] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.text-bold[data-v-3b19ce50] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-3b19ce50] {\n  text-transform: uppercase;\n}\n.text-center[data-v-3b19ce50] {\n  text-align: center;\n}\n.hide[data-v-3b19ce50] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-3b19ce50] {\n  position: relative;\n}\n.button[data-v-3b19ce50] {\n  background-color: #fff;\n  border: 0.1rem solid #ed1c24;\n  border-radius: 0.2rem;\n  color: #ed1c24;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n}\n.button[data-v-3b19ce50]:hover {\n  background: #ed1c24;\n  color: #fff;\n}\n.container-layout[data-v-3b19ce50] {\n  margin: 0 auto;\n  max-width: 72.5rem;\n  width: 100%;\n}\n.container-layout.is-medium[data-v-3b19ce50] {\n  max-width: 60rem;\n}\n.container-layout.is-small[data-v-3b19ce50] {\n  max-width: 47.5rem;\n}\n.container-layout.is-smaller[data-v-3b19ce50] {\n  max-width: 33.75rem;\n}\n.container-layout.is-tiny[data-v-3b19ce50] {\n  max-width: 28.75rem;\n}\n.content[data-v-3b19ce50] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n.content h2[data-v-3b19ce50] {\n  margin-bottom: 2rem;\n}", "",{"version":3,"sources":["webpack://./resources/scss/global-resets.scss","webpack://./resources/js/pages/ChooseLanguage.vue","webpack://./resources/scss/fonts.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss","webpack://./resources/scss/mixins.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;ACDF;ADIA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;ACDF;ADIA;;EAEE,uBAAA;ACDF;ADIA;;;;;EAKE,cAAA;ACDF;ADIA;EACE,cAAA;ACDF;ADIA;;EAEE,gBAAA;ACDF;ADIA;;EAEE,YAAA;ACDF;ADIA;;;;EAIE,WAAA;EACA,aAAA;ACDF;ADIA;EACE,yBAAA;EACA,iBAAA;ACDF;ADIA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;ACDF;AC/GA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ADiHJ;AC7GA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;AD8GJ;AC1GA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;AD2GJ;ACvGA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ADwGJ;AE5IA,WAAA;AAWA,YAAA;ACTI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AG3JI;EACE,yBAAA;AH6JN;AGtJI;EACE,oCAAA;AHyJN;AG1JI;EACE,iCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AGnKI;EACE,oCAAA;AHqKN;AGtKI;EACE,oCAAA;AHwKN;AGnKA;EACE,yBDRW;AF8Kb;AGnKA;EACE,cAAA;AHsKF;AGpKE;EACE,cDnBM;AFyLV;AGlKA;EACE,cDxBQ;ECyBR,kBAAA;AHqKF;AGlKA;EACE,cAAA;EACA,0BAAA;AHqKF;AGlKA;;;;;;EAME,oCAAA;AHqKF;AGlKA;EACE,eAAA;EACA,iBAAA;AHqKF;AIhNI;ADyCJ;IAII,eAAA;IACA,oBAAA;AHuKF;AACF;AGpKA;EACE,eAAA;EACA,iBAAA;AHuKF;AI3NI;ADkDJ;IAII,eAAA;IACA,iBAAA;AHyKF;AACF;AGtKA;EACE,eAAA;EACA,iBAAA;AHyKF;AItOI;AD2DJ;IAII,eAAA;IACA,iBAAA;AH2KF;AACF;AGxKA;EACE,eAAA;EACA,iBAAA;AH2KF;AIjPI;ADoEJ;IAII,eAAA;IACA,iBAAA;AH6KF;AACF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AGzKA;EACE,wBAAA;AH4KF;AGzKA;EACE,yBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,UAAA;EACA,sBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,sBDlHM;ECmHN,4BAAA;EACA,qBAAA;EACA,cDlHQ;ECmHR,eAAA;EACA,oBAAA;EACA,qBAAA;AH4KF;AG1KE;EACE,mBDxHM;ECyHN,WD5HI;AFwSR;AGxKA;EACE,cAAA;EACA,kBAAA;EACA,WAAA;AH2KF;AGzKE;EACE,gBAAA;AH2KJ;AGxKE;EACE,kBAAA;AH0KJ;AGvKE;EACE,mBAAA;AHyKJ;AGtKE;EACE,mBAAA;AHwKJ;AApTA;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;AAuTF;AArTE;EACE,mBAAA;AAuTJ","sourcesContent":["// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","@import '../../scss/global-resets';\n@import '../../scss/fonts';\n@import '../../scss/functions';\n@import '../../scss/variables';\n@import '../../scss/mixins';\n@import '../../scss/global-styles';\n\n\n.content {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    margin-bottom: 2rem;\n  }\n}\n","@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n$washed-red: #d59c9e;\n$night-blue: #323975;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light,\n  'night-blue': $night-blue,\n);\n\n// Fonts Weight\n$weight-light: 300;\n$weight-regular: 400;\n$weight-medium: 500;\n$weight-bold: 700;\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\nhtml {\n  background-color: $night-blue;\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\n\nh1 {\n  font-size: 48px;\n  line-height: 53px;\n  @include mq('min-desktop') {\n    font-size: 96px;\n    line-height: 106.8px;\n  }\n}\n\nh2 {\n  font-size: 30px;\n  line-height: 35px;\n  @include mq('min-desktop') {\n    font-size: 48px;\n    line-height: 53px;\n  }\n}\n\nh3 {\n  font-size: 28px;\n  line-height: 40px;\n  @include mq('min-desktop') {\n    font-size: 36px;\n    line-height: 52px;\n  }\n}\n\nh4 {\n  font-size: 20px;\n  line-height: 25px;\n  @include mq('min-desktop') {\n    font-size: 24px;\n    line-height: 36px;\n  }\n}\n\nh5 {\n  font-size: 16px;\n  line-height: 24px;\n}\n\nh6 {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n\n.button {\n  background-color: $white;\n  border: 0.1rem solid $primary;\n  border-radius: 0.2rem;\n  color: $primary;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n\n  &:hover {\n    background: $primary;\n    color: $white;\n  }\n}\n\n.container-layout {\n  margin: 0 auto;\n  max-width: rem(1160);\n  width: 100%;\n\n  &.is-medium {\n    max-width: rem(960);\n  }\n\n  &.is-small {\n    max-width: rem(760);\n  }\n\n  &.is-smaller {\n    max-width: rem(540);\n  }\n\n  &.is-tiny {\n    max-width: rem(460);\n  }\n}\n","@use 'sass:math';\n\n@mixin mq($breakpoint-name) {\n  $breakpoint-name: unquote($breakpoint-name);\n  @if map-has-key($breakpoints, $breakpoint-name) {\n    $query: map-get($breakpoints, $breakpoint-name);\n    @media all and #{$query} {\n      @content;\n    }\n  } @else {\n    @warn '#{$mq-name} is not a value defined in the 'breakpoints' map.';\n  }\n}\n\n// BACKGROUND GRADIENT\n// https://robots.thoughtbot.com/controlling-color-with-sass-color-functions\n// https://glennmccomb.com/articles/creating-smooth-sequential-animations-with-sass/\n@mixin bg-gradient($directionTo: top, $colorStart: black, $colorEnd: white , $upTo: 100%) {\n  background: linear-gradient(to $directionTo, $colorStart 0%, $colorEnd $upTo);\n}\n\n@mixin pseudo($display: block, $pos: absolute, $content: '') {\n  content: $content;\n  display: $display;\n  position: $pos;\n}\n\n@mixin responsive-ratio($x, $y, $pseudo: true) {\n  $padding: unquote(math.div($y, $x) * 100 + '%');\n  @if $pseudo {\n    &:before {\n      @include pseudo($pos: relative);\n      padding-top: $padding;\n      width: 100%;\n    }\n  } @else {\n    > .ratio:first-child {\n      display: block;\n      padding-top: $padding;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/pages/ChooseLanguage.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue?vue&type=script&setup=true&lang=ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_template_id_77406cec_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_template_id_77406cec_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=template&id=77406cec&scoped=true&ts=true");


/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_template_id_3b19ce50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_template_id_3b19ce50_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=template&id=3b19ce50&scoped=true&ts=true");


/***/ }),

/***/ "./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LanguageCard_vue_vue_type_style_index_0_id_77406cec_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Card/LanguageCard.vue?vue&type=style&index=0&id=77406cec&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChooseLanguage_vue_vue_type_style_index_0_id_3b19ce50_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/ChooseLanguage.vue?vue&type=style&index=0&id=3b19ce50&lang=scss&scoped=true");


/***/ })

}]);
//# sourceMappingURL=resources_js_pages_ChooseLanguage_vue.js.map