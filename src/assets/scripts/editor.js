const editorToolbarButtons = document.querySelectorAll('.editor_toolbar_button');


if(editorToolbarButtons != null && editorToolbarButtons.length > 0){
    editorToolbarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const tagValue = e.target.parentElement.id;

            if(tagValue == 'bold'){
                // bold
                return applyHTMLTag('editor', 'editor_example', 'b')
            }

            if(tagValue == 'italic'){
                // italic
                return applyHTMLTag('editor', 'editor_example', 'i')
            }

            if(tagValue == 'ul'){
                // list
                return applyHTMLTag('editor', 'editor_example', 'ul')
            }

            if(tagValue == 'ol'){
                // list
                return applyHTMLTag('editor', 'editor_example', 'ol')
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

            if(tagValue == 'url'){
                let urlPrompt = prompt('Enter Url for the selected text', 'https://arup.com');
                console.log(urlPrompt);
                return applyHTMLTag('editor', 'editor_example', 'a', urlPrompt  );
            }
        })
    });
}

function applyHTMLTag(editorID, editorExampleID, htmlTag, promptValue = null){
    let finalTextVersion = '';
    const selectedParagraph = editorFunction(editorID);
    const editorIDElement = document.getElementById(editorID);
    const editorExampleIDElement = document.getElementById(editorExampleID);

    if(htmlTag == 'ul' || htmlTag == 'ol'){
        // check if each paragraph is in another line or not
        // if each paragraph is in a new line, add multiple li tags
        var lines = selectedParagraph.split('\n');
        debugger;
        // warp the list
        let result  = `<${htmlTag}>\n`;
        for(let i = 0; i < lines.length; i++){
            result += `<li>${lines[i]}</li>\n`;
        }
        result += `</${htmlTag}>`

        finalTextVersion = editorIDElement.value.replace(selectedParagraph, `${result}` );
    }else if(htmlTag == 'a'){
        finalTextVersion = editorIDElement.value.replace(selectedParagraph, `<${htmlTag} href='${promptValue}' target='_blank'>${selectedParagraph}</${htmlTag}>` );
    }else{
        finalTextVersion = editorIDElement.value.replace(selectedParagraph, `<${htmlTag}>${selectedParagraph}</${htmlTag}>` );
    }

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

function displayReview(editorId, editorExampleID){
    if(document.getElementById(editorId) != null){
        const editor = document.getElementById(editorId);
        const editorExample = document.getElementById(editorExampleID);
        editorExample.innerHTML = editor.value;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    return displayReview('editor', 'editor_example')
})