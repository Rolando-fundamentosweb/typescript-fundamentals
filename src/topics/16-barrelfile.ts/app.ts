/*
  index.ts -> It is tipically the entry point of a typescript module or application.

  As a Barrel file, it is used to re-export all the exports from other files in a single file.
*/

import { getUser, iniciaSesion } from './login';

iniciaSesion();
getUser();
