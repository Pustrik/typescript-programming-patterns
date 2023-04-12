interface Implementation {
    operation(): string;
}

export class FirstImplementation implements Implementation {
    public operation(): string {
        return 'First implementation';
    }
}

export class SecondImplementation implements Implementation {
    public operation(): string {
        return 'Second implementation';
    }
}

export class AbstractImplementer {
    constructor(protected readonly implementation: Implementation) {}

    public operation(): string {
        return 'Abstract implementer: ' + this.implementation.operation();
    }
}

export class Implementer extends AbstractImplementer {

    public operation(): string {
        return 'Implementer: ' + this.implementation.operation();
    }
}