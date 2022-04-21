Invoking staves and recursion
=============================

Drawing lines is pretty boring.
For move advanced fractals we should use
recursion and invoking another staves.

In previous examples we used a single stave **F**. But we can use more staves.
In example we can put in *helper stave* tokens as part of fractal and *invoke* them in main stave **F**.

.. tut:animation:: Two Staves with recursion.
   :staves: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@COUNT_2      # Let's start with stave on line "G".
   G@DRAW_TRIANGLE, G@COUNT_5  # Draw a triangle.
   G@DRAW_ARCLINE_R_1_4        # Draw an arc. I think, stave "G" is done.
   F@CALL_G, F@ARGUMENT        # On line "F" we can invoke stave "G". Don't worry about Argument (Triangle) token. We will explain this later.
   F@FORWARD, F@COUNT_2        # Add simple forward.
   F@CALL_F, F@ARGUMENT        # Repeat itself.
   G@DRAW_SQUARE, G@COUNT_5, G@COUNT_5  # We can still modifing stave "G". Next steps are increment iterations.
   !IT_INC
   !IT_INC

Arguments
---------

At last, we can talk about token-value Argument :tut:token:`ARGUMENT`.
Each invoked stave had

First iteration used stave **F** with default argument `1.0`

.. tut:animation:: Argument
   :staves: F
   :iterations: 3
   :start: 1

   F@DRAW_LINE, F@ARGUMENT     # Draw a line with an argument. Argument value is determined by value of invoking function.
   F@DRAW_TRIANGLE, F@COUNT_3  # Draw a triangle.
   F@ROTATE_LEFT, F@ANGLE_90   # Rotate a cursor.
   F@CALL_F, F@ARGUMENT        # Repeat itself. We should get a square when we pass value as "argument".
   F@FRACT_3_4                 # And now try to reduce a value of invoking staff. Each next line it's smaller than previous. It's a nice spiral! Next steps are increment iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Argument can be used for any token-action, like in rotating:

.. tut:animation:: Argument in rotating
   :staves: F
   :iterations: 3
   :start: 1

   F@DRAW_LINE, F@COUNT_1                 # Draw a line.
   F@DRAW_TRIANGLE, F@COUNT_3             # Draw a triangle.
   F@ROTATE_LEFT, F@ANGLE_45, F@ARGUMENT  # Rotate a cursor with argument.
   F@CALL_F, F@ARGUMENT                   # Repeat itself.
   F@COUNT_3, F@FRACT_1_2, F@FRACT_3_4    # Increase an argument.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Argument can be used for invoking another staves

.. tut:animation:: Argument in another staves
   :staves: F G
   :iterations: 3
   :start: 1

   G@DRAW_CIRCLE, G@ARGUMENT, G@ARGUMENT, G@FORWARD, G@FRACT_1_5, G@ARGUMENT  # Draw circle and move on.
   F@CALL_G, F@COUNT_2     # First invoking of stave "G"
   F@CALL_G, F@COUNT_5     # Second invoking of stave "G"
   F@CALL_G, F@COUNT_3     # Third invoking of stave "G"
   F@REPLAY, F@COUNT_3     # Repeat last action three times.
   G@ROTATE_LEFT, G@ANGLE_15, G@DRAW_ARCLINE_L_1_4, G@ARGUMENT, G@REVERSE # draw fancy arcline

Specialized Arguments
^^^^^^^^^^^^^^^^^^^^^

Parity Staves
-------------


End Staves
----------
