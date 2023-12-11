// function cari(e) {
//     // menvegah reload
//     e.preventDefault()

//     // mendapatkan value dari input yang memilki id search
//     const key = document.querySelector('#search').value
// // hit api
// const options = {
//     method: 'GET',
//     url: 'https://jsearch.p.rapidapi.com/search',
//     params: {query: key, num_pages: '1'},
//     headers: {
//       'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//     }
//   };
// axios.request(options)
//     .then(function(response)
    

// // alert isi value
//     alert (key)
// }


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ed3d2b7b5mshc66b247d32ab7e9p1de26bjsn788a4245ff29',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

function getData(e){
	e.preventDefault();
	const nilai = document.getElementById('cari').value
	console.log(nilai)
	fetch(`https://jsearch.p.rapidapi.com/search?query=${nilai}&num_pages=1`, options)
	.then(response => response.json())
	.then(response => {console.log(response)
		const data =  response.data
		console.log(data.length)
		if(data.length<1){
			document.getElementById('isi').innerHTML = `
			<div class='isi'>
			No Job found. Start searching jobs around the world by fill the input and
			hit ENTER / Click on search icon. Easy!!
			</div>
			`
		}else{
			let isii=''
			data.forEach(isi=>{
				console.log(isi)
				const description = isi.job_description.slice(0,200)
				isii+=`
				<div class='isiJob'>
				<h2><a href='#'>${isi.job_title}</a></h2>
				<p>${description}...</p>
				</div>`			
			})
			document.getElementById('isi').innerHTML = isii
			
		}
	})
	.catch(err => console.error(err));

}