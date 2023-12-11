function selectFile() {
    var input = document.createElement('input');
    input.type = 'file';
    // <input type="file" id="files" accept=".pdf"></input>

    input.onchange = e => { 
        var file = e.target.files[0]; 
}

input.click();
// file.type = application/pdf
    

}