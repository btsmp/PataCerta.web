"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-LoadingSpinner-LoadingSpinner-stories",{

/***/ "./src/components/common/LoadingSpinner/LoadingSpinner.stories.ts":
/*!************************************************************************!*\
  !*** ./src/components/common/LoadingSpinner/LoadingSpinner.stories.ts ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   ExtraSmall: () => (/* binding */ ExtraSmall),
/* harmony export */   Large: () => (/* binding */ Large),
/* harmony export */   Medium: () => (/* binding */ Medium),
/* harmony export */   Small: () => (/* binding */ Small),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/components/common/LoadingSpinner/LoadingSpinner.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const meta = {
  title: "Components/LoadingSpinner",
  component: _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinner,
  argTypes: {
    size: {
      control: {
        type: "radio"
      },
      options: ["xs", "sm", "md", "lg"]
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const Default = {
  args: {
    size: "md"
  }
};
const ExtraSmall = {
  args: {
    size: "xs"
  }
};
const Small = {
  args: {
    size: "sm"
  }
};
const Medium = {
  args: {
    size: "md"
  }
};
const Large = {
  args: {
    size: "lg"
  }
};
;
const __namedExportsOrder = ["Default", "ExtraSmall", "Small", "Medium", "Large"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md'\n  }\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
ExtraSmall.parameters = {
  ...ExtraSmall.parameters,
  docs: {
    ...ExtraSmall.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'xs'\n  }\n}",
      ...ExtraSmall.parameters?.docs?.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...Small.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm'\n  }\n}",
      ...Small.parameters?.docs?.source
    }
  }
};
Medium.parameters = {
  ...Medium.parameters,
  docs: {
    ...Medium.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md'\n  }\n}",
      ...Medium.parameters?.docs?.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...Large.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg'\n  }\n}",
      ...Large.parameters?.docs?.source
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

/***/ "./src/components/common/LoadingSpinner/LoadingSpinner.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/common/LoadingSpinner/LoadingSpinner.tsx ***!
  \*****************************************************************/
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
        className: `loading loading-spinner ${sizeClass}`
    }, void 0, false, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/LoadingSpinner/LoadingSpinner.tsx",
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
//# sourceMappingURL=components-common-LoadingSpinner-LoadingSpinner-stories.f6bf1169ae1d11466222.hot-update.js.map