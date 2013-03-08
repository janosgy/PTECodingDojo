namespace{
    TEST (oneAndTwoAndThreeToRoman){
        RomanNumerals rn;
        CHECK_EQUAL("I", rn.convertToRoman(1));
        CHECK_EQUAL("II", rn.convertToRoman(2));
        CHECK_EQUAL("III", rn.convertToRoman(3));
    }
    TEST (fourToRoman){
        RomanNumerals rn;
        CHECK_EQUAL("IV", rn.convertToRoman(4));
    }
    TEST (fiveToRoman){
        RomanNumerals rn;
        CHECK_EQUAL("V", rn.convertToRoman(5));
    }
    TEST (sixAndSevenAndEightToRoman){
        RomanNumerals rn;
        CHECK_EQUAL("VI", rn.convertToRoman(6));
        CHECK_EQUAL("VII", rn.convertToRoman(7));
    }
    TEST (nineToRoman){
        RomanNumerals rn;
        CHECK_EQUAL("IX", rn.convertToRoman(9));
    }


}
