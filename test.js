'use strict';

var twoSum = require('./main');
require('chai');
var assert = require('assert');


describe('twoSum', function() {
  describe('Input :', function() {
    it('should return two indices when given an array', function() {
      assert.equal([5, 6], twoSum([1, 2, 3, 4, 5, 6, 7], 13));
    });
  });
});
