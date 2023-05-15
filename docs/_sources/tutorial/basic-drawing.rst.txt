Basic Drawing
=============

In this tutorial, we draw lines, shapes, and arcs.
I promise - these elements are easy and really fast to learn!

Let's try to draw one line:

.. tut:animation:: Hello World
   :staves: F
   :iterations: 1
   :start: 1

   !NOP           # Please click the "NEXT" button.
   F@DRAW_LINE    # First, we need to add a token-action "Draw Line". It's similar to a function in programming languages or a verb in sentences.
   F@COUNT_2      # Second, we need to add a width of the line. For example, I used a token-value "Count 2" which means a value of two units.
   !NOP           # 🎉 we wrote the first fractalang code!

Here, we used a *Draw Line* token :tut:token:`DRAW_LINE` and a *Count 2* token :tut:token:`COUNT_2`.

If we join together in order :tut:token:`DRAW_LINE` :tut:token:`COUNT_2`
then we get a sentence *Draw a line of width 2 units*
or invoke a function in any programming language ``drawLine(Count2)``.

In the editor you see a small amount of "counters": :tut:token:`COUNT_2`, :tut:token:`COUNT_3`, and :tut:token:`COUNT_5`.
But what if you want a line of width 4 units? There we can use joining two token-values together that creates a product.
In example :tut:token:`DRAW_LINE` :tut:token:`COUNT_2` :tut:token:`COUNT_2` means *Draw a line of width 4 units* because ``2 * 2 = 4``.

Let's try another example:

.. tut:animation:: Count multipler
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_CIRCLE  # Draw a circle. If values are not provided, then the default value is one unit.
   F@DRAW_LINE    # Like in the previous example, I used "Draw line".
   F@COUNT_2      # The First token-value with "Count 2".
   F@COUNT_3      # The Second token-value with "Count 3" - two values are aligned to action "Draw line" multiples together producing value "6". Notice how small is the circle - because the image is scaled to show the whole line.

Except for boring lines, we can draw basic shapes:

.. tut:animation:: Drawing a circle
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2  # Draw a line like in the previous examples.
   F@DRAW_CIRCLE           # Like in the previous, draw a circle.
   F@COUNT_5               # But here we add a size of the circle.

.. tut:animation:: Drawing a square
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2    # Draw a line like in the previous examples.
   F@DRAW_SQUARE, F@COUNT_5  # Draw a square.

.. tut:animation:: Drawing a triangle
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # Draw a line like in the previous examples.
   F@DRAW_TRIANGLE, F@COUNT_5  # Draw a triangle.

We can draw arcs too:

.. tut:animation:: Drawing an arc
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_ARCLINE_R_1_2, F@COUNT_2       # Draw an arc right-side of a half circle with a radius of 2 units.
   F@DRAW_ARCLINE_L_1_4, F@COUNT_3       # Draw an arc left-side of a quarter circle with a radius of 3 units.
   F@DRAW_TRIANGLE, F@COUNT_5, F@COUNT_5 # Draw a triangle of the end of the stave. Do you notice the heading of the triangle?

And that is. The fractalang doesn't have more shapes (yet!), but I promise you, is enough to make beautiful fractals.

In the end I show you a very simple recursion - it's a topic for the next tutorials, but this example should show the power of recursion:

.. tut:animation:: Simple recursion
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE, F@COUNT_2      # 😪 Boring drawing a line…
   F@DRAW_TRIANGLE, F@COUNT_5  # 😪 Another a boring circle…
   F@CALL_F       # AND NOW THE RECURSION POWER! We add an "invoking a procedure F". That means the code from the stave "F" are executed in the token. It's very similar to loops in programming languages.
   F@ARGUMENT     # Here is a token-value "Argument". We will talk about him in the next sections.
   !IT_INC        # We can increase "iterations" - means how much procedures "F" can be executed. Click the "NEXT" button to increase the iterations.
   !IT_INC
   !IT_INC
