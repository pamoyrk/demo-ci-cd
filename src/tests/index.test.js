import { test } from 'node:test';
import assert from 'node:assert';
import { greet } from '../index.js';

test('greet function returns correct message', () => {
  const result = greet('World');
  assert.strictEqual(result, 'Hello, World! Welcome to CI/CD demo.');
});

test('greet function with different name', () => {
  const result = greet('CI/CD');
  assert.strictEqual(result, 'Hello, CI/CD! Welcome to CI/CD demo.');
});
