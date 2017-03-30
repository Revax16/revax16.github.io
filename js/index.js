var main = function () {
    // Text Section Hero
    var desc = ['vous donner des frissons.', 'vous donner surprendre.'],
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

    // // Load header Image
    // var img = new Image();
    // img.src = './img/header.jpeg';
    // img.onload = function () {
    //     console.log('a');
    //     document.querySelector('.hero-container').style.background = 'url(\'./img/header.jpeg\') no-repeat cover';
    // }
}
main();
