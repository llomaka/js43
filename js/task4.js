// todo Заметки

/*
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
 */


// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

/*
* Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).
*/

class Notes {
  static Priority = {
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}

  constructor({ text, priority } = {}) {
    this.items = [];
    this.items.push({ 'text': text, 'priority': priority });
  }

  addNote(note) { 
    this.items.push(note);
  }
  removeNote(text) {
    this.items = this.items.filter(element => element.text !== text);
    // if (this.items.find((item, index) => item.text === text ) {
    //   return `В массиве заметок отсутствует заметка ${text}`;
    // } else {
    //   this.items.splice(this.items.indexOf(text), 1);
    // }
  }
  updatePriority(text, newPriority) {
    const item = this.items.find(element => element.text === text);
    this.item.priority = newPriority;
    // this.items.forEach(element => {
    //   if (element.text === text) {
    //     element.priority = newPriority;
    //   }
    // })
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя вторая заметка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя первая заметка');
console.log(myNotes.items);

myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
console.log(myNotes.items);
