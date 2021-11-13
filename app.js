function addElement(){

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comments = document.getElementById("comments").value;

    var contact = {
        name: name,
        lastname: lastname,
        company: company,
        email: email,
        phone: phone,
        comments: comments
    };
    
    localStorage.setItem("data",JSON.stringify(contact));

    window.location.reload();

    
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
                        </tr>
    
                        <tr>
                            <td>${contact.name}</td>
                            <td>${contact.lastname}</td>
                            <td>${contact.company}</td>
                            <td>${contact.email}</td>
                            <td>${contact.phone}</td>
                            <td>${contact.comments}</td>
                        </tr>`;

        var tbodyPersona = document.getElementById("tbodyPersona");
        tbodyPersona.innerHTML = templateTR;
    }
}

function showElement(){
    var name = localStorage.getItem("name");
    var lastname = localStorage.getItem("lastname");
    var company = localStorage.getItem("company");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var comments = localStorage.getItem("comments");

    if(name != null){
        document.getElementById("name").value = name;
    }
    if(lastname != null){
        document.getElementById("lastname").value = lastname;
    }
    if(company != null){
        document.getElementById("company").value = company;
    }
    if(email != null){
        document.getElementById("email").value = email;
    }
    if(phone != null){
        document.getElementById("phone").value = phone;
    }
    if(comments != null){
        document.getElementById("comments").value = comments;
    }else{
        alert("No hay datos por mostrar");
    }
        
}

function deleteElement(){

    if(localStorage.getItem("name") != null || localStorage.getItem("lastname") != null || localStorage.getItem("company") != null || localStorage.getItem("email") != null || localStorage.getItem("phone") != null || localStorage.getItem("comments") != null){

    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    localStorage.removeItem("company");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("comments");
    
    alert("Datos eliminados");
    }else{
        alert("No hay datos por borrar");
    }
}