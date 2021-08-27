import { HasFormatter } from "../interfaces/HasFormatter";

// class
export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.recipient} pays $${this.amount} for ${this.details}`;
    }
}