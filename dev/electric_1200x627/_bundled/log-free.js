(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

var read = {
	t1: 2.7,
	t2: 1,
	t3: 2.5
};

function start() {
	TweenLite.defaultEase = Power2.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	tl.from(".t1", .5, { opacity: 0, y: "+=10" }, "+=.25");

	tl.add("f2_in", "+=" + read.t1);
	tl.from(".f2", .5, { opacity: 0 }, "f2_in");
	tl.from(".t2", .5, { opacity: 0, y: "+=10" });

	tl.add("f3_in", "+=" + read.t2);
	tl.from(".f3", .5, { opacity: 0 }, "f3_in");
	tl.from(".t3", .5, { opacity: 0, y: "+=10" });

	tl.to(".t3", .3, { opacity: 0 }, "+=" + read.t3);
	tl.from(".t4", .5, { opacity: 0, y: "+=10" });
	tl.from(".cta", .5, { opacity: 0 }, "+=.7");
}

exports.size = size;
exports.start = start;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
