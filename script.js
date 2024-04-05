function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
}
let resizaableTextareas = document.querySelectorAll("[data-textarea-auto-resize]");
resizaableTextareas.forEach(textarea => {
    textarea.style.resize = "none";
    textarea.addEventListener("keyup", () => {
        textarea.style.height = calcHeight(textarea.value) + "px";
    });
})

//  I thought a resizing textarea would be cool ^ https://codepen.io/phpcodertech/pen/oNXVzWW?editors=1010 Source ^
