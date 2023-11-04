import { test, describe, expect } from '@jest/globals';

import { isEmailValid } from './isEmailValid';

describe('isEmailValid util', () => {
  test('returns false when the email is not valid', () => {
    expect(isEmailValid('invalidEmail')).toBe(false);
  });

  test('returns true for a valid email', () => {
    expect(isEmailValid('valid@email.test')).toBe(true);
  });
});
