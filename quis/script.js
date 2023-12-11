// const value = document.querySelector("#value");
// const reset = document.querySelector(".button button--flat");
// const tambah = document.querySelector(".button button--danger");
// const kurang = document.querySelector(".button button--success")

let score = 0;

function resetValue() {
    value.innerHTML = 0;
}

function addValueWithNumber(number) {
  score+=number;
  value.innerHTML = score;
}
