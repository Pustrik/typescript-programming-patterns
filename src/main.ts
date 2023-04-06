import {Singleton} from "./singleton";
import {FactoryExample} from "./factory";

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


}
bootstrap();