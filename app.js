function addElement(){

    var localStorageKeyName = 'data';

    if (document.getElementById("name").value == "" || document.getElementById("lastname").value == "") {
        alert("No se puede dejar el campo nombre y/o apellido vacío 😩");
    }else{

        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var company = document.getElementById("company").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;    
        var comments = document.getElementById("comments").value;

        var id = document.getElementById("hdnid").value;

        if (id !== "") {
            var contact = {
                id: id,
                name: name,
                lastname: lastname,
                company: company,
                phone: phone,
                email: email,       
                comments: comments
            }
        } else {
            var contact = {
                id: uuidv4(),
                name: name,
                lastname: lastname,
                company: company,
                phone: phone,
                email: email,       
                comments: comments
            }
        }
    }
    guardar(contact);
}

function guardar(obj){
    
    var localStorageKeyName = 'data';
    var data = JSON.parse(localStorage.getItem(localStorageKeyName));
    if (data == null) {
        data = [];
    }
    
    data.push(obj);

    localStorage.setItem(localStorageKeyName, JSON.stringify(data));

    location.reload();

}

window.onload = function(){
    var data = [],
    dataInLocalStorage = localStorage.getItem("data"),
    gridBody = document.querySelector("#grid tbody");
    
    if(dataInLocalStorage !== null){
        data = JSON.parse(dataInLocalStorage);
    }

    gridBody.innerHTML = '';

    data.forEach(function (x, i) {                

        var tr = document.createElement("tr"),
        tdName = document.createElement("td"),
        tdLastname = document.createElement("td"),
        tdCompany = document.createElement("td"),
        tdPhone = document.createElement("td"),
        tdEmail = document.createElement("td"),
        tdComments = document.createElement("td"),
        tdEdit = document.createElement("td"),
        btnRemove = document.createElement("button");

        tdName.innerHTML = x.name;
        tdLastname.innerHTML = x.lastname;
        tdCompany.innerHTML = x.company;
        tdPhone.innerHTML = x.phone;
        tdEmail.innerHTML = x.email;
        tdComments.innerHTML = x.comments;

        btnRemove.textContent = 'Eliminar';
        btnRemove.className = 'btn btn-xs btn-danger';
        btnRemove.addEventListener('click', function(){
        removeFromLocalStorage(i);
        });

        tdEdit.appendChild(btnRemove);

        tr.appendChild(tdName);
        tr.appendChild(tdLastname);
        tr.appendChild(tdCompany);
        tr.appendChild(tdPhone);
        tr.appendChild(tdEmail);
        tr.appendChild(tdComments);
        tr.appendChild(tdEdit);

        gridBody.appendChild(tr);
    });
}

function removeFromLocalStorage(index){
    var data = [],
    dataInLocalStorage = localStorage.getItem("data");

    data = JSON.parse(dataInLocalStorage);

    data.splice(index, 1);

    localStorage.setItem("data", JSON.stringify(data));

    location.reload();

}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
    }