"use strict";
(self["webpackChunkpet_adoption_plataform_web"] = self["webpackChunkpet_adoption_plataform_web"] || []).push([["components-common-Modal-ModalSignupSignIn-stories"],{

/***/ "./src/components/common/Modal/ModalSignupSignIn.stories.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/common/Modal/ModalSignupSignIn.stories.tsx ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalSignupSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSignupSignIn */ "./src/components/common/Modal/ModalSignupSignIn.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// src/components/Modal.stories.tsx

const meta = {
  title: "Components/Modal/ModalSignupSignIn",
  component: _ModalSignupSignIn__WEBPACK_IMPORTED_MODULE_0__.ModalSignupSignIn
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
// Default story
const Default = {};
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
      ...Default.parameters?.docs?.source
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

/***/ }),

/***/ "./src/components/common/Modal/ModalSignupSignIn.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/Modal/ModalSignupSignIn.tsx ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalSignupSignIn: () => (/* binding */ ModalSignupSignIn)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();
"use client";

function ModalSignupSignIn({ children }) {
    _s();
    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    function openModal() {
        var _dialogRef_current;
        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.showModal();
    }
    function closeModal() {
        var _dialogRef_current;
        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.close();
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn",
                onClick: ()=>{
                    openModal();
                },
                children: "open modal"
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/ModalSignupSignIn.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dialog", {
                id: "modal",
                className: "modal",
                ref: dialogRef,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "modal-box",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            onClick: closeModal,
                            className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/ModalSignupSignIn.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/ModalSignupSignIn.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/ModalSignupSignIn.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ModalSignupSignIn, "PIKAI2iqVXWUNBzGqO4PRv0eqek=");
_c = ModalSignupSignIn;
ModalSignupSignIn.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "ModalSignupSignIn",
    "props": {
        "children": {
            "required": true,
            "tsType": {
                "name": "ReactNode"
            },
            "description": ""
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "ModalSignupSignIn");


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
//# sourceMappingURL=components-common-Modal-ModalSignupSignIn-stories.iframe.bundle.js.map