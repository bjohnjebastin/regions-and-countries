export interface Country {
    name: string;
    capital: string;
    population: number;
    currencies: Array<Currency>;
    flag: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}
