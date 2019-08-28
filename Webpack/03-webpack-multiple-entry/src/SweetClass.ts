export class SweetClass {
    private msg: string;

    constructor() {
        this.msg = "Even Sweeter";
    }

    public p(): string {
        return this.msg;
    }
}