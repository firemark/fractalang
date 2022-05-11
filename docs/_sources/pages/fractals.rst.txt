Fractals
========

Binary Tree
^^^^^^^^^^^

.. tut:animation:: Binary tree
   :staves: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@DRAW_CIRCLE, G@COUNT_3  # Draw a line and circle.
   F@CALL_G                               # Invoke "G" Stave.
   F@ROTATE_LEFT, F@ANGLE_15              # Rotate left
   F@CALL_F, F@REVERSE, F@COUNT_2         # Repeat and reverse.
   F@ROTATE_RIGHT, F@ANGLE_15             # Rotate Right
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

   F@CALL_H, F@ARGUMENT                      # Just invoke stave "H". Be patient :)
   H@CALL_G, H@ARGUMENT                      # Just invoke stave "G".
   G::END@DRAW_LINE, G::END@ARGUMENT         # Starts with drawing line on the last iteration.
   DIAMOND@FRACT_1_3, DIAMOND@ARGUMENT       # Set Diamond argument as one of third argument.
   G@CALL_G, G@CALL_DIAMOND, G@ROTATE_LEFT, G@ANGLE_60               # Invoke stave "G" and rotate by 60°
   G@CALL_G, G@CALL_DIAMOND, G@ROTATE_RIGHT, G@COUNT_2, G@ANGLE_60   # Invoke stave "G" and rotate by 120°
   G@CALL_G, G@CALL_DIAMOND, G@ROTATE_LEFT, G@ANGLE_60               # Invoke stave "G" and rotate by 60°
   G@CALL_G, G@CALL_DIAMOND                                          # Invoke stave "G" without rotation
   F@REPLAY, F@COUNT_3                    # Repeat invoking stave "H" three times.
   H@ROTATE_RIGHT, H@COUNT_2, H@ANGLE_60  # Rotate by 120° in stave "H". Next steps are increasing iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Tatoo-like fractal
^^^^^^^^^^^^^^^^^^

.. tut:animation:: Tatoo-like fractal
   :staves: F G G::END
   :iterations: 3
   :start: 1

   F@CALL_G, F@ARGUMENT, F@REPLAY, F@COUNT_5     # Just invoke stave "G" five times.
