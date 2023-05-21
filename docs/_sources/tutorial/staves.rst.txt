Invoking staves and recursion
=============================

The drawing lines are pretty boring.
For more advanced fractals we should use
a recursion and an invoking other staves.

In the previous examples, we used a single stave :tut:token:`CALL_F`. But we can use more staves.
For example, we can put tokens into the *helper stave* :tut:token:`CALL_G` as part of the fractal
and *invoke* the *helper stave* :tut:token:`CALL_G` in the main stave :tut:token:`CALL_F`.

.. note::
   Each invoked stave at the beginning increases an iteration counter and at the end decreases it.
   Remember about it when you invoke a *helper stave* with a small iterations limit.

.. tut:animation:: Two Staves with a recursion.
   :staves: F G
   :iterations: 2
   :start: 1

   G@DRAW_LINE, G@COUNT_2      # Let's start with a stave on the line "G".
   G@DRAW_TRIANGLE, G@COUNT_5  # Draw a triangle.
   G@DRAW_ARCLINE_R_1_4        # Draw an arc. I think, the stave "G" is done.
   F@CALL_G, F@ARGUMENT        # On the stave "F" we can invoke the stave "G". Don't worry about the "Argument" (Triangle) token. We will explain this later.
   F@MOVE_FORWARD, F@COUNT_2   # Add a simple forwarding.
   F@CALL_F, F@ARGUMENT        # Repeat itself.
   G@DRAW_SQUARE, G@COUNT_5, G@COUNT_5  # We can still modify the stave "G". Next steps increment the iterations.
   !IT_INC
   !IT_INC

Arguments
---------

At last, we can talk about the token-value *Argument* :tut:token:`ARGUMENT`.
Each invoked stave has an *argument*. It's a dynamic value which setups on the invoking token in the previous stave.
It's very similar to variables in functions - if the stave :tut:token:`CALL_G` is invoked with
:tut:token:`COUNT_2`, then :tut:token:`DRAW_LINE` :tut:token:`ARGUMENT` :tut:token:`COUNT_3`
draws a line with a width of `5` units.

The first iteration used the stave :tut:token:`CALL_F` with the default argument `1.0`

See an example:

.. tut:animation:: Argument
   :staves: F
   :iterations: 3
   :start: 1

   F@DRAW_LINE, F@ARGUMENT     # Draw a line with an argument. The argument value is determined by a value of invoking stave.
   F@DRAW_TRIANGLE, F@COUNT_3  # Draw a triangle.
   F@ROTATE_LEFT, F@ANGLE_90   # Rotate the cursor.
   F@CALL_F, F@ARGUMENT        # Repeat itself. We should get a square when we put a value as an "argument" token.
   F@FRACT_3_4                 # And now try to reduce the value of an invoking stave. Each the next line it's smaller than the previous line. It's a nice spiral! The next steps increment the iterations.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Arguments can be used for any token-action, like in the rotating:

.. tut:animation:: Argument in the rotating
   :staves: F
   :iterations: 3
   :start: 1

   F@DRAW_LINE                            # Draw a line.
   F@DRAW_TRIANGLE, F@COUNT_3             # Draw a triangle.
   F@ROTATE_LEFT, F@ANGLE_45, F@ARGUMENT  # Rotate the cursor with an argument.
   F@CALL_F, F@ARGUMENT                   # Repeat itself.
   F@COUNT_3, F@FRACT_1_2, F@FRACT_3_4    # Increase an argument.
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC
   !IT_INC

Arguments can be used for invoking other staves:

.. tut:animation:: Argument in other staves
   :staves: F G
   :iterations: 3
   :start: 1

   G@DRAW_CIRCLE, G@ARGUMENT, G@ARGUMENT, G@MOVE_FORWARD, G@FRACT_1_5, G@ARGUMENT  # Draw a circle and move forward.
   F@CALL_G, F@COUNT_2     # The first invoking of the stave "G"
   F@CALL_G, F@COUNT_5     # The second invoking of the stave "G"
   F@CALL_G, F@COUNT_3     # The third invoking of the stave "G"
   F@REPLAY, F@COUNT_3     # Repeat the last token-action three times.
   G@ROTATE_LEFT, G@ANGLE_15, G@DRAW_ARCLINE_L_1_4, G@ARGUMENT, G@REVERSE # Draw a fancy arcline

Dynamic Arguments
^^^^^^^^^^^^^^^^^

Sometimes we need a shortcut of *half of the argument* or *one-third of the argument*.
We can do that with *dynamic arguments* like :tut:token:`CALL_DIAMOND` or :tut:token:`CALL_INV_TRIANGLE`.

These arguments are declared as other staves with two rules - without a recurrency and token-values.

.. tut:animation:: Dynamic Argument
   :staves: F DIAMOND INV_TRIANGLE
   :iterations: 3
   :start: 1

   DIAMOND@ARGUMENT, DIAMOND@FRACT_1_3    # Set a "Diamond argument" as one-third of the argument.
   INV_TRIANGLE@COUNT_2, INV_TRIANGLE@COUNT_5, INV_TRIANGLE@ARGUMENT  # Set an "Inverse triangle argument" as ten times the argument.
   F@MOVE_FORWARD, F@FRACT_1_5            # Move forward.
   F@DRAW_CIRCLE, F@CALL_INV_TRIANGLE     # Draw a circle with an "Inverse triangle argument" token as value.
   F@CALL_F, F@CALL_DIAMOND               # Repeat the stave with a "Diamond argument" token. The next circles should be smaller than the previous circles.
   F@CALL_F, F@COUNT_3, F@CALL_DIAMOND    # Do it again! The next steps increase the iterations.
   !IT_INC
   !IT_INC
   !IT_INC

Special Staves
--------------

Staves can be specialized to invoke during special conditions:

* When the current iteration number is odd.
* When the current iteration number is even.
* When is the last iteration.
* When the current number of iterations exceeds 2, 3, 4, 5, or 7 iterations.

Parity Staves
^^^^^^^^^^^^^

.. tut:animation:: Parity staves
   :staves: F G::ODD G::EVEN
   :iterations: 3
   :start: 1

   F@DRAW_LINE, F@FRACT_1_3, F@CALL_G, F@CALL_F  # Draw a line and invoke *G* and *F* staves.
   G::ODD@DRAW_SQUARE, G::ODD@COUNT_5            # On odd iterations draw a square.
   G::EVEN@DRAW_CIRCLE, G::EVEN@COUNT_3          # On even iterations draw a circle.

End Staves
^^^^^^^^^^

.. tut:animation:: End staves
   :staves: F F::END G
   :iterations: 3
   :start: 1

   F@CALL_G, F@DRAW_LINE, F@FRACT_1_3, F@CALL_F # Just draw a line and invoke *G* and *F* staves.
   G@DRAW_SQUARE, G@COUNT_5                     # Draw a square in a *G* stave.
   F::END@DRAW_TRIANGLE, F::END@COUNT_3         # Draw a triangle on the last iteration.

I think that's all with staves, arguments, and a recurrence. In the next section, I'll tell how to manipulate with colors and strokes.
