class Smoothie {
    constructor(name, base, fruits, extras) 
    {
        this.name = name;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
    }

    getDescription() 
    {
        return `
            <h2>${this.name}'s Smoothie</h2>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${this.fruits.join(', ')}</p>
            <p><strong>Extras:</strong> ${this.extras.join(', ')}</p>
        `;
    }
}

document.getElementById('order-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const base = document.getElementById('base').value;
    const fruits = Array.from(document.getElementById('fruits').selectedOptions).map(option => option.value);
    const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value);

    const smoothie = new Smoothie(name, base, fruits, extras);

    document.getElementById('order-summary').innerHTML = smoothie.getDescription();
});