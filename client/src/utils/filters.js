import moment from 'moment';

export default function dateFilter(value, pattern = 'DD-MM-YYYY') {
  if (moment(value).isValid()) {
    return moment(value).format(pattern);
  }
  return value;
}

