const hidebtn = document.getElementById("hide-btn");

var kontrol = true;

hidebtn.addEventListener("click", function(){

    if(kontrol == true){
        hidebtn.innerHTML='<i class="fa-solid fa-eye-slash"></i>';
        document.getElementById("sifre").type="password";
        kontrol = false;
    }
    else{
        hidebtn.innerHTML='<i class="fa-solid fa-eye"></i>';
        document.getElementById("sifre").type="text";
        kontrol = true;
    }

});