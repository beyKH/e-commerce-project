var elSearchModalToggler = document.querySelector('.js-site-header__account--link');
var elModal = document.querySelector('.modal');

if (elSearchModalToggler) {
  elSearchModalToggler.addEventListener('click', function (evt) {
    evt.preventDefault();

    elModal.classList.add('modal--open');

    var elSearchInput = elModal.querySelector('.search-modal__input');
    elSearchInput.value = '';
    elSearchInput.focus();
  });
}

if (elModal) {
  elModal.addEventListener('click', function (evt) {
    if (evt.target.matches('.modal')) {
      elModal.classList.remove('modal--open');
    }
  });
}

/* NAVIGATION */
var elOpenNav = document.querySelector('.js-site-header__account--btn');
var elNav = document.querySelector('.sitenav');

elOpenNav.addEventListener('click', function() {
  elNav.classList.toggle('sitenav--open');
});