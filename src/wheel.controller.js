wheel.controller('WheelController', function($scope) {
    $scope.currentWord = "GUTSCHEIN FUER DIE CONNEWITZER VERLAGSBUCHHA-    NDLUNG     ";

    var makeLetters = function(word) {
        return word.split('').map(function(character) {
            var empty = false;
            var hyphen = false;
            if (character === ' ') {
                empty = true;
            } else if (character === '-') {
                hyphen = true;
            };
            return {
                name: character,
                chosen: false,
                empty: empty,
                hyphen: hyphen,
                touched: false
            };
        });
    };

    $scope.addWord = function() {
        $scope.currentWord = $scope.newWord.toUpperCase();
        $scope.newWord = "";
        $scope.reset();
    };

    $scope.reset = function() {
        angular.forEach($scope.letters, function(letter) {
            letter.chosen = false;
        });
        $scope.secretWord = makeLetters($scope.currentWord);
        $scope.win = false;
    };

    $scope.reset();

    $scope.letters = makeLetters("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    $scope.try = function(guess) {
        guess.chosen = true;
        var found = false;
        angular.forEach($scope.secretWord,
            function(letter) {
                if (guess.name.toUpperCase() === letter.name.toUpperCase()) {
                    letter.chosen = true;
                    found = true;
                }
            });
    };

});
