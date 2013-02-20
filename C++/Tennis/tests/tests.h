namespace{
    TEST(initialPoints){
        Game game;
        CHECK_EQUAL(0, game.getPlayerPoints(Game::PlayerA));
        CHECK_EQUAL(0, game.getPlayerPoints(Game::PlayerB));
    }

    TEST(playerAScores){
        Game game;
        game.playerScores(Game::PlayerA);
        CHECK_EQUAL(15, game.getPlayerPoints(Game::PlayerA));
        CHECK_EQUAL(0, game.getPlayerPoints(Game::PlayerB));
    }

    TEST(playerBScores){
        Game game;
        game.playerScores(Game::PlayerB);
        CHECK_EQUAL(0, game.getPlayerPoints(Game::PlayerA));
        CHECK_EQUAL(15, game.getPlayerPoints(Game::PlayerB));
    }

    TEST(playerAScoresTwice){
        Game game;
        game.playerScores(Game::PlayerA);
        game.playerScores(Game::PlayerA);
        CHECK_EQUAL(30, game.getPlayerPoints(Game::PlayerA));
        CHECK_EQUAL(0, game.getPlayerPoints(Game::PlayerB));
    }

    TEST(independentScoring){
        Game game;
        game.playerScores(Game::PlayerA);
        game.playerScores(Game::PlayerB);
        game.playerScores(Game::PlayerA);
        game.playerScores(Game::PlayerB);
        CHECK_EQUAL(30, game.getPlayerPoints(Game::PlayerA));
        CHECK_EQUAL(30, game.getPlayerPoints(Game::PlayerB));
    }

    TEST(playerAScoresThreeTimes){
        Game game;
        game.playerScores(Game::PlayerA);
        game.playerScores(Game::PlayerA);
        game.playerScores(Game::PlayerA);
        CHECK_EQUAL(40, game.getPlayerPoints(Game::PlayerA));
        CHECK_EQUAL(0, game.getPlayerPoints(Game::PlayerB));
    }


}
