(function (GS4Trainer, $, undefined) {

    var getAllLevelStats = function (levelZeroValue, growthRate) {

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
    };
    GS4Trainer.getAllLevelStats = getAllLevelStats;

    var create =  function() {
        var Stats = {
            Strength: 0,
            Constitution: 1,
            Dexterity: 2,
            Agility: 3,
            Discipline: 4,
            Aura: 5,
            Logic: 6,
            Intuition: 7,
            Wisdom: 8,
            Influence: 9
            },
            that = {};

        $.each(Stats, function(key, value) {
            that[key] = [];

            for (var x = 0; x <= 100; x++)
            {
                that[key][x] = 0;
            }

        });

        console.log(that);

        return that;
    };
    GS4Trainer.create = create;

} (window.GS4Trainer = window.GS4Trainer || {}, $));
