
isPrime=function(num) {
        if (num == 1) {
            return false;
        } else if (num >= 2) {
            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;

           
        }
    };
    

findPrime=function(order) {
	var counter = 0;
        for (var j = 2; j < 10000000000000; j++) {
            if (isPrime(j)) {

                counter++;
            }
            if (counter == order) {
                return j;
            }
        }
    };