Cursor operators
================

.. tut:token:: FORWARD
   :title: Forward

   Move forward the cursor by value of action in cursor's direction.

.. tut:token:: ROTATE_LEFT
   :title: Rotate left

   Rotate left the cursor. Note that, :code:`1.0` value means full rotation.

.. tut:token:: ROTATE_RIGHT
   :title: Rotate right

   Rotate right the cursor. Note that, :code:`1.0` value means full rotation.

.. tut:token:: REVERSE
   :title: Reverse

   Reverse last *N* (determined by action value) actions which modifing the cursor.

   Non-cursor actions are ignored (because don't modify the cursor).

   Note that painting a line or arcline are modifing cursor too.

.. tut:token:: REPLAY
   :title: REPLAY

   Repeat previous action *N* times (determined by action value).
