if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'JSVersion'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'JSVersion'.");
}
var JSVersion = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var trimEnd = Kotlin.kotlin.text.trimEnd_wqw3xr$;
  var TAB_TAG;
  var NEW_LINE_TAG;
  function FicbookLineFormatAlgorithm() {
  }
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  FicbookLineFormatAlgorithm.prototype.formatLine_61zpoe$ = function (line) {
    var tmp$;
    return TAB_TAG + trim(Kotlin.isCharSequence(tmp$ = line) ? tmp$ : throwCCE()).toString() + NEW_LINE_TAG + NEW_LINE_TAG;
  };
  FicbookLineFormatAlgorithm.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FicbookLineFormatAlgorithm',
    interfaces: [LineFormatAlgorithm]
  };
  function LineFormatAlgorithm() {
  }
  LineFormatAlgorithm.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LineFormatAlgorithm',
    interfaces: []
  };
  function main(args) {
  }
  function formatText(text, algorithm) {
    var stringBuilder = new StringBuilder();
    var tmp$;
    tmp$ = lines(text).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      stringBuilder.append_gw00v9$(algorithm.formatLine_61zpoe$(element));
    }
    return trimEnd(stringBuilder.toString(), Kotlin.charArrayOf(10));
  }
  Object.defineProperty(_, 'TAB_TAG', {
    get: function () {
      return TAB_TAG;
    }
  });
  Object.defineProperty(_, 'NEW_LINE_TAG', {
    get: function () {
      return NEW_LINE_TAG;
    }
  });
  _.FicbookLineFormatAlgorithm = FicbookLineFormatAlgorithm;
  _.LineFormatAlgorithm = LineFormatAlgorithm;
  _.main_kand9s$ = main;
  _.formatText_5wte96$ = formatText;
  TAB_TAG = '<tab>';
  NEW_LINE_TAG = '\n';
  main([]);
  Kotlin.defineModule('JSVersion', _);
  return _;
}(typeof JSVersion === 'undefined' ? {} : JSVersion, kotlin);
