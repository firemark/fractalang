Cursor operators
================

.. tut:token:: MOVE_FORWARD
   :title: Move forward

   Move forward the cursor by a given value in the cursor's direction.

.. tut:token:: MOVE_BACKWARD
   :title: Move backward

   Move backward the cursor by a given value in the cursor's direction.

.. tut:token:: MOVE_LEFT
   :title: Move backward

   Move left the cursor by a given value in the cursor's direction.

.. tut:token:: MOVE_RIGHT
   :title: Move backward

   Move right the cursor by a given value in the cursor's direction.

.. tut:token:: ROTATE_LEFT
   :title: Rotate left

   Rotate left the cursor. Note that, the :code:`1.0` value means a full rotation.

.. tut:token:: ROTATE_RIGHT
   :title: Rotate right

   Rotate right the cursor. Note that, the :code:`1.0` value means a full rotation.

.. tut:token:: REVERSE
   :title: Reverse

   Reverse the last *N* (determined by given value) actions which modifing the cursor.

   Non-cursor actions are ignored (because they don't modify the cursor).

   Note that painting a line or an arc are modifing cursor too.

.. tut:token:: REPLAY
   :title: Replay last action.

   Repeat previous action *N* times (determined by a given value).

   .. warning::
      The token doesn't work properly with a *Reverse* :tut:token:`REVERSE` token
      and a nested *Replay* :tut:token:`REPLAY` tokens.

.. tut:token:: REPLAY_2
   :title: Replay the last two actions.

   Similiar to a *Replay* :tut:token:`REPLAY` but for two actions instead of one.

.. tut:token:: REPLAY_3
   :title: Replay the last three actions.

   Similiar to a *Replay* :tut:token:`REPLAY` but for three actions instead of one.

.. tut:token:: REPLAY_4
   :title: Replay the last four actions.

   Similiar to a *Replay* :tut:token:`REPLAY` but for four actions instead of one.

.. tut:token:: FLIP_V
   :title: Flip vertically

   Flip the cursor vertically (swap right with left).

.. tut:token:: FLIP_H
   :title: Flip horizontally

   Flip the cursor horizontally (swap forward with backward).