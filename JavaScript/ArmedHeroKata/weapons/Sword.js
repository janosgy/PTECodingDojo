Sword = function() {
    this.damage = 7;
    this.defense = 2;

    this.getDefense = function(attackerWeapon) {
        if (attackerWeapon instanceof Dagger) {
            return 3;
        }

        return this.defense;
    }
};
Sword.prototype = new Weapon();