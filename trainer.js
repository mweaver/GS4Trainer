(function initialize() {
    $(document).ready(function() {

        // Constants...put somewhere else later
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
        };

        var Professions = {
            Bard: {
                strengthGrowthRate: 1
            },
            Cleric: 1,
            Empath: 2,
            Monk: 3,
            Paladin: 4,
            Ranger: 5,
            Rogue: 6,
            Sorcerer: 7,
            Warrior: 8,
            Wizard: 9
        };

        var testStats = function () {
            var growthRate = 30;
            var strengthBase = parseInt($('#str_base').val());
            console.log('str: ' + strengthBase);


            var destinations = $('td').filter(function() {
                                                    var destinationIdPattern = 'str' + "_[0-9]+";
                                                    var regExp = new RegExp(destinationIdPattern);
                                                    return this.id.match(regExp);
                                                });

            console.log(destinations);

            var currentStrength = strengthBase;
            $.each(destinations, function(level, item) {

                if (level === 0) {
                    $(item).text(currentStrength);
                    return true;
                }

                var growthInterval = Math.floor(currentStrength / growthRate);
                if (growthInterval < 1) { growthInterval = 1; }

                $(item).css('background-color', '#ffffff');

                if (level % growthInterval === 0)
                {
                    currentStrength += 1;
                    $(item).css('background-color', '#99ff99');
                }
                $(item).text(currentStrength + ' ' + '(' + growthInterval + ')');

            })
        };

        $('#str_base').blur(function() {
            testStats();
        });

     });
})();