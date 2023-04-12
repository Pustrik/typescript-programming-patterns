export class Standard {
    public request(): string {
        return 'Standard well working class';
    }
}

export class NotStandard {
    public request(): string {
        return 'Not.standard.class';
    }
}

export class Adapter extends Standard {
    constructor(private readonly nonStandard: NotStandard) {
        super();
    }

    request(): string {
        return this.nonStandard.request().split('.').join(' ');
    }
}

export class Handler {
    public handle(standard: Standard | any) {
        if(standard instanceof Standard)
            console.log('Handle result: ' + standard.request());
        else
            console.log('Cant candle this!');
    }
}