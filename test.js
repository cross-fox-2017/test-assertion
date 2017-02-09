const fungsi = require('./fungsi')
const assert = require('assert');

assert.equal(fungsi.pertambahan(1,5), 6);
assert.notEqual(fungsi.pertambahan(1,5), 0);
assert.strictEqual(fungsi.pertambahan(1,5), 6);

assert.equal(fungsi.pengurangan(10,5), 5);
assert.notEqual(fungsi.pengurangan(10,5), 0);

assert.equal(fungsi.perkalian(1,5), 5);
assert.notEqual(fungsi.perkalian(1,5), 0);

assert.equal(fungsi.pembagian(64,2), 32);
assert.notEqual(fungsi.pembagian(1,5), 0);

assert.equal(fungsi.pangkatdua(5), 25);
assert.notEqual(fungsi.pangkatdua(10), 25);

assert.equal(fungsi.akardari(9), 3);
assert.notEqual(fungsi.akardari(12), 3);
