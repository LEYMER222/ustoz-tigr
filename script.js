let inputName = document.querySelector('.inputName')
let inputPhone = document.querySelector('.inputPhone')
let contacts = document.querySelector('.contacts')
let addContact = document.querySelector('.addContact')

function addUser() {
  let user = document.createElement('li')
  user.classList.add('user')

  user.innerHTML = `
    <div class="number">
      <span class="userName">${inputName.value}</span>
      <span class="userPhone">${inputPhone.value}</span>
    </div>
    <div class="liButtons">
      <button class="change">✏️</button>
      <button class="change">🗑️</button>
    </div>
  `
  contacts.appendChild(user)
}

    document.querySelector(".del").addEventListener("click", function() {
        let user = this.closest('.user');
        user.remove();
    });
