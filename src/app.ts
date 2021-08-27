import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    let doc: HasFormatter;
    const values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})