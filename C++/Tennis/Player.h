class Player{
private:
    int points;
    bool winner;
public:
    Player(){
        points = 0;
        winner = false;
    }
    int getPoints(){
        return points;
    }
    void setPoints(int newPoints){
        points = newPoints;
    }
    void setWinner(bool status){
        winner = status;
    }
    bool isWinner(){
        return winner;
    }
};
