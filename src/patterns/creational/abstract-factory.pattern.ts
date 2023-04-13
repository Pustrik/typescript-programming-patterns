interface Product {
    assemble(): string;
}

abstract class Factory {
    public abstract creator(index: number): Product | Factory | string;
}

class FirstProduct implements Product {
    constructor(private readonly factory: string) {}
    assemble(): string {
        return 'First product has been assembled with ' + this.factory;
    }
}

class SecondProduct implements Product {
    constructor(private readonly factory: string) {}
    assemble(): string {
        return 'Second product has been assembled with ' + this.factory;
    }
}

class FirstFactory implements Factory{
    private readonly factory = 'First factory';
    public creator(index: number): string {
        switch (index) {
            case 1:
                return new FirstProduct(this.factory).assemble();
            case 2:
                return new SecondProduct(this.factory).assemble();
            default:
                return null;
        }
    }
}

class SecondFactory implements Factory{
    private readonly factory = 'Second factory';
    public creator(index: number): string {
        switch (index) {
            case 1:
                return new FirstProduct(this.factory).assemble();
            case 2:
                return new SecondProduct(this.factory).assemble();
            default:
                return null;
        }
    }
}

export class FactoryCreator implements Factory {
    creator(index: number): Factory {
        switch (index) {
            case 1:
                return new FirstFactory();
            case 2:
                return new SecondFactory();
            default:
                return null;
        }
    }
}
