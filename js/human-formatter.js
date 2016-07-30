/* jslint node:true */
'use strict';

/*
 * Turns internal representations of measures and things into nice human strings.
*/

function HumanFormatter(web3) {
  this.web3 = web3;
}

HumanFormatter.prototype.formatAmountWei = function(amountWei) {
  amountWei = this.web3.toBigNumber(amountWei);
  if (amountWei.decimalPlaces() || amountWei.isNegative()) {
    return 'UNKNOWN';
  }
  var amountFinney = this.web3.fromWei(amountWei, 'finney');
  var amountEther = this.web3.fromWei(amountWei, 'ether');
  if (amountEther.lessThan('1') && !amountEther.isZero()) {
    return amountFinney.toString() + ' FINNEY' + ' (' + amountEther.toString() + ' ETHER)';
  } else {
    return amountEther.toString() + ' ETHER';
  }
};

HumanFormatter.prototype.formatPercent = function(percent) {
  percent = this.web3.toBigNumber(percent);
  return percent.toString() + '%';
};

HumanFormatter.prototype.formatPerThousand = function(perThousand) {
  perThousand = this.web3.toBigNumber(perThousand);
  if (perThousand.isNegative()) {
    return 'UNKNOWN';
  }
  return this.formatPercent(perThousand.dividedBy('10'));
};

HumanFormatter.prototype.formatDurationSeconds = function(durationSeconds) {
  durationSeconds = this.web3.toBigNumber(durationSeconds);
  durationSeconds = durationSeconds.ceil();
  if (durationSeconds.isNegative()) {
    return 'UNKNOWN';
  }
  var secondsPart = durationSeconds.modulo(60);
  var durationMinutes = durationSeconds.dividedToIntegerBy(60);
  var minutesPart = durationMinutes.modulo(60);
  var durationHours = durationMinutes.dividedToIntegerBy(60);
  var hoursPart = durationHours.modulo(24);
  var durationDays = durationHours.dividedToIntegerBy(24);
  var daysPart = durationDays;
  if (!daysPart.isZero()) {
    return daysPart.toString() + ' days' +
      (hoursPart.isZero() ? '' : ' ' + hoursPart.toString() + ' hours');
  } else if (!hoursPart.isZero()) {
    return hoursPart.toString() + ' hours' +
      (minutesPart.isZero() ? '' : ' ' + minutesPart.toString() + ' minutes');
  } else if (!minutesPart.isZero()) {
    return minutesPart.toString() + ' minutes' +
      (secondsPart.isZero() ? '' : ' ' + secondsPart.toString() + ' seconds');
  } else if (!secondsPart.isZero()) {
    return secondsPart.toString() + ' seconds';
  } else {
    return 'immediately';
  }
};

HumanFormatter.prototype.formatTimestamp = function(posixTimestampSeconds) {
  posixTimestampSeconds = this.web3.toBigNumber(posixTimestampSeconds);
  posixTimestampSeconds = posixTimestampSeconds.round();
  if (posixTimestampSeconds.lessThan('0') || posixTimestampSeconds.greaterThan('2e9')) {
    return 'UNKNOWN';
  }
  var posixTimestampMilliseconds = posixTimestampSeconds.times('1000');
  var date = new Date(posixTimestampMilliseconds.toNumber());
  // e.g. 2016-07-14T20:50:47.451Z
  var isoString = date.toISOString();
  var datePart = isoString.substring(0, 10);
  var timePart = isoString.substring(11, 19);
  // be nicer to localise to user's timezone; could do with
  // client-side JS ...
  var nicerUtcString = datePart + ' ' + timePart + ' UTC';
  return nicerUtcString;
};

exports = module.exports = HumanFormatter;
