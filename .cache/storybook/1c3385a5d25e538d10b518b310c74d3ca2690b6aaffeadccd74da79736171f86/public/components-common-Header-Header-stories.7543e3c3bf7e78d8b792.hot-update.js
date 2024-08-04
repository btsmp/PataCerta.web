"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-Header-Header-stories",{

/***/ "./src/components/common/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/Header/Header.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _barrel_optimize_names_FaPaw_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FaPaw!=!react-icons/fa */ "__barrel_optimize__?names=FaPaw!=!./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var _LogoPataCerta_LogoPataCerta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LogoPataCerta/LogoPataCerta */ "./src/components/common/LogoPataCerta/LogoPataCerta.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




function Header({ logo = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaPaw_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPaw, {}, void 0, false, {
    fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
    lineNumber: 23,
    columnNumber: 10
}, this), title = "PataCerta", links, buttons }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        className: "flex flex-col md:flex-row items-center justify-between px-10 py-4 bg-white shadow-sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoPataCerta_LogoPataCerta__WEBPACK_IMPORTED_MODULE_1__.LogoPataCerta, {
                logo: logo,
                title: title
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                className: "flex gap-3 mt-2 md:mt-0",
                children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: link.href,
                        className: "link link-hover",
                        children: link.text
                    }, index, false, {
                        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "space-x-2 mt-2 md:mt-0",
                children: buttons.map((button, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        className: `btn btn-sm ${button.variant === "primary" ? "btn-primary" : "btn-neutral"}`,
                        onClick: button.onClick,
                        "aria-label": button.text,
                        children: button.text
                    }, index, false, {
                        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Header/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Header;
Header.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Header",
    "props": {
        "logo": {
            "required": false,
            "tsType": {
                "name": "ReactReactNode",
                "raw": "React.ReactNode"
            },
            "description": "",
            "defaultValue": {
                "value": "<FaPaw />",
                "computed": false
            }
        },
        "title": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": "",
            "defaultValue": {
                "value": "'PataCerta'",
                "computed": false
            }
        },
        "links": {
            "required": true,
            "tsType": {
                "name": "Array",
                "elements": [
                    {
                        "name": "signature",
                        "type": "object",
                        "raw": "{\n  text: string\n  href: string\n}",
                        "signature": {
                            "properties": [
                                {
                                    "key": "text",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "href",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                }
                            ]
                        }
                    }
                ],
                "raw": "Link[]"
            },
            "description": ""
        },
        "buttons": {
            "required": true,
            "tsType": {
                "name": "Array",
                "elements": [
                    {
                        "name": "signature",
                        "type": "object",
                        "raw": "{\n  text: string\n  onClick: () => void\n  variant: 'primary' | 'neutral'\n}",
                        "signature": {
                            "properties": [
                                {
                                    "key": "text",
                                    "value": {
                                        "name": "string",
                                        "required": true
                                    }
                                },
                                {
                                    "key": "onClick",
                                    "value": {
                                        "name": "signature",
                                        "type": "function",
                                        "raw": "() => void",
                                        "signature": {
                                            "arguments": [],
                                            "return": {
                                                "name": "void"
                                            }
                                        },
                                        "required": true
                                    }
                                },
                                {
                                    "key": "variant",
                                    "value": {
                                        "name": "union",
                                        "raw": "'primary' | 'neutral'",
                                        "elements": [
                                            {
                                                "name": "literal",
                                                "value": "'primary'"
                                            },
                                            {
                                                "name": "literal",
                                                "value": "'neutral'"
                                            }
                                        ],
                                        "required": true
                                    }
                                }
                            ]
                        }
                    }
                ],
                "raw": "Button[]"
            },
            "description": ""
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Header");


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
//# sourceMappingURL=components-common-Header-Header-stories.7543e3c3bf7e78d8b792.hot-update.js.map