var main = function () {
    // Text Section Hero
    var desc = ['vous donner des frissons.', 'vous surprendre.'],
        int = setInterval(heroUpdate, 75),
        current = {d:0, l:0},
        el = document.querySelector('#hero-desc');
    function heroUpdate () {
        current.l++
        el.innerHTML = desc[current.d].substring(0, current.l);
        if (current.l > desc[current.d].length + 16)
            el.classList.add('hero-highlight');
        if (current.l > desc[current.d].length + 20) {
            current.d = current.d + 1 >= desc.length ? 0 : current.d + 1;
            current.l = 0;
            el.classList.remove('hero-highlight');
            el.innerHTML = ' ';
        }
    }
}
main();

function scroll () {
    document.querySelectorAll('[data-scroll]').forEach(function (e) {
        e.addEventListener('mousedown', function () {
            document.querySelector('#' + this.dataset.scroll).scrollIntoView({
                behavior: 'smooth'
            });
        });
    })
}
scroll();
