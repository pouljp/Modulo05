function verde(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('verde')
    document.getElementById("exemplo").innerHTML = "TEXTO Verde";
}
function vermelho(){
    document.querySelector('#exemplo').classList.remove('verde')
    document.querySelector('#exemplo').classList.remove('azul')
    document.querySelector('#exemplo').classList.add('vermelho')
    document.getElementById("exemplo").innerHTML = "TEXTO Vermelho";


}
function azul(){
    document.querySelector('#exemplo').classList.remove('vermelho')
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('azul');
    document.getElementById("exemplo").innerHTML = "TEXTO Azul";

}

function trocar(){
    // var b = document.querySelector('button')

    if(b.classList.contains('preto')){
        b.classList.remove('preto');
        b.classList.add('verde');
        // var a = document.getElementById("exemplo");
        a.innerHTML = "New Texto"
       
    }else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');

    }
}




