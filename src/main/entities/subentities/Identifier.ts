interface Identifier{
    readonly identifier: number;
    getIdentifier(): number;
}

export class ISBN implements Identifier{
    readonly identifier: number;

    constructor(identifier: number) {
        if(!(identifier > 9999999999999 || identifier < 0)){
            this.identifier = identifier;
        }
        else{
            throw new Error('ISBN Non Valide')
        }
    }

    getIdentifier(): number {
        return this.identifier;
    }
}

export class DiscId implements Identifier{
    readonly identifier: number;

    constructor(identifier: number) {

    }
}