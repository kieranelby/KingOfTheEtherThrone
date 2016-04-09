/* jslint node:true */
'use strict';

/*
 * TODO - document
*/

function TestThroneInternals() {
};

TestThroneInternals.prototype.addTests = function(runner, throneSupport) {

  runner.addTest({
    title: 'Name Hashing',
    categories: ['safe'],
    steps: [
      function(helper) {
        this.throneInternals = helper.txn.createContractInstance('ThroneInternalsForTesting', []);
      },
      function(helper) {
        helper.assert.notEqual(this.throneInternals.computeNameHashExt('a'),
                               this.throneInternals.computeNameHashExt('b'),
                               'expect different names to have different hashes - single char');
        helper.assert.notEqual(this.throneInternals.computeNameHashExt('ai'),
                               this.throneInternals.computeNameHashExt('bi'),
                               'expect different names to have different hashes - two chars');
        helper.assert.notEqual(this.throneInternals.computeNameHashExt('apple'),
                               this.throneInternals.computeNameHashExt('banana'),
                               'expect different names to have different hashes - different lengths and prefix');
        helper.assert.notEqual(this.throneInternals.computeNameHashExt('ab'),
                               this.throneInternals.computeNameHashExt('abacus'),
                               'expect different names to have different hashes - different lengths same prefix');
        helper.assert.equal(this.throneInternals.computeNameHashExt('a'),
                            this.throneInternals.computeNameHashExt('a'),
                            'expect identical names to have identical hashes - single char');
        helper.assert.equal(this.throneInternals.computeNameHashExt('apple BANANA 123 Zygote'),
                            this.throneInternals.computeNameHashExt('apple BANANA 123 Zygote'),
                            'expect identical names to have identical hashes - multiple varied chars');
        helper.assert.equal(this.throneInternals.computeNameHashExt('hello'),
                            this.throneInternals.computeNameHashExt('hello  '),
                            'expect similar names to have identical hashes - trailing space example');
        helper.assert.equal(this.throneInternals.computeNameHashExt('hello'),
                            this.throneInternals.computeNameHashExt('  hello'),
                            'expect similar names to have identical hashes - leading space example');
        helper.assert.equal(this.throneInternals.computeNameHashExt('heLLo'),
                            this.throneInternals.computeNameHashExt('HellO'),
                            'expect similar names to have identical hashes - case example');
        helper.assert.equal(this.throneInternals.computeNameHashExt('twenty-four hour shifts'),
                            this.throneInternals.computeNameHashExt('twenty four-hour shifts'),
                            'expect similar names to have identical hashes - dashes example');
        helper.assert.equal(this.throneInternals.computeNameHashExt('HELLO'),
                            this.throneInternals.computeNameHashExt(' -- h e l l o -- '),
                            'expect similar names to have identical hashes - complex example');
      }
    ]
  });

  runner.addTest({
    title: 'Name Validation',
    categories: ['safe'],
    steps: [
      function(helper) {
        this.throneInternals = helper.txn.createContractInstance('ThroneInternalsForTesting', []);
      },
      function(helper) {
        var expectGood = [
          'a', 'single-char ok',
          '-', 'dash ok',
          ' ', 'space ok',
          '!', 'exclamation ok',
          '\'', 'apostrophe ok',
          '_', 'underscore ok',
          '.', 'dot ok',
          '1', 'number ok',
          'Z', 'upper-case ok',
          ' abc ', 'padding ok',
          'abcdefghijklmnopqrstuvwxyz1234', '30 chars just ok',
          'My Amazing Throne', 'typical name 1',
          'The Awesome Queen of Goats', 'typical name 2'
        ];
        for (var i = 0; i < expectGood.length; i += 2) {
          var str = expectGood[i];
          var reason = expectGood[i+1];
          helper.assert.equal(true, this.throneInternals.validateNameExt(helper.txn.rawWeb3.fromAscii(str)), reason);
        }
      },
      function(helper) {
        var expectBad = [
          '', 'empty',
          'B@D', 'at symbol not allowed in names',
          'B@@D', 'two wrongs do not make a right',
          'BAD?', 'question mark not allowed in names',
          'a\tb', 'tab not allowed',
          'a\nb', 'newline not allowed',
          '\u00C1', 'non-ASCII (iso8859-1) not allowed',
          '\u570B', 'non-ASCII (chinese) not allowed',
          '-------------------------------', 'more than 30 chars not allowed',
          '                               ', 'more than 30 chars not allowed (even if all spaces)'
        ];
        for (var i = 0; i < expectBad.length; i += 2) {
          var str = expectBad[i];
          var reason = expectBad[i+1];
          helper.assert.equal(false, this.throneInternals.validateNameExt(helper.txn.rawWeb3.fromAscii(str)), reason);
        }
      }
    ]
  });
  
};

exports = module.exports = TestThroneInternals;
