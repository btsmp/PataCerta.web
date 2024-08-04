"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-Modal-Modal-stories",{

/***/ "./src/components/common/Modal/Modal.tsx":
/*!***********************************************!*\
  !*** ./src/components/common/Modal/Modal.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();

function Modal({ isOpen, onClose, children, title }) {
    _s();
    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const dialog = dialogRef.current;
        if (dialog) {
            if (isOpen) {
                dialog.showModal();
            } else {
                dialog.close();
            }
        }
    }, [
        isOpen
    ]);
    // Fecha o modal ao clicar fora da caixa
    const handleBackdropClick = (e)=>{
        if (e.target === dialogRef.current) {
            onClose();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn",
                onClick: ()=>document.getElementById("my_modal_3").showModal(),
                children: "open modal"
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dialog", {
                id: "my_modal_3",
                className: "modal",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "modal-box",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                            method: "dialog",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                            className: "font-bold text-lg",
                            children: "Hello!"
                        }, void 0, false, {
                            fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            className: "py-4",
                            children: "Press ESC key or click on ✕ button to close"
                        }, void 0, false, {
                            fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Modal, "9PxoOcTjzEwd023cmhgaBdjzFyE=");
_c = Modal;
Modal.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Modal",
    "props": {
        "isOpen": {
            "required": true,
            "tsType": {
                "name": "boolean"
            },
            "description": ""
        },
        "onClose": {
            "required": true,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "() => void",
                "signature": {
                    "arguments": [],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
        "children": {
            "required": true,
            "tsType": {
                "name": "ReactReactNode",
                "raw": "React.ReactNode"
            },
            "description": ""
        },
        "title": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": ""
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Modal");


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
//# sourceMappingURL=components-common-Modal-Modal-stories.af2ee586dd18157850d5.hot-update.js.map