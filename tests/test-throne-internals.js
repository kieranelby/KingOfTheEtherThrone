/* jslint node:true */
'use strict';

/*
 * Test some of the internal functions which would otherwise be hard
 * to test via the normal public contract interfaces.
*/

function TestThroneInternals() {
}

TestThroneInternals.prototype.addTests = function(runner, throneTestSupport) {

  runner.addTest({
    title: 'Name Hashing',
    categories: ['internals'],
    steps: [
      function(helper) {
        this.throneInternals = helper.txn.createContractInstance('ExposedInternalsForTesting', []);
      },
      function(helper) {
        helper.assert.notEqual(this.throneInternals.computeNameFuzzyHashET('a'),
                               this.throneInternals.computeNameFuzzyHashET('b'),
                               'expect different names to have different hashes - single char');
        helper.assert.notEqual(this.throneInternals.computeNameFuzzyHashET('ai'),
                               this.throneInternals.computeNameFuzzyHashET('bi'),
                               'expect different names to have different hashes - two chars');
        helper.assert.notEqual(this.throneInternals.computeNameFuzzyHashET('apple'),
                               this.throneInternals.computeNameFuzzyHashET('banana'),
                               'expect different names to have different hashes - different lengths and prefix');
        helper.assert.notEqual(this.throneInternals.computeNameFuzzyHashET('ab'),
                               this.throneInternals.computeNameFuzzyHashET('abacus'),
                               'expect different names to have different hashes - different lengths same prefix');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('a'),
                            this.throneInternals.computeNameFuzzyHashET('a'),
                            'expect identical names to have identical hashes - single char');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('apple BANANA 123 Zygote'),
                            this.throneInternals.computeNameFuzzyHashET('apple BANANA 123 Zygote'),
                            'expect identical names to have identical hashes - multiple varied chars');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('hello'),
                            this.throneInternals.computeNameFuzzyHashET('hello  '),
                            'expect similar names to have identical hashes - trailing space example');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('hello'),
                            this.throneInternals.computeNameFuzzyHashET('  hello'),
                            'expect similar names to have identical hashes - leading space example');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('heLLo'),
                            this.throneInternals.computeNameFuzzyHashET('HellO'),
                            'expect similar names to have identical hashes - case example');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('twenty-four hour shifts'),
                            this.throneInternals.computeNameFuzzyHashET('twenty four-hour shifts'),
                            'expect similar names to have identical hashes - dashes example');
        helper.assert.equal(this.throneInternals.computeNameFuzzyHashET('HELLO'),
                            this.throneInternals.computeNameFuzzyHashET(' -- h e l l o -- '),
                            'expect similar names to have identical hashes - complex example');
      }
    ]
  });

  runner.addTest({
    title: 'Name Validation',
    categories: ['internals'],
    steps: [
      function(helper) {
        this.throneInternals = helper.txn.createContractInstance('ExposedInternalsForTesting', []);
      },
      function(helper) {
        var expectGood = [
          'a', 'single-char ok',
          'a-', 'dash ok',
          'a ', 'space ok',
          'a!', 'exclamation ok',
          'a_', 'underscore ok',
          'a.', 'dot ok',
          '1', 'lone number ok',
          'aZ', 'upper-case ok',
          ' abc ', 'padding ok',
          'abcdefghijklmnopqrstuvwxy', '25 chars just ok',
          'My Amazing Throne', 'typical name 1',
          'Awesome Queen of Goats', 'typical name 2'
        ];
        for (var i = 0; i < expectGood.length; i += 2) {
          var str = expectGood[i];
          var reason = expectGood[i+1];
          helper.assert.equal(true, this.throneInternals.validateNameInternalET(str), reason);
        }
      },
      function(helper) {
        var expectBad = [
          '', 'empty',
          '--', 'no non-punctuation',
          'o\'brien', 'sorry, no single quote',
          'B@D', 'at symbol not allowed in names',
          'B@@D', 'two wrongs do not make a right',
          'BAD?', 'question mark not allowed in names',
          'a\tb', 'tab not allowed',
          'a\nb', 'newline not allowed',
          'a\u00C1', 'non-ASCII (iso8859-1) not allowed',
          'a\u570B', 'non-ASCII (chinese) not allowed',
          '-------------------------------', 'more than 30 chars not allowed',
          '                               ', 'more than 30 chars not allowed (even if all spaces)'
        ];
        for (var i = 0; i < expectBad.length; i += 2) {
          var str = expectBad[i];
          var reason = expectBad[i+1];
          helper.assert.equal(false, this.throneInternals.validateNameInternalET(str), reason);
        }
      }
    ]
  });
  
  runner.addTest({
    title: 'Test roundMoneyDownNicely',
    categories: ['internals'],
    steps: [
      function(helper) {
        this.throneInternals = helper.txn.createContractInstance('ExposedInternalsForTesting', []);
      },
      function(helper) {
        var expectedTriples = [
          helper.math.toWei('12.3', 'ether'), helper.math.toWei('12.34', 'ether'), 'three sig figs in range',
          helper.math.toWei('12.3', 'ether'), helper.math.toWei('12.39', 'ether'), 'rounded down not to nearest',
          helper.math.toWei('1.234', 'mwei'), helper.math.toWei('1.234', 'mwei'), 'tiny amounts not rounded'
        ];
        for (var i = 0; i < expectedTriples.length; i += 3) {
          var expected = expectedTriples[i+0];
          var raw = expectedTriples[i+1];
          var reason = expectedTriples[i+2];
          helper.assert.equal(expected, this.throneInternals.roundMoneyDownNicelyET(raw), reason);
        }
      }
    ]
  });

  runner.addTest({
    title: 'Test roundMoneyUpToWholeFinney',
    categories: ['internals'],
    steps: [
      function(helper) {
        this.throneInternals = helper.txn.createContractInstance('ExposedInternalsForTesting', []);
      },
      function(helper) {
        var expectedTriples = [
          helper.math.toNumber('1234'), helper.math.toWei('1.233999', 'ether'), 'close',
          helper.math.toNumber('1234'), helper.math.toWei('1.233001', 'ether'), 'far but still goes up',
          helper.math.toNumber('1234'), helper.math.toWei('1.234', 'ether'), 'already whole not affected',
          helper.math.toNumber('1'), helper.math.toWei('1', 'wei'), 'even tiny amounts rounded up',
          helper.math.toNumber('0'), helper.math.toWei('0', 'wei'), 'zero unchanged'
        ];
        for (var i = 0; i < expectedTriples.length; i += 3) {
          var expected = expectedTriples[i+0];
          var raw = expectedTriples[i+1];
          var reason = expectedTriples[i+2];
          helper.assert.equal(expected, this.throneInternals.roundMoneyUpToWholeFinneyET(raw), reason);
        }
      }
    ]
  });
  
};

exports = module.exports = TestThroneInternals;
