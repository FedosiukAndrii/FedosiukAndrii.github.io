
const updateDate = function () {
    let date = new Date();
    document.querySelector('.date-container').textContent = date.getDay() + '.' + date.getMonth() + '.'
        + date.getFullYear() + '  ' + date.getHours() + ':' + date.getMinutes();
}
    (function () {
        updateDate();
    })();

