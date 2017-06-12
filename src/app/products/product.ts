export interface IProduct {
    productId: number;
    productName: string;
    country: string;
    available: boolean;
    price: number;
    description: string;
    imageUrl: string;
    category: ProductCategory;
}

export enum ProductCategory {
    PaleAle,
    Lager
};