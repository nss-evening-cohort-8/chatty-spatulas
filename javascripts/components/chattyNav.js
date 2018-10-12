const users = ['Mohammad', 'Lance', 'Marco', 'Maggie'];
const select = document.getElementById('users');

for (name in users){
    select.add (new Option(users[name]));
};