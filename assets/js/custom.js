var listOfProducts = [[
	{
		"id": "A1",
		"img": "product4.png",
		"desc": "Test Description 6"
	},
	{
		"id": "A2",
		"img": "product5.png",
		"desc": "Test Description 7"
	},
	{
		"id": "A3",
		"img": "product6.png",
		"desc": "Test Description 8"
	},
	{
		"id": "A4",
		"img": "product4.png",
		"desc": "Test Description 6"
	},
	{
		"id": "A5",
		"img": "product5.png",
		"desc": "Test Description 7"
	},
	{
		"id": "A6",
		"img": "product6.png",
		"desc": "Test Description 8"
	}
],
[
	{
		"id": "B1",
		"img": "product1.png",
		"desc": "Test Description 6"
	},
	{
		"id": "B2",
		"img": "product2.png",
		"desc": "Test Description 7"
	},
	{
		"id": "B3",
		"img": "product1.png",
		"desc": "Test Description 8"
	},
	{
		"id": "B4",
		"img": "product2.png",
		"desc": "Test Description 6"
	},
	{
		"id": "B5",
		"img": "product1.png",
		"desc": "Test Description 7"
	},
	{
		"id": "B6",
		"img": "product2.png",
		"desc": "Test Description 8"
	}
],
[
	{
		"id": "C1",
		"img": "product3.png",
		"desc": "Test Description 6"
	},
	{
		"id": "C2",
		"img": "product3.png",
		"desc": "Test Description 7"
	},
	{
		"id": "C3",
		"img": "product3.png",
		"desc": "Test Description 8"
	},
	{
		"id": "C4",
		"img": "product3.png",
		"desc": "Test Description 6"
	},
	{
		"id": "C5",
		"img": "product3.png",
		"desc": "Test Description 7"
	},
	{
		"id": "C6",
		"img": "product3.png",
		"desc": "Test Description 8"
	}
]];

var dropdown = function(category) {
	let allProductElements = $( "div.product_list_row" );
	console.log(allProductElements);
	allProductElements.remove();
	$('.all_items').prepend('<div class="row product_list_row"></div>');
	if (category === 3) {
		addElements(0, 0);
		addElements(1, listOfProducts[0].length);
		addElements(2, listOfProducts[0].length + listOfProducts[1].length);
	} else {
		addElements(category, 0);
	}	
    $('.select_option_dropdown').slideUp( "slow");
    $('.select_option_list').find(".right").toggleClass("fas fa-caret-down, fas fa-caret-up");
}

var addElements = function(category, currentSize) {
	for(i=0; i<Math.min(listOfProducts[category].length, 10-currentSize); i++) {
		let desc = listOfProducts[category][i].desc;
		let img = listOfProducts[category][i].img;
		$('.product_list_row').append('<div class="col-lg-6 col-sm-6">\
	        <div class="single_product_item">\
	         <img src="assets/img/categori/'+img+'" alt="" class="img-fluid">\
	          <h3> <a href="single-product.html">'+desc+'</a> </h3>\
	        </div>\
	       </div>');
    }
}

