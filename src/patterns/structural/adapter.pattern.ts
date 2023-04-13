export class Standard {
    public operation(): string {
        return 'Standard well working class';
    }
}

export class NotStandard {
    public operation(): string {
        return 'Not.standard.class';
    }
}

export class AdapterPattern extends Standard {
    constructor(private readonly nonStandard: NotStandard) {
        super();
    }

    operation(): string {
        return this.nonStandard.operation().split('.').join(' ');
    }
}

export class Handler {
    public handle(standard: Standard | any) {
        if(standard instanceof Standard)
            console.log('Handle result: ' + standard.operation());
        else
            console.log('Cant candle this!');
    }
}