Basic Drawing
=============

In this tutorial we're draw lines, shapes and arces.
I promise - these elements are easy and really fast to learn!

Let's try to draw one line:

.. tut:animation:: Hello World
   :lines: F
   :iterations: 1
   :start: 1

   !NOP           # Please click "NEXT" button.
   F@DRAW_LINE    # First, we need to add token-action "Draw Line". It's similar to function in programming language or verb in sentence.
   F@COUNT_2      # Second, we need to add width of Line. In example I used token-value "Count 2" which means value of two units.
   !NOP           # 🎉 we wrote first fractalang code!

Here, we used a *Draw Line* token :tut:token:`DRAW_LINE` and *Count 2* token :tut:token:`COUNT_2`.

.. tut:animation:: Count multipler
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_CIRCLE  # Draw a circle. If values are not provided, then default value is one unit.
   F@DRAW_LINE    # Like in previous example, I used "Draw line".
   F@COUNT_2      # First token-value with "Count 2".
   F@COUNT_3      # Second token-value with "Count 3" - two values aligned to action "Draw line" multiples together producing value "6". Notice how small is the circle - because image is scaled to show whole line.

.. tut:animation:: Drawing a circle
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2, F@COUNT_3  # Draw a line like in previous examples.
   F@DRAW_CIRCLE           # Like in previous, draw a circle.
   F@COUNT_5, F@COUNT_5    # But here we add size of circle.


.. tut:animation:: Drawing a square
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2, F@COUNT_3    # Draw a line like in previous examples.
   F@DRAW_SQUARE, F@COUNT_5, F@COUNT_5  # Draw a square.


.. tut:animation:: Drawing an arc
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_ARCLINE_R_1_2, F@COUNT_2     # Draw an arc right-side of half circle.
   F@DRAW_ARCLINE_L_1_4, F@COUNT_3     # Draw an arc left-side of quarter circle.
   F@DRAW_SQUARE, F@COUNT_5, F@COUNT_5 # Draw a square of the end of code.

.. tut:animation:: Simple recursion
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_5              # 😪 Boring drawing line…
   F@DRAW_CIRCLE, F@COUNT_5, F@COUNT_5 # 😪 Another boring circle…
   F@CALL_F       # AND NOW RECURSION POWER! We add an a "invoking a procedure F". It means the code from line "F" are executed in this place. It's very simillar to loop in programming languages.
   F@ARGUMENT     # Here is token-value "Argument". We will talk about him in next sections.
   !IT_INC        # We can increase an "iterations" - means how much procedures "F" can be executed. Click "NEXT" to increse iterations.
   !IT_INC
   !IT_INC
