
const dropdown = document.querySelector(".drop-down");
const btn = document.querySelector(".btn");
dropdown.addEventListener('change', () => {
    const city = dropdown.value;
    localStorage.setItem('selectedCity', city);
    console.log(city)
});
btn.addEventListener("click", () => {
    window.location.href = 'second.html';
})

