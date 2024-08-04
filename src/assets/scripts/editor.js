const editorToolbarButtons = document.querySelectorAll('.editor_toolbar_button');


if(editorToolbarButtons != null && editorToolbarButtons.length > 0){
    editorToolbarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tagValue = e.target.parentElement.id;
            debugger;
            if(tagValue == 'bold'){
                // bold
                return applyHTMLTag('editor', 'editor_example', 'b')
            }

            if(tagValue == 'italic'){
                // italic
                return applyHTMLTag('editor', 'editor_example', 'i')
            }

            if(tagValue == 'li'){
                // list
                return applyHTMLTag('editor', 'editor_example', 'li')
            }

            if(tagValue == 'p'){
                return applyHTMLTag('editor', 'editor_example', 'p')
            }

            if(tagValue == 'h1'){
                return applyHTMLTag('editor', 'editor_example', 'h1')
            }

            if(tagValue == 'h2'){
                return applyHTMLTag('editor', 'editor_example', 'h2')
            }

            if(tagValue == 'h3'){
                return applyHTMLTag('editor', 'editor_example', 'h3')
            }

            if(tagValue == 'h4'){
                return applyHTMLTag('editor', 'editor_example', 'h4')
            }

            if(tagValue == 'h5'){
                return applyHTMLTag('editor', 'editor_example', 'h5')
            }

            if(tagValue == 'h6'){
                return applyHTMLTag('editor', 'editor_example', 'h6')
            }
        })
    });
}

function applyHTMLTag(editorID, editorExampleID, htmlTag){
    const selectedParagraph = editorFunction(editorID);
    const editorIDElement = document.getElementById(editorID);
    const editorExampleIDElement = document.getElementById(editorExampleID);

    const finalTextVersion = editorIDElement.value.replace(selectedParagraph, `<${htmlTag}>${selectedParagraph}</${htmlTag}>` );
    editorIDElement.value = finalTextVersion;
    editorExampleIDElement.innerHTML = finalTextVersion;
}

function editorFunction(editorId, htmlTag){
    const editor = document.getElementById(editorId);
    if(editor != null){
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        return selectedParagraph = editor.value.substring(start, end);
    }
}