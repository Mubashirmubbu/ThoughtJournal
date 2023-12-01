const entryForm = document.querySelector('.entry-form');
const entriesList = document.querySelector('.entries-list');

entryForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const date = event.target.date.value;
    const emotion = event.target.emotion.value;
    const entry = event.target.entry.value;

    const entryData = { date, emotion, entry };
    addEntryToJournal(entryData);
    displayEntries();
    event.target.reset();
});

const journalEntries = [];

function addEntryToJournal(entry) {
    journalEntries.push(entry);
}

function displayEntries() {
    entriesList.innerHTML = '';

    for (const entry of journalEntries) {
        const entryItem = document.createElement('li');
        entryItem.innerHTML = `
            <strong>Date:</strong> ${entry.date}<br>
            <strong>Emotion:</strong> ${entry.emotion}<br>
            <strong>Entry:</strong> ${entry.entry}<br>
        `;
        entriesList.appendChild(entryItem);
    }
}
