// Вузькоспеціалізовані інтерфейси
export interface IPrinter {
    print(document: string): void;
}

export interface IScanner {
    scan(document: string): void;
}

export interface IFax {
    fax(document: string): void;
}

// Багатофункціональний пристрій реалізує лише ті інтерфейси, які йому справді потрібні
export class MultiFunctionPrinter implements IPrinter, IScanner, IFax {
    print(document: string): void {
        console.log(`Printing: ${document}`);
    }
    scan(document: string): void {
        console.log(`Scanning: ${document}`);
    }
    fax(document: string): void {
        console.log(`Faxing: ${document}`);
    }
}

// Тепер звичайний принтер реалізує ЛИШЕ те, що він вміє робити
export class SimplePrinter implements IPrinter {
    print(document: string): void {
        console.log(`Printing: ${document}`);
    }
    // Жодних методів-заглушок, які кидають помилки!
}