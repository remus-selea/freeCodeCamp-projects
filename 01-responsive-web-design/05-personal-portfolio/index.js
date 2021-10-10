const projectName = 'portfolio';


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.masthead').classList.remove('hide')
  } else {
    document.querySelector('.masthead').classList.add('hide')
  }
};


