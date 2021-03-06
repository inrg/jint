/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-2-5.js
 * @description Array.prototype.some - 'length' is an own data property that overrides an inherited accessor property on an Array-like object
 */


function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var proto = {};

        Object.defineProperty(proto, "length", {
            get: function () {
                return 3;
            },
            configurable: true
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        Object.defineProperty(child, "length", {
            value: 2,
            configurable: true
        });

        child[0] = 9;
        child[1] = 11;
        child[2] = 12;

        return Array.prototype.some.call(child, callbackfn1) &&
            !Array.prototype.some.call(child, callbackfn2);
    }
runTestCase(testcase);
