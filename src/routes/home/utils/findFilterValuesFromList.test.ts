// import { describe, test, expect } from '@jest/globals';

import { findFilterValuesFromList } from './findFilterValuesFromList';
import { MOCK_APPLICATIONS_LIST } from './findFilterValuesFromListTestFixture';

describe('findFilterValuesFromList', () => {
  test('return a list of universities when passing list and the universities field', () => {
    expect(
      findFilterValuesFromList(MOCK_APPLICATIONS_LIST, 'university')
    ).toStrictEqual([
      'Loughborough University',
      'University of Oxford',
      'London School of Economics',
    ]);
  });

  test('return a list of countries when passing list and countries field', () => {
    expect(
      findFilterValuesFromList(MOCK_APPLICATIONS_LIST, 'country')
    ).toStrictEqual([
      'Armenia',
      'Saint Martin',
      'Chile',
      'Sint Maarten',
      'Guyana',
    ]);
  });

  test('return a list of languages when passing list and languages field', () => {
    expect(
      findFilterValuesFromList(MOCK_APPLICATIONS_LIST, 'language')
    ).toStrictEqual(['English', 'French', 'Turkish']);
  });

  test('return a list of durations when passing list and durations field', () => {
    expect(
      findFilterValuesFromList(MOCK_APPLICATIONS_LIST, 'duration')
    ).toStrictEqual(['1 year', '5 years', '8 years', '4 years']);
  });
});
