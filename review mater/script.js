const form= document.querySelector(form)
form.addEventListener('submit', hello)

function cari(e) {
    e.preventDefault()
    const key = document.querySelector('#name').value
    if(key ===""){
        alert("Isi nama dulu dong");
    }else{
        alert(`${key}`);
    }
}

// cons value nya tetap ga bisa diubah
// let bisa diubah value nya
