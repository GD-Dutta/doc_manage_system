!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e){t.exports=require("react")},function(t,e,n){var i;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var a=typeof i;if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i)&&i.length){var r=o.apply(null,i);r&&t.push(r)}else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&t.push(s)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(i=function(){return o}.apply(e,[]))||(t.exports=i)}()},function(t,e,n){var i;void 0===(i=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){}return t.parseStyle=function(t){void 0===t&&(t="");try{return t.split(";").reduce(function(t,e){var n=e.split(":");2===n.length&&(t[n[0].trim().replace(/(-.)/g,function(t){return t[1].toUpperCase()})]=n[1].trim());return t},{})}catch(e){window.console.log("Failed to parse style",t,e)}return{}},t.validateCompatibility=function(t){var e=t.listViewEntity,n=t.targetListView,i=n&&n.datasource&&n.datasource.type;if(!n){var o="This widget is unable to find a list view ";return o+=e?"with the supplied entity '"+e+"'":"to connect"}return i&&"database"!==i&&"xpath"!==i?"This widget is only compatible with list view data source type 'Database' and 'XPath'":n&&n._datasource&&n._entity&&n.update?n._entity&&void 0!==e&&e!==n._entity?'The supplied entity "'+t.listViewEntity+'" does not belong to list view data source':"":"This widget version is not compatible with this Mendix version"},t.findTargetNode=function(t){for(var e=null;!e&&t&&!((e=t.querySelectorAll(".mx-listview")[0])||t.isEqualNode(document)||!t.classList||t.classList.contains("mx-incubator")||t.classList.contains("mx-offscreen"));)t=t.parentNode;return e},t}();e.SharedUtils=n}.apply(e,[n,e]))||(t.exports=i)},function(t,e,n){var i,o;i=[n,e,n(0),n(1)],void 0===(o=function(t,e,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Alert=function(t){var e=t.bootstrapStyle,o=t.className,a=t.children;return a?n.createElement("div",{className:i("alert alert-"+e,o)},a):null},e.Alert.displayName="Alert",e.Alert.defaultProps={bootstrapStyle:"danger"}}.apply(e,i))||(t.exports=o)},,,,,,,,,,,,,,function(t,e,n){var i,o,a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};i=[n,e,n(0),n(18),n(3),n(2),n(19),n(20)],void 0===(o=function(t,e,i,o,a,u,p,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={findingListViewWidget:!0,hideUnusedPaging:n.props.hideUnusedPaging,message:""},n}return r(e,t),e.prototype.render=function(){return i.createElement("div",{className:"widget-pagination"},i.createElement(a.Alert,{className:"widget-pagination-alert"},this.state.message),i.createElement(c.Pagination,{getMessageStatus:function(){return"[2 to 10 of 50]"},hideUnusedPaging:!1,items:this.props.items,listViewSize:20,pageSize:2,onChange:function(){},pagingStyle:this.props.pagingStyle,offset:0,pageSizeOptions:this.props.pageSizeOptions}))},e.prototype.componentDidMount=function(){this.validateConfigs(this.props)},e.prototype.componentWillReceiveProps=function(t){this.validateConfigs(t)},e.prototype.validateConfigs=function(t){var e=o.findDOMNode(this),n=u.SharedUtils.findTargetNode(e),i=p.Validate.validateProps(s({},t,{inWebModeler:!0}));this.hideLoadMoreButton(n),this.setState({findingListViewWidget:!1,hideUnusedPaging:t.hideUnusedPaging,message:i})},e.prototype.hideLoadMoreButton=function(t){if(t){var e=t.querySelector(".mx-listview-loadMore");e&&e.classList.add("widget-pagination-hide-load-more")}},e}(i.Component);e.preview=l,e.getVisibleProperties=function(t,e){return"custom"===t.pagingStyle?t.items.forEach(function(t,n){var i="firstButton"===t.item||"lastButton"===t.item||"nextButton"===t.item||"previousButton"===t.item;e.items[n].text="text"===t.item,e.items[n].buttonCaption=i,e.items[n].showIcon=i,e.items[n].maxPageButtons="pageNumberButtons"===t.item}):e.items=!1,e},e.getPreviewCss=function(){return n(26)}}.apply(e,i))||(t.exports=o)},function(t,e){t.exports=require("react-dom")},function(t,e,n){var i,o;i=[n,e,n(0)],void 0===(o=function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.validateProps=function(t){var e=[];return"custom"===t.pagingStyle&&(t.items.length<1&&e.push("custom style should have at least one item"),t.items.forEach(function(t,n){var i=n+1;"pageNumberButtons"===t.item&&(!t.maxPageButtons||t.maxPageButtons<7)&&e.push("Custom item "+i+" Number of page buttons should 7 or larger"),"text"!==t.item||t.text||e.push("Custom item "+i+" text requires a 'Text with placeholder'"),("firstButton"===t.item||"lastButton"===t.item||"nextButton"===t.item||"previousButton"===t.item)&&"none"===t.showIcon&&!t.buttonCaption&&e.push("Custom item "+i+" Custom button requires an caption or icon")}),t.pageSizeOptions.forEach(function(t,n){t.size<1&&e.push("Custom 'Page size' at item "+(n+1)+" should be larger than 0")})),e.length?n.createElement("div",{},"Configuration error in widget:",e.map(function(t,e){return n.createElement("p",{key:e},t)})):""},t}();e.Validate=i}.apply(e,i))||(t.exports=o)},function(t,e,n){var i,o,a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};i=[n,e,n(0),n(1),n(21),n(22),n(25)],void 0===(o=function(t,e,n,i,o,a,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={currentOffset:e.props.offset},e.firstPageClickAction=function(){e.setState({currentOffset:0}),e.props.onChange(0)},e.nextPageClickAction=function(){var t=e.state.currentOffset+e.props.pageSize;e.setState({currentOffset:t}),e.props.onChange(t)},e.previousPageClickAction=function(){var t=Math.max(e.state.currentOffset-e.props.pageSize,0);e.setState({currentOffset:t}),e.props.onChange(t)},e.lastPageClickAction=function(){var t=e.props,n=t.pageSize,i=t.listViewSize,o=i%n==0?i-n:i-i%n;o>0&&e.setState({currentOffset:o}),e.props.onChange(o)},e.updatePagination=function(t){var n=(t-1)*e.props.pageSize;e.state.currentOffset!==n&&(e.setState({currentOffset:n}),e.props.onChange(n))},e}return r(e,t),e.prototype.render=function(){var t=this.props,e=t.listViewSize,o=t.pageSize,a=t.hideUnusedPaging,r=!a||a&&e>o;return n.createElement("div",{className:i("pagination",r?"visible":"hidden")},this.renderPagination())},e.prototype.componentWillReceiveProps=function(t){this.setState({currentOffset:t.offset})},e.prototype.renderPagination=function(){if("default"===this.props.pagingStyle)return this.renderDefault();if("pageNumberButtons"===this.props.pagingStyle){var t=this.props,e=t.listViewSize,i=t.pageSize,o=Math.ceil(e/i),r=this.getPageNumber(this.state.currentOffset,i,e);return[n.createElement(a.PageNumberView,{maxPageButtons:7,onClickAction:this.updatePagination,pageCount:o,selectedPageNumber:r})]}return this.renderCustom()},e.prototype.getPageNumber=function(t,e,n){return t<n?t/e+1:1},e.prototype.renderDefault=function(){return[this.createFirstButton(),this.createPreviousButton(),this.createMessage(),this.createNextButton(),this.createLastButton()]},e.prototype.renderCustom=function(){var t=this;return this.props.items.map(function(e){var i={buttonCaption:e.buttonCaption,buttonType:e.item,showIcon:e.showIcon,text:e.text};if("firstButton"===i.buttonType)return t.createFirstButton(i);if("nextButton"===i.buttonType)return t.createNextButton(i);if("previousButton"===i.buttonType)return t.createPreviousButton(i);if("lastButton"===i.buttonType)return t.createLastButton(i);if("text"===i.buttonType)return t.createMessage(i.text);if("pageNumberButtons"===i.buttonType){var o=t.props,r=o.listViewSize,s=o.pageSize,p=Math.ceil(r/s),c=t.getPageNumber(t.state.currentOffset,s,r);return n.createElement(a.PageNumberView,{maxPageButtons:e.maxPageButtons,onClickAction:t.updatePagination,pageCount:p,selectedPageNumber:c})}if("pageSize"===i.buttonType){var l=t.props,g=(r=l.listViewSize,s=l.pageSize,t.getPageNumber(t.state.currentOffset,s,r));return n.createElement(u.PageSizeSelect,{onChange:t.props.onChange,pageSize:t.props.pageSize,sizeOptions:t.props.pageSizeOptions,listViewSize:r,currentPage:g})}})},e.prototype.createFirstButton=function(t){var i=this.state.currentOffset<=0;return n.createElement(o.PageButton,s({},t,{buttonType:"firstButton",isDisabled:i,onClickAction:this.firstPageClickAction,showIcon:e.getShowIcon(t)}))},e.prototype.createPreviousButton=function(t){var i=this.state.currentOffset<=0;return n.createElement(o.PageButton,s({},t,{buttonType:"previousButton",isDisabled:i,onClickAction:this.previousPageClickAction,showIcon:e.getShowIcon(t)}))},e.prototype.createNextButton=function(t){var i=this.state.currentOffset+this.props.pageSize>=this.props.listViewSize;return n.createElement(o.PageButton,s({},t,{buttonType:"nextButton",isDisabled:i,onClickAction:this.nextPageClickAction,showIcon:e.getShowIcon(t)}))},e.prototype.createLastButton=function(t){var i=this.state.currentOffset+this.props.pageSize>=this.props.listViewSize;return n.createElement(o.PageButton,s({},t,{buttonType:"lastButton",isDisabled:i,onClickAction:this.lastPageClickAction,showIcon:e.getShowIcon(t)}))},e.prototype.createMessage=function(t){return t=this.getMessageStatus(t),n.createElement("button",{className:"paging-status"},t)},e.prototype.getMessageStatus=function(t){var e=this.state.currentOffset,n=this.props,i=n.listViewSize,o=n.pageSize,a=e+1,r=0;if(0===i?a=0:r=i<o||e+o>i?i:e+o,t){var s=o&&0!==o?Math.ceil(i/o):i,u=Math.ceil(i/o);return t.replace("{firstItem}",a.toString()).replace("{lastItem}",r.toString()).replace("{totalItems}",i.toString()).replace("{currentPageNumber}",u.toString()).replace("{totalPages}",s.toString())}return this.props.getMessageStatus(a,r,i)},e.getShowIcon=function(t){return t?t.showIcon:"default"},e}(n.Component);e.Pagination=p}.apply(e,i))||(t.exports=o)},function(t,e,n){var i,o;i=[n,e,n(0),n(1)],void 0===(o=function(t,e,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PageButton=function(t){var e="",o="",a={disabled:t.isDisabled},r=t.isDisabled?function(){}:t.onClickAction;return"firstButton"===t.buttonType?(o="btn mx-button mx-name-paging-first",e="glyphicon glyphicon-step-backward"):"previousButton"===t.buttonType?(o="btn mx-button mx-name-paging-previous",e="glyphicon glyphicon-backward"):"nextButton"===t.buttonType?(o="btn mx-button mx-name-paging-next",e="glyphicon glyphicon-forward"):"lastButton"===t.buttonType&&(o="btn mx-button mx-name-paging-last",e="glyphicon glyphicon-step-forward"),"default"===t.showIcon?t.buttonCaption?"firstButton"===t.buttonType||"previousButton"===t.buttonType?n.createElement("button",{className:i(o,a),onClick:r},n.createElement("span",{className:e}),n.createElement("span",{className:t.buttonType},t.buttonCaption)):n.createElement("button",{className:i(o,a),onClick:r},n.createElement("span",{className:t.buttonType},t.buttonCaption),n.createElement("span",{className:e})):n.createElement("button",{className:i(o,a),onClick:r},n.createElement("span",{className:e})):"none"===t.showIcon&&t.buttonCaption?n.createElement("button",{className:i(o,a),onClick:r},n.createElement("span",{className:i(t.buttonType,"")},t.buttonCaption)):null},e.PageButton.displayName="PageButton"}.apply(e,i))||(t.exports=o)},function(t,e,n){var i,o;i=[n,e,n(0),n(23),n(24)],void 0===(o=function(t,e,n,i,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PageNumberView=function(t){var e=[],a=t.selectedPageNumber,r=t.onClickAction;if(t.pageCount<=t.maxPageButtons)for(var s=1;s<=t.pageCount;s++)e.push(o.PageNumberButton({pageNumber:s,selectedPageNumber:a,onClickAction:r}));else{var u=Math.ceil(t.maxPageButtons/2),p=Math.floor(t.maxPageButtons/2),c=t.selectedPageNumber>u,l=t.selectedPageNumber<t.pageCount-p,g=1,f=1;if(!c&&l)g=2,f=t.maxPageButtons-2;else if(c&&l){var d=Math.floor((t.maxPageButtons-4)/2),m=Math.ceil((t.maxPageButtons-4)/2)-1;g=t.selectedPageNumber-d,f=t.selectedPageNumber+m}else c&&!l&&(g=t.pageCount-(t.maxPageButtons-3),f=t.pageCount-1);e.push(o.PageNumberButton({pageNumber:1,selectedPageNumber:a,onClickAction:r})),c&&e.push(n.createElement(i.BreakView,{}));for(s=g;s<=f;s++)e.push(o.PageNumberButton({pageNumber:s,selectedPageNumber:a,onClickAction:r}));l&&e.push(n.createElement(i.BreakView,{})),e.push(o.PageNumberButton({pageNumber:t.pageCount,selectedPageNumber:a,onClickAction:r}))}return n.createElement("ul",{},e)}}.apply(e,i))||(t.exports=o)},function(t,e,n){var i,o;i=[n,e,n(0),n(1)],void 0===(o=function(t,e,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BreakView=function(){return n.createElement("li",{className:i("break-view")},"...")},e.BreakView.displayName="BreakView"}.apply(e,i))||(t.exports=o)},function(t,e,n){var i,o;i=[n,e,n(0),n(1)],void 0===(o=function(t,e,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PageNumberButton=function(t){return n.createElement("li",{className:i(t.selectedPageNumber===t.pageNumber?"active":"",t.pageNumber<10?"single-digit":""),onClick:function(){return t.onClickAction(t.pageNumber)}},t.pageNumber)},e.PageNumberButton.displayName="PageNumberButton"}.apply(e,i))||(t.exports=o)},function(t,e,n){var i,o,a,r=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};i=[n,e,n(0)],void 0===(o=function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateOffSet=function(t,e,n){var i=Math.ceil(t/e);return{newOffSet:((n>=1&&n<=i?n:1)-1)*e,newPageSize:e}};var i=function(t){function i(n){var o=t.call(this,n)||this;return o.pageSizeSelectDom=null,o.handleOnChange=function(t){var n=o.props.listViewSize,i=o.filters.find(function(e){return e.selectedValue===t.currentTarget.value}).size;o.setState({selectedValue:t.currentTarget.value,pageSize:i});var a=e.calculateOffSet(n,i,o.props.currentPage);o.props.onChange(a.newOffSet,a.newPageSize)},o.state={selectedValue:i.getSelectedValue(n.sizeOptions,n.pageSize),pageSize:n.pageSize},o.filters=o.props.sizeOptions.map(function(t,e){return s({},t,{selectedValue:""+e})}),o}return r(i,t),i.prototype.render=function(){return n.createElement("div",{className:"page-size"},this.renderDropDown())},i.prototype.componentWillReceiveProps=function(t){if(this.defaultPageSize||(this.defaultPageSize=t.pageSize),t.pageSize!==this.props.pageSize){var e=i.getSelectedValue(t.sizeOptions,t.pageSize);e!==this.state.selectedValue&&this.setState({selectedValue:e})}},i.prototype.componentDidUpdate=function(t,e){"-1"===this.state.selectedValue&&this.pageSizeSelectDom&&(this.pageSizeSelectDom.selectedIndex=-1)},i.prototype.renderDropDown=function(){var t=this;return n.createElement("select",{className:"form-control",onChange:this.handleOnChange,value:this.state.selectedValue,ref:function(e){return t.pageSizeSelectDom=e}},i.createOptions(this.filters))},i.getSelectedValue=function(t,e){return""+t.indexOf(t.find(function(t){return t.size===e}))},i.createOptions=function(t){return t.map(function(t,e){return n.createElement("option",{className:"",key:e,label:t.caption,value:t.selectedValue},t.caption)})},i}(n.Component);e.PageSizeSelect=i}.apply(e,i))||(t.exports=o)},function(t,e){t.exports='.widget-pagination {\n  overflow: hidden; }\n  .widget-pagination .pagination {\n    margin: 0;\n    overflow: hidden;\n    white-space: nowrap; }\n    .widget-pagination .pagination .paging-status {\n      vertical-align: middle;\n      margin-bottom: 0;\n      padding: 0.6em 1em;\n      line-height: 1.42857;\n      border-color: transparent;\n      background-color: transparent;\n      cursor: text; }\n    .widget-pagination .pagination button span.only-text {\n      font-weight: 600; }\n    .widget-pagination .pagination .mx-button, .widget-pagination .pagination .btn {\n      color: #000;\n      border-color: transparent;\n      background-color: transparent; }\n      .widget-pagination .pagination .mx-button:hover, .widget-pagination .pagination .btn:hover {\n        color: #0595DB;\n        border-color: transparent;\n        background-color: transparent; }\n    .widget-pagination .pagination .disabled, .widget-pagination .pagination .disabled:focus {\n      border-color: transparent;\n      color: #999; }\n    .widget-pagination .pagination button span.glyphicon {\n      line-height: inherit; }\n    .widget-pagination .pagination button span.nextButton {\n      margin-right: 4px; }\n    .widget-pagination .pagination button span.previousButton {\n      margin-left: 4px; }\n    .widget-pagination .pagination ul {\n      display: inline-block;\n      padding-left: 15px;\n      padding-right: 15px;\n      margin-top: 2px;\n      margin-bottom: 2px; }\n      .widget-pagination .pagination ul li {\n        color: black;\n        padding: 8px 16px;\n        display: inline-block;\n        width: 48px;\n        cursor: pointer; }\n        .widget-pagination .pagination ul li.break-view {\n          cursor: default; }\n        .widget-pagination .pagination ul li.single-digit {\n          padding-left: 20px; }\n        .widget-pagination .pagination ul li.active:not(.break-view), .widget-pagination .pagination ul li.active:hover:not(.break-view) {\n          background-color: #0595DB;\n          color: white; }\n        .widget-pagination .pagination ul li:hover:not(.break-view) {\n          color: #0595DB;\n          background-color: #DDDDDD; }\n    .widget-pagination .pagination .page-size {\n      display: inline-flex; }\n      .widget-pagination .pagination .page-size label {\n        padding: 0.6em 1em; }\n      .widget-pagination .pagination .page-size input.form-control {\n        width: 62px; }\n\n.hide-load-more .mx-listview-loadMore {\n  display: none !important; }\n\n.widget-pagination-loading ul:before {\n  background-image: url(./loading.gif);\n  background-repeat: no-repeat;\n  background-position: center 15px;\n  background-color: rgba(255, 255, 255, 0.5);\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1; }\n\n.widget-pagination-loading .mx-listview-item {\n  -webkit-filter: blur(3px);\n  filter: blur(3px); }\n\n.widget-pagination-loading .mx-list {\n  position: relative; }\n'}]));

//# sourceURL=Pagination.webmodeler.js