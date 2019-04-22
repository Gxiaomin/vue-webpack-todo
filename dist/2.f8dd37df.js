webpackJsonp([2],{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vuexTest_vue__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vuexTest_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vuexTest_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vuexTest_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vuexTest_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0308142d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vuexTest_vue__ = __webpack_require__(55);
function injectStyle (ssrContext) {
  __webpack_require__(53)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0308142d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vuexTest_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0308142d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vuexTest_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(4);

exports.default = {
    mounted: function mounted() {
        var _this = this;

        // // 与actions配合使用，异步修改state中的值
        // this.$store.dispatch('updateCountSync', {
        //     num: 5,
        //     time: 2000
        // })

        // 如果已使用mapActions引入方法，则直接调用
        this.updateCountSync({
            num: 5,
            time: 2000
        });

        // // a模块使用了namespaced: true时，调用
        // this['a/updateText']('123');
        // this['a/add']();

        // this.testActions();

        var i = 1;
        setInterval(function () {
            i++;
            // commit方法，与mutaition配置使用，同步修改state的值
            // 只能接受两个参数：1: mutations的名称，2: 一个对象
            _this.$store.commit('updateCount', i);
        }, 1000);
    },


    methods: _extends({}, (0, _vuex.mapActions)(['updateCountSync', 'a/add', 'testActions']), (0, _vuex.mapMutations)(['updateCount', 'a/updateText'])),

    computed: _extends({}, (0, _vuex.mapState)({
        count: function count(state) {
            return state.count;
        },
        syncCount: 'syncCount'
        // textA: state => state.a.text
    }), (0, _vuex.mapGetters)({
        fullName: 'fullName'
        // textPlus: 'a/testPlus'
    }))
};

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1112a66b", content, true, {});

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".vuex-wrapper[data-v-0308142d]{width:500px;min-height:200px;padding:20px;background-color:#fff;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 5px #666;box-shadow:0 0 5px #666}", ""]);

// exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuex-wrapper"},[_c('h2',[_vm._v("mutationsUpdateCount: "+_vm._s(_vm.count))]),_vm._v(" "),_c('h2',[_vm._v("actionsUpdateCount: "+_vm._s(_vm.syncCount))]),_vm._v(" "),_c('h2',[_vm._v("getters: "+_vm._s(_vm.fullName))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});