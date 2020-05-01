// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Do not edit this file with an editor that replaces \r with \r\n.
// Variable definitions for i0 through i3 are each terminated with \r.
function f() {
  var i0 = 0;  var i1 = 1;  var i2 = 2;  var i3 = 3;
  var j0 = 0;
  var j1 = 1;
  var j2 = 2;
  var j3 = 3;
}

Debug = debug.Debug;
var exception = null;
var break_point_hit = false;

function listener(event, exec_state, event_data, data) {
  if (event != Debug.DebugEvent.Break) return;
  try {
    break_point_hit = true;
    assertEquals("  var i2 = 2;", exec_state.frame(0).sourceLineText());
  } catch (e) {
    print(e + e.stack);
    exception = e;
  }
}

Debug.setListener(listener);

Debug.setBreakPoint(f, 3, 0);

f();

Debug.setListener(null);
assertTrue(break_point_hit);
assertNull(exception);
