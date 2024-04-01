let id = 1

const saveBtn = document.getElementById('saveBook')
const readingListTable = document.getElementById('bookTable')
// Consts for all the inputs so I can add validation
const bookTitle = document.getElementById('createBook_title')
const bookSeries = document.getElementById('createBook_series')
const bookAuthor = document.getElementById('createBook_author')
const bookReadStatus = document.querySelector('input[name="createBookReadStatus"]:checked')


saveBtn.addEventListener('click', () => {
    insertRow()
    resetInputs()
})
function insertRow() {
    validateInputs()
    let row = readingListTable.insertRow(1)
    row.setAttribute('id', `id-${id}`)
    row.setAttribute('class', 'align-middle position-relative')
    row.insertCell(0).innerHTML = bookTitle.value
    row.insertCell(1).innerHTML = bookSeries.value
    row.insertCell(2).innerHTML = bookAuthor.value
    row.insertCell(3).innerHTML = `<p class="book_STATUS">${document.querySelector('input[name="createBookReadStatus"]:checked').value}</p>`
    let editEntry = row.insertCell(4)
    editEntry.appendChild(editBtn(id++))

}
function validateInputs() {


}
function resetInputs() {
    // Resets inputs 
    document.getElementById('createBook_title').value = ' '
    document.getElementById('createBook_series').value = ' '
    document.getElementById('createBook_author').value = ' '
    document.querySelector('input[name="createBookReadStatus":checked').value = ' '

}
function editBtn(id) {
    let btn = document.createElement('button')
    btn.className = 'btn btn-as-link'
    btn.id = id
    btn.innerHTML = '<button class="btn btn-as-link btn-sm" data-edit-entry ><i class="fa fa-edit pe-2" aria-hidden="true"></i>Edit</button>'
    btn.onclick = () => {
        console.log(`Edit row item-${id}`)
        let editRow = document.getElementById(`id-${id}`)
        editRow.parentNode.removeChild(editRow)
    };
    return btn;
}