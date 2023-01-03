const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffa1e90d65mshc8214b7621f02cep1827bcjsnde0aed321ec5',
		'X-RapidAPI-Host': 'covid-19-news.p.rapidapi.com'
	}
};

fetch('https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
    let summary1 = response.articles[0].summary;
    let summary2 = response.articles[1].summary;
    let summary3 = response.articles[2].summary;
    let summary4 = response.articles[3].summary;

    let title1 = response.articles[0].title;
    let title2 = response.articles[1].title;
    let title3 = response.articles[2].title;
    let title4 = response.articles[3].title;

    let link1 = response.articles[0].link;
    let link2 = response.articles[1].link;
    let link3 = response.articles[2].link;
    let link4 = response.articles[3].link;

    let news1 = document.getElementById('card-text1');
    let news2 = document.getElementById('card-text2');
    let news3 = document.getElementById('card-text3');
    let news4 = document.getElementById('card-text4');

    let titlenews1 = document.getElementById('card-title mb-0-1');
    let titlenews2 = document.getElementById('card-title mb-0-2');
    let titlenews3 = document.getElementById('card-title mb-0-3');
    let titlenews4 = document.getElementById('card-title mb-0-4');

    // document.getElementById(link1).setAttribute("onclick", "location.href= link1");
    let newslink2 = document.getElementById(link2);
    let newslink3 = document.getElementById(link3);
    let newslink4 = document.getElementById(link4);

    // newslink1.href= link1;
    // newslink2.href= link2;
    // newslink3.href= link3;
    // newslink4.href= link4;
    
    news1.innerHTML = summary1;
    news2.innerHTML = summary1;
    news3.innerHTML = summary1;
    news4.innerHTML = summary1;

    titlenews1.innerHTML = title1;
    titlenews2.innerHTML = title2;
    titlenews3.innerHTML = title3;
    titlenews4.innerHTML = title4;


    })
