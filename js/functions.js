/**
* Una vez cargada la página, se cargan las imágenes del slider y los productos del catálogo
*/

 $(document).ready( function() 
 {
	 loadSlider();
	 loadProducts();
	 
 });
 
 $(document).on('click', '.prev', function()
 {
	 var slideWidth = $('.slider ul li').width();
	 $('.slider ul').animate(
	 {
		left: + slideWidth,
		speed: 'slow',
		easing: 'linear'
	 }, function()
	 {
		$('.slider ul li:last-child').prependTo('.slider ul');
		$('.slider ul').css('left','');
	 });

 });
 
 $(document).on('click', '.next', function()
 {
	var slideWidth = $('.slider ul li').width();
	 $('.slider ul').animate(
	 {
		left: - slideWidth,
		speed: 'slow',
		easing: 'linear'
	 }, function()
	 {
		$('.slider ul li:first-child').appendTo('.slider ul');
		$('.slider ul').css('left','');
	 });
 });
 
 /**
 * Carga la información de las imágenes del slider mediante Ajax
 */
 async function loadSlider() 
 {
	 var arraySlides = await getData('api/slides.json');
	 
	 var contentSlide = '';
	 arraySlides.forEach( function(slide) 
	 {
		contentSlide += '<li class="slide"><span class="slide__span"><h2>'+ slide.title +'</h2><button >'+ slide.button_text +'</button></span><img src="'+ slide.bg_image +'"></li>';
	 });
	 
	 $('.slider ul').append(contentSlide);
 }
 
 /**
 * Carga los productos mediante Ajax
 */
 async function loadProducts()
 {
	 var arrayProducts = await getData('api/products.json');
	 
	 var contentProduct = '';
	 arrayProducts.forEach( function(product) 
	 {
		 contentProduct += '<li class="product"><img class="product__img" src="'+ product.image +'"><span class="product__name">'+ product.name 
		 +'</span><span class="product__price">'+ product.price +'</span><button class="product__button">'+ product.button_text +'</button></li>';
	 });
	 
	 $('.products ul').append(contentProduct);
	 
	 //Modifica el orden de los productos 
	 var i = 3;
	 arrayProducts.forEach( function(product, index) {	 
		var iOrder = index + 1;
		if(i == 5 || i == 9) {
			iOrder++;
		}
		$('.products > ul :nth-child('+ i + ')').css('order', ''+ iOrder +'');
		i++;
	 });
	 
 }
 
 /**
 * Carga genérica de datos JSON
 */
 async function getData(url)
 {
	 var arrayData;
	 var p = await Promise.resolve(
		 $.ajax({
			 url: url,
			 dataType: 'json'
		 })
	 ).then(function(response) 
	 {
		 arrayData = response.data;
	 });
	 
	return arrayData;

 }
 