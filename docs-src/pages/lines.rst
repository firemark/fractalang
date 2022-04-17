Invoking lines and recursion
============================

As you see -

.. tut:animation:: Two lines
   :lines: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@COUNT_2      # Let's start with line on line "G".
   G@DRAW_TRIANGLE, G@COUNT_5  # Draw a triangle.
   G@DRAW_ARCLINE_R_1_4        # Draw an arc. I think, line "G" is done.
   F@CALL_G, F@ARGUMENT        # On line "F" we can invoke line "G". Don't worry about Argument (Triangle) token. We will explain this later.
   F@FORWARD, F@COUNT_2        # Add simple forward.
   F@CALL_F, F@ARGUMENT        # Repeat itself.
   G@DRAW_SQUARE, G@COUNT_5, G@COUNT_5  # We can still modifing line "G". Next steps are increment iterations.
   !IT_INC
   !IT_INC
