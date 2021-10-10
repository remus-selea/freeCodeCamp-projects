const projectName = 'product-landing-page';

let thumbnails = document.getElementsByClassName('thumbnail')

let activeImages = document.getElementsByClassName('active')

for (var i = 0; i < thumbnails.length; i++) {

	thumbnails[i].addEventListener('click', function () {
		console.log(activeImages)

		if (activeImages.length > 0) {
			activeImages[0].classList.remove('active')
		}


		this.classList.add('active')
		document.getElementById('featured').src = this.src
	})
}


let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');


buttonLeft.addEventListener('click', function () {
	document.getElementById('slider').scrollLeft -= 180

})

buttonRight.addEventListener('click', function () {
	document.getElementById('slider').scrollLeft += 180

})


let navToggle = document.getElementById('hamburger-menu');
let navMenu = document.getElementById('nav-bar');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('nav-menu-open');
}, false);

