import * as migration_20260409_155706_initial from './20260409_155706_initial';
import * as migration_20260609_185725_add_categories from './20260609_185725_add_categories';

export const migrations = [
  {
    up: migration_20260409_155706_initial.up,
    down: migration_20260409_155706_initial.down,
    name: '20260409_155706_initial',
  },
  {
    up: migration_20260609_185725_add_categories.up,
    down: migration_20260609_185725_add_categories.down,
    name: '20260609_185725_add_categories'
  },
];
