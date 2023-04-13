interface Handler {
    setNext(next: Handler): Handler;
    handle(request: string): string;
}

class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(next: Handler): Handler {
        this.nextHandler = next;
        return next;
    }

    public handle(request: string): string {
        if(this.nextHandler)
            return this.nextHandler.handle(request);
        return null;
    }
}

export class FirstHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request === 'For first')
            return 'First handler handled: ' + request;
        return super.handle(request);
    }
}

export class SecondHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request ==='For second')
            return 'Second handler handled: ' + request;
        return super.handle(request);
    }
}

export class ThirdHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request === 'For third')
            return 'Third handler handled: ' + request;
        return super.handle(request);
    }
}