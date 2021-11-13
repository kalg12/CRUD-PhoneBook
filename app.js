function addElement(){

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comments = document.getElementById("comments").value;

    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("company", company);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("comments", comments);
       
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