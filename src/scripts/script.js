function openGallery(event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {
        index: link,
        event: event,
        useBootstrapModal: false

    },
    links = this.getElementsByTagName('a');
	blueimp.Gallery(links, options);
};

function buildGallery() {
	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};

	$('.img-thumbnail').replaceWith(function (idx, content) {
		return '<a href="#">'+this.outerHTML+'</a>';
	});
	
	$('.img-thumbnail').on('click', function(ev) {
		var modal =  $('.modal');
		var src = $(this).attr('src').replace(/\/imgs\/thumbs\//, '/imgs/medium/');
		$('.modal .modal-body').html('<img class="img-responsive" src="'+src+'" />');
		modal.modal();
		return false;
	});

	var gallery = shuffle([
		'2013.10.24 13.23.37.jpg',
		'2014.02.05 17.41.18.jpg',
		'2014.02.05 17.41.23.jpg',
		'2014.02.05 17.41.34.jpg',
		'2014.02.05 17.41.42.jpg',
		'2014.04.12 20.55.05.jpg',
		'2014.06.17 16.34.22.jpg',
		'2014.06.23 20.07.50.jpg',
		'2014.06.24 17.41.08.jpg',
		'2014.06.24 17.41.21.jpg',
		'2014.06.26 19.29.10.jpg',
		'2014.06.26 19.29.18.jpg',
		'2014.07.08 20.37.11.jpg',
		'2014.07.08 20.37.32.jpg',
		'2014.07.08 20.38.39.jpg',
		'2014.07.09 20.28.13.jpg',
		'2014.07.10 19.52.18.jpg',
		'2014.07.15 20.26.30.jpg',
		'2014.07.15 20.26.38.jpg',
		'2014.07.28 18.19.46.jpg',
		'2014.07.28 18.21.32.jpg',
		'2014.07.28 18.21.44.jpg',
		'2014.07.28 18.22.11.jpg',
		'2014.07.28 18.23.09.jpg',
		'2014.07.28 19.24.58.jpg',
		'2014.09.01 17.42.24.jpg',
		'2014.09.01 17.42.33.jpg',
		'2014.09.01 17.42.42.jpg',
		'2014.09.15 18.34.35.jpg',
		'2014.09.15 18.34.50.jpg',
		'2014.09.15 18.35.00.jpg',
		'2014.09.15 18.35.06.jpg',
		'2014.09.15 18.35.19.jpg',
		'2014.09.15 18.35.58.jpg',
		'2014.09.15 18.36.13.jpg',
		'2014.10.31 18.59.13.jpg',
		'2014.10.31 18.59.33.jpg',
		'2014.10.31 19.00.52.jpg',
		'2014.10.31 19.01.47.jpg',
		'2014.11.04 17.10.47.jpg',
		'2014.11.04 17.11.17.jpg',
		'2014.11.04 17.13.37.jpg',
		'2014.11.04 17.14.54.jpg',
		'2014.11.04 17.15.01.jpg',
		'2014.11.04 17.15.20.jpg',
		'2014.11.04 17.15.26.jpg',
		'2014.11.04 17.17.19.jpg',
		'2014.11.04 17.17.42.jpg',
		'2014.11.04 17.18.55.jpg',
		'2014.11.04 17.19.03.jpg',
		'2014.11.04 17.21.14.jpg',
		'2014.11.04 17.22.13.jpg',
		'2014.11.04 17.23.44.jpg',
		'2014.11.04 17.23.52.jpg',
		'2014.11.04 17.24.06.jpg',
		'2014.11.04 17.26.46.jpg',
		'2014.11.04 17.26.49.jpg',
		'2014.11.04 17.28.36.jpg',
		'2014.11.04 17.28.57.jpg',
		'2014.11.04 17.29.07.jpg',
		'2014.11.04 17.29.34.jpg',
		'2014.11.04 17.30.09.jpg',
		'2015.01.05 13.12.02.jpg',
		'2015.01.05 13.13.17.jpg',
		'2015.01.05 13.13.44.jpg',
		'2015.01.05 13.14.54.jpg',
		'2015.01.05 13.15.01.jpg',
		'2015.01.05 13.15.07.jpg',
		'2015.01.05 13.15.18.jpg',
		'2015.01.05 13.15.41.jpg',
		'2015.01.05 13.15.56.jpg',
		'2015.01.05 13.16.06.jpg',
		'2015.01.05 13.16.20.jpg',
		'2015.01.05 13.16.46.jpg',
		'2015.01.05 13.17.04.jpg',
		'B1l5RpxIcAEMyE2.jpg',
		'B1wNY3cIAAIAI2T.jpg',
		'10177467_753675294678353_6506728572382368616_n.jpg',
		'10348443_10202981497830673_51355494424885238_n.jpg',
		'10436312_10203076832333976_207104755654408309_n.jpg',
		'10460507_10202981530631493_5168699403168124782_n.jpg',
		'10557225_753675094678373_4753597595745388326_n.jpg',
		'10636046_753675088011707_1089833336791512870_n.jpg',
		'1505298_10203855483479768_2618647252349666374_n.jpg',
		'1911789_10202454276334229_4037548446832298010_n.jpg',
		'1924369_753675101345039_2085483088191127152_n.jpg',
	]);
	var galleryContainer = $('#gallery-container');
	$.each(gallery, function(idx, e) {
		$(
			'' +
			'<a href="assets/gallery/medium/'+e+'" title="'+e+'" data-gallery>' + 
        	'<img src="assets/gallery/thumbs/'+e+'" alt="'+e+'" class="img-responsive">' +
			'</a>' +
			''
			).appendTo(galleryContainer);
	});
	document.getElementById('gallery-container').onclick = openGallery;
};

$(document).ready(buildGallery);
