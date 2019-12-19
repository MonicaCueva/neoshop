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

 });
 
 $(document).on('click', '.next', function()
 {
	
 });
 
 /**
 * Carga la información de las imágenes del slider mediante Ajax
 */
 function loadSlider() 
 {
	 var arraySlides = getData('api/slides.json');
	 
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
 function loadProducts()
 {
	 var arrayProducts = getData('api/products.json');
	 
	 var contentProduct = '';
	 arrayProducts.forEach( function(product) 
	 {
		 contentProduct += '<li class="product"><img class="product__img" src="'+ product.image +'"><span class="product__name">'+ product.name 
		 +'</span><span class="product__price">'+ product.price +'</span><button class="product__button">'+ product.button_text +'</button></li>';
	 });
	 
	 $('.products ul').append(contentProduct);
	 
	 //Modifico el orden de los productos 
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
 function getData(url)
 {
	 var arrayData;
	 $.ajax({
		 url: url,
		 dataType: 'json',
		 async: false,
		 success: function(json)
		 {
			arrayData = json.data;
		 }
	 });
	 
	 return arrayData;
 }
 