import moment from 'moment';

export default function getYear(date) {
  return moment(date, 'YYYY-MM-DDD').year();
}
