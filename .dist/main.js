"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
async function bootstrap() {
    console.log(`Singleton template: `);
    const singletonInstance1 = singleton_1.Singleton.getInstance();
    const singletonInstance2 = singleton_1.Singleton.getInstance();
    if (singletonInstance1 === singletonInstance2)
        console.log(`Singleton instances is equal.`);
    else
        console.log(`Singleton instances is not equal.`);
    singleton_1.Singleton.setPayload(8080);
    const singletonPayload = singleton_1.Singleton.getPayload();
    console.log(`Singleton payload: ` + singletonPayload);
}
bootstrap();
//# sourceMappingURL=main.js.map