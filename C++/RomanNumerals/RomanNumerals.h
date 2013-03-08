class RomanNumerals{
private:
    //static int []
//     enum ad {9, 5, 4, 1};
    //static std::string[] ROMAN_DIGITS {"IX", "V", "IV", "I"};
    static const std::string ROMAN_DIGITS[];

public:
    std::string convertToRoman(int number){
        std::string romanValue = "";

        if(number==9){
            romanValue += "IX";
            number = number-9;
        }
        if(number>=5){
            romanValue += "V";
            number = number-5;
        }
        if(number==4){
            romanValue += "IV";
            number = number-4;
        }

        while(number){
            romanValue += "I";
            number--;
        }

        return romanValue;
    }
};
const std::string RomanNumerals::ROMAN_DIGITS[] = {"IX", "V", "IV", "I"};
