export class Prototype {
    public firstField: number;
    public secondField: any;
    public thirdField: LinkedObject;

    public clone(): this {
        const clone = Object.create(this);
        clone.secondField = Object.create(this.secondField);
        clone.thirdField = Object.create(this.thirdField);
        clone.thirdField = {
            ...this.thirdField,
            link: { ...this },
        };
        return clone;
    }
}

export class LinkedObject {
    public link;

    constructor(prototype: Prototype) {
        this.link = prototype;
    }
}