import {Singleton} from "./singleton";
import {FactoryExample} from "./factory";
import {FactoryCreator} from "./abstract-factory";

async function bootstrap() {
        // Singleton programming pattern
        console.log(`Singleton pattern: `);
        const singletonInstance1 = Singleton.getInstance()
        const singletonInstance2 = Singleton.getInstance()
        if(singletonInstance1 === singletonInstance2)
                console.log(`Singleton instances is equal.`);
        else
                console.log(`Singleton instances is not equal.`);

        Singleton.setPayload(8080);
        const singletonPayload = Singleton.getPayload();
        console.log(`Singleton payload: ` + singletonPayload);
        console.log();

        // Factory programming pattern
        console.log(`Factory pattern: `);
        const factory = new FactoryExample;
        const product1 = factory.creator(1);
        const product2 = factory.creator(2);
        console.log(`First product: ` + product1.assemble());
        console.log(`Second product: ` + product2.assemble());
        console.log();

        // Abstract factory programming pattern
        console.log(`Abstract Factory pattern: `);
        const factoryCreator = new FactoryCreator();
        const factory1 = factoryCreator.creator(1);
        const factory2 = factoryCreator.creator(2);

        console.log(`First product: ` + factory1.creator(1));
        console.log(`Second product: ` + factory1.creator(2));
        console.log(`First product: ` + factory2.creator(1));
        console.log(`Second product: ` + factory2.creator(2));
}
bootstrap();