/*
 * Copyright 2010 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

addScriptToInject(function() {

chrome_comp.CompDetect.declareDetector(

'table_margin_affects_align_center',

chrome_comp.CompDetect.ScanDomBaseDetector,

null, // constructor

function checkNode(node, context) {
  if (Node.ELEMENT_NODE != node.nodeType || context.isDisplayNone() ||
      node.tagName != 'TABLE')
    return;

  if (chrome_comp.getAttributeLowerCase(node, 'align') == 'center') {
    var computedStyle = chrome_comp.getComputedStyle(node);
    if (computedStyle.display == 'table') {
      var marginLeft = parseInt(computedStyle.marginLeft);
      var marginRight = parseInt(computedStyle.marginRight);
      if (Math.abs(marginLeft - marginRight) > 1 ||
          marginLeft + marginRight + node.offsetWidth !=
              parseInt(chrome_comp.getComputedStyle(node.parentNode).width))
        this.addProblem('RX8004', [node]);
    }
  }
}
); // declareDetector

});
