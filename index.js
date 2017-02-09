var TEST = require('./controller/test')
var MATH = require('./controller/math')

// testing equal perkalian 2 x 2 = 4
TEST.equal(MATH.perkalian(2, 2), 4)

// testing nonEqual pertambahan 1 + 1 = 2
TEST.nonEqual(MATH.pertambahan(1, 1), 3)

// testing equal untuk string irsan dan integer 123
TEST.strictEqual('irsan', 123)
