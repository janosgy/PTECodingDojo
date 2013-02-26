namespace{
    TEST(initialPoints){
        Game game;
        // a Game és Player szétválasztása miatt.
        Player playerA, playerB;

        CHECK_EQUAL(0, playerA.getPoints());
        CHECK_EQUAL(0, playerB.getPoints());
    }

    // először tesztek, kielégíti, aztán Player osztály.
    // getPlayerPoints(std::string) {} - később cserélhető a Player osztálybeli enum-ra.


    TEST(playerAScores){
        Game game;
        Player playerA, playerB;
        game.playerScores(playerA);

        CHECK_EQUAL(15, playerA.getPoints());
        CHECK_EQUAL(0, playerB.getPoints());
    }

    TEST(playerAScoresTwice){
        Game game;
        Player playerA, playerB;
        game.playerScores(playerA);
        game.playerScores(playerA);

        CHECK_EQUAL(30, playerA.getPoints());
        CHECK_EQUAL(0, playerB.getPoints());
    }

    TEST(playerAScoresThreeTimes){
        Game game;
        Player playerA, playerB;
        game.playerScores(playerA);
        game.playerScores(playerA);
        game.playerScores(playerA);

        CHECK_EQUAL(40, playerA.getPoints());
        CHECK_EQUAL(0, playerB.getPoints());
    }

    TEST(playerAScoresFourTimesAndWin){
        Game game;
        Player playerA, playerB;
        game.playerScores(playerA);
        game.playerScores(playerA);
        game.playerScores(playerA);
        game.playerScores(playerA);

        //CHECK_EQUAL(playerA, game.getWinner());
        //CHECK_EQUAL(true, playerA.setWinner(true));
    }

}
