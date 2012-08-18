module('Stat Calculator Tests');

test('Level 0 Stat = 20; Growth Rate = 30', function() {
    var allStats = GS4Trainer.stats.getAllLevelStats(20, 30);

    equal(allStats[0], 20, 'Level 0 = 20');
    equal(allStats[50], 65, 'Level 50 = 65');
    equal(allStats[100], 90, 'Level 100 = 90')
});

test('Level 0 Stat = 20; Growth Rate is 20', function() {
    var allStats = GS4Trainer.stats.getAllLevelStats(20, 20);

    equal(allStats[0], 20, 'Level 0 = 20');
    equal(allStats[50], 55, 'Level 50 = 55');
    equal(allStats[100], 73, 'Level 100 = 73')
});

test('Level 0 Stat = 50; Growth Rate is 10', function() {
    var allStats = GS4Trainer.stats.getAllLevelStats(50, 10);

    equal(allStats[0], 50, 'Level 0 = 50');
    equal(allStats[50], 60, 'Level 50 = 60');
    equal(allStats[100], 68, 'Level 100 = 68')
});

test('Can create new trainer object', function() {
    var trainer = GS4Trainer.create();

    notEqual(trainer, undefined, 'Cannot create "trainer" object');
});