"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridResponse = void 0;
var GridResponse = /** @class */ (function () {
    function GridResponse(Counter) {
        if (Counter === void 0) { Counter = 0; }
        this.CurrentPage = 0;
        this.TotalPages = 1;
        this.Counter = isNaN(Counter) ? 0 : Counter;
    }
    return GridResponse;
}());
exports.GridResponse = GridResponse;
