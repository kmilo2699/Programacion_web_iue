fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=fast%20and%20furious', {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': 'ca46cde467msh46117b2038a06aap1615dejsnfd4f941f4184',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
    console.log(data)
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        console.log(element)
        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s
        
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>            
        `
        document.getElementById('container').innerHTML += poster
    })
})
.catch(err => {
	console.error(err);
});
