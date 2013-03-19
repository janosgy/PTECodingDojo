TestCase("ArmedHeroKata", {

    setUp: function() {
        this.hero1 = new Hero();
        this.hero2 = new Hero();
    },

    "test hero1 has 30 HP": function(){
        assertEquals(this.hero1.getHP(), 30);
    },

    "test hero1 attacks hero2 and provides 1 damage": function (){
        this.hero1.attack(this.hero2);
        assertEquals(this.hero2.getHP(), 29);
    },

    "test hero1 attacks hero2 with a sword and provides 7 damage": function(){
        this.hero1.addWeapon(new Sword());
        this.hero1.attack(this.hero2);
        assertEquals(this.hero2.getHP(), 23);
    },

    "test hero1 attacks hero2 with a dagger and provides 5 damage": function(){
        this.hero1.addWeapon(new Dagger());
        this.hero1.attack(this.hero2);
        assertEquals(this.hero2.getHP(),25);
    },

    "test hero1 attacks hero2 with a magicwand and provides 8 damage": function(){
        this.hero1.addWeapon(new MagicWand());

        this.hero1.attack(this.hero2);
        assertEquals(this.hero2.getHP(),22);
    },

    "test hero1 with a sword attacks hero2 with a sword and provides 5 damage": function(){
        this.hero1.addWeapon(new Sword());
        this.hero2.addWeapon(new Sword());

        this.hero1.attack(this.hero2);
        assertEquals(this.hero2.getHP(),25);
    },

    "test hero1 with a dagger attacks hero2 with a sword and provides 4 damage": function(){
        this.hero1.addWeapon(new Dagger());
        this.hero2.addWeapon(new Sword());

        this.hero1.attack(this.hero2);
        assertEquals(28, this.hero2.getHP());
    },

    "test hero1 with a dagger attacks hero2 until hero2 is dead": function(){
        this.hero1.addWeapon(new Dagger());

        for(var i=0; i<5; i++) {
            this.hero1.attack(this.hero2);
        }

        assertEquals(true, this.hero2.isAlive());

        this.hero1.attack(this.hero2);
        assertEquals(false, this.hero2.isAlive());
    }
});