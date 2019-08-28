class Animal {
    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    get getType(): string{
        return this.type;
    }
}