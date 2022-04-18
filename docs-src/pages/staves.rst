Invoking staves and recursion
=============================

As you see -

.. tut:animation:: Two Staves
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

.. tut:animation:: Argument [1]
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

.. tut:animation:: Argument [2]
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
