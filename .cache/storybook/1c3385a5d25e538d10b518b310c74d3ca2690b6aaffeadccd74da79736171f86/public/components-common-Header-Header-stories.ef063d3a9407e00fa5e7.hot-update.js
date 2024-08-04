"use strict";
self["webpackHotUpdatepet_adoption_plataform_web"]("components-common-Header-Header-stories",{

/***/ "./src/components/common/Header/Header.stories.ts":
/*!********************************************************!*\
  !*** ./src/components/common/Header/Header.stories.ts ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHeader: () => (/* binding */ CustomHeader),
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   NoButtons: () => (/* binding */ NoButtons),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/common/Header/Header.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const meta = {
  title: "Components/Header",
  component: _Header__WEBPACK_IMPORTED_MODULE_0__.Header,
  args: {
    // Valores padrão para as props que podem ser sobrescritas por cada história individual
    title: "PataCerta",
    links: [{
      text: "In\xedcio",
      href: "#inicio"
    }, {
      text: "Como funciona?",
      href: "#como-funciona"
    }, {
      text: "Sobre n\xf3s",
      href: "#sobre-nos"
    }],
    buttons: [{
      text: "Acessar",
      onClick: () => alert("Acessar clicado"),
      variant: "primary"
    }, {
      text: "Cadastrar",
      onClick: () => alert("Cadastrar clicado"),
      variant: "neutral"
    }]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
// História padrão
const Default = {};
// História com conteúdo personalizado
const CustomHeader = {
  args: {
    title: "My Custom Header",
    links: [{
      text: "Home",
      href: "#home"
    }, {
      text: "Features",
      href: "#features"
    }, {
      text: "Contact",
      href: "#contact"
    }],
    buttons: [{
      text: "Sign In",
      onClick: () => alert("Sign In clicked"),
      variant: "primary"
    }, {
      text: "Register",
      onClick: () => alert("Register clicked"),
      variant: "neutral"
    }]
  }
};
// História com nenhum botão
const NoButtons = {
  args: {
    links: [{
      text: "Home",
      href: "#home"
    }, {
      text: "About",
      href: "#about"
    }],
    buttons: [] // Sem botões
  }
};
;
const __namedExportsOrder = ["Default", "CustomHeader", "NoButtons"];
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
CustomHeader.parameters = {
  ...CustomHeader.parameters,
  docs: {
    ...CustomHeader.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'My Custom Header',\n    links: [{\n      text: \"Home\",\n      href: \"#home\"\n    }, {\n      text: \"Features\",\n      href: \"#features\"\n    }, {\n      text: \"Contact\",\n      href: \"#contact\"\n    }],\n    buttons: [{\n      text: \"Sign In\",\n      onClick: () => alert(\"Sign In clicked\"),\n      variant: \"primary\"\n    }, {\n      text: \"Register\",\n      onClick: () => alert(\"Register clicked\"),\n      variant: \"neutral\"\n    }]\n  }\n}",
      ...CustomHeader.parameters?.docs?.source
    }
  }
};
NoButtons.parameters = {
  ...NoButtons.parameters,
  docs: {
    ...NoButtons.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    links: [{\n      text: \"Home\",\n      href: \"#home\"\n    }, {\n      text: \"About\",\n      href: \"#about\"\n    }],\n    buttons: [] // Sem bot\xF5es\n  }\n}",
      ...NoButtons.parameters?.docs?.source
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
//# sourceMappingURL=components-common-Header-Header-stories.ef063d3a9407e00fa5e7.hot-update.js.map