let users = []

document.getElementById("addUser").onclick = addUser;
document.getElementById("cancel").onclick = cancelInputs;

function addUser() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let age = document.getElementById('age').value
    let specialty = document.getElementById('specialty').value
    let msg = document.getElementById('msg')
    
  if (name === "" || email === "" || age === "" || specialty === "") {
    msg.innerText = "Please fill all fields";
    return;
  }
    let user = {
        name: name,
        email: email,
        age: age,
        specialty: specialty
    }

    users.push(user)
    displayUsers()
}
function displayUsers() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = ""
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.specialty}</td>
        `
        tbody.appendChild(tr)
    }   
}

function cancelInputs() {
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('age').value = ""
    document.getElementById('specialty').value = ""
}
