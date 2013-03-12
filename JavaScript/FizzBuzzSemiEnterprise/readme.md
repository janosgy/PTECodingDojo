#FizzBuzz enterprise-szerű megoldás JS-ben
Ez a kód a PTECodingDojo egyik workshopján készült. Célja az, hogy egy nagyon egyszerű példán bemutassa egy programtervezési minta működését, jelen esetben a *Stratégiát*. Természetesen e feladat esetén nincs túlzottan nagy értelme az ilyen mértékű absztrakciónak, de gyakorlásra kiváló: ha az ember egyszerű példákon látja egy tervezési minta működését, akkor utána egy komplex feladat esetén eszébe juthat, hogy használja azt, illetve már gyakorlatot is szerzett benne.

A következőkben többször használom az osztály kifejezést, ez ne tévesszen meg senkit: a JavaScriptben nincsenek osztályok, de a nyelv rugalmassága miatt lehet osztály-szerűen kezelni az objektumokat, így hasonló módszerrel fejleszthetünk benne, mint más OOP nyelvekben.

##A *Stratégia* mintáról röviden
Célja, hogy elkerüljük a **hosszú feltételes** utasításokat, helyette az azonos viselkedés különböző implementációit külön osztályok tartalmazzák. Ez függetleníti az eredeti osztályt a viselkedések megvalósításától, így az rövidebb, áttekinthetőbb lesz. Az egyes stratégiák száma könnyen bővíthető: ha egy új viselkedést akarunk létrehozni elég egy új osztályt deklarálni, nem kell módosítanunk az eredeti osztályunkat (ez ugye problémákhoz vezethet ha a **hosszú feltételünk** máshol is szerepel a kódban).

##Áttekintés: a minta alkalmazása a FizzBuzz problémára
A FizzBuzz probléma megoldásakor viszonylag gyorsan eljutunk oda, ahol az "üzleti logikát" egy függvény fogja tartalmazni valamilyen módon:

```javascript
FizzBuzz = function() {
    /*...*/
    this.of = function(number) {
        if (isFizzBuzz(number)) {
            return 'FizzBuzz';
        }

        if (isFizz(number)) {
            return 'Fizz';
        }

        if (isBuzz(number)) {
            return 'Buzz';
        }

        return number;
    }
}
```

Tegyük fel, hogy kell írnunk egy olyan metódust is, ami újra felhasználná ezt a nagy elágazást, így kódduplikálás-hoz jutnánk, amelyet már nehezebb karbantartani. Ezen a ponton érdemes elgondolkodni azon, hogy az elágazást elimináljuk. A nagy elágazások feloldására ideális minta a *Stratégia*.

Az én ötletem az volt, hogy képzeljük el a feladatot fordítási problémaként, vagyis építsük a megoldásunkat egy fordító osztály (*Translator*) köré. Ez a fordító szócikkeket kap (*Translation*), majd ezek és a bemeneti paraméter (fordítandó szó) alapján visszaad egy fordítást. Ebben az esetben az elágazás egyes ágai lesznek a stratégiák, vagyis egy stratégia egy *Translation*, pl. a *Fizz* fordítása.

A további refaktorálási lépések során csokorba gyűjtöttük a szócikkeket és elneveztük szótárnak (*FizzBuzzDictionary*). Vegyük észre, hogy ez a *Stratégia* minta újbóli felhasználása. Miért is? Szótár nélkül, a szócikkeket a *FizzBuzz* osztályban adtuk át a fordítónak, így a fordítási szabályokat itt definiáltuk. Ez persze jól működik egészen addig, amíg nem alakul ki egy olyan osztályunk, ahol a különböző fordítási szabályok között kell döntenünk. Ebben az esetben megint elkezd felépülni egy hosszú-hosszú elágazás. Most előre refaktorálással éltünk és a szótár kiemelésével feloldottuk a függőséget *FizzBuzz* probléma leírása és a feldolgozó osztály között. Ez elegáns módszer, hiszen, ha egy másik játékot akarunk írni, vagy egy egyszerű angol-magyar fordító programot (*EnglishToHungarianDictionary*), akkor elég egy új szótárat létrehoznunk, amely semmi mást nem tartalmaz, mint a feladat leírását.

A szótár elérésével eljutottunk oda, hogy a feladat szöveges leírását formálisan JavaScript nyelvre fordítottuk úgy, hogy ebben az osztályban nem kell a fordítás mikéntjével foglalkozni.

##Fájlok rövid bemutatása
###FizzBuzz.js
Egy adott számra visszaadja a feladat leírásának megfelelő értéket, ami a szám, Fizz, Buzz vagy FizzBuzz. Működése nagyon egyszerű: példányosítja a szótárunkat, amely a feladat leírásának egyszerű JavaScript-es megfelelője, példányosít egy fordítót, amelyhez hozzárendelni a szótárat, majd a fordítóval lefordítja a keresett számot.

###Translation.js
A *Translation* objektumok a feladat kis részeinek JavaScript megfogalmazásai, vagyis ők egy fordítási szabályt tartalmaznak. Pl. egy ilyen stratégia az, hogy 3 esetén Fizz-t kell visszaadni. Két metódusa van: a *match* ellenőrzi, hogy a kapott szám megfelel e a fordítási szabálynak, a *getValue* visszaadja a fordítás értékét.

###Dictionary.js és FizzBuzzDictionary.js
A fordítási szabályokat gyűjtik össze. Elegáns megoldás arra, hogy a feladatot, fordítási szabályokként leképezve, egy osztályban reprezentáljuk. A *Dictionary* egy ősosztály, egyetlen metódusa a *getTranslations*, ami visszaadja a fordítási szabályokat.

###Translator.js
Ez az osztály tartalmazza az üzleti logikát, vagyis kap egy szótárat (*addDictionary*) és egy fordítandó szót, majd végignézi a szócikkeket, ha talál a fordításnak megfelelőt, akkor visszaadja az értékét.

##Szerző
Fincza András