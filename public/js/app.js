(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

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
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _composables_useLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/composables/useLanguage */ "./resources/js/composables/useLanguage.ts");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Navigation',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();

    var _useLanguage = (0,_composables_useLanguage__WEBPACK_IMPORTED_MODULE_2__.useLanguage)(),
        setLanguage = _useLanguage.setLanguage,
        languageIsSet = _useLanguage.languageIsSet;

    var __returned__ = {
      setLanguage: setLanguage,
      languageIsSet: languageIsSet,
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


 // setInterval(renderSnowflake, 1000);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'Default',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var vnode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('svg', {
      "class": 'snowflake-svg',
      dataIcon: 'snowflake',
      dataPrefix: 'fas',
      role: 'img',
      ariaHidden: 'true',
      focusable: 'false',
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 512 512'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('path', {
      "class": '',
      fill: 'currentColor',
      d: 'M475.6 384.1C469.7 394.3 458.9 400 447.9 400c-5.488 0-11.04-1.406-16.13-4.375l-25.09-14.64l5.379 20.29c3.393 12.81-4.256 25.97-17.08 29.34c-2.064 .5625-4.129 .8125-6.164 .8125c-10.63 0-20.36-7.094-23.21-17.84l-17.74-66.92L288 311.7l.0002 70.5l48.38 48.88c9.338 9.438 9.244 24.62-.1875 33.94C331.5 469.7 325.4 472 319.3 472c-6.193 0-12.39-2.375-17.08-7.125l-14.22-14.37L288 480c0 17.69-14.34 32-32.03 32s-32.03-14.31-32.03-32l-.0002-29.5l-14.22 14.37c-9.322 9.438-24.53 9.5-33.97 .1875c-9.432-9.312-9.525-24.5-.1875-33.94l48.38-48.88L223.1 311.7l-59.87 34.93l-17.74 66.92c-2.848 10.75-12.58 17.84-23.21 17.84c-2.035 0-4.1-.25-6.164-.8125c-12.82-3.375-20.47-16.53-17.08-29.34l5.379-20.29l-25.09 14.64C75.11 398.6 69.56 400 64.07 400c-11.01 0-21.74-5.688-27.69-15.88c-8.932-15.25-3.785-34.84 11.5-43.75l25.96-15.15l-20.33-5.508C40.7 316.3 33.15 303.1 36.62 290.3S53.23 270 66.09 273.4L132 291.3L192.5 256L132 220.7L66.09 238.6c-2.111 .5625-4.225 .8438-6.305 .8438c-10.57 0-20.27-7.031-23.16-17.72C33.15 208.9 40.7 195.8 53.51 192.3l20.33-5.508L47.88 171.6c-15.28-8.906-20.43-28.5-11.5-43.75c8.885-15.28 28.5-20.44 43.81-11.5l25.09 14.64L99.9 110.7C96.51 97.91 104.2 84.75 116.1 81.38C129.9 77.91 142.1 85.63 146.4 98.41l17.74 66.92L223.1 200.3l-.0002-70.5L175.6 80.88C166.3 71.44 166.3 56.25 175.8 46.94C185.2 37.59 200.4 37.72 209.8 47.13l14.22 14.37L223.1 32c0-17.69 14.34-32 32.03-32s32.03 14.31 32.03 32l.0002 29.5l14.22-14.37c9.307-9.406 24.51-9.531 33.97-.1875c9.432 9.312 9.525 24.5 .1875 33.94l-48.38 48.88L288 200.3l59.87-34.93l17.74-66.92c3.395-12.78 16.56-20.5 29.38-17.03c12.82 3.375 20.47 16.53 17.08 29.34l-5.379 20.29l25.09-14.64c15.28-8.906 34.91-3.75 43.81 11.5c8.932 15.25 3.785 34.84-11.5 43.75l-25.96 15.15l20.33 5.508c12.81 3.469 20.37 16.66 16.89 29.44c-2.895 10.69-12.59 17.72-23.16 17.72c-2.08 0-4.193-.2813-6.305-.8438L379.1 220.7L319.5 256l60.46 35.28l65.95-17.87C458.8 270 471.9 277.5 475.4 290.3c3.473 12.78-4.082 25.97-16.89 29.44l-20.33 5.508l25.96 15.15C479.4 349.3 484.5 368.9 475.6 384.1z'
    })]);

    function handleFlakes() {
      var flakes = document.getElementsByClassName('snowflake');
      Array.from(flakes).forEach(function (flake) {
        // eslint-disable-next-line no-param-reassign
        flake.style.left = "".concat(Math.random() * window.innerWidth, "px"); // eslint-disable-next-line no-param-reassign

        flake.style.animationDuration = "".concat(Math.random() * 15 + 5, "s"); // eslint-disable-next-line no-param-reassign

        flake.style.opacity = "".concat(Math.random()); // eslint-disable-next-line no-param-reassign

        flake.style.width = "".concat(Math.random() * 25 + 10, "px"); // eslint-disable-next-line no-param-reassign

        flake.style.height = "".concat(Math.random() * 25 + 10, "px");
        setTimeout(function () {
          flake.remove();
        }, 20000);
      });
    }

    var flakes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);

    function addFlake() {
      flakes.value += 1;
    }

    setInterval(addFlake, 800);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(flakes, handleFlakes);
    var __returned__ = {
      vnode: vnode,
      handleFlakes: handleFlakes,
      flakes: flakes,
      addFlake: addFlake,
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

var _hoisted_1 = {
  "class": "container-layout"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "Logo", -1
  /* HOISTED */
  );
});

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Chose language ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, $setup.languageIsSet ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Link"], {
    key: 0,
    as: "button",
    type: "button",
    "class": "button",
    href: "/",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.setLanguage(false, 'en');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6a25d30d"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

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

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "foot"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <AppFooter /> ")], -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.flakes, function (f) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      id: "snow",
      key: f,
      "class": "snowflake"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["vnode"])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AppNavbar"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, undefined, true)])]), _hoisted_5]);
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var languageIsSet = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
function useLanguage() {
  var defaultLocale = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.value.localization.defaultLocale;
  });
  var locale = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.value.localization.locale;
  });
  var locales = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.value.localization.locales;
  });
  var translations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.usePage)().props.value.localization.translations;
  });
  var inactiveLocales = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
    return locales.value.filter(function (l) {
      return l.code !== locale.value.code;
    });
  });

  function replaceParams(translation) {
    var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var trans = translation;
    Object.keys(replace).forEach(function (replaceKey) {
      trans = trans.replace(":".concat(replaceKey), replace[replaceKey]);
    });
    return trans;
  }

  function extractChoiceLine(segment, number) {
    var matches = segment.match(/^[{[]([^[\]{}]*)[}\]]([\s\S]*)/);

    if (!Array.isArray(matches) || matches.length !== 3) {
      return null;
    }

    var condition = matches[1];
    var value = matches[2].trim();

    if (condition.includes(',')) {
      var _condition$split = condition.split(','),
          _condition$split2 = _slicedToArray(_condition$split, 2),
          from = _condition$split2[0],
          to = _condition$split2[1];

      if (to === '*' && number >= parseInt(from, 10)) {
        return value;
      }

      if (from === '*' && number <= parseInt(to, 10)) {
        return value;
      }

      if (number >= parseInt(from, 10) && number <= parseInt(to, 10)) {
        return value;
      }
    }

    return parseInt(condition, 10) === number ? value : null;
  }

  function warn(key) {
    if (locale.value.code !== defaultLocale.value) {
      // eslint-disable-next-line no-console
      console.warn("Translation not found for key [\"".concat(key, "\"] in [").concat(locale.value.code, ".json]."));
    }
  }
  /**
   * Translate the given message.
   */


  function t(key) {
    var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var translation = translations.value[key];

    if (!translation) {
      warn(key);
      translation = key;
    }

    return replaceParams(translation, replace);
  }
  /**
   * Translate the given message based on a count.
   */


  function tc(key, number) {
    var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var translation = translations.value[key];

    if (!translation) {
      warn(key);
      translation = key;
    }

    var segments = translation.split('|');
    var value = null;
    segments.every(function (segment) {
      value = extractChoiceLine(segment, number);
      return !value;
    });
    return replaceParams(value || translation, _objectSpread(_objectSpread({}, replace), {}, {
      count: number.toString()
    }));
  }
  /**
   * Set app locale to provided locale code.
   */


  function setLanguage(newVal, lang) {
    languageIsSet.value = newVal;
    document.documentElement.setAttribute('lang', lang);
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
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-74ab25cb],\n*[data-v-74ab25cb]:before,\n*[data-v-74ab25cb]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-74ab25cb],\nbody[data-v-74ab25cb],\ndiv[data-v-74ab25cb],\nspan[data-v-74ab25cb],\nobject[data-v-74ab25cb],\niframe[data-v-74ab25cb],\nfigure[data-v-74ab25cb],\nh1[data-v-74ab25cb],\nh2[data-v-74ab25cb],\nh3[data-v-74ab25cb],\nh4[data-v-74ab25cb],\nh5[data-v-74ab25cb],\nh6[data-v-74ab25cb],\np[data-v-74ab25cb],\nblockquote[data-v-74ab25cb],\npre[data-v-74ab25cb],\na[data-v-74ab25cb],\ncode[data-v-74ab25cb],\nem[data-v-74ab25cb],\nimg[data-v-74ab25cb],\nsmall[data-v-74ab25cb],\nstrike[data-v-74ab25cb],\nstrong[data-v-74ab25cb],\nsub[data-v-74ab25cb],\nsup[data-v-74ab25cb],\ntt[data-v-74ab25cb],\nb[data-v-74ab25cb],\nu[data-v-74ab25cb],\ni[data-v-74ab25cb],\nol[data-v-74ab25cb],\nul[data-v-74ab25cb],\nli[data-v-74ab25cb],\nfieldset[data-v-74ab25cb],\nform[data-v-74ab25cb],\nlabel[data-v-74ab25cb],\ntable[data-v-74ab25cb],\ncaption[data-v-74ab25cb],\ntbody[data-v-74ab25cb],\ntfoot[data-v-74ab25cb],\nthead[data-v-74ab25cb],\ntr[data-v-74ab25cb],\nth[data-v-74ab25cb],\ntd[data-v-74ab25cb],\nmain[data-v-74ab25cb],\ncanvas[data-v-74ab25cb],\nembed[data-v-74ab25cb],\nfooter[data-v-74ab25cb],\nheader[data-v-74ab25cb],\nnav[data-v-74ab25cb],\nsection[data-v-74ab25cb],\nvideo[data-v-74ab25cb] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-74ab25cb],\nbody[data-v-74ab25cb] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-74ab25cb],\nheader[data-v-74ab25cb],\nnav[data-v-74ab25cb],\nsection[data-v-74ab25cb],\nmain[data-v-74ab25cb] {\n  display: block;\n}\nbody[data-v-74ab25cb] {\n  line-height: 1;\n}\nol[data-v-74ab25cb],\nul[data-v-74ab25cb] {\n  list-style: none;\n}\nblockquote[data-v-74ab25cb],\nq[data-v-74ab25cb] {\n  quotes: none;\n}\nblockquote[data-v-74ab25cb]:before,\nblockquote[data-v-74ab25cb]:after,\nq[data-v-74ab25cb]:before,\nq[data-v-74ab25cb]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-74ab25cb] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-74ab25cb] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-74ab25cb] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-74ab25cb] {\n  color: #fff !important;\n}\n.text-grey[data-v-74ab25cb] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-74ab25cb] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-74ab25cb] {\n  color: #f8f8f8 !important;\n}\n.text-night-blue[data-v-74ab25cb] {\n  color: #323975 !important;\n}\n.bg-black[data-v-74ab25cb] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-74ab25cb] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-74ab25cb] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-74ab25cb] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-74ab25cb] {\n  background-color: #f8f8f8 !important;\n}\n.bg-night-blue[data-v-74ab25cb] {\n  background-color: #323975 !important;\n}\nhtml[data-v-74ab25cb] {\n  background-color: #323975;\n}\na[data-v-74ab25cb] {\n  color: inherit;\n}\na[data-v-74ab25cb]:hover {\n  color: #ed1c24;\n}\nem[data-v-74ab25cb] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-74ab25cb] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\nh1[data-v-74ab25cb],\nh2[data-v-74ab25cb],\nh3[data-v-74ab25cb],\nh4[data-v-74ab25cb],\nh5[data-v-74ab25cb],\nh6[data-v-74ab25cb] {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\nh1[data-v-74ab25cb] {\n  font-size: 48px;\n  line-height: 53px;\n}\n@media all and (min-width:1024px) {\nh1[data-v-74ab25cb] {\n    font-size: 96px;\n    line-height: 106.8px;\n}\n}\nh2[data-v-74ab25cb] {\n  font-size: 30px;\n  line-height: 35px;\n}\n@media all and (min-width:1024px) {\nh2[data-v-74ab25cb] {\n    font-size: 48px;\n    line-height: 53px;\n}\n}\nh3[data-v-74ab25cb] {\n  font-size: 28px;\n  line-height: 40px;\n}\n@media all and (min-width:1024px) {\nh3[data-v-74ab25cb] {\n    font-size: 36px;\n    line-height: 52px;\n}\n}\nh4[data-v-74ab25cb] {\n  font-size: 20px;\n  line-height: 25px;\n}\n@media all and (min-width:1024px) {\nh4[data-v-74ab25cb] {\n    font-size: 24px;\n    line-height: 36px;\n}\n}\nh5[data-v-74ab25cb] {\n  font-size: 16px;\n  line-height: 24px;\n}\nh6[data-v-74ab25cb] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.text-bold[data-v-74ab25cb] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-74ab25cb] {\n  text-transform: uppercase;\n}\n.text-center[data-v-74ab25cb] {\n  text-align: center;\n}\n.hide[data-v-74ab25cb] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-74ab25cb] {\n  position: relative;\n}\n.button[data-v-74ab25cb] {\n  background-color: #fff;\n  border: 0.1rem solid #ed1c24;\n  border-radius: 0.2rem;\n  color: #ed1c24;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n}\n.button[data-v-74ab25cb]:hover {\n  background: #ed1c24;\n  color: #fff;\n}\n.container-layout[data-v-74ab25cb] {\n  margin: 0 auto;\n  max-width: 72.5rem;\n  width: 100%;\n}\n.container-layout.is-medium[data-v-74ab25cb] {\n  max-width: 60rem;\n}\n.container-layout.is-small[data-v-74ab25cb] {\n  max-width: 47.5rem;\n}\n.container-layout.is-smaller[data-v-74ab25cb] {\n  max-width: 33.75rem;\n}\n.container-layout.is-tiny[data-v-74ab25cb] {\n  max-width: 28.75rem;\n}\nnav[data-v-74ab25cb] {\n  background-color: #f8f8f8;\n  display: flex;\n  height: 3rem;\n}\n.container-layout[data-v-74ab25cb] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./resources/scss/global-resets.scss","webpack://./resources/js/components/Nav/Navigation.vue","webpack://./resources/scss/fonts.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss","webpack://./resources/scss/mixins.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;ACDF;ADIA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;ACDF;ADIA;;EAEE,uBAAA;ACDF;ADIA;;;;;EAKE,cAAA;ACDF;ADIA;EACE,cAAA;ACDF;ADIA;;EAEE,gBAAA;ACDF;ADIA;;EAEE,YAAA;ACDF;ADIA;;;;EAIE,WAAA;EACA,aAAA;ACDF;ADIA;EACE,yBAAA;EACA,iBAAA;ACDF;ADIA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;ACDF;AC/GA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ADiHJ;AC7GA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;AD8GJ;AC1GA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;AD2GJ;ACvGA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ADwGJ;AE5IA,WAAA;AAWA,YAAA;ACTI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AG3JI;EACE,yBAAA;AH6JN;AGtJI;EACE,oCAAA;AHyJN;AG1JI;EACE,iCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AGnKI;EACE,oCAAA;AHqKN;AGtKI;EACE,oCAAA;AHwKN;AGnKA;EACE,yBDRW;AF8Kb;AGnKA;EACE,cAAA;AHsKF;AGpKE;EACE,cDnBM;AFyLV;AGlKA;EACE,cDxBQ;ECyBR,kBAAA;AHqKF;AGlKA;EACE,cAAA;EACA,0BAAA;AHqKF;AGlKA;;;;;;EAME,oCAAA;AHqKF;AGlKA;EACE,eAAA;EACA,iBAAA;AHqKF;AIhNI;ADyCJ;IAII,eAAA;IACA,oBAAA;AHuKF;AACF;AGpKA;EACE,eAAA;EACA,iBAAA;AHuKF;AI3NI;ADkDJ;IAII,eAAA;IACA,iBAAA;AHyKF;AACF;AGtKA;EACE,eAAA;EACA,iBAAA;AHyKF;AItOI;AD2DJ;IAII,eAAA;IACA,iBAAA;AH2KF;AACF;AGxKA;EACE,eAAA;EACA,iBAAA;AH2KF;AIjPI;ADoEJ;IAII,eAAA;IACA,iBAAA;AH6KF;AACF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AGzKA;EACE,wBAAA;AH4KF;AGzKA;EACE,yBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,UAAA;EACA,sBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,sBDlHM;ECmHN,4BAAA;EACA,qBAAA;EACA,cDlHQ;ECmHR,eAAA;EACA,oBAAA;EACA,qBAAA;AH4KF;AG1KE;EACE,mBDxHM;ECyHN,WD5HI;AFwSR;AGxKA;EACE,cAAA;EACA,kBAAA;EACA,WAAA;AH2KF;AGzKE;EACE,gBAAA;AH2KJ;AGxKE;EACE,kBAAA;AH0KJ;AGvKE;EACE,mBAAA;AHyKJ;AGtKE;EACE,mBAAA;AHwKJ;AApTA;EACE,yBENM;EFON,aAAA;EACA,YAAA;AAuTF;AApTA;EACE,mBAAA;EACA,aAAA;EACA,YAAA;EACA,8BAAA;EACA,WAAA;AAuTF","sourcesContent":["// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","@import '../../../scss/global-resets';\n@import '../../../scss/fonts';\n@import '../../../scss/functions';\n@import '../../../scss/variables';\n@import '../../../scss/mixins';\n@import '../../../scss/global-styles';\n\n\nnav {\n  background-color: $light;\n  display: flex;\n  height: 3rem;\n}\n\n.container-layout {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  width: 100%;\n}\n","@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n$washed-red: #d59c9e;\n$night-blue: #323975;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light,\n  'night-blue': $night-blue,\n);\n\n// Fonts Weight\n$weight-light: 300;\n$weight-regular: 400;\n$weight-medium: 500;\n$weight-bold: 700;\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\nhtml {\n  background-color: $night-blue;\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\n\nh1 {\n  font-size: 48px;\n  line-height: 53px;\n  @include mq('min-desktop') {\n    font-size: 96px;\n    line-height: 106.8px;\n  }\n}\n\nh2 {\n  font-size: 30px;\n  line-height: 35px;\n  @include mq('min-desktop') {\n    font-size: 48px;\n    line-height: 53px;\n  }\n}\n\nh3 {\n  font-size: 28px;\n  line-height: 40px;\n  @include mq('min-desktop') {\n    font-size: 36px;\n    line-height: 52px;\n  }\n}\n\nh4 {\n  font-size: 20px;\n  line-height: 25px;\n  @include mq('min-desktop') {\n    font-size: 24px;\n    line-height: 36px;\n  }\n}\n\nh5 {\n  font-size: 16px;\n  line-height: 24px;\n}\n\nh6 {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n\n.button {\n  background-color: $white;\n  border: 0.1rem solid $primary;\n  border-radius: 0.2rem;\n  color: $primary;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n\n  &:hover {\n    background: $primary;\n    color: $white;\n  }\n}\n\n.container-layout {\n  margin: 0 auto;\n  max-width: rem(1160);\n  width: 100%;\n\n  &.is-medium {\n    max-width: rem(960);\n  }\n\n  &.is-small {\n    max-width: rem(760);\n  }\n\n  &.is-smaller {\n    max-width: rem(540);\n  }\n\n  &.is-tiny {\n    max-width: rem(460);\n  }\n}\n","@use 'sass:math';\n\n@mixin mq($breakpoint-name) {\n  $breakpoint-name: unquote($breakpoint-name);\n  @if map-has-key($breakpoints, $breakpoint-name) {\n    $query: map-get($breakpoints, $breakpoint-name);\n    @media all and #{$query} {\n      @content;\n    }\n  } @else {\n    @warn '#{$mq-name} is not a value defined in the 'breakpoints' map.';\n  }\n}\n\n// BACKGROUND GRADIENT\n// https://robots.thoughtbot.com/controlling-color-with-sass-color-functions\n// https://glennmccomb.com/articles/creating-smooth-sequential-animations-with-sass/\n@mixin bg-gradient($directionTo: top, $colorStart: black, $colorEnd: white , $upTo: 100%) {\n  background: linear-gradient(to $directionTo, $colorStart 0%, $colorEnd $upTo);\n}\n\n@mixin pseudo($display: block, $pos: absolute, $content: '') {\n  content: $content;\n  display: $display;\n  position: $pos;\n}\n\n@mixin responsive-ratio($x, $y, $pseudo: true) {\n  $padding: unquote(math.div($y, $x) * 100 + '%');\n  @if $pseudo {\n    &:before {\n      @include pseudo($pos: relative);\n      padding-top: $padding;\n      width: 100%;\n    }\n  } @else {\n    > .ratio:first-child {\n      display: block;\n      padding-top: $padding;\n    }\n  }\n}\n\n// Medium mixin :\n// https://medium.com/@justinbrazeau/10-useful-sass-mixins-for-automation-833cdee9d69b\n// Define vertical, horizontal, or both position\n@mixin centeriser($position) {\n  position: absolute;\n  @if $position == 'vertical' {\n    top: 50%;\n    transform: translate3d(0, -50%, 0);\n  }\n  @else if $position == 'horizontal' {\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n  }\n  @else if $position == 'both' {\n    left: 50%;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*[data-v-6a25d30d],\n*[data-v-6a25d30d]:before,\n*[data-v-6a25d30d]:after {\n  box-sizing: border-box;\n}\nhtml[data-v-6a25d30d],\nbody[data-v-6a25d30d],\ndiv[data-v-6a25d30d],\nspan[data-v-6a25d30d],\nobject[data-v-6a25d30d],\niframe[data-v-6a25d30d],\nfigure[data-v-6a25d30d],\nh1[data-v-6a25d30d],\nh2[data-v-6a25d30d],\nh3[data-v-6a25d30d],\nh4[data-v-6a25d30d],\nh5[data-v-6a25d30d],\nh6[data-v-6a25d30d],\np[data-v-6a25d30d],\nblockquote[data-v-6a25d30d],\npre[data-v-6a25d30d],\na[data-v-6a25d30d],\ncode[data-v-6a25d30d],\nem[data-v-6a25d30d],\nimg[data-v-6a25d30d],\nsmall[data-v-6a25d30d],\nstrike[data-v-6a25d30d],\nstrong[data-v-6a25d30d],\nsub[data-v-6a25d30d],\nsup[data-v-6a25d30d],\ntt[data-v-6a25d30d],\nb[data-v-6a25d30d],\nu[data-v-6a25d30d],\ni[data-v-6a25d30d],\nol[data-v-6a25d30d],\nul[data-v-6a25d30d],\nli[data-v-6a25d30d],\nfieldset[data-v-6a25d30d],\nform[data-v-6a25d30d],\nlabel[data-v-6a25d30d],\ntable[data-v-6a25d30d],\ncaption[data-v-6a25d30d],\ntbody[data-v-6a25d30d],\ntfoot[data-v-6a25d30d],\nthead[data-v-6a25d30d],\ntr[data-v-6a25d30d],\nth[data-v-6a25d30d],\ntd[data-v-6a25d30d],\nmain[data-v-6a25d30d],\ncanvas[data-v-6a25d30d],\nembed[data-v-6a25d30d],\nfooter[data-v-6a25d30d],\nheader[data-v-6a25d30d],\nnav[data-v-6a25d30d],\nsection[data-v-6a25d30d],\nvideo[data-v-6a25d30d] {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n  vertical-align: baseline;\n}\nhtml[data-v-6a25d30d],\nbody[data-v-6a25d30d] {\n  scroll-behavior: smooth;\n}\nfooter[data-v-6a25d30d],\nheader[data-v-6a25d30d],\nnav[data-v-6a25d30d],\nsection[data-v-6a25d30d],\nmain[data-v-6a25d30d] {\n  display: block;\n}\nbody[data-v-6a25d30d] {\n  line-height: 1;\n}\nol[data-v-6a25d30d],\nul[data-v-6a25d30d] {\n  list-style: none;\n}\nblockquote[data-v-6a25d30d],\nq[data-v-6a25d30d] {\n  quotes: none;\n}\nblockquote[data-v-6a25d30d]:before,\nblockquote[data-v-6a25d30d]:after,\nq[data-v-6a25d30d]:before,\nq[data-v-6a25d30d]:after {\n  content: \"\";\n  content: none;\n}\ntable[data-v-6a25d30d] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput[data-v-6a25d30d] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: font-path(\"DINPro-Light.woff2\") format(\"woff2\"), font-path(\"DINPro-Light.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro\";\n  font-style: normal;\n  font-weight: 400;\n  src: font-path(\"DINPro.woff2\") format(\"woff2\"), font-path(\"DINPro.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Medium\";\n  font-style: normal;\n  font-weight: 500;\n  src: font-path(\"DINPro-Medium.woff2\") format(\"woff2\"), font-path(\"DINPro-Medium.woff\") format(\"woff\");\n}\n@font-face {\n  font-display: swap;\n  font-family: \"DINPro-Bold\";\n  font-style: normal;\n  font-weight: 700;\n  src: font-path(\"DINPro-Bold.woff2\") format(\"woff2\"), font-path(\"DINPro-Bold.woff2\") format(\"woff\");\n}\n/* COLORS */\n/* OVERLAY */\n.text-black[data-v-6a25d30d] {\n  color: #1c1c1c !important;\n}\n.text-white[data-v-6a25d30d] {\n  color: #fff !important;\n}\n.text-grey[data-v-6a25d30d] {\n  color: #acacac !important;\n}\n.text-bs-red[data-v-6a25d30d] {\n  color: #ed1c24 !important;\n}\n.text-light[data-v-6a25d30d] {\n  color: #f8f8f8 !important;\n}\n.text-night-blue[data-v-6a25d30d] {\n  color: #323975 !important;\n}\n.bg-black[data-v-6a25d30d] {\n  background-color: #1c1c1c !important;\n}\n.bg-white[data-v-6a25d30d] {\n  background-color: #fff !important;\n}\n.bg-grey[data-v-6a25d30d] {\n  background-color: #acacac !important;\n}\n.bg-bs-red[data-v-6a25d30d] {\n  background-color: #ed1c24 !important;\n}\n.bg-light[data-v-6a25d30d] {\n  background-color: #f8f8f8 !important;\n}\n.bg-night-blue[data-v-6a25d30d] {\n  background-color: #323975 !important;\n}\nhtml[data-v-6a25d30d] {\n  background-color: #323975;\n}\na[data-v-6a25d30d] {\n  color: inherit;\n}\na[data-v-6a25d30d]:hover {\n  color: #ed1c24;\n}\nem[data-v-6a25d30d] {\n  color: #ed1c24;\n  font-style: normal;\n}\nstrong[data-v-6a25d30d] {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\nh1[data-v-6a25d30d],\nh2[data-v-6a25d30d],\nh3[data-v-6a25d30d],\nh4[data-v-6a25d30d],\nh5[data-v-6a25d30d],\nh6[data-v-6a25d30d] {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\nh1[data-v-6a25d30d] {\n  font-size: 48px;\n  line-height: 53px;\n}\n@media all and (min-width:1024px) {\nh1[data-v-6a25d30d] {\n    font-size: 96px;\n    line-height: 106.8px;\n}\n}\nh2[data-v-6a25d30d] {\n  font-size: 30px;\n  line-height: 35px;\n}\n@media all and (min-width:1024px) {\nh2[data-v-6a25d30d] {\n    font-size: 48px;\n    line-height: 53px;\n}\n}\nh3[data-v-6a25d30d] {\n  font-size: 28px;\n  line-height: 40px;\n}\n@media all and (min-width:1024px) {\nh3[data-v-6a25d30d] {\n    font-size: 36px;\n    line-height: 52px;\n}\n}\nh4[data-v-6a25d30d] {\n  font-size: 20px;\n  line-height: 25px;\n}\n@media all and (min-width:1024px) {\nh4[data-v-6a25d30d] {\n    font-size: 24px;\n    line-height: 36px;\n}\n}\nh5[data-v-6a25d30d] {\n  font-size: 16px;\n  line-height: 24px;\n}\nh6[data-v-6a25d30d] {\n  font-size: 14px;\n  line-height: 24px;\n}\n.text-bold[data-v-6a25d30d] {\n  font-family: DINPro-Bold;\n}\n.text-upper[data-v-6a25d30d] {\n  text-transform: uppercase;\n}\n.text-center[data-v-6a25d30d] {\n  text-align: center;\n}\n.hide[data-v-6a25d30d] {\n  opacity: 0;\n  transition: opacity 1s;\n}\n.relative[data-v-6a25d30d] {\n  position: relative;\n}\n.button[data-v-6a25d30d] {\n  background-color: #fff;\n  border: 0.1rem solid #ed1c24;\n  border-radius: 0.2rem;\n  color: #ed1c24;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n}\n.button[data-v-6a25d30d]:hover {\n  background: #ed1c24;\n  color: #fff;\n}\n.container-layout[data-v-6a25d30d] {\n  margin: 0 auto;\n  max-width: 72.5rem;\n  width: 100%;\n}\n.container-layout.is-medium[data-v-6a25d30d] {\n  max-width: 60rem;\n}\n.container-layout.is-small[data-v-6a25d30d] {\n  max-width: 47.5rem;\n}\n.container-layout.is-smaller[data-v-6a25d30d] {\n  max-width: 33.75rem;\n}\n.container-layout.is-tiny[data-v-6a25d30d] {\n  max-width: 28.75rem;\n}\n.snowflake[data-v-6a25d30d] {\n  -webkit-animation: fall-6a25d30d 20s linear forwards;\n          animation: fall-6a25d30d 20s linear forwards;\n  color: #fff;\n  /*content: '&#x2744;';*/\n  height: 1rem;\n  position: absolute;\n  top: -10rem;\n  width: 1rem;\n}\n@-webkit-keyframes fall-6a25d30d {\nto {\n    transform: translateY(100vh);\n}\n}\n@keyframes fall-6a25d30d {\nto {\n    transform: translateY(100vh);\n}\n}", "",{"version":3,"sources":["webpack://./resources/scss/global-resets.scss","webpack://./resources/js/layouts/Default.vue","webpack://./resources/scss/fonts.scss","webpack://./resources/scss/variables.scss","webpack://./resources/scss/global-styles.scss","webpack://./resources/scss/mixins.scss"],"names":[],"mappings":"AAEA;;;EAGE,sBAAA;ACDF;ADIA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmDE,SAAA;EACA,aAAA;EACA,eAAA;EACA,mCAAA;EACA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,8BAAA;KAAA,2BAAA;UAAA,sBAAA;EACA,wBAAA;ACDF;ADIA;;EAEE,uBAAA;ACDF;ADIA;;;;;EAKE,cAAA;ACDF;ADIA;EACE,cAAA;ACDF;ADIA;;EAEE,gBAAA;ACDF;ADIA;;EAEE,YAAA;ACDF;ADIA;;;;EAIE,WAAA;EACA,aAAA;ACDF;ADIA;EACE,yBAAA;EACA,iBAAA;ACDF;ADIA;EACE,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,gBAAA;ACDF;AC/GA;EACE,kBAAA;EACA,2BAAA;EACA,kBAAA;EACA,gBAAA;EACA,mGACE;ADiHJ;AC7GA;EACE,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,uFACE;AD8GJ;AC1GA;EACE,kBAAA;EACA,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,qGACE;AD2GJ;ACvGA;EACE,kBAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;EACA,kGACE;ADwGJ;AE5IA,WAAA;AAWA,YAAA;ACTI;EACE,yBAAA;AH8IN;AG/II;EACE,sBAAA;AHiJN;AGlJI;EACE,yBAAA;AHoJN;AGrJI;EACE,yBAAA;AHuJN;AGxJI;EACE,yBAAA;AH0JN;AG3JI;EACE,yBAAA;AH6JN;AGtJI;EACE,oCAAA;AHyJN;AG1JI;EACE,iCAAA;AH4JN;AG7JI;EACE,oCAAA;AH+JN;AGhKI;EACE,oCAAA;AHkKN;AGnKI;EACE,oCAAA;AHqKN;AGtKI;EACE,oCAAA;AHwKN;AGnKA;EACE,yBDRW;AF8Kb;AGnKA;EACE,cAAA;AHsKF;AGpKE;EACE,cDnBM;AFyLV;AGlKA;EACE,cDxBQ;ECyBR,kBAAA;AHqKF;AGlKA;EACE,cAAA;EACA,0BAAA;AHqKF;AGlKA;;;;;;EAME,oCAAA;AHqKF;AGlKA;EACE,eAAA;EACA,iBAAA;AHqKF;AIhNI;ADyCJ;IAII,eAAA;IACA,oBAAA;AHuKF;AACF;AGpKA;EACE,eAAA;EACA,iBAAA;AHuKF;AI3NI;ADkDJ;IAII,eAAA;IACA,iBAAA;AHyKF;AACF;AGtKA;EACE,eAAA;EACA,iBAAA;AHyKF;AItOI;AD2DJ;IAII,eAAA;IACA,iBAAA;AH2KF;AACF;AGxKA;EACE,eAAA;EACA,iBAAA;AH2KF;AIjPI;ADoEJ;IAII,eAAA;IACA,iBAAA;AH6KF;AACF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AG1KA;EACE,eAAA;EACA,iBAAA;AH6KF;AGzKA;EACE,wBAAA;AH4KF;AGzKA;EACE,yBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,UAAA;EACA,sBAAA;AH4KF;AGzKA;EACE,kBAAA;AH4KF;AGzKA;EACE,sBDlHM;ECmHN,4BAAA;EACA,qBAAA;EACA,cDlHQ;ECmHR,eAAA;EACA,oBAAA;EACA,qBAAA;AH4KF;AG1KE;EACE,mBDxHM;ECyHN,WD5HI;AFwSR;AGxKA;EACE,cAAA;EACA,kBAAA;EACA,WAAA;AH2KF;AGzKE;EACE,gBAAA;AH2KJ;AGxKE;EACE,kBAAA;AH0KJ;AGvKE;EACE,mBAAA;AHyKJ;AGtKE;EACE,mBAAA;AHwKJ;AApTA;EACE,oDAAA;UAAA,4CAAA;EACA,WERM;EFSN,uBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;AAuTF;AApTA;AACE;IACE,4BAAA;AAuTF;AACF;AA1TA;AACE;IACE,4BAAA;AAuTF;AACF","sourcesContent":["// RESETS\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\ncode,\nem,\nimg,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nb,\nu,\ni,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\nmain,\ncanvas,\nembed,\nfooter,\nheader,\nnav,\nsection,\nvideo {\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  text-rendering: optimizeLegibility;\n  text-size-adjust: none;\n  vertical-align: baseline;\n}\n\nhtml,\nbody {\n  scroll-behavior: smooth;\n}\n\nfooter,\nheader,\nnav,\nsection,\nmain {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  appearance: none;\n  border-radius: 0;\n}\n","@import '../../scss/global-resets';\n@import '../../scss/fonts';\n@import '../../scss/functions';\n@import '../../scss/variables';\n@import '../../scss/mixins';\n@import '../../scss/global-styles';\n\n\n.snowflake {\n  animation: fall 20s linear forwards;\n  color: $white;\n  /*content: '&#x2744;';*/\n  height: 1rem;\n  position: absolute;\n  top: -10rem;\n  width: 1rem;\n}\n\n@keyframes fall {\n  to {\n    transform: translateY(100vh);\n  }\n}\n","@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Light';\n  font-style: normal;\n  font-weight: 300;\n  src:\n    font-path('DINPro-Light.woff2') format('woff2'),\n    font-path('DINPro-Light.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro';\n  font-style: normal;\n  font-weight: 400;\n  src:\n    font-path('DINPro.woff2') format('woff2'),\n    font-path('DINPro.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Medium';\n  font-style: normal;\n  font-weight: 500;\n  src:\n    font-path('DINPro-Medium.woff2') format('woff2'),\n    font-path('DINPro-Medium.woff') format('woff');\n}\n\n@font-face {\n  font-display: swap;\n  font-family: 'DINPro-Bold';\n  font-style: normal;\n  font-weight: 700;\n  src:\n    font-path('DINPro-Bold.woff2') format('woff2'),\n    font-path('DINPro-Bold.woff2') format('woff');\n}\n","/* COLORS */\n$black: #1c1c1c;\n$white: #fff;\n$light: #f8f8f8;\n$grey: #acacac;\n$primary: #ed1c24;\n$error: #c8362e;\n$success: #519735;\n$washed-red: #d59c9e;\n$night-blue: #323975;\n\n/* OVERLAY */\n$overlay-black: rgba(0, 0, 0, 0.2);\n\n$text-colors: (\n  'black' : $black,\n  'white': $white,\n  'grey': $grey,\n  'bs-red': $primary,\n  'light': $light,\n  'night-blue': $night-blue,\n);\n\n// Fonts Weight\n$weight-light: 300;\n$weight-regular: 400;\n$weight-medium: 500;\n$weight-bold: 700;\n\n// Font sizes\n$size-1: rem(46);\n$size-2: rem(40);\n$size-3: rem(36);\n$size-4: rem(26);\n$size-5: rem(20);\n$size-6: rem(16);\n$size-7: rem(14);\n\n$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7;\n\n// Shadow, find more smooth shadow: https://s.muz.li/MWNjYTY2Yjk4\n$shadow: 0 0.9px 2.6px rgba(0, 0, 0, 0.02),\n  0 3.1px 5.1px rgba(0, 0, 0, 0.03),\n  0 14px 14px rgba(0, 0, 0, 0.05)\n;\n\n// Easing\n$easing-smooth: cubic-bezier(0.5, 0, 0, 1);\n\n// Transition\n$transition: 0.2s ease;\n$transition-smooth: 0.5s $easing-smooth;\n\n// MEDIA QUERIES\n$breakpoints: (\n  // FOR IE\n  ie: '(-ms-high-contrast: active), (-ms-high-contrast: none)',\n  max-hugescreen:'(max-width:1599px)', min-hugescreen:'(min-width:1600px)',\n  max-fullhd: '(max-width:1407px)', min-fullhd: '(min-width:1408px)',\n  max-widescreen: '(max-width:1215px)', min-widescreen: '(min-width:1216px)',\n  max-desktop: '(max-width:1023px)', min-desktop: '(min-width:1024px)',\n  max-mobile: '(max-width:768px)', min-mobile: '(min-width:769px)',\n  max-small-mobile: '(max-width:540px)', min-small-mobile: '(max-width:540px)',\n  max-tiny: '(max-width:370px)', min-tiny: '(max-width:370px)',\n) !default;\n\n",".text {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      color: $color !important;\n    }\n  }\n}\n\n.bg {\n  @each $name, $color in $text-colors {\n    &-#{$name} {\n      background-color: $color !important;\n    }\n  }\n}\n\nhtml {\n  background-color: $night-blue;\n}\n\na {\n  color: inherit;\n\n  &:hover {\n    color: $primary;\n  }\n}\n\nem {\n  color: $primary;\n  font-style: normal;\n}\n\nstrong {\n  color: inherit;\n  font-family: DINPro-Medium;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: 15px/1.5rem DINPro, sans-serif;\n}\n\nh1 {\n  font-size: 48px;\n  line-height: 53px;\n  @include mq('min-desktop') {\n    font-size: 96px;\n    line-height: 106.8px;\n  }\n}\n\nh2 {\n  font-size: 30px;\n  line-height: 35px;\n  @include mq('min-desktop') {\n    font-size: 48px;\n    line-height: 53px;\n  }\n}\n\nh3 {\n  font-size: 28px;\n  line-height: 40px;\n  @include mq('min-desktop') {\n    font-size: 36px;\n    line-height: 52px;\n  }\n}\n\nh4 {\n  font-size: 20px;\n  line-height: 25px;\n  @include mq('min-desktop') {\n    font-size: 24px;\n    line-height: 36px;\n  }\n}\n\nh5 {\n  font-size: 16px;\n  line-height: 24px;\n}\n\nh6 {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n\n.text-bold {\n  font-family: DINPro-Bold;\n}\n\n.text-upper {\n  text-transform: uppercase;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.hide {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.relative {\n  position: relative;\n}\n\n.button {\n  background-color: $white;\n  border: 0.1rem solid $primary;\n  border-radius: 0.2rem;\n  color: $primary;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n\n  &:hover {\n    background: $primary;\n    color: $white;\n  }\n}\n\n.container-layout {\n  margin: 0 auto;\n  max-width: rem(1160);\n  width: 100%;\n\n  &.is-medium {\n    max-width: rem(960);\n  }\n\n  &.is-small {\n    max-width: rem(760);\n  }\n\n  &.is-smaller {\n    max-width: rem(540);\n  }\n\n  &.is-tiny {\n    max-width: rem(460);\n  }\n}\n","@use 'sass:math';\n\n@mixin mq($breakpoint-name) {\n  $breakpoint-name: unquote($breakpoint-name);\n  @if map-has-key($breakpoints, $breakpoint-name) {\n    $query: map-get($breakpoints, $breakpoint-name);\n    @media all and #{$query} {\n      @content;\n    }\n  } @else {\n    @warn '#{$mq-name} is not a value defined in the 'breakpoints' map.';\n  }\n}\n\n// BACKGROUND GRADIENT\n// https://robots.thoughtbot.com/controlling-color-with-sass-color-functions\n// https://glennmccomb.com/articles/creating-smooth-sequential-animations-with-sass/\n@mixin bg-gradient($directionTo: top, $colorStart: black, $colorEnd: white , $upTo: 100%) {\n  background: linear-gradient(to $directionTo, $colorStart 0%, $colorEnd $upTo);\n}\n\n@mixin pseudo($display: block, $pos: absolute, $content: '') {\n  content: $content;\n  display: $display;\n  position: $pos;\n}\n\n@mixin responsive-ratio($x, $y, $pseudo: true) {\n  $padding: unquote(math.div($y, $x) * 100 + '%');\n  @if $pseudo {\n    &:before {\n      @include pseudo($pos: relative);\n      padding-top: $padding;\n      width: 100%;\n    }\n  } @else {\n    > .ratio:first-child {\n      display: block;\n      padding-top: $padding;\n    }\n  }\n}\n\n// Medium mixin :\n// https://medium.com/@justinbrazeau/10-useful-sass-mixins-for-automation-833cdee9d69b\n// Define vertical, horizontal, or both position\n@mixin centeriser($position) {\n  position: absolute;\n  @if $position == 'vertical' {\n    top: 50%;\n    transform: translate3d(0, -50%, 0);\n  }\n  @else if $position == 'horizontal' {\n    left: 50%;\n    transform: translate3d(-50%, 0, 0);\n  }\n  @else if $position == 'both' {\n    left: 50%;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_style_index_0_id_6a25d30d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_style_index_0_id_6a25d30d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_style_index_0_id_6a25d30d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Default_vue_vue_type_template_id_6a25d30d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true */ "./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true");
/* harmony import */ var _Default_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Default.vue?vue&type=script&setup=true&lang=ts */ "./resources/js/layouts/Default.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _Default_vue_vue_type_style_index_0_id_6a25d30d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true */ "./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true");
/* harmony import */ var _app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Default_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Default_vue_vue_type_template_id_6a25d30d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6a25d30d"],['__file',"resources/js/layouts/Default.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_template_id_6a25d30d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_template_id_6a25d30d_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=template&id=6a25d30d&scoped=true&ts=true");


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

/***/ "./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_13_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_13_use_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Default_vue_vue_type_style_index_0_id_6a25d30d_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-13.use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-13.use[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/layouts/Default.vue?vue&type=style&index=0&id=6a25d30d&lang=scss&scoped=true");


/***/ }),

/***/ "./resources/js/pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ChooseLanguage": [
		"./resources/js/pages/ChooseLanguage.vue",
		"resources_js_pages_ChooseLanguage_vue"
	],
	"./ChooseLanguage.vue": [
		"./resources/js/pages/ChooseLanguage.vue",
		"resources_js_pages_ChooseLanguage_vue"
	],
	"./CreateCard": [
		"./resources/js/pages/CreateCard.vue",
		"resources_js_pages_CreateCard_vue"
	],
	"./CreateCard.vue": [
		"./resources/js/pages/CreateCard.vue",
		"resources_js_pages_CreateCard_vue"
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
	return __webpack_require__.e(ids[1]).then(() => {
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