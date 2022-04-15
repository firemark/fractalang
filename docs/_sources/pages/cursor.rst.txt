Cursor manipulations
====================

X

.. tut:animation:: Forward cursor
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_2
   F@FORWARD
   F@COUNT_2
   F@DRAW_CIRCLE
   F@COUNT_2
   F@CALL_F
   F@ARGUMENT
   !IT_INC
   !IT_INC

X

.. tut:animation:: Rotate cursor
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_2
   F@ROTATE_LEFT
   F@ANGLE_90
   F@DRAW_CIRCLE
   F@COUNT_2
   F@CALL_F
   F@ARGUMENT
   !IT_INC
   !IT_INC
   !IT_INC
