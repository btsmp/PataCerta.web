"use strict";
(self["webpackChunkpet_adoption_plataform_web"] = self["webpackChunkpet_adoption_plataform_web"] || []).push([["stories-Header-stories"],{

/***/ "./src/stories/Header.stories.ts":
/*!***************************************!*\
  !*** ./src/stories/Header.stories.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggedIn: () => (/* binding */ LoggedIn),
/* harmony export */   LoggedOut: () => (/* binding */ LoggedOut),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/test */ "./node_modules/@storybook/test/dist/index.mjs");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/stories/Header.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const meta = {
  title: "Example/Header",
  component: _Header__WEBPACK_IMPORTED_MODULE_1__.Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen"
  },
  args: {
    onLogin: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
    onLogout: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)(),
    onCreateAccount: (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe"
    }
  }
};
const LoggedOut = {};
;
const __namedExportsOrder = ["LoggedIn", "LoggedOut"];
LoggedIn.parameters = {
  ...LoggedIn.parameters,
  docs: {
    ...LoggedIn.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    user: {\n      name: 'Jane Doe'\n    }\n  }\n}",
      ...LoggedIn.parameters?.docs?.source
    }
  }
};
LoggedOut.parameters = {
  ...LoggedOut.parameters,
  docs: {
    ...LoggedOut.parameters?.docs,
    source: {
      originalSource: "{}",
      ...LoggedOut.parameters?.docs?.source
    }
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=stories-Header-stories.iframe.bundle.js.map