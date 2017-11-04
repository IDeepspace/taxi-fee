function charge(tripKm,waitTime) {
    let money = 0;

    if(tripKm <= 2){

        if(waitTime === 0){
            money = 6;
        }else{
            money = 6 + waitTime * 0.25;
        }

    }else{
        if(tripKm <= 8){

            if(waitTime === 0){
                money = 6 + (tripKm - 2) * 0.8;
            }else{
                money = 6 + (tripKm - 2) * 0.8 + waitTime * 0.25;
            }

        }else {
            if(waitTime === 0){
                money = 6 + 6 * 0.8 + (tripKm - 8) * 1.2;
            }else{
                money = 6 + 6 * 0.8 + (tripKm - 8) * 1.2 + waitTime * 0.25;
            }
        }
    }

    return Math.round(money);
}


module.exports = charge;