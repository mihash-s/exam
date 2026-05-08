// Загальний, "товстий" інтерфейс
export interface IMachine {
    print(document: string): void;
    scan(document: string): void;
    fax(document: string): void;
}

// Багатофункціональний принтер легко реалізує всі методи
export class MultiFunctionPrinter implements IMachine {
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

// ПРОБЛЕМА: Звичайний принтер змушений реалізовувати методи, які йому не потрібні
export class SimplePrinter implements IMachine {
    print(document: string): void {
        console.log(`Printing: ${document}`);
    }
    scan(document: string): void {
        // Ми змушені кидати помилку або залишати метод порожнім
        throw new Error("SimplePrinter cannot scan.");
    }
    fax(document: string): void {
        throw new Error("SimplePrinter cannot fax.");
    }
}