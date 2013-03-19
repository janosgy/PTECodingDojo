Weapon = function() {};
Weapon.prototype = {
    name: null,
    damage: null,
    defense: null,

    getDefense: function(attackerWeapon) {
        return this.defense;
    },

    getDamage: function(defenderWeapon) {
        return this.damage - defenderWeapon.getDefense(this);
    }
};