interface IQuickLaugth {
    id: number;
}

export const videoQL: IQuickLaugth[] = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 },
];

export const getMonthString: Function = (): string => {
    switch (new Date().getMonth()) {
        case 0:
            return 'JAN';
        case 1:
            return 'FEV';
        case 2:
            return 'MAR';
        case 3:
            return 'ABR';
        case 4:
            return 'MAI';
        case 5:
            return 'JuN';
        case 6:
            return 'Jul';
        case 7:
            return 'AGO';
        case 8:
            return 'SET';
        case 9:
            return 'OUT';
        case 10:
            return 'NOV';
        case 11:
            return 'DEZ';
        default:
            return '';
    }
};

interface ISemiHeader {
    id: number;
    text: string;
    icon: 'popcorn' | 'fire' | 'gamepad-variant' | 'numeric-10-box';
}

export const semiHeader: ISemiHeader[] = [
    { id: 0, text: 'Em breve', icon: 'popcorn' },
    { id: 1, text: 'Todo mundo está assistindo', icon: 'fire' },
    { id: 2, text: 'Jogos', icon: 'gamepad-variant' },
    { id: 3, text: 'Top 10 em séries', icon: 'numeric-10-box' },
    { id: 4, text: 'Top 10 em filmes', icon: 'numeric-10-box' },
];
