let charge = require('../../src/main');

describe('场景', () => {

    it('搭乘出租车 1.2 公里，无等待', () => {
        let tripKm = 1.5;
        let waitTime = 0;

        let money = charge(tripKm,waitTime);

        expect(money).toBe(6);
    });

    it('搭乘出租车 1. 8公里，等待10min', () => {
        let tripKm = 1.8;
        let waitTime = 10;

        let money = charge(tripKm,waitTime);

        expect(money).toBe(9);
    });

    it('搭乘出租车 5 公里，无等待', () => {
        let tripKm = 5;
        let waitTime = 0;

        let money = charge(tripKm,waitTime);

        expect(money).toBe(8);
    });

    it('搭乘出租车 7 公里，等待5min', () => {
        let tripKm = 7;
        let waitTime = 5;

        let money = charge(tripKm,waitTime);

        expect(money).toBe(11);
    });

    it('搭乘出租车 10 公里，不等待', () => {
        let tripKm = 10;
        let waitTime = 0;

        let money = charge(tripKm,waitTime);

        expect(money).toBe(13);
    });

    it('搭乘出租车 10 公里，等待15min', () => {
        let tripKm = 10;
        let waitTime = 15;

        let money = charge(tripKm,waitTime);

        expect(money).toBe(17);
    });
});