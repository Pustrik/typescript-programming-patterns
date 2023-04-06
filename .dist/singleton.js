"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() { }
    static getInstance() {
        if (!this.singletonInstance)
            this.singletonInstance = new Singleton();
        return this.singletonInstance;
    }
    static getPayload() {
        return this.payload;
    }
    static setPayload(payload) {
        this.payload = payload;
    }
}
exports.Singleton = Singleton;
//# sourceMappingURL=singleton.js.map