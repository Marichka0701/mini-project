// // В index.html
// // 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            const div = document.createElement('div');
            div.classList.add('user-block');

            const a = document.createElement('a');
            a.innerHTML = `<b>id:</b> ${user.id}, <b>name: </b> ${user.name}`;
            a.href = `user-details.html?id=${user.id}`;
            div.appendChild(a);

            const button = document.createElement('button');
            button.innerText = 'full info';
            button.addEventListener('click', () => {
                window.location.href = `user-details.html?id=${user.id}`;
            });
            div.appendChild(button);

            container.appendChild(div);
        }
    });