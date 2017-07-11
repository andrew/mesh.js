"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var _1 = require(".");
describe(__filename + "#", function () {
    it("can call a message to multiple endpoints in sequence", function () { return __awaiter(_this, void 0, void 0, function () {
        var i, fn, iterable, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    i = 0;
                    fn = _1.sequence(function (m) { return i++; }, function (m) { return i++; }, function (m) { return i++; });
                    iterable = fn({});
                    _a = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 1:
                    _a.apply(void 0, [(_d.sent()).value]).to.eql(0);
                    _b = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 2:
                    _b.apply(void 0, [(_d.sent()).value]).to.eql(1);
                    _c = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 3:
                    _c.apply(void 0, [(_d.sent()).value]).to.eql(2);
                    return [2 /*return*/];
            }
        });
    }); });
    it("can yield all values from targets", function () { return __awaiter(_this, void 0, void 0, function () {
        var i, fn, iterable, _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    i = 0;
                    fn = _1.sequence(function (m) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, "a"];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, "b"];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }, function (m) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, "c"];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, "d"];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }, function (m) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, "e"];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, "f"];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                    iterable = fn({});
                    _a = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 1:
                    _a.apply(void 0, [(_h.sent()).value]).to.eql("a");
                    _b = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 2:
                    _b.apply(void 0, [(_h.sent()).value]).to.eql("b");
                    _c = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 3:
                    _c.apply(void 0, [(_h.sent()).value]).to.eql("c");
                    _d = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 4:
                    _d.apply(void 0, [(_h.sent()).value]).to.eql("d");
                    _e = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 5:
                    _e.apply(void 0, [(_h.sent()).value]).to.eql("e");
                    _f = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 6:
                    _f.apply(void 0, [(_h.sent()).value]).to.eql("f");
                    _g = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 7:
                    _g.apply(void 0, [(_h.sent()).done]).to.eql(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("ignores returned values from target functions", function () { return __awaiter(_this, void 0, void 0, function () {
        var fn, iterable, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    fn = _1.sequence(function (m) {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, "a"];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, "b"];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/, "c"];
                            }
                        });
                    });
                    iterable = fn({});
                    _a = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 1:
                    _a.apply(void 0, [(_d.sent()).value]).to.eql("a");
                    _b = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 2:
                    _b.apply(void 0, [(_d.sent()).value]).to.eql("b");
                    _c = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 3:
                    _c.apply(void 0, [(_d.sent()).value]).to.eql(undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("can write data to all functions", function () { return __awaiter(_this, void 0, void 0, function () {
        var fn, iterable, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    fn = _1.sequence(function (m) { return _1.through(function (chunk) { return chunk.toUpperCase(); }); }, function (m) { return _1.through(function (chunk) { return chunk + "!"; }); });
                    iterable = fn({});
                    _a = chai_1.expect;
                    return [4 /*yield*/, iterable.next("a")];
                case 1:
                    _a.apply(void 0, [(_d.sent()).value]).to.eql("A");
                    _b = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 2:
                    _b.apply(void 0, [(_d.sent()).value]).to.eql("a!");
                    _c = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 3:
                    _c.apply(void 0, [(_d.sent()).done]).to.eql(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("can write data to all functions", function () { return __awaiter(_this, void 0, void 0, function () {
        var fn, iterable, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    fn = _1.sequence(function (m) { return _1.through(function (chunk) { return chunk.toUpperCase(); }); }, function (m) { return _1.through(function (chunk) { return chunk + "!"; }); });
                    iterable = fn({});
                    _a = chai_1.expect;
                    return [4 /*yield*/, iterable.next("a")];
                case 1:
                    _a.apply(void 0, [(_d.sent()).value]).to.eql("A");
                    _b = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 2:
                    _b.apply(void 0, [(_d.sent()).value]).to.eql("a!");
                    _c = chai_1.expect;
                    return [4 /*yield*/, iterable.next()];
                case 3:
                    _c.apply(void 0, [(_d.sent()).done]).to.eql(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("can pipe input and receive output", function () { return __awaiter(_this, void 0, void 0, function () {
        var fn, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fn = _1.sequence(function (m) { return _1.through(function (v) { return -v; }); });
                    _a = chai_1.expect;
                    return [4 /*yield*/, _1.readAll(_1.pipe([1, 2, 3], fn({})))];
                case 1:
                    _a.apply(void 0, [_b.sent()]).to.eql([-1, -2, -3]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("can nest sequence functions", function () { return __awaiter(_this, void 0, void 0, function () {
        var i, fn, stream, _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    i = '';
                    fn = _1.sequence(_1.sequence(function (m) { return i += 'a'; }, function (m) { return i += 'b'; }, function (m) { return i += 'c'; }), _1.sequence(function (m) { return i += 'd'; }, function (m) { return i += 'e'; }, function (m) { return i += 'f'; }), function (m) { return i += 'g'; });
                    stream = fn({});
                    _a = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 1:
                    _a.apply(void 0, [(_j.sent()).value]).to.eql('a');
                    _b = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 2:
                    _b.apply(void 0, [(_j.sent()).value]).to.eql('ab');
                    _c = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 3:
                    _c.apply(void 0, [(_j.sent()).value]).to.eql('abc');
                    _d = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 4:
                    _d.apply(void 0, [(_j.sent()).value]).to.eql('abcd');
                    _e = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 5:
                    _e.apply(void 0, [(_j.sent()).value]).to.eql('abcde');
                    _f = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 6:
                    _f.apply(void 0, [(_j.sent()).value]).to.eql('abcdef');
                    _g = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 7:
                    _g.apply(void 0, [(_j.sent()).value]).to.eql('abcdefg');
                    _h = chai_1.expect;
                    return [4 /*yield*/, stream.next()];
                case 8:
                    _h.apply(void 0, [(_j.sent()).done]).to.eql(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it("throws an error if a target emits one", function () { return __awaiter(_this, void 0, void 0, function () {
        var i, fn, iter, err, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = '';
                    fn = _1.sequence(function (m) { throw new Error("some error"); });
                    iter = fn({});
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, iter.next()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    err = e_1;
                    return [3 /*break*/, 4];
                case 4:
                    chai_1.expect(err.message).to.eql("some error");
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=sequence-test.js.map