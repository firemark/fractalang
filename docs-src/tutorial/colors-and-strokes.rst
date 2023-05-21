Colors and strokes.
=============================

Ok, we know how to draw lines, figures, and fractals,
but monochromatic fractals are boring and remind me
of black-and-white CRT monitors. Let's add some colors 
(and soul) to our fractals!

Colors
^^^^^^

We can change a line/shape into second color (the default is a red color, 
but you can change them in the editor). Let's see an example:

.. tut:animation:: The second color
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                 # Let's draw a line.
   F@DRAW_TRIANGLE, F@COUNT_5  # Let's draw a triangle.
   F@COLOR_MAX                 # Set the second color.

We can transist the color from the first to the second with small steps.

.. tut:animation:: Change color
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                  # Let's draw a line.
   F@DRAW_TRIANGLE, F@COUNT_5   # Let's draw a triangle.
   F@CALL_F, F@COLOR_SHIFT_1_4  # Invoke the stave "F" by changing a color a little bit.
   !IT_INC                      # Next steps increasing the iterations.
   !IT_INC
   !IT_INC
   !IT_INC

The Transparent Figure
^^^^^^^^^^^^^^^^^^^^^^

Is possible to *unfill* any shape:

.. tut:animation:: The Transparent Figure
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                 # Let's draw a line.
   F@DRAW_TRIANGLE, F@COUNT_5  # Let's draw a triangle.
   F@COLOR_EMPTY               # Set the triangle as unfilled. You should see only the border of the triangle.

Strokes
^^^^^^^

Another way to *decorate* the fractal by changing the thickness of a line.

.. tut:animation:: Thick stroke
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                   # Let's draw a line.
   F@DRAW_ARCLINE_L_1_5          # Let's draw an arc.
   F@CALL_F, F@STROKE_THICK_ADD  # Invoke the stave "F" by changing the thickness of a stroke a little bit.
   !IT_INC                       # Next steps increasing the iterations.
   !IT_INC
   !IT_INC
   !IT_INC


.. tut:animation:: Thin stroke
   :staves: F
   :iterations: 1
   :start: 1

   F@DRAW_LINE                   # Let's draw a line.
   F@DRAW_ARCLINE_L_1_5          # Let's draw an arc.
   F@CALL_F, F@STROKE_THICK_SUB  # Invoke the stave "F" by changing the thickness of a stroke a little bit.
   !IT_INC                       # Next steps increasing the iterations.
   !IT_INC
   !IT_INC
   !IT_INC

In the next section, I'll tell you how to generate custom shapes.