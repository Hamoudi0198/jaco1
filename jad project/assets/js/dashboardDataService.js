const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ffa1e90d65mshc8214b7621f02cep1827bcjsnde0aed321ec5',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};


fetch('https://covid-193.p.rapidapi.com/statistics?country=lebanon', options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
        let dailyCases = response.response[0].cases.new;
		let criticalCases = response.response[0].cases.critical;
		let deathCases = response.response[0].deaths.new;
		let recoveryCases = response.response[0].cases.recovered;
		let totalCases = response.response[0].cases.total;
		let totalDeathCases = response.response[0].deaths.total;

		let daily = document.getElementById('current-cases');
		let critical =  document.getElementById('critical-cases');
		let recovered =  document.getElementById('recovered-cases');
		let deathtotal =  document.getElementById('total-death-cases');
		let death = document.getElementById('death-cases');
		let total = document.getElementById('total-cases');

		daily.innerHTML = dailyCases;
		critical.innerHTML = criticalCases;
		death.innerHTML = deathCases;
		total.innerHTML = totalCases;
		deathtotal.innerHTML = totalDeathCases;
		recovered.innerHTML = recoveryCases;

		
    })

	fetch('https://covid-193.p.rapidapi.com/statistics?country=Usa', options)
	.then(response => response.json())
	.then(response => {


        let dailyCases = response.response[0].cases.new;
        let criticalCases = response.response[0].cases.critical;
        let deathCases = response.response[0].deaths.new;
        let recoverycases = response.response[0].cases.recovered;
        let totalcases = response.response[0].cases.total;
		let totaldeaths = response.response[0].deaths.total;

		let daily = document.getElementById('daily-cases-us');
		let critical = document.getElementById('critical-cases-us');
		let death = document.getElementById('death-us');
		let recovery = document.getElementById('recovery-cases-us');
		let total = document.getElementById('total-cases-us');
		let totald = document.getElementById('total-deaths-us');

		daily.innerHTML = dailyCases;
		critical.innerHTML = criticalCases;
		death.innerHTML = deathCases;
		recovery.innerHTML = recoverycases;
		total.innerHTML = totalcases;
		totald.innerHTML = totaldeaths;
	})


	fetch('https://covid-193.p.rapidapi.com/statistics?country=India', options)
	.then(response => response.json())
	.then(response => {
	
		let dailyCases = response.response[0].cases.new;
		let criticalCases = response.response[0].cases.critical;
		let deathCases = response.response[0].deaths.new;
		let recoverycases = response.response[0].cases.recovered;
		let totalcases = response.response[0].cases.total;
		let totaldeaths = response.response[0].deaths.total;


		let daily = document.getElementById('daily-cases-in');
		let critical = document.getElementById('critical-cases-in');
		let death = document.getElementById('death-in');
		let recovery = document.getElementById('recovery-cases-in');
		let total = document.getElementById('total-cases-in');
		let totald = document.getElementById('total-deaths-in');

		daily.innerHTML = dailyCases;
		critical.innerHTML = criticalCases;
		death.innerHTML = deathCases;
		recovery.innerHTML = recoverycases;
		total.innerHTML = totalcases;
		totald.innerHTML = totaldeaths;
		

	})

	fetch('https://covid-193.p.rapidapi.com/statistics?country=Spain', options)
	.then(response => response.json())
	.then(response => {

		let dailyCases = response.response[0].cases.new;
		let criticalCases = response.response[0].cases.critical;
		let deathCases = response.response[0].deaths.new;
		let recoverycases = response.response[0].cases.recovered;
		let totalcases = response.response[0].cases.total;
		let totaldeaths = response.response[0].deaths.total;


		let daily = document.getElementById('daily-cases-sp');
		let critical = document.getElementById('critical-cases-sp');
		let death = document.getElementById('death-sp');
		let recovery = document.getElementById('recovery-cases-sp');
		let total = document.getElementById('total-cases-sp');
		let totald = document.getElementById('total-deaths-sp');


		daily.innerHTML = dailyCases;
		critical.innerHTML = criticalCases;
		death.innerHTML = deathCases;
		recovery.innerHTML = recoverycases;
		total.innerHTML = totalcases;
		totald.innerHTML = totaldeaths;


	
	})

	fetch('https://covid-193.p.rapidapi.com/statistics?country=China', options)
	.then(response => response.json())
	.then(response => {

		let dailyCases = response.response[0].cases.new;
		let criticalCases = response.response[0].cases.critical;
		let deathCases = response.response[0].deaths.new;
		let recoverycases = response.response[0].cases.recovered;
		let totalcases = response.response[0].cases.total;
		let totaldeaths = response.response[0].deaths.total;



		let daily = document.getElementById('daily-cases-ch');
		let critical = document.getElementById('critical-cases-ch');
		let death = document.getElementById('death-ch');
		let recovery = document.getElementById('recovery-cases-ch');
		let total = document.getElementById('total-cases-ch');
		let totald = document.getElementById('total-deaths-ch');


		daily.innerHTML = dailyCases;
		critical.innerHTML = criticalCases;
		death.innerHTML = deathCases;
		recovery.innerHTML = recoverycases;
		total.innerHTML = totalcases;
		totald.innerHTML = totaldeaths;


    })

	fetch('https://covid-193.p.rapidapi.com/statistics?country=brazil', options)
	.then(response => response.json())
	.then(response => {

		let dailyCases = response.response[0].cases.new;
		let criticalCases = response.response[0].cases.critical;
		let deathCases = response.response[0].deaths.new;
		let recoverycases = response.response[0].cases.recovered;
		let totalcases = response.response[0].cases.total;
		let totaldeaths = response.response[0].deaths.total;



		let daily = document.getElementById('daily-cases-br');
		let critical = document.getElementById('critical-cases-br');
		let death = document.getElementById('death-br');
		let recovery = document.getElementById('recovery-cases-br');
		let total = document.getElementById('total-cases-br');
		let totald = document.getElementById('total-deaths-br');


		daily.innerHTML = dailyCases;
		critical.innerHTML = criticalCases;
		death.innerHTML = deathCases;
		recovery.innerHTML = recoverycases;
		total.innerHTML = totalcases;
		totald.innerHTML = totaldeaths;


    })