const Result = document.getElementById("Result");
const images = document.getElementById("images");
const number = document.getElementById("number");

function rolle() {
  const values = [];
  const imgs = [];
  for (let index = 0; index < number.value; index++) {
    let val = Math.floor(Math.random() * 6) + 1;
    values.push(val);
    imgs.push(`<img src="/images/R${val}.png"> `);
  }

  images.innerHTML = imgs.join("");
  Result.textContent = `results: ${values.join(", ")}`;
}
