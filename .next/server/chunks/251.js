"use strict";
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);




const Paper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div({
  "width": "100%",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgb(38 38 38 / var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgb(255 255 255 / var(--tw-text-opacity))"
});

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div({
  "display": "flex",
  "height": "3rem",
  "maxWidth": "1280px",
  "flexDirection": "column",
  "backgroundSize": "cover",
  "lineHeight": "2.5rem"
});

function Footer() {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container, null, "Copyright \xA9 2022 Y&L solution"));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 5822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);




function Head() {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const handleChange = e => {
    if (ref.current.classList.contains('hidden')) {
      ref.current.classList.remove('hidden');
    } else {
      ref.current.classList.add('hidden');
    }
  };

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
    id: "header",
    className: "w-full z-30 top-0 py-1"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3 "
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
    htmlFor: "menu-toggle",
    className: "cursor-pointer md:hidden block order-2"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    className: "fill-current text-gray-900",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", null, "menu"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  }))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
    className: "hidden",
    type: "checkbox",
    id: "menu-toggle",
    onChange: handleChange
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "order-1 md:order-1"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-4xl ",
    href: "/"
  }, "Refresh")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ref: ref,
    className: "hidden md:flex md:items-center md:w-auto w-full order-2 md:order-2 ",
    id: "menu"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
    className: "md:flex items-center justify-between text-lg text-gray-700 pt-4 md:pt-0"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "inline-block w-full no-underline hover:text-white  hover:bg-slate-800 py-2 px-4",
    href: "/basic"
  }, "\u8425\u517B\u57FA\u7840")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "inline-block w-full no-underline hover:text-white  hover:bg-slate-800 py-2 px-4",
    href: "/plan"
  }, "\u5236\u5B9A\u51CF\u80A5\u8BA1\u5212")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "inline-block w-full no-underline hover:text-white  hover:bg-slate-800 py-2 px-4",
    href: "/about_us"
  }, "\u5173\u4E8E\u6211\u4EEC")))))));
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Head);

/***/ })

};
;