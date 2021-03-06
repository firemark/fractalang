Cursor manipulations
====================

We need to explain what is cursor before we start.

The Cursor (like a turtle from `logo`_) remembers last position and last heading (direction). If you draw a line, then cursor move to end of line. If you rotate, then cursor will be rotated. On plane cursor is invisible (because you want a fractal, not a cursor path!), but without him, it would not possible to draw anything.

We have two common operations on cursor. First is forward a cursor (it's like a drawing line without line ;-)):

Go forward
^^^^^^^^^^

.. tut:animation:: Forward cursor
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Let's start with line
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@MOVE_FORWARD, F@COUNT_2        # Here we add "Forward action" which moving cursor by 2 units.
   F@CALL_F, F@ARGUMENT        # Repeat itself. Next steps are increment iterations.
   !IT_INC
   !IT_INC

Rotate
^^^^^^

Second is rotate:

.. tut:animation:: Rotate cursor
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Again, draw line.
   F@ROTATE_LEFT, F@ANGLE_90   # Rotate left cursor by 90°. Notice a token value. It means quarter of full-rotation.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle. Notice a heading of triangle.
   F@CALL_F, F@ARGUMENT        # Repeat itself. Next steps are increment iterations.
   !IT_INC
   !IT_INC
   !IT_INC

Reverse
^^^^^^^

Third is reverse token. This tokens undo last **N** cursor movements (but not **drawing actions**)

.. tut:animation:: Reverse cursor
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Again, draw line.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@REVERSE, F@COUNT_2        # Reverse last two cursor action.
   F@ROTATE_LEFT, F@ANGLE_30   # Rotate left cursor by 30°.
   F@CALL_F, F@ARGUMENT        # Repeat itself. Next steps are increment iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Replay
^^^^^^^

Last is replay token. Repeat **N** times last token-action.
This token is not helpfull for sigle tokens, but on next section
we learn about "grouping" tokens.

.. tut:animation:: Replay
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                 # Again, draw line.
   F@REPLAY, F@COUNT_3         # Replay it three times.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.
   F@CALL_F, F@ARGUMENT        # Repeat itself. Next steps are increment iterations.
   !IT_INC
   !IT_INC

And that is - in next sections we describe invoking another lines and operations on cursor will be very useful.

.. _logo: https://en.wikipedia.org/wiki/Logo_(programming_language)
