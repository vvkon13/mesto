let editbutton = document.querySelector ('.profile__button-change');
let closebutton = document.querySelector ('.popap__button-close');
let saveclosebutton = document.querySelector ('.popap__button-save');

function CallPopap () {
    let popapview = document.querySelector ('.popap');
    let popapname = document.querySelector ('.popap__name');
    let popap__description = document.querySelector('.popap__description');
    let profile__name = document.querySelector('.profile__name');
    let profile__description = document.querySelector('.profile__description');

    popapname.value = profile__name.textContent;
    popap__description.value = profile__description.textContent;
    popapview.className = 'popap popap_opened';
  

}
function ClosePopap () {
    let popapview = document.querySelector ('.popap');
    popapview.className = 'popap';
}
function SavePopap () {
    let popapview = document.querySelector ('.popap');
    let popapname = document.querySelector ('.popap__name');
    let popap__description = document.querySelector('.popap__description');
    let profile__name = document.querySelector('.profile__name');
    let profile__description = document.querySelector('.profile__description');
    profile__name.textContent = popapname.value;
    profile__description.textContent = popap__description.value;
}
function SaveAndClosePoppap () {
    SavePopap ();
    ClosePopap ();
}


editbutton.addEventListener('click', CallPopap);
closebutton.addEventListener('click', ClosePopap);
saveclosebutton.addEventListener('click', SaveAndClosePoppap);