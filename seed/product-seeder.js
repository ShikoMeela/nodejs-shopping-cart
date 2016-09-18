var Product = require('../models/product');

var mongoose = require('mongoose');
// connect to mongo function
//solution to "deprecated Promise library" from https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products = [

	new Product({
		imagePath: 'https://a.thumbs.redditmedia.com/41Jhg1UypfSljaq0JYfpITlAqlQNe1BwLn6SMwHCzX0.png',
		title: 'Overwatch',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
		price: 10
	}),

	new Product({
		imagePath: 'http://i1-news.softpedia-static.com/images/news2/life-is-strange-review-pc-499548-2.jpg',
		title: 'Life is Strange',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
		price: 10
	}),

	new Product({
		imagePath: 'http://ih0.redbubble.net/image.198189443.1386/pp,220x200-pad,220x200,ffffff.jpg',
		title: 'Fire Emblem Fates: Revelation',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nostrum nesciunt, quidem doloremque numquam temporibus ut optio ipsam! Reprehenderit autem impedit dolore eos doloribus sapiente illo, perferendis assumenda reiciendis, et?',
		price: 10
	}),

];

var done = 0;

for(var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			mongoose.disconnect();
		}
	});
}