let t = '
awdawd
'

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.innerHTML = t
    body.appendChild(div)
});
