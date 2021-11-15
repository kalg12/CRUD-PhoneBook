function addElement(){

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var company = document.getElementById("company").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;    
    var comments = document.getElementById("comments").value;

    var contact = {
        name: name,
        lastname: lastname,
        company: company,
        phone: phone,
        email: email,       
        comments: comments
    };
    
    localStorage.setItem("data",JSON.stringify(contact));

    window.location.reload();

    alert("Registro guardado");

}

window.onload = function(){
    var contact = localStorage.getItem("data");
    
    if(contact != null){
        var contact = JSON.parse(contact);

        var templateTR = `<tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo electrónico</th>
                            <th scope="col">Comentarios</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
    
                        <tr>
                            <td>${contact.name}</td>
                            <td>${contact.lastname}</td>
                            <td>${contact.company}</td>
                            <td>${contact.phone}</td>
                            <td>${contact.email}</td>
                            <td>${contact.comments}</td>
                            <td><button type="button" class="btn btn-warning" onclick="showElement()">Editar</button></td>
                            <td><button type="button" class="btn btn-danger" onclick="deleteElement()">Eliminar</button></td>
                        </tr>`;

        var tbodyPersona = document.getElementById("tbodyPersona");
        tbodyPersona.innerHTML = templateTR;
    }
}

function showElement(){
    var contact = localStorage.getItem("data");
    var contact = JSON.parse(contact);

    document.getElementById("name").value = contact.name;
    document.getElementById("lastname").value = contact.lastname;
    document.getElementById("company").value = contact.company;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;
    document.getElementById("comments").value = contact.comments;
}

function deleteElement(){
    if(confirm("¿Deseas eliminar este registro?")){
        localStorage.removeItem("data");
        window.location.reload();
    }
}