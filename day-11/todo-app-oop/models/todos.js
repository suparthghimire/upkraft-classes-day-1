export class Todos {
    constructor(text, id = Date.now(), completed = false) {
        this.text = text;
        this.id = id;
        this.completed = completed;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}