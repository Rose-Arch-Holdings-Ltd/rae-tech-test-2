import { TTest } from '../../../typings/data';
import { getDate } from './helpers';

const tests: TTest[] = [
  {
    id: '9623b612-f0aa-4ad9-8892-52e50d68283f',
    createdAt: getDate(7),
    name: 'Maths',
  },
  {
    id: 'bddcc378-9d0d-4a92-b05e-4dc41c484c79',
    createdAt: getDate(5),
    name: 'Chemistry',
  },
  {
    id: 'e0a79261-d729-4fca-b7a7-6d0d52bffa30',
    createdAt: getDate(9),
    name: 'Geography',
  },
];

export default tests;
