"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
const factory_1 = require("./factory");
async function bootstrap() {
    // Singleton programming pattern
    console.log(`Singleton pattern: `);
    const singletonInstance1 = singleton_1.Singleton.getInstance();
    const singletonInstance2 = singleton_1.Singleton.getInstance();
    if (singletonInstance1 === singletonInstance2)
        console.log(`Singleton instances is equal.`);
    else
        console.log(`Singleton instances is not equal.`);
    singleton_1.Singleton.setPayload(8080);
    const singletonPayload = singleton_1.Singleton.getPayload();
    console.log(`Singleton payload: ` + singletonPayload);
    console.log();
    // Factory programming pattern
    console.log(`Factory pattern: `);
    const factory = new factory_1.FactoryExample;
    const product1 = factory.creator(1);
    const product2 = factory.creator(2);
    console.log(`First product: ` + product1.assemble());
    console.log(`Second product: ` + product2.assemble());
    console.log();
}
bootstrap();
//# sourceMappingURL=main.js.map