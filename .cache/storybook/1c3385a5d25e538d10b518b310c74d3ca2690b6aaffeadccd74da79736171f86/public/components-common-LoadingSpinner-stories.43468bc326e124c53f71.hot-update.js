"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-LoadingSpinner-stories",{

/***/ "./src/components/common/LoadingSpinner.tsx":
/*!**************************************************!*\
  !*** ./src/components/common/LoadingSpinner.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const sizeClasses = {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg"
};
function LoadingSpinner({ size = "md" }) {
    const sizeClass = sizeClasses[size] || sizeClasses.md;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: `loading loading-spinner bg-red-500 ${sizeClass}`
    }, void 0, false, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/LoadingSpinner.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
LoadingSpinner.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "LoadingSpinner",
    "props": {
        "size": {
            "required": false,
            "tsType": {
                "name": "union",
                "raw": "keyof typeof sizeClasses",
                "elements": [
                    {
                        "name": "literal",
                        "value": "xs"
                    },
                    {
                        "name": "literal",
                        "value": "sm"
                    },
                    {
                        "name": "literal",
                        "value": "md"
                    },
                    {
                        "name": "literal",
                        "value": "lg"
                    }
                ]
            },
            "description": "",
            "defaultValue": {
                "value": "'md'",
                "computed": false
            }
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "LoadingSpinner");


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

});
//# sourceMappingURL=components-common-LoadingSpinner-stories.43468bc326e124c53f71.hot-update.js.map