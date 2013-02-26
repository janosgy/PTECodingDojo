#include <iostream>

class Game{

public:

    void playerScores(Player &player){
        switch(player.getPoints()){
            case 0:
                player.setPoints(15);
                break;

            case 15:
                player.setPoints(30);
                break;

            case 30:
                player.setPoints(40);
                break;

            case 40:
                player.setWinner(true);
                break;

        }

    }
    /*
    Player* getWinner(){
        return winner;
    }
    */
};
