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
/* harmony import */ var _barrel_optimize_names_FaTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FaTimes!=!react-icons/fa */ "__barrel_optimize__?names=FaPaw!=!./node_modules/react-icons/fa/index.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();

 // Ícone de fechamento
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
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("dialog", {
        ref: dialogRef,
        className: "modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        onClick: handleBackdropClick,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-md w-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-gray-600 hover:text-gray-900",
                    "aria-label": "Fechar Modal",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTimes, {}, void 0, false, {
                        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    className: "font-bold text-lg mb-4",
                    children: title
                }, void 0, false, {
                    fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                    lineNumber: 47,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "py-4",
                    children: children
                }, void 0, false, {
                    fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
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
//# sourceMappingURL=components-common-Modal-Modal-stories.73ccf0f2a33ca22d31d2.hot-update.js.map