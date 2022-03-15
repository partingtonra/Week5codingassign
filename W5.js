console.log("hello cruel world!");
console.log("OMG!  I got it to work!");
console.log("Week 5 coding assignment - JavaScript Create a Menu App");
console.log("I'm creating a Menu App using prompts that will manage the universe/tv shows and characters using Star Trek for my own conceptualization and testing puposes.");

//Working on Week 5 coding assignment.//
//Couldn't use html files used for previous labs and assignments.//
//Had to figure out how to create and link a new html file//
//UUUUGGH!  Took me forever to figure out!!//


class Character {
    constructor(name, rank) {
        this.name = name;
        this.rank = rank;
    }

    describe() {
        return `${this.name} has the rank of ${this.rank}.`;
    }
}

class Universe {
    constructor(name) {
        this.name = name;
        this.characters = [];
    }

    addCharacter(character) {
        if (character instanceof Character) {
            this.characters.push(character);
        } else {
            throw new Error (`You can only add an instance of Character.  Argument is not a character: ${character}`);
        }
    }

    describe() {
        return `${this.name} has ${this.characters.length} characters.`;
    }
}

class Menu {
    constructor() {
        this.universes = [];
        this.selectedUniverse = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createUniverse();
                    break;
                case '2':
                    this.viewUniverse();
                    break;
                case '3':
                    this.deleteUniverse();
                    break;
                case '4':
                    this.displayUniverses();
                    break;
                default:
                        selection = 0;                
            }
            selection = this.showMainMenuOptions();
        }    
        alert('Live Long and Prosper!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new universe
        2) view universe
        3) delete universe
        4) display all universes
        `);
    }


    showUniverseMenuOptions(universeInfo) {
        return prompt(`
            0) back
            1) create character
            2) delete character
            -------------------
            ${universeInfo}
        `);
    }

    displayUniverses() {
        let universeString = '';
        for (let i = 0; i < this.universes.length; i++) {
            universeString += i + ') ' + this.universes[i].name + '\n';
        }
        alert(universeString);
    }

    createUniverse() {
        let name = prompt('Enter name for new universe: ');
        this.universes.push(new Universe(name));
    }

    viewUniverse() {
        let index = prompt('Enter the index of the universe you want to view: ');
        if (index > -1 && index < this.universes.length) {
            this.selectedUniverse = this.universes[index];
            let description = 'Universe Name: ' + this.selectedUniverse.name + '\n';

            for (let i = 0; i < this.selectedUniverse.characters.length; i++) {
                description += i + ') ' + this.selectedUniverse.characters[i].name 
                    + ' - ' + this.selectedUniverse.characters[i].rank + '\n';
            }

            let selection = this.showUniverseMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();    
            }
        }
    }

    createCharacter() {
        let name = prompt('Enter name for character you want to create or add: ');
        let rank = prompt('Enter rank for created or added character: ');
        this.selectedUniverse.characters.push(new Character(name, rank));
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character you want to delete: ');
        if (index > -1 && index < this.selectedUniverse.characters.length) {
            this.selectedUniverse.characters.splice(index, 1);
        }
    }

    deleteUniverse() {
        let index = prompt('Enter the index of the universe you want to delete: ');
        this.selectedUinverse = this.universes[parseInt(index)];
        if (index > -1 && index < this.universes.length) {
            this.universes.splice(this.selectedUniverse, 1);
        }
    }
}

let menu = new Menu();
menu.start();
