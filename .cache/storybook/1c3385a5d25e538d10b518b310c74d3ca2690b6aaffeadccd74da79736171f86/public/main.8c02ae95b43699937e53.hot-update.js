self["webpackHotUpdatepet_adoption_plataform_web"]("main",{

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/ lazy ^\.\/.*$ include: (?%21.*node_modules)(?:\/src(?:\/(?%21\.)(?:(?:(?%21(?:^%7C\/)\.).)*?)\/%7C\/%7C$)(?%21\.)(?=.)[^/]*?\.stories\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$ chunkName: [request] namespace object ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/common/Header/Header.stories": [
		"./src/components/common/Header/Header.stories.ts",
		"vendors-node_modules_next_dist_compiled_react_jsx-dev-runtime_js",
		"vendors-node_modules_react-icons_lib_index_mjs",
		"components-common-Header-Header-stories"
	],
	"./components/common/Header/Header.stories.ts": [
		"./src/components/common/Header/Header.stories.ts",
		"vendors-node_modules_next_dist_compiled_react_jsx-dev-runtime_js",
		"vendors-node_modules_react-icons_lib_index_mjs",
		"components-common-Header-Header-stories"
	],
	"./components/common/LoadingSpinner/LoadingSpinner.stories": [
		"./src/components/common/LoadingSpinner/LoadingSpinner.stories.ts",
		"vendors-node_modules_next_dist_compiled_react_jsx-dev-runtime_js",
		"components-common-LoadingSpinner-LoadingSpinner-stories"
	],
	"./components/common/LoadingSpinner/LoadingSpinner.stories.ts": [
		"./src/components/common/LoadingSpinner/LoadingSpinner.stories.ts",
		"vendors-node_modules_next_dist_compiled_react_jsx-dev-runtime_js",
		"components-common-LoadingSpinner-LoadingSpinner-stories"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$";
module.exports = webpackAsyncContext;

/***/ })

});
//# sourceMappingURL=main.8c02ae95b43699937e53.hot-update.js.map