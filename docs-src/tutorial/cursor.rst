Cursor manipulations
====================

We need to explain what is cursor before we start.

The Cursor (like a turtle from `logo`_) remembers the last position and the last heading (direction).
If you draw a line, then the cursor moves to the end of the line. If you rotate, then the cursor rotates.
On the plane, the cursor is invisible (because you want a fractal, not a cursor path!), but without him,
it would not be possible to draw anything.

We have tree common operations on the cursor.

First is forwarding the cursor (it's like drawing a line without line ;-)):

Go forward
^^^^^^^^^^

.. tut:animation:: Forward cursor
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Let's start with a line
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@MOVE_FORWARD, F@COUNT_2   # Here we add a "Forward action" token which moves the cursor by 2 units.
   F@CALL_F, F@ARGUMENT        # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC

Rotate
^^^^^^

The Second is a rotating:

.. tut:animation:: Rotate cursor
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Again, draw a line.
   F@ROTATE_LEFT, F@ANGLE_90   # Rotate left the cursor by 90°. Notice a token value. It means a quarter of a full rotation.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle. Notice a heading of the triangle.
   F@CALL_F, F@ARGUMENT        # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC
   !IT_INC

Reverse
^^^^^^^

The third is a reversing token. The token reverses the last **N** cursor movements (but not **drawing actions**)

.. tut:animation:: Reverse cursor
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Again, draw a line.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@REVERSE, F@COUNT_2        # Reverse the last two cursor's actions.
   F@ROTATE_LEFT, F@ANGLE_30   # Rotate left the cursor by 30°.
   F@CALL_F, F@ARGUMENT        # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Replay
^^^^^^^

The last token is a replaying token. Repeats **N** times the last token-action.
The token is not helpful for single tokens, but in the next section,
we learn about "grouping" tokens.

.. tut:animation:: Replay
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                 # Again, draw a line.
   F@REPLAY, F@COUNT_3         # Repeat it three times.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@CALL_F, F@ARGUMENT        # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC


.. tut:animation:: Replay Two tokens
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                 # Again, draw a line.
   F@DRAW_ARCLINE_L_1_3        # Draw an arc.
   F@REPLAY_2, F@COUNT_3       # Repeat the two last tokens it three times.
   F@DRAW_ARCLINE_R_1_3        # Draw an arc.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@CALL_F, F@ARGUMENT        # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC

Flip
^^^^

Sometimes, we need to swap forward with backward or left with right.
For this kind of action is *flip horizontally/vertically*. Let's try with
the *flip vertically* token:

.. tut:animation:: Flip Vertically
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@DRAW_ARCLINE_R_1_2, F@DRAW_TRIANGLE, F@COUNT_7  # Draw a basic shape.
   F@FLIP_V  # Flip vertically the cursor.
   F@CALL_F  # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

And similar another example with *flip horizontally*:

.. tut:animation:: Flip Horizontally
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@DRAW_ARCLINE_R_1_2, F@DRAW_TRIANGLE, F@COUNT_7  # Draw a basic shape.
   F@FLIP_H  # Flip horizontally the cursor.
   F@CALL_F  # Repeat itself. The next steps increment the iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

And that's all! In the next sections, we learn about invoking other staves.
For the next sections learned operations on the cursor will be very useful.

.. _logo: https://en.wikipedia.org/wiki/Logo_(programming_language)
