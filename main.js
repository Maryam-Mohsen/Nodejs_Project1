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
msg.innerText = "User added successfully!";
    users.push(user)
    displayUsers()
    cancelInputs()
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
            <td>
                <button onclick="editUser(${i})">Edit</button> 
                <button onclick="deleteUser(${i})">Delete</button>
            </td>
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
function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?"))
        users.splice(index, 1);
        displayUsers();
    }

let editIndex = null;

function editUser(index) {
    let user = users[index];
    editIndex = index;
    
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('age').value = user.age;
    document.getElementById('specialty').value = user.specialty;
    
    let addBtn = document.getElementById("addUser");
    addBtn.innerText = "Save Changes";
    addBtn.onclick = saveEdit; 
}

function saveEdit() {
    if (editIndex !== null) {
        users[editIndex] = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            age: document.getElementById('age').value,
            specialty: document.getElementById('specialty').value
        };
        
        editIndex = null;
        document.getElementById("addUser").innerText = "Add User";
        document.getElementById("addUser").onclick = addUser;
        cancelInputs(); 
        displayUsers();
    }
}

document.getElementById("search").oninput = function() {
    let searchValue = this.value; 
    let filteredUsers = users.filter(user => 
        user.name.includes(searchValue) || 
        user.email.includes(searchValue)
    );
    
    renderFilteredUsers(filteredUsers);
};

document.getElementById("select").onchange = function() { 
    let filterValue = this.value;
    if (filterValue === "all") {
        displayUsers(); 
    } else{
        let filteredUsers = users.filter(user => user.specialty == filterValue);
        renderFilteredUsers(filteredUsers);
    }
};

function renderFilteredUsers(filteredData) {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = ""; 
    
    if (filteredData.length === 0) {
        tbody.innerHTML = "<tr>No matching users found.</tr>";
        return;
    }

    filteredData.forEach(user => {
        let tr = document.createElement('tr'); 
        
        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>${user.specialty}</td>
            <td>
                <button onclick="editUser(${users.indexOf(user)})">Edit</button>
                <button onclick="deleteUser(${users.indexOf(user)})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
