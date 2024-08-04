"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-LoadingSpinner-stories",{

/***/ "./src/components/common/LoadingSpinner.stories.ts":
/*!*********************************************************!*\
  !*** ./src/components/common/LoadingSpinner.stories.ts ***!
  \*********************************************************/
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
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/components/common/LoadingSpinner.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// components/LoadingSpinner.stories.tsx

// Define os metadados para o Storybook
const meta = {
  title: "Components/LoadingSpinner",
  component: _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__.LoadingSpinner,
  argTypes: {
    size: {
      control: {
        type: "select"
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
// Histórias para cada tamanho específico do spinner
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

/***/ })

});
//# sourceMappingURL=components-common-LoadingSpinner-stories.4962f36978a8eed99e1e.hot-update.js.map