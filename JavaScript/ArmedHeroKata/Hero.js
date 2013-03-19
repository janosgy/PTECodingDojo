Hero = function() {};

Hero.prototype = {
    HP: 30,
    weapon: new Fist(),

    getHP: function() {
        return this.HP;
    },

    attack: function(heroToAttack) {
        heroToAttack.hurt(this.weapon);
    },

    hurt: function(weaponOfAttacker) {
        this.HP -= weaponOfAttacker.getDamage(this.weapon);
    },

    addWeapon: function(weaponToAdd) {
        this.weapon = weaponToAdd;
    },

    isAlive: function() {
        return this.HP > 0;
    }

};