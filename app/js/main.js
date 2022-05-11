Vue.createApp({
	data() {
		return {
			cards: [
				{
					id: 1,
					title: '«Рождение Венеры» Сандро Боттичелли',
					img: './images/painting-1.jpg',
					prevPrice: '2 000 000 $',
					currentPrice: '1 000 000 $',
					sale: true,
				},
				{
					id: 2,
					title: '«Тайная вечеря»  Леонардо да Винчи',
					img: './images/painting-2.jpg',
					prevPrice: null,
					currentPrice: '3 000 000 $',
					sale: true,
				},
				{
					id: 3,
					title: '«Сотворение Адама» Микеланджело',
					img: './images/painting-3.jpg',
					prevPrice: '6 000 000 $',
					currentPrice: '5 000 000 $',
					sale: true,
				},
				{
					id: 4,
					title: '«Урок анатомии»  Рембрандт',
					img: './images/painting-4.jpg',
					prevPrice: null,
					currentPrice: null,
					sale: false,
				},
			],
			cart: [],
            loading: false,
            slideIndex: 1,
		}
	},
	methods: {
		addToCart(id) {
            this.loading = true
			let promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					return resolve()
				}, 2000)
			})
			promise.then(() => {
				alert('done')
                this.loading = false
			})
		},
        showSlides(n = 1) {
            var i;
            var slides = document.getElementsByClassName("item");
            var dots = document.getElementsByClassName("slider-dots_item");
            if (n > slides.length) {
              this.slideIndex = 1
            }
            if (n < 1) {
                this.slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";
        },
        plusSlide() {
            this.showSlides(this.slideIndex += 1);
        },
    
        minusSlide() {
            this.showSlides(this.slideIndex -= 1);  
        },
        
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },     
	},
}).mount('#app')


// /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);  
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
