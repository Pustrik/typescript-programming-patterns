interface Component {
    operation(): string;
}

export class SimpleComponent implements Component{
    operation(): string {
        return 'Simple component';
    }
}

class Decorator implements Component {
    constructor(protected readonly component: Component) {}

    operation(): string {
        return this.component.operation();
    }
}

export class FirstDecorator extends Decorator {
    operation(): string {
        return 'First decorator: ' + super.operation();
    }
}

export class SecondDecorator extends Decorator {
    operation(): string {
        return 'Second decorator: ' + super.operation();
    }
}