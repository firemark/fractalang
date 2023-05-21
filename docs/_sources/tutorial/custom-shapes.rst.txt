Custom shapes
=============

Ok, we know about invoking staves, drawing lines, and changing colors.
But we need still more - custom shapes!

The idea of custom shape is simple, it's still a drawing or moving the cursor, 
but instead of invoking the *default* stave, we're invoking the *close* stave.
At the end of the *close* stave the cursor returns to pose where starts
drawing the figure and adds a new figure to the plane. Imagine if you instead of 
a pen, you have scissors, cut a piecie of paper, and paste it into the image.

Ok, let's start with the first example:

.. tut:animation:: The Rounded Bar
   :staves: F G
   :iterations: 3
   :start: 1

   F@CLOSE_CALL_G, F@COUNT_2  # Let's draw the first figure.
   G@DRAW_LINE, G@ARGUMENT    # Draw a line. You should see nothing for now. Be patient!
   G@DRAW_ARCLINE_L_1_2       # Draw an arc. You should notice the shape is closing to the start of the stave. 
   G@DRAW_LINE, G@ARGUMENT    # Draw the next line.
   G@DRAW_ARCLINE_L_1_2       # Draw the next arc; now we have a rounded bar!
   F@MOVE_FORWARD, F@COUNT_5, F@CLOSE_CALL_G, F@COUNT_3  # Let's draw the second figure.

It's of course possible to use recurrence.

.. tut:animation:: The Cloud
   :staves: F G H
   :iterations: 4
   :start: 1

   F@ROTATE_LEFT, F@ANGLE_90, F@CLOSE_CALL_G  # Let's draw the figure.
   G@CALL_H                                   # Just call the "H" stave.
   H@DRAW_ARCLINE_L_1_2                       # Draw an arc.
   H@FLIP_H, H@CALL_H      # Flip and call themself with an argument.
   G@FLIP_H, G@DRAW_ARCLINE_L_1_4  # Then, draw the bottom of the figure.
   G@ROTATE_RIGHT, G@ANGLE_90, G@CALL_H       # Call the "H" stave again.
   G@FLIP_H, G@DRAW_ARCLINE_L_1_4  # Close the figure.
   !IT_INC                                    # Next steps increasing the iterations.
   !IT_INC
   !IT_INC

Remember, if the last pose of the cursor won't be in the same place 
as the first pose of the custom shape, then the editor will create 
an ugly line between the start and the end of the custom shape.
Let's see an example:

.. tut:animation:: The Flower
   :staves: F G
   :iterations: 2
   :start: 1

   F@CLOSE_CALL_G, F@ROTATE_LEFT, F@ANGLE_60, F@REPLAY_2, F@COUNT_2, F@COUNT_3  # Invoke the "G" stave 6 times.
   G@DRAW_ARCLINE_L_1_3, G@ARGUMENT           # Draw the first arc.
   G@DRAW_ARCLINE_R_1_5, G@ARGUMENT           # Draw the second arc.
   G@CALL_G, G@COUNT_MINUS, G@FRACT_1_2, G@ARGUMENT  # Do it again with a weird argument.
   F@DRAW_CIRCLE, F@COUNT_5, F@COLOR_MAX      # Add a funny red dot.
   !IT_INC                                    # Next steps increasing the iterations.
   !IT_INC

In the next section, I'll tell you how to generate common fractals.