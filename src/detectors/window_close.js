/**
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

addScriptToInject(function() {

chrome_comp.CompDetect.declareDetector(

'window_close',

chrome_comp.CompDetect.NonScanDomBaseDetector,

function constructor(rootNode) {
  var This = this;
  this.close_ = function(result, originalArguments, callStack) {
    var referer = document.referer;
    var hisCount = history.length;
    var source = originalArguments.callee.caller.arguments[0].target;
    if ((!referer) && (hisCount > 1))
      This.addProblem('BX2012', [source]);
  };
},

function setUp() {
  chrome_comp.CompDetect.registerExistingMethodHook(
      window, 'close', this.close_);
},

function cleanUp() {
  chrome_comp.CompDetect.unregisterExistingMethodHook(
      window, 'close', this.close_);
}
); // declareDetector

});
