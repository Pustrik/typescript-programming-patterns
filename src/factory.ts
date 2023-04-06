interface Product {
    assemble(): string;
}

abstract class Factory {
    public abstract creator(index: number): Product;
}

class FirstProduct implements Product {
    assemble(): string {
        return 'First product has been assembled.';
    }
}

class SecondProduct implements Product {
    assemble(): string {
        return 'Second product has been assembled.';
    }
}

export class FactoryExample implements Factory{
    public creator(index: number): Product {
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
