export class Product {

    constructor(
        public id: number,
        public sku: string,
        public name: string,
        public description: string,
        public unitPrice: number,
        public imageUrl: string,
        public active: boolean,
        public unitsInStock: number,
        public dateCreated: Date,
        public lastUpdated: Date
    ) {
    }

    static createEmpty(): Product {
        return new Product(
            0,
            '',
            '',
            '',
            0,
            '',
            false,
            0,
            new Date(),
            new Date()
        );
    }
}
