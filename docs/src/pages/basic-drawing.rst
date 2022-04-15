Basic Drawing
=============

In this tutorial we're draw lines, shapes and arces.
I promise - these elements are easy and really fast to learn!

Let's try to draw one line:

.. tut:animation:: Hello World
   :lines: F
   :iterations: 1
   :start: 0

   F@DRAW_LINE
   F@COUNT_2

Here, we used a *Draw Line* token :tut:token:`DRAW_LINE` and *Count 2* token :tut:token:`COUNT_2`.

.. tut:animation:: Count multipler
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_2
   F@COUNT_3

.. tut:animation:: Drawing a circle
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_2
   F@COUNT_3
   F@DRAW_CIRCLE
   F@COUNT_5

.. tut:animation:: Drawing a square
   :lines: F
   :iterations: 1
   :start: 3

   F@DRAW_LINE
   F@COUNT_2
   F@COUNT_3
   F@DRAW_SQUARE
   F@COUNT_5

.. tut:animation:: Drawing an arc
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_ARC_1_2
   F@COUNT_2
   F@_DRAW_ARC_1_4
   F@COUNT_3
   F@DRAW_SQUARE
   F@COUNT_2

.. tut:animation:: Simple recursion
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE
   F@COUNT_5
   F@DRAW_CIRCLE
   F@COUNT_2
   F@CALL_F
   F@ARGUMENT
   !IT_ICR
   !IT_ICR
   !IT_ICR
