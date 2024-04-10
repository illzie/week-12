//***** STATE *****//
let savedNotes = []


async function fetchNotes() {
    const response = await fetch('http://localhost:3000/saved_notes')
    const fetchedNotes = await response.json()
    savedNotes = fetchedNotes
    renderSavedNotes()
}
fetchNotes()
const notesListContainer = document.querySelector('[data-saved-notes]')
function renderSavedNotes() {
    for (let i = 0; i < savedNotes.length; i++) {
        const card = document.createElement('div')
        card.classList = 'card p-1'
        card.innerHTML = `
            <label class="form-control-sm text-secondary text-opacity-50">Created on ${savedNotes[i].dateCreated}
            <p><strong>Tags:</strong> ${savedNotes[i].tag}</p>
            </label>
            <textarea style="border:0;outline:0;" class="card-body form-control-sm bg-white" name="randomID" id="randomID" data-textarea-auto-resize disabled>${savedNotes[i].content}</textarea>
        `
        notesListContainer.append(card)
    }
}


function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
}
let resizaableTextareas = document.querySelectorAll("[data-textarea-auto-resize]");
resizaableTextareas.forEach(textarea => {
    textarea.addEventListener("keyup", () => {
        textarea.style.height = calcHeight(textarea.value) + "px";
    });
})

//  I thought a resizing textarea would be cool ^ https://codepen.io/phpcodertech/pen/oNXVzWW?editors=1010 Source ^
