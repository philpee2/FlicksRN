import moment from 'moment';

export function getYear(date) {
  return moment(date, 'YYYY-MM-DDD').year();
}
