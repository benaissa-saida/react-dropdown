"use strict";

var _interopRequireDefault = require("/Users/mikasa/Desktop/library-react/mik-dropdown/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-dropdown/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _slicedToArray2 = _interopRequireDefault(require("/Users/mikasa/Desktop/library-react/mik-dropdown/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _react = require("react");
require("./Dropdown.css");
var _jsxRuntime = require("react/jsx-runtime");
function Icon() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    height: "20",
    width: "20",
    viewBox: "0 0 20 20",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    })
  });
}
var CloseIcon = function CloseIcon() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    height: "20",
    width: "20",
    viewBox: "0 0 20 20",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    })
  });
};
function Dropdown(_ref) {
  var placeHolder = _ref.placeHolder,
    options = _ref.options,
    isMulti = _ref.isMulti,
    isSearchable = _ref.isSearchable,
    onChange = _ref.onChange,
    label = _ref.label,
    defaultOpt = _ref.defaultOpt;
  var defaultValue = defaultOpt;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    showMenu = _useState2[0],
    setShowMenu = _useState2[1];
  var _useState3 = (0, _react.useState)(isMulti ? [] : null),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    selectedValue = _useState4[0],
    setSelectedValue = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var searchRef = (0, _react.useRef)();
  var inputRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handler);
    return function () {
      window.removeEventListener("click", handler);
    };
  });
  var handleInputClick = function handleInputClick(e) {
    setShowMenu(!showMenu);
  };
  var getDisplay = function getDisplay() {
    if (!selectedValue || selectedValue.length === 0) {
      if (!placeHolder || placeHolder.length === 0) {
        return defaultValue;
      } else {
        return placeHolder;
      }
    }
    if (isMulti) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-tags",
          children: selectedValue.map(function (option) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "dropdown-tag-item",
              children: [option.label, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                onClick: function onClick(e) {
                  return onTagRemove(e, option);
                },
                className: "dropdown-tag-close",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CloseIcon, {})
              })]
            }, option.value);
          })
        })
      });
    }
    return selectedValue.label;
  };
  var removeOption = function removeOption(option) {
    return selectedValue.filter(function (o) {
      return o.value !== option.value;
    });
  };
  var onTagRemove = function onTagRemove(e, option) {
    e.stopPropagation();
    var newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };
  var onItemClick = function onItemClick(option) {
    var newValue;
    if (isMulti) {
      if (selectedValue.findIndex(function (o) {
        return o.value === option.value;
      }) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [].concat((0, _toConsumableArray2.default)(selectedValue), [option]);
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };
  var isSelected = function isSelected(option) {
    if (isMulti) {
      return selectedValue.filter(function (o) {
        return o.value === option.value;
      }).length > 0;
    }
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };
  var onSearch = function onSearch(e) {
    setSearchValue(e.target.value);
  };
  var getOptions = function getOptions() {
    if (!searchValue) {
      return options;
    }
    return options.filter(function (option) {
      return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "dropdown-container",
      id: label,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        ref: inputRef,
        onClick: handleInputClick,
        className: "dropdown-input",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-selected-value",
          children: getDisplay()
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "dropdown-tools",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "dropdown-tool",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {})
          })
        })]
      }), showMenu && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "dropdown-menu",
        children: [isSearchable && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "search-box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            onChange: onSearch,
            value: searchValue,
            ref: searchRef
          })
        }), getOptions().map(function (option) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            onClick: function onClick() {
              return onItemClick(option);
            },
            className: "dropdown-item ".concat(isSelected(option) && "selected"),
            children: option.label
          }, option.value);
        })]
      })]
    })]
  });
}
var _default = Dropdown;
exports.default = _default;