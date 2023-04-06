"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryExample = void 0;
class Factory {
}
class FirstProduct {
    assemble() {
        return 'First product has been assembled.';
    }
}
class SecondProduct {
    assemble() {
        return 'Second product has been assembled.';
    }
}
class FactoryExample {
    creator(index) {
        switch (index) {
            case 1:
                return new FirstProduct();
            case 2:
                return new SecondProduct();
            default:
                return null;
        }
    }
}
exports.FactoryExample = FactoryExample;
//# sourceMappingURL=factory.js.map