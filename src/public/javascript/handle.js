let x = document.cookie;
if (x === "") {
    document.cookie = "white";
}

let handle_cookie = (cookie) => {
    if (cookie === "white" || cookie === "") {
        container.classList.add('dark_theme');
        document.getElementsByClassName('name')[0].classList.add('revert');
        document.getElementsByClassName('time')[0].classList.add('revert');
        document.getElementsByClassName('scroll_alert')[0].classList.add('revert');
        document.getElementsByClassName('name_logo')[0].classList.add('revert');
        let list = document.querySelectorAll('.item');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.add('item-revert');
         }
        setTimeout(() => {
            document.cookie = "dark";
        }, 1000)
    } else {
        container.classList.remove('dark_theme');
        document.getElementsByClassName('time')[0].classList.remove('revert');
        document.getElementsByClassName('scroll_alert')[0].classList.remove('revert');
        document.getElementsByClassName('name')[0].classList.remove('revert');
        document.getElementsByClassName('name_logo')[0].classList.remove('revert');
        let list = document.querySelectorAll('.item');
        for (var i = 0; i < list.length; ++i) {
            list[i].classList.remove('item-revert');
         }
        setTimeout(() => {
            document.cookie = "white";
        }, 1000)
    }
}

let container = document.getElementsByClassName('container')[0];
window.addEventListener('contextmenu', function (ev) {
    ev.preventDefault();
    return false;
}, false);

window.addEventListener("wheel", () => {
    let cookie = document.cookie;
    handle_cookie(cookie)
});

document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123 || event.keyCode == 18) {
        return false;
    }
}