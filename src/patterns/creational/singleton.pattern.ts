export class SingletonPattern {
    private static singletonInstance: SingletonPattern;
    private static payload: number;
    private constructor() {}

    public static getInstance(): SingletonPattern {
        if(!this.singletonInstance)
            this.singletonInstance = new SingletonPattern();

        return this.singletonInstance;
    }
    public static getPayload(): number {
        return this.payload;
    }
    public static setPayload(payload: number): void {
        this.payload = payload;
    }

}