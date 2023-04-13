interface Component {
    operation1(): string;
    operation2(): string;
}
export class Facade implements Component{
    protected component1: Component;
    protected component2: Component;
    constructor(component1?: Component, component2?: Component) {
        this.component1 = component1 || new FirstComponent();
        this.component2 = component2 || new SecondComponent();
    }
    operation1(): string {
        return this.component1.operation1() + ' ' + this.component2.operation1();
    }
    operation2(): string {
        return this.component1.operation2() + ' ' + this.component2.operation2();
    }

}

export class FirstComponent implements Component{
    operation1(): string {
        return 'First component, first operation';
    }
    operation2(): string {
        return 'First component, second operation';
    }
}

export class SecondComponent implements Component{
    operation1(): string {
        return 'Second component, first operation';
    }
    operation2(): string {
        return 'Second component, second operation';
    }
}