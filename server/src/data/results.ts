import { v4 } from 'uuid';
import { TResult } from '../../../typings/data';
import { getDate, getRandomInteger } from './helpers';

import students from './students';
import tests from './tests';

const results: TResult[] = [];
for (let i = 0; i < 50; i++) {
  results.push({
    createdAt: getDate(getRandomInteger(1, 5)),
    id: v4(),
    score: getRandomInteger(0, 100),
    studentId: students[getRandomInteger(0, students.length - 1)].id,
    testId: tests[getRandomInteger(0, tests.length - 1)].id,
  });
}

export default results;
