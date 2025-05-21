// dropBox

function dbDirectLinkFormat(folder, file, rlKey, status) {
	const brand  = 'https://dl.dropboxusercontent.com/scl/fi/';
	let dbUrl = brand +
		folder + '/' +
		file + '.png' +
		'?rlkey=' + rlKey +
		'&st=' + status +
		'&dl=0';
		
	return dbUrl;
}

// input: idName atau idNomerUrut 
function dbMulih(inpKode) {
	let q, z, x = [];
	q = linkMulih(inpKode);
	z = q[1].split('|');
	
	// link db
	let dbLink = dbDirectLinkFormat(z[0], q[0], z[1], z[2]);
	x[0] = dbLink;
	// ektra description
	x[1] = q[2];

	return x;
}
