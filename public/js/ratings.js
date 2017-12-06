var db = [
	{
		name: 'Denzel Washington',
		dislikes: 0,
		likes: 0,
		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY1200_CR135,0,630,1200_AL_.jpg'
	},
	{
		name: 'Keanu Reeves',
		dislikes: 0,
		likes: 0,
		image: 'https://imgix.ranker.com/user_node_img/50013/1000250501/original/keanu-reeves-doesn-t-want-your-money-all-people-photo-u1?w=650&q=50&fm=jpg&fit=crop&crop=faces'
	},
	{
		name: 'Mark Walhberg',
		dislikes: 0,
		likes: 0,
		image: 'https://images -na.ssl-images-amazon.com/images/M/MV5BMjE1MjYwNTE2M15BMl5BanBnXkFtZTYwNTI0NjI1._V1_UX214_CR0,0,214,317_AL_.jpg'
	}
];

function loadCelebs() {
	for ( var i = 0; i < db.length; i++ ) {
		// console.log(db[i].image)
		$('.celebs').append(
			'<div class="celeb">' +
  			'<div class="image">' +
  				'<img src="' + db[i].image + '" alt="">' +
  			'</div>' +
  			'<h3>' + db[i].name + '</h3>' +
  			'<div class="info">' +
  				'<span>Likes: ' + db[i].likes + '</span>' +
    			'<span>Dislikes: ' + db[i].dislikes + '</span>' +
  			'</div>' +
  			'<button>Like</button>' +
  			'<button>Dislike</button>' +
  		'</div>'
		);
	}
}

loadCelebs();

