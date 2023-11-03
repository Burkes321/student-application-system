import { faker } from '@faker-js/faker';

const findRandomEntry = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const UNIVERSITIES = [
  'University of Cambridge',
  'University of Oxford',
  'London School of Economics',
  'University of St Andrews',
  'University of Bath',
  'Imperial College London',
  'Loughborough University',
  'Durham Univeristy',
  'UCL',
  'Lancaster University',
];

const DURATIONS = [
  '1 year',
  '2 years',
  '3 years',
  '4 years',
  '5 years',
  '6 years',
  '7 years',
  '8 years',
];

const LANGUAGES = ['English', 'French', 'Turkish'];

export const APPLICATIONS = new Array(50).fill(null).map(() => ({
  name: faker.person.fullName(),
  university: UNIVERSITIES[findRandomEntry(1, UNIVERSITIES.length)],
  country: faker.location.country(),
  duration: DURATIONS[findRandomEntry(1, DURATIONS.length)],
  cost: faker.number.int({ min: 1000, max: 300000 }),
  applicationDeadlineDate: faker.date.between({
    from: '2024-01-01T00:00:00.000Z',
    to: '2030-01-01T00:00:00.000Z',
  }),
  language: LANGUAGES[findRandomEntry(1, LANGUAGES.length)],
}));
