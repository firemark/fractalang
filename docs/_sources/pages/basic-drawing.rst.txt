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

If we join together in order :tut:token:`DRAW_LINE` :tut:token:`COUNT_2`
then we got sentence *Draw a line of width 2 units*
or invoking function in any programming language ``drawLine(Count2)``.

In the editor you see a small amount of "counters": :tut:token:`COUNT_2`, :tut:token:`COUNT_3` and :tut:token:`COUNT_5`.
But what if you want line of width 4 units? There we can use joining two token-values together creates a product.
In e.g. :tut:token:`DRAW_LINE` :tut:token:`COUNT_2` :tut:token:`COUNT_2` means *Draw a line of width 4 units* because ``2 * 2 = 4``.

Let's try another example:

.. tut:animation:: Count multipler
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_CIRCLE  # Draw a circle. If values are not provided, then default value is one unit.
   F@DRAW_LINE    # Like in previous example, I used "Draw line".
   F@COUNT_2      # First token-value with "Count 2".
   F@COUNT_3      # Second token-value with "Count 3" - two values aligned to action "Draw line" multiples together producing value "6". Notice how small is the circle - because image is scaled to show whole line.

Except boring lines, we can draw a basic shapes:

.. tut:animation:: Drawing a circle
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2  # Draw a line like in previous examples.
   F@DRAW_CIRCLE           # Like in previous, draw a circle.
   F@COUNT_5               # But here we add size of circle.

.. tut:animation:: Drawing a square
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2    # Draw a line like in previous examples.
   F@DRAW_SQUARE, F@COUNT_5  # Draw a square.

.. tut:animation:: Drawing a triangle
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Draw a line like in previous examples.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.

We can draw arcs too:

.. tut:animation:: Drawing an arc
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_ARCLINE_R_1_2, F@COUNT_2       # Draw an arc right-side of half circle with radius of 2 units.
   F@DRAW_ARCLINE_L_1_4, F@COUNT_3       # Draw an arc left-side of quarter circle with radius of 3 units.
   F@DRAW_TRIANGLE, F@COUNT_5, F@COUNT_5 # Draw a triangle of the end of code. Did you notice a heading of triangle?

And that is. Fractalang doesn't have more shapes, but I promise you, is enough to make a beautiful fractals.

On the end I show you very simple recursion - it's a topic for the next tutorials, but this example should show power of recursion:

.. tut:animation:: Simple recursion
   :lines: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # 😪 Boring drawing line…
   F@DRAW_TRIANGLE, F@COUNT_5  # 😪 Another boring circle…
   F@CALL_F       # AND NOW RECURSION POWER! We add an a "invoking a procedure F". It means the code from line "F" are executed in this place. It's very simillar to loop in programming languages.
   F@ARGUMENT     # Here is token-value "Argument". We will talk about him in next sections.
   !IT_INC        # We can increase an "iterations" - means how much procedures "F" can be executed. Click "NEXT" to increse iterations.
   !IT_INC
   !IT_INC
