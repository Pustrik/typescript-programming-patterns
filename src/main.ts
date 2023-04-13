import {SingletonPattern} from "./patterns/creational/singleton.pattern";
import {FactoryExample} from "./patterns/creational/factory.pattern";
import {FactoryCreator} from "./patterns/creational/abstract-factory.pattern";
import {BuilderPattern, Director} from "./patterns/creational/builder.pattern";
import {AdapterPattern, Handler, NotStandard, Standard} from "./patterns/structural/adapter.pattern";
import {AbstractImplementer, FirstImplementation, Implementer, SecondImplementation} from "./patterns/structural/bridge.pattern";
import {FirstDecorator, SecondDecorator, SimpleComponent} from "./patterns/structural/decorator.pattern";
import {Facade, FirstComponent, SecondComponent} from "./patterns/structural/facade.pattern";
import {FirstHandler, SecondHandler, ThirdHandler} from "./patterns/behavioral/chain.pattern";
import {LinkedObject, Prototype} from "./patterns/creational/prototype.pattern";

async function bootstrap() {
        //TODO Singleton programming pattern
        console.log(`Singleton pattern: `);
        SingletonPattern.setPayload(8080);
        const instance1 = SingletonPattern.getInstance()
        const instance2 = SingletonPattern.getInstance()
        const singletonPayload = SingletonPattern.getPayload();
        if(instance1 === instance2)
                console.log(`Singleton instances is equal.`);
        else
                console.log(`Singleton instances is not equal.`);
        console.log(`Singleton payload: ` + singletonPayload);
        console.log();

        //TODO Factory programming pattern
        console.log(`Factory pattern: `);
        const factory = new FactoryExample;
        const product1 = factory.creator(1);
        const product2 = factory.creator(2);
        console.log(`First product: ` + product1.assemble());
        console.log(`Second product: ` + product2.assemble());
        console.log();

        //TODO Abstract factory programming pattern
        console.log(`Abstract Factory pattern: `);
        const factoryCreator = new FactoryCreator();
        const factory1 = factoryCreator.creator(1);
        const factory2 = factoryCreator.creator(2);
        console.log(`First product: ` + factory1.creator(1));
        console.log(`Second product: ` + factory1.creator(2));
        console.log(`First product: ` + factory2.creator(1));
        console.log(`Second product: ` + factory2.creator(2));
        console.log();

        //TODO Builder programming pattern
        console.log(`Builder pattern: `);
        const builder = new BuilderPattern();
        const director = new Director();
        director.setBuilder(builder)
        director.buildMin();
        console.log(`Min building: ` + builder.getBuilding().showParts());
        director.buildMax();
        console.log(`Max building: ` + builder.getBuilding().showParts());
        console.log();

        //TODO Adapter programming pattern
        console.log(`Adapter pattern: `);
        const handler = new Handler();
        const standard = new Standard();
        const notStandard = new NotStandard();
        handler.handle(standard)
        handler.handle(notStandard);
        handler.handle(new AdapterPattern(notStandard));
        console.log();

        //TODO Bridge programming pattern
        console.log(`Bridge pattern: `);
        const implementation1 = new FirstImplementation();
        const implementation2 = new SecondImplementation();
        const abstractImplementer = new AbstractImplementer(implementation1);
        const implementer = new Implementer(implementation2);
        console.log(abstractImplementer.operation());
        console.log(implementer.operation());
        console.log();

        //TODO Decorator programming pattern
        console.log(`Decorator pattern: `);
        const component = new SimpleComponent();
        const decorator1 = new FirstDecorator(component);
        const decorator2 = new SecondDecorator(decorator1);
        console.log(decorator1.operation());
        console.log(decorator2.operation());
        console.log();

        //TODO Facade programming pattern
        console.log(`Facade pattern: `);
        const component1 = new FirstComponent();
        const component2 = new SecondComponent();
        const facade = new Facade(component1, component2);
        console.log(facade.operation1());
        console.log(facade.operation2());
        console.log();

        //TODO Chain programming pattern
        console.log(`Chain pattern: `);
        const forThird = 'For third';
        const forFirst = 'For first';
        const firstHandler = new FirstHandler();
        const secondHandler = new SecondHandler();
        const thirdHandler = new ThirdHandler();
        firstHandler.setNext(secondHandler).setNext(thirdHandler);
        const handleResult1 = firstHandler.handle(forThird);
        const handleResult2 = firstHandler.handle(forFirst);
        console.log(handleResult1);
        console.log(handleResult2);
        console.log();

        //TODO Prototype programming pattern
        console.log(`Prototype pattern: `);
        const prototype = new Prototype();
        prototype.firstField = 0;
        prototype.secondField = new Date();
        prototype.thirdField = new LinkedObject(prototype);
        const clone = prototype.clone();
        console.log('prototype.firstField === clone.firstField: ' + (prototype.firstField === clone.firstField));
        console.log('prototype.secondField === clone.secondField: ' + (prototype.secondField === clone.secondField));
        console.log('prototype.thirdField === clone.thirdField: ' + (prototype.thirdField === clone.thirdField));
        console.log('prototype.thirdField.prototype === clone.thirdField.prototype: ' + (prototype.thirdField.link === clone.thirdField.link));
        console.log();

}
bootstrap();