import { faker } from '@faker-js/faker';

const getRandomArrayItem = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

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

export const DURATIONS = [
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
  university: getRandomArrayItem(UNIVERSITIES),
  country: faker.location.country(),
  duration: getRandomArrayItem(DURATIONS),
  cost: faker.number.int({ min: 1000, max: 300000 }).toString(),
  applicationDeadlineDate: faker.date.between({
    from: '2024-01-01T00:00:00.000Z',
    to: '2030-01-01T00:00:00.000Z',
  }),
  language: getRandomArrayItem(LANGUAGES),
}));
