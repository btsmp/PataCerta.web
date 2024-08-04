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
const Default = {};
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
        lineNumber: 60,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Item 1"
        }, void 0, false, {
          fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Item 2"
        }, void 0, false, {
          fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Item 3"
        }, void 0, false, {
          fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, undefined),
    isOpen: true
  }
};
;
const __namedExportsOrder = ["Default", "OpenModal", "CustomContent"];
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

/***/ })

});
//# sourceMappingURL=components-common-Modal-Modal-stories.40bb0c67691072248d40.hot-update.js.map