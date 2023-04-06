import {Singleton} from "./singleton";

async function bootstrap() {
        // Singleton programming pattern
        console.log(`Singleton template: `);
        const singletonInstance1 = Singleton.getInstance()
        const singletonInstance2 = Singleton.getInstance()
        if(singletonInstance1 === singletonInstance2)
                console.log(`Singleton instances is equal.`);
        else
                console.log(`Singleton instances is not equal.`);

        Singleton.setPayload(8080);
        const singletonPayload = Singleton.getPayload();
        console.log(`Singleton payload: ` + singletonPayload);


}
bootstrap();