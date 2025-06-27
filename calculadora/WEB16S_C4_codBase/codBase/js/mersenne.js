function esPrimo(n) {
	var lbi_n = BigInt(n) ;
	
    if (lbi_n == 1 || lbi_n == 2) {
        return true;
    } else if (parseInt(lbi_n) % 2 == 0) {
        return false;
    }
    for (var i = 3; i <= Math.sqrt(parseInt(lbi_n)); i += 2) {
        if (parseInt(lbi_n) % i == 0) {
            return false;
        }
    }
    return true;
}

function primoMersenne(ai_primo) {
    var li_counter = 0;
	var li_valor = BigInt(100);
	var lb_validaEsPrimo = false;

	for (var i = 2; li_counter < ai_primo; i++) {
		li_valor = Math.pow(2, i) - 1;
		if (esPrimo(li_valor)) {
			lb_validaEsPrimo = true;
			if (i >= ai_primo) break ;
		} else {
			lb_validaEsPrimo = false;
			if (i == ai_primo) break ;
		}
		li_counter++;
	}
	return lb_validaEsPrimo;
}