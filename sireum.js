function detectMob() {
   const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i ];
    
   return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
   });
}

function callApi() {
   return new Promise(function (resolve) {
      setTimeout(function () {
         resolve();
      }, 100);
   });
}

function dbDirectLink(folder, file, rlKey, sts) {
	const brand  = 'https://dl.dropboxusercontent.com/scl/fi/';
	let dbUrl = brand + folder + file +
		'?rlkey=' + rlKey +
		'&st=' + sts + '&dl=0';
		
	return dbUrl;
}

// mempersingkat directLink untuk disimpan
function dbSusunRantaiKode() {
	let urlInp = document.getElementById("alamat").value;
	const brand  = 'https://dl.dropboxusercontent.com/scl/fi/';
	let i        = urlInp.indexOf("?rlkey");
	const kd     = '|';
	asalQ();
	Q  = '&lt;rp&gt;' + urlInp.substr(41, 22) + // folder
		  kd + urlInp.substring(41+22, i) + // file
		  kd + urlInp.substr(i+7, 25) + // rlkey
		  kd + urlInp.substr(i+7+25+4, 8) + // status
		  kd + document.getElementById("ket").value + '&lt;/rp&gt;';
		  
	//return Q;
	document.getElementById('rantaiKode').innerHTML = Q;
}

// menyusun kembali kode menjadi directLink
// output [0] : menyusun ulang directLink
//        [1] : deskripsi
function dbEscape(inpKode) {
   let dLink = document.getElementsByTagName("rp")[inpKode].innerHTML;
	let c = dLink.split('|');
	asalQ();
	Q[0] = dbDirectLink(c[0], c[1], c[2], c[3]);
		
	if(c[4] === undefined) {Q = Q[0]} else Q[1] = c[4];

	return Q;
	// document.getElementById('demo').innerHTML = ' --> ' + Q;
}

function iView() {
  let iUrl = '<figure>' + 
	'<img ' + 
	'src=\"' + arguments[0] + '\"' +
	'class=\"' + arguments[1] + '\"' +
	'alt=\"' + arguments[3] + '\"' +					
	'/>' +
	'<figcaption>' + arguments[2] + '</figcaption>' +
	'</figure>';
					
  return iUrl;
}

function qip(imgKe) {
  let g = new Image();
  let gInp = dbEscape(imgKe);
  g.src = gInp[0];
  Q = 'Gambar ' + imgKe + '. ' + gInp[1];
  let gUrl = iView(g.src, 'qipGy', Q);

  document.getElementById('x' + imgKe).innerHTML = gUrl; 
}
