/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fowen%2Fprojects%2Ffun%2Fweb3-auth%2Fsrc%2Fpages%2Findex.js&page=%2F!":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fowen%2Fprojects%2Ffun%2Fweb3-auth%2Fsrc%2Fpages%2Findex.js&page=%2F! ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.js */ \"./src/pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm93ZW4lMkZwcm9qZWN0cyUyRmZ1biUyRndlYjMtYXV0aCUyRnNyYyUyRnBhZ2VzJTJGaW5kZXguanMmcGFnZT0lMkYhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0RBQXNCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8wNDI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1wiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fowen%2Fprojects%2Ffun%2Fweb3-auth%2Fsrc%2Fpages%2Findex.js&page=%2F!\n"));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_Web3AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/Web3AuthContext */ \"./src/context/Web3AuthContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! near-api-js */ \"./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { web3auth, provider, accountId, isLoggedIn, nearConnection } = (0,_context_Web3AuthContext__WEBPACK_IMPORTED_MODULE_1__.useWeb3Auth)();\n    const [newGreeting, setNewGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentGreeting, setCurrentGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const getGreeting = async ()=>{\n        try {\n            const viewContract = async (param)=>{\n                let { contractId, methodName, args = {} } = param;\n                const url = \"https://rpc.testnet.near.org\";\n                const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_3__.providers.JsonRpcProvider({\n                    url\n                });\n                const argsBase64 = args ? Buffer.from(JSON.stringify(args)).toString(\"base64\") : \"\";\n                const viewCallResult = await provider.query({\n                    request_type: \"call_function\",\n                    account_id: contractId,\n                    method_name: methodName,\n                    args_base64: argsBase64,\n                    finality: \"optimistic\"\n                });\n                return JSON.parse(Buffer.from(viewCallResult.result).toString());\n            };\n            const result = await viewContract({\n                contractId: \"hello.near-examples.testnet\",\n                methodName: \"get_greeting\"\n            });\n            setCurrentGreeting(result);\n        } catch (error) {\n            console.error(\"Error getting greeting:\", error);\n            setError(\"Error getting greeting: \" + error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getGreeting();\n    }, []);\n    const handleSetGreeting = async ()=>{\n        if (!nearConnection || !accountId) {\n            setError(\"Please connect your wallet first\");\n            return;\n        }\n        if (!newGreeting.trim()) {\n            setError(\"Please enter a greeting\");\n            return;\n        }\n        setIsLoading(true);\n        setError(\"\");\n        try {\n            const account = await nearConnection.account(accountId);\n            const result = await account.functionCall({\n                contractId: \"hello.near-examples.testnet\",\n                methodName: \"set_greeting\",\n                args: {\n                    greeting: newGreeting\n                },\n                gas: 100000000000000,\n                deposit: 0\n            });\n            console.log(\"Contract call result:\", result);\n            setNewGreeting(\"\");\n            // Fetch the updated greeting\n            await getGreeting();\n        } catch (error) {\n            console.error(\"Contract call error:\", error);\n            setError(\"Error calling contract: \" + error.message);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello Near\"\n            }, void 0, false, {\n                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            isLoggedIn && accountId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"alert alert-success mt-3\",\n                children: [\n                    \"Connected Account: \",\n                    accountId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Update Greeting\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"alert alert-warning\",\n                        children: \"Please connect your wallet to interact with the contract\"\n                    }, void 0, false, {\n                        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card p-3\",\n                        children: [\n                            currentGreeting && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Current Greeting:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this),\n                                    \" \",\n                                    currentGreeting\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"greeting\",\n                                        className: \"form-label\",\n                                        children: \"New Greeting\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        className: \"form-control\",\n                                        id: \"greeting\",\n                                        value: newGreeting,\n                                        onChange: (e)=>setNewGreeting(e.target.value),\n                                        placeholder: \"Enter new greeting\",\n                                        disabled: isLoading\n                                    }, void 0, false, {\n                                        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"alert alert-danger\",\n                                children: error\n                            }, void 0, false, {\n                                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-success\",\n                                onClick: handleSetGreeting,\n                                disabled: isLoading || !newGreeting.trim(),\n                                children: isLoading ? \"Updating...\" : \"Set New Greeting\"\n                            }, void 0, false, {\n                                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/owen/projects/fun/web3-auth/src/pages/index.js\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IOcaScuAR2hmTIqB8dkzyXoc9Wo=\", false, function() {\n    return [\n        _context_Web3AuthContext__WEBPACK_IMPORTED_MODULE_1__.useWeb3Auth\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUMsV0FBVTs7NEJBQ1p2QyxpQ0FDQyw4REFBQ3NDO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7a0RBQU87Ozs7OztvQ0FBMEI7b0NBQUUxQzs7Ozs7OzswQ0FJeEMsOERBQUNzQztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNJO3dDQUFNQyxTQUFRO3dDQUFXTCxXQUFVO2tEQUFhOzs7Ozs7a0RBQ2pELDhEQUFDTTt3Q0FDQ0MsTUFBSzt3Q0FDTFAsV0FBVTt3Q0FDVlEsSUFBRzt3Q0FDSEMsT0FBT2xEO3dDQUNQbUQsVUFBVSxDQUFDQyxJQUFNbkQsZUFBZW1ELEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3Q0FDOUNJLGFBQVk7d0NBQ1pDLFVBQVVqRDs7Ozs7Ozs7Ozs7OzRCQUliRix1QkFDQyw4REFBQ29DO2dDQUFJQyxXQUFVOzBDQUNackM7Ozs7OzswQ0FJTCw4REFBQ29EO2dDQUNDZixXQUFVO2dDQUNWZ0IsU0FBU3pCO2dDQUNUdUIsVUFBVWpELGFBQWEsQ0FBQ04sWUFBWWlDLElBQUk7MENBRXZDM0IsWUFBWSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQztHQXpJd0JaOztRQUNnREosaUVBQVdBOzs7S0FEM0RJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNBdXRoIH0gZnJvbSAnQC9jb250ZXh0L1dlYjNBdXRoQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcHJvdmlkZXJzIH0gZnJvbSAnbmVhci1hcGktanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IHdlYjNhdXRoLCBwcm92aWRlciwgYWNjb3VudElkLCBpc0xvZ2dlZEluLCBuZWFyQ29ubmVjdGlvbiB9ID0gdXNlV2ViM0F1dGgoKTtcbiAgY29uc3QgW25ld0dyZWV0aW5nLCBzZXROZXdHcmVldGluZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50R3JlZXRpbmcsIHNldEN1cnJlbnRHcmVldGluZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldEdyZWV0aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2aWV3Q29udHJhY3QgPSBhc3luYyAoeyBjb250cmFjdElkLCBtZXRob2ROYW1lLCBhcmdzID0ge30gfSkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZ2A7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoeyB1cmwgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhcmdzQmFzZTY0ID0gYXJnc1xuICAgICAgICAgID8gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoYXJncykpLnRvU3RyaW5nKFwiYmFzZTY0XCIpXG4gICAgICAgICAgOiBcIlwiO1xuXG4gICAgICAgIGNvbnN0IHZpZXdDYWxsUmVzdWx0ID0gYXdhaXQgcHJvdmlkZXIucXVlcnkoe1xuICAgICAgICAgIHJlcXVlc3RfdHlwZTogXCJjYWxsX2Z1bmN0aW9uXCIsXG4gICAgICAgICAgYWNjb3VudF9pZDogY29udHJhY3RJZCxcbiAgICAgICAgICBtZXRob2RfbmFtZTogbWV0aG9kTmFtZSxcbiAgICAgICAgICBhcmdzX2Jhc2U2NDogYXJnc0Jhc2U2NCxcbiAgICAgICAgICBmaW5hbGl0eTogXCJvcHRpbWlzdGljXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEJ1ZmZlci5mcm9tKHZpZXdDYWxsUmVzdWx0LnJlc3VsdCkudG9TdHJpbmcoKSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2aWV3Q29udHJhY3Qoe1xuICAgICAgICBjb250cmFjdElkOiBcImhlbGxvLm5lYXItZXhhbXBsZXMudGVzdG5ldFwiLFxuICAgICAgICBtZXRob2ROYW1lOiBcImdldF9ncmVldGluZ1wiLFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHNldEN1cnJlbnRHcmVldGluZyhyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBncmVldGluZzpcIiwgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoJ0Vycm9yIGdldHRpbmcgZ3JlZXRpbmc6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRHcmVldGluZygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0R3JlZXRpbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFuZWFyQ29ubmVjdGlvbiB8fCAhYWNjb3VudElkKSB7XG4gICAgICBzZXRFcnJvcignUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQgZmlyc3QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW5ld0dyZWV0aW5nLnRyaW0oKSkge1xuICAgICAgc2V0RXJyb3IoJ1BsZWFzZSBlbnRlciBhIGdyZWV0aW5nJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKCcnKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgbmVhckNvbm5lY3Rpb24uYWNjb3VudChhY2NvdW50SWQpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWNjb3VudC5mdW5jdGlvbkNhbGwoe1xuICAgICAgICBjb250cmFjdElkOiBcImhlbGxvLm5lYXItZXhhbXBsZXMudGVzdG5ldFwiLFxuICAgICAgICBtZXRob2ROYW1lOiBcInNldF9ncmVldGluZ1wiLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgZ3JlZXRpbmc6IG5ld0dyZWV0aW5nXG4gICAgICAgIH0sXG4gICAgICAgIGdhczogMTAwMDAwMDAwMDAwMDAwLFxuICAgICAgICBkZXBvc2l0OiAwLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiQ29udHJhY3QgY2FsbCByZXN1bHQ6XCIsIHJlc3VsdCk7XG4gICAgICBzZXROZXdHcmVldGluZygnJyk7XG4gICAgICAvLyBGZXRjaCB0aGUgdXBkYXRlZCBncmVldGluZ1xuICAgICAgYXdhaXQgZ2V0R3JlZXRpbmcoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNvbnRyYWN0IGNhbGwgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHNldEVycm9yKCdFcnJvciBjYWxsaW5nIGNvbnRyYWN0OiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxuICAgICAgPGgxPkhlbGxvIE5lYXI8L2gxPlxuICAgICAgXG4gICAgICB7aXNMb2dnZWRJbiAmJiBhY2NvdW50SWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3MgbXQtM1wiPlxuICAgICAgICAgIENvbm5lY3RlZCBBY2NvdW50OiB7YWNjb3VudElkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICA8aDM+VXBkYXRlIEdyZWV0aW5nPC9oMz5cbiAgICAgICAgeyFpc0xvZ2dlZEluID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxuICAgICAgICAgICAgUGxlYXNlIGNvbm5lY3QgeW91ciB3YWxsZXQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgY29udHJhY3RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcC0zXCI+XG4gICAgICAgICAgICB7Y3VycmVudEdyZWV0aW5nICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5DdXJyZW50IEdyZWV0aW5nOjwvc3Ryb25nPiB7Y3VycmVudEdyZWV0aW5nfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdyZWV0aW5nXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk5ldyBHcmVldGluZzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIGlkPVwiZ3JlZXRpbmdcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdHcmVldGluZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0dyZWV0aW5nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBncmVldGluZ1wiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZXRHcmVldGluZ31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCAhbmV3R3JlZXRpbmcudHJpbSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ1VwZGF0aW5nLi4uJyA6ICdTZXQgTmV3IEdyZWV0aW5nJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVdlYjNBdXRoIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm92aWRlcnMiLCJIb21lIiwid2ViM2F1dGgiLCJwcm92aWRlciIsImFjY291bnRJZCIsImlzTG9nZ2VkSW4iLCJuZWFyQ29ubmVjdGlvbiIsIm5ld0dyZWV0aW5nIiwic2V0TmV3R3JlZXRpbmciLCJjdXJyZW50R3JlZXRpbmciLCJzZXRDdXJyZW50R3JlZXRpbmciLCJlcnJvciIsInNldEVycm9yIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZ2V0R3JlZXRpbmciLCJ2aWV3Q29udHJhY3QiLCJjb250cmFjdElkIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJ1cmwiLCJKc29uUnBjUHJvdmlkZXIiLCJhcmdzQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsInZpZXdDYWxsUmVzdWx0IiwicXVlcnkiLCJyZXF1ZXN0X3R5cGUiLCJhY2NvdW50X2lkIiwibWV0aG9kX25hbWUiLCJhcmdzX2Jhc2U2NCIsImZpbmFsaXR5IiwicGFyc2UiLCJyZXN1bHQiLCJjb25zb2xlIiwibWVzc2FnZSIsImhhbmRsZVNldEdyZWV0aW5nIiwidHJpbSIsImFjY291bnQiLCJmdW5jdGlvbkNhbGwiLCJncmVldGluZyIsImdhcyIsImRlcG9zaXQiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgzIiwic3Ryb25nIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fowen%2Fprojects%2Ffun%2Fweb3-auth%2Fsrc%2Fpages%2Findex.js&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);