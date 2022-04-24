Fractals
========

Binary Tree
^^^^^^^^^^^

.. tut:animation:: Binary Tree.
   :staves: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@DRAW_CIRCLE, G@COUNT_5  # Draw a line and triangle.
   F@CALL_G                               # Invoke "G" Stave.
   F@ROTATE_LEFT, F@ANGLE_45              # Rotate left
   F@CALL_F, F@REVERSE, F@COUNT_2         # Repeat and reverse.
   F@ROTATE_RIGHT, F@ANGLE_45             # Rotate Right
   F@CALL_F, F@REVERSE, F@COUNT_2         # Repeat and reverse.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

