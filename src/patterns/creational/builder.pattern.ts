export class BuilderPattern {
    private building: Building;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.building = new Building();
    }

    public addPart1(): void {
        this.building.addPart('Part1');
    }

    public addPart2(): void {
        this.building.addPart('Part2');
    }

    public addPart3(): void {
        this.building.addPart('Part3');
    }

    public getBuilding(): Building {
        const result = this.building;
        this.reset();
        return result;
    }
}

class Building {
    private parts: string[] = [];

    public addPart(part: string) {
        this.parts.push(part);
    }

    public showParts(): string {
        return 'Product parts: ' + this.parts.join(', ');
    }
}

export class Director {
    private builder: BuilderPattern;

    public setBuilder(builder: BuilderPattern): void {
        this.builder = builder;
    }

    public buildMin(): void {
        return this.builder.addPart1();
    }

    public buildMax(): void {
        this.builder.addPart1();
        this.builder.addPart2();
        this.builder.addPart3();
    }
}