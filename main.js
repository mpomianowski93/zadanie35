let n = 201;

function przedział(liczba) {
	if (liczba >= 100 && liczba <= 200) {
		return 'Liczba znajduje się w przedziale';
	} else {
		return 'Liczba nie znajduje się w przedziale';
	}
}
console.log(przedział(n));
