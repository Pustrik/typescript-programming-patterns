export class Singleton {
    private static singletonInstance: Singleton;
    private static payload: number;
    private constructor() {}

    public static getInstance(): Singleton {
        if(!this.singletonInstance)
            this.singletonInstance = new Singleton();

        return this.singletonInstance;
    }
    public static getPayload(): number {
        return this.payload;
    }
    public static setPayload(payload: number): void {
        this.payload = payload;
    }

}