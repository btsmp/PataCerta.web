"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-Modal-Modal-stories",{

/***/ "./src/components/common/Modal/Modal.stories.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/Modal/Modal.stories.tsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomContent: () => (/* binding */ CustomContent),
/* harmony export */   CustomTitle: () => (/* binding */ CustomTitle),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   OpenModal: () => (/* binding */ OpenModal),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/components/common/Modal/Modal.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// src/components/Modal.stories.tsx


const meta = {
  title: "Components/Modal",
  component: _Modal__WEBPACK_IMPORTED_MODULE_1__.Modal,
  args: {
    title: "Example Modal",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "This is a sample modal content."
    }, void 0, false, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 11,
      columnNumber: 15
    }, undefined),
    isOpen: false,
    onClose: () => alert("Modal closed")
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Determines if the modal is open"
    },
    onClose: {
      action: "closed",
      description: "Function called when the modal is closed"
    },
    title: {
      control: "text",
      description: "The title of the modal"
    },
    children: {
      control: "text",
      description: "The content inside the modal"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
// Default story
const Default = {
  args: {
    isOpen: true
  }
};
// Custom Modal Title
const CustomTitle = {
  args: {
    title: "Custom Modal Title",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Custom content inside the modal."
    }, void 0, false, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, undefined),
    isOpen: true
  }
};
// Modal Opened
const OpenModal = {
  args: {
    title: "Open Modal",
    isOpen: true
  }
};
// Modal with Custom Content
const CustomContent = {
  args: {
    title: "Modal with List",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "This modal contains a list:"
      }, void 0, false, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Item 1"
        }, void 0, false, {
          fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Item 2"
        }, void 0, false, {
          fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Item 3"
        }, void 0, false, {
          fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, undefined),
    isOpen: true
  }
};
;
const __namedExportsOrder = ["Default", "CustomTitle", "OpenModal", "CustomContent"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    isOpen: true\n  }\n}",
      ...Default.parameters?.docs?.source
    }
  }
};
CustomTitle.parameters = {
  ...CustomTitle.parameters,
  docs: {
    ...CustomTitle.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Custom Modal Title',\n    children: <p>Custom content inside the modal.</p>,\n    isOpen: true\n  }\n}",
      ...CustomTitle.parameters?.docs?.source
    }
  }
};
OpenModal.parameters = {
  ...OpenModal.parameters,
  docs: {
    ...OpenModal.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Open Modal',\n    isOpen: true\n  }\n}",
      ...OpenModal.parameters?.docs?.source
    }
  }
};
CustomContent.parameters = {
  ...CustomContent.parameters,
  docs: {
    ...CustomContent.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Modal with List',\n    children: <div>\n        <p>This modal contains a list:</p>\n        <ul>\n          <li>Item 1</li>\n          <li>Item 2</li>\n          <li>Item 3</li>\n        </ul>\n      </div>,\n    isOpen: true\n  }\n}",
      ...CustomContent.parameters?.docs?.source
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
//# sourceMappingURL=components-common-Modal-Modal-stories.fd7140c4431fe5f74753.hot-update.js.map