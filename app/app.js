
setInterval('slider()',5000)

function slider(){
     var imgs = ["banner-principal.png","BANNER2.png"];
     var nome = busca();
     var posicao = imgs.indexOf(nome);
     if(posicao==0){   
        var elements = document.querySelector(`div.carrossel > img`);
        elements.src = "img/"+imgs[posicao+1]; 
    }else{
        var elements = document.querySelector(`div.carrossel > img`);
        elements.src = "img/"+imgs[posicao-1]; 
    }
}

function busca(){
    var elements = document.querySelector(`div.carrossel > img`);
    var caminho = elements.src.split('/');
    return caminho[caminho.length-1];
    
}

const text = document.querySelectorAll(`.texto-anuncio h1`);
const limit = 37;

for(let h1 of text){
    const abovelimit = h1.innerText.length > limit;
    const dotsOrEmpty = abovelimit ? '...' : '';
    h1.innerText = h1.innerText.substring(0, limit)+ dotsOrEmpty;
}

const textp = document.querySelectorAll(`.texto-anuncio p`);
const limitp = 60;

for(let p of textp){
    const abovelimitp = p.innerText.length > limitp;
    const dotsOrEmptyp = abovelimitp ? '...' : '';
    p.innerText = p.innerText.substring(0, limitp)+ dotsOrEmptyp;
}
