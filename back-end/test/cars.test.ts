import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import carsRouter from '../src/routes/cars';

describe('cars router', () => {
  it('should exist', () => {
    assert.ok(carsRouter);
  });
});
