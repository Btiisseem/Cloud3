const alleSterren = document.querySelectorAll('.mijn-container .fas.fa-star');
const beoordelingWaarde = document.querySelector('.mijn-container input');

alleSterren.forEach((item, idx) => {
    item.addEventListener('click', function () {
        beoordelingWaarde.value = idx + 1;

        alleSterren.forEach((i, iIdx) => {
            if (iIdx <= idx) {
                i.classList.add('active');
            } else {
                i.classList.remove('active');
            }
        });
    });
});
