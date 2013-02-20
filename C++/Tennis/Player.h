class Player{
private:
    int pointsIndex = 0;
    const int points[4] = { 0, 15, 30, 40};

public:
    void scores(){
        pointsIndex++;
    }

    int getPoints(){
        return points[pointsIndex];
    }


};
