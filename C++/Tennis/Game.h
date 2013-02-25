#include <iostream>
#include <map>

class Game{
public:
    enum avaiblePlayers { PlayerA, PlayerB };
    std::map<avaiblePlayers, Player*> currentPlayers;

    Game(){
        currentPlayers[PlayerA] = new Player;
        currentPlayers[PlayerB] = new Player;
    }
    ~Game(){
        delete currentPlayers[PlayerA];
        delete currentPlayers[PlayerB];
    }

    void playerScores(Player &player){
        player.setPoints(15);
    }

};
