// sumber : al-habib.info,
// dengan beberapa modifikasi


function gmod(n,m){
	return ((n%m)+m)%m;
}

function hijriyahCalender(adjust){
	var today = new Date();
	if(adjust) {
		let adjustmili = 1000*60*60*24*adjust; 
		let todaymili = today.getTime()+adjustmili;
		today = new Date(todaymili);
	}
	let day = today.getDate();
	let month = today.getMonth();
	let year = today.getFullYear();
	let m = month+1;
	let y = year;
	if(m<3) {
		y -= 1;
		m += 12;
	}

	let a = Math.floor(y/100.);
	let b = 2-a+Math.floor(a/4.);
	if(y<1583) b = 0;
	if(y==1582) {
		if(m>10)  b = -10;
		if(m==10) {
			b = 0;
			if(day>4) b = -10;
		}
	}

	let jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

	b = 0;
	if(jd>2299160){
		a = Math.floor((jd-1867216.25)/36524.25);
		b = 1+a-Math.floor(a/4.);
	}
	let bb = jd+b+1524;
	let cc = Math.floor((bb-122.1)/365.25);
	let dd = Math.floor(365.25*cc);
	let ee = Math.floor((bb-dd)/30.6001);
	day =(bb-dd)-Math.floor(30.6001*ee);
	month = ee-1;
	if(ee>13) {
		cc += 1;
		month = ee-13;
	}
	year = cc-4716;

	// if(adjust) {
	// 	wd = gmod(jd+1-adjust,7)+1;
	// } else {
	// 	wd = gmod(jd+1,7)+1;
	// }
	let wd = gmod(jd+1,7)+1;
	if(adjust) wd = gmod(jd+1-adjust,7)+1;

	let iyear = 10631./30.;
	let epochastro = 1948084;
	let epochcivil = 1948085;
	let shift1 = 8.01/60.;
	
	let z = jd-epochastro;
	let cyc = Math.floor(z/10631.);
	z = z-10631*cyc;
	let j = Math.floor((z-shift1)/iyear);
	let iy = 30*cyc+j;
	z = z-Math.floor(j*iyear+shift1);
	let im = Math.floor((z+28.5001)/29.5);
	if(im==13) im = 12;
	let id = z-Math.floor(29.5001*im-29);

	var myRes = new Array(8);

	myRes[0] = day; //calculated day (CE)
	myRes[1] = month-1; //calculated month (CE)
	myRes[2] = year; //calculated year (CE)
	myRes[3] = jd-1; //julian day number
	myRes[4] = wd-1; //weekday number
	myRes[5] = id; //islamic date
	myRes[6] = im-1; //islamic month
	myRes[7] = iy; //islamic year

	return myRes;
}

function hCalender(adjustment) {
	const wdNames = new Array("Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt");
	const iMonthNames = new Array('Muharram','Shafar','Rabi\'ul Awwal','Rabi\'uts Tsani',
	'Jumadil Awwal','Jumadil Akhir','Rajab','Sya\'ban',
	'Ramadhan','Syawwal','Dzulqai\'dah','Dzulhijjah');
	let iDate = hijriyahCalender(adjustment);
	// var outputIslamicDate = wdNames[iDate[4]] + ", " 
	// + iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " H";
	// return outputIslamicDate;
	
	let outputIslamicDate =  iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " H";
	
	return outputIslamicDate;
}


function demiMasa() {

	const d = new Date();
	let kaping = d.getDate();
	let dintenIx = d.getDay();
	let sasihIx = d.getMonth();
	let tahun = d.getFullYear();
	
	let dinten = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu'];
	let pasaranIx = (kaping % 5);
  	let pasaran = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'];
	let sasih = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
					'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'];
	let dHijriyah = hCalender(pDemiMasaAdj);

	let mSty = '<p style="text-align: right; line-height: 1.4; background-color: #f4f4f4; font-size: small; font-weight: bold; opacity: 0.7; font-family: Roboto Mono; margin-bottom: 64px;">';
	
	let masehi = mSty + '<u>' + dinten[dintenIx] + ' ' + pasaran[pasaranIx] + ', ' + kaping + ' ' + sasih[sasihIx] + ' ' + tahun + '</u>&nbsp;';
	let waktos = masehi + '<br/>' + dHijriyah + '&nbsp;</p>';
	
   document.getElementById('walAshri').innerHTML = waktos; 
	
}
