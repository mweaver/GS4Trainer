var GS4Trainer = (function () {

    return {
        stats:{
            getAllLevelStats: function (levelZeroValue, growthRate) {

                var stats = [],
                    currentStatValue = levelZeroValue;

                for (var level = 0; level <= 100; level++)
                {
                    if (level === 0)
                    {
                        stats.push(currentStatValue);
                        continue;
                    }

                    var growthInterval = Math.floor(currentStatValue / growthRate);
                    if (growthInterval < 1) { growthInterval = 1; }

                    if (level % growthInterval === 0)
                    {
                        currentStatValue += 1;
                    }

                    stats.push(currentStatValue);
                }

                return stats;
            }
        }
    };

})();
