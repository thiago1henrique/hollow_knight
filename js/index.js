const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
    if (event.type === 'touchStart') event.preventDefaullt()
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu') 
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchStart', toggleMenu);

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.backgroundImage').css({
        filter: "blur(" + (scroll/50) + "px)"
    })
})

  //videos

  let video = document.getElementsByClassName("videoAtacar")[0];



  function atacar() {
    video.play();

}

let videoPular = document.getElementsByClassName("videoPular")[0];

  function pular() {
    videoPular.play();

  }

  var videoAndar = document.getElementsByClassName("videoAndar")[0];

  function andar() {
    videoAndar.play();

  }


