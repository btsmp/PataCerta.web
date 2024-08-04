"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-Modal-Modal-stories",{

/***/ "./src/components/common/Modal/Modal.stories.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/Modal/Modal.stories.tsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/components/common/Modal/Modal.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// src/components/Modal.stories.tsx

var _s = __webpack_require__.$Refresh$.signature();


// Configurações do Storybook para o componente Modal
const meta = {
  title: "Components/Modal",
  component: _Modal__WEBPACK_IMPORTED_MODULE_1__.Modal,
  args: {
    title: "Example Modal",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Este \xe9 um exemplo de conte\xfado do modal."
    }, void 0, false, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 13,
      columnNumber: 15
    }, undefined)
  },
  argTypes: {
    onClose: {
      action: "closed"
    },
    isOpen: {
      control: "boolean"
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
// Definição do Template
const Template = args => {
  _s();
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(args.isOpen);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    args.onClose();
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "btn",
      onClick: handleOpen,
      children: "Open Modal"
    }, void 0, false, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      ...args,
      isOpen: isOpen,
      onClose: handleClose
    }, void 0, false, {
      fileName: "/home/bsmp/Documentos/Projetos/PataCerta.web/src/components/common/Modal/Modal.stories.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};
_s(Template, "6sx8hZIlSrVVBn7Xv96QbJe4VTc=");
_c = Template;
// Story Padrão
const Default = Template.bind({});
Default.args = {
  isOpen: false
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Template");
;
const __namedExportsOrder = ["Default"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => {\n  const [isOpen, setIsOpen] = useState(args.isOpen);\n  const handleOpen = () => setIsOpen(true);\n  const handleClose = () => {\n    setIsOpen(false);\n    args.onClose();\n  };\n  return <>\n      <button className=\"btn\" onClick={handleOpen}>\n        Open Modal\n      </button>\n      <Modal {...args} isOpen={isOpen} onClose={handleClose} />\n    </>;\n}",
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

/***/ })

});
//# sourceMappingURL=components-common-Modal-Modal-stories.4ec4a88a0dd70486f882.hot-update.js.map