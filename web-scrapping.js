const request = require('request')
const cheerio = require('cheerio')

request('http://www.google.com', function (error, response, body) {

	if (error) throw new Error(error)

		const $ = cheerio.load(body)

	$('.main-section div').each(function() {
		
		var post = $(this).find('.entry-title a')

		console.log(`Postagem: ${nome}`)

	})

})

// apenas comentario para teste de pull request!!