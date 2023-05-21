Fractals
========

Binary Tree
^^^^^^^^^^^

.. tut:animation:: Binary tree
   :staves: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@DRAW_CIRCLE, G@COUNT_3  # Draw a line and a circle.
   F@CALL_G                               # Invoke the "G" Stave.
   F@ROTATE_LEFT, F@ANGLE_15              # Rotate left.
   F@CALL_F, F@REVERSE, F@COUNT_2         # Repeat and reverse.
   F@ROTATE_RIGHT, F@ANGLE_15             # Rotate right.
   F@CALL_F, F@REVERSE, F@COUNT_2         # Repeat and reverse.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Koch snowflake
^^^^^^^^^^^^^^

.. tut:animation:: Koch snowflake
   :staves: F H G G::END DIAMOND
   :iterations: 3
   :start: 1

   F@CALL_H, F@ARGUMENT                      # Just invoke the stave "H". Be patient :)
   H@CALL_G, H@ARGUMENT                      # Just invoke the stave "G".
   G::END@DRAW_LINE, G::END@ARGUMENT         # Start drawing a line at the last iteration.
   DIAMOND@FRACT_1_3, DIAMOND@ARGUMENT       # Set a diamond argument as one-third of the argument.
   G@CALL_G, G@CALL_DIAMOND, G@ROTATE_LEFT, G@ANGLE_60               # Invoke the stave "G" and rotate the cursor by 60°.
   G@CALL_G, G@CALL_DIAMOND, G@ROTATE_RIGHT, G@COUNT_2, G@ANGLE_60   # Invoke the stave "G" and rotate the cursor by 120°.
   G@CALL_G, G@CALL_DIAMOND, G@ROTATE_LEFT, G@ANGLE_60               # Invoke the stave "G" and rotate the cursor by 60°.
   G@CALL_G, G@CALL_DIAMOND                                          # Invoke the stave "G" without rotation.
   F@REPLAY, F@COUNT_3                    # Repeat invoking the stave "H" three times.
   H@ROTATE_RIGHT, H@COUNT_2, H@ANGLE_60  # Rotate the cursor by 120° in the stave "H". Next steps increasing the iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

The Spruce
^^^^^^^^^^^^^^^^^^

.. tut:animation:: The Spruce fractal
   :staves: F G H DIAMOND INV_TRIANGLE
   :iterations: 4
   :start: 1

   F@ROTATE_LEFT, F@ANGLE_90, F@CALL_G  # Rotate by 90° and invoke the stave "G".
   G@CALL_H, G@ARGUMENT                 # Invoke the stave "H" with an argument.
   H@DRAW_LINE, H@ARGUMENT, H@DRAW_TRIANGLE, H@COUNT_3  # Draw a line and a triangle in the stave H.
   DIAMOND@COUNT_2, DIAMOND@COUNT_2, DIAMOND@FRACT_1_5, DIAMOND@ARGUMENT  # Let the diamond be a 4/5 of the argument.
   G@CALL_G, G@CALL_DIAMOND, G@REVERSE  # Invoke the stave "G" with the diamond and reverse.
   INV_TRIANGLE@COUNT_2, INV_TRIANGLE@FRACT_1_5, INV_TRIANGLE@ARGUMENT  # Let the inversed triangle be a 2/5 of the argument.
   G@ROTATE_RIGHT, G@ANGLE_30, G@CALL_G, G@CALL_INV_TRIANGLE, G@REVERSE, G@COUNT_2  # Draw the right side of the spruce and reverse.
   G@ROTATE_LEFT, G@ANGLE_30, G@CALL_G, G@CALL_INV_TRIANGLE, G@REVERSE, G@COUNT_2  # Do it again for the left side.
   !IT_INC  # Next steps increasing the iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC