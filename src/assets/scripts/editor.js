const editorToolbarButtons = document.querySelectorAll('.editor_toolbar_button');


if(editorToolbarButtons != null && editorToolbarButtons.length > 0){
    editorToolbarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tagValue = e.target.parentElement.id;

            const selectedParagraph = editorFunction('editor');

            if(tagValue == 'bold'){
                console.log(tagValue);
                debugger;
                let editorValue = document.getElementById('editor').value;
                console.log(editorValue);
                var c = editorValue.replace(selectedParagraph, `<b>${selectedParagraph}</b>` );
                console.log(c)
            }
        })
    });
}


function editorFunction(editorId){
    const editor = document.getElementById(editorId);

    if(editor != null){
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        return selectedParagraph = editor.value.substring(start, end);
    }
}