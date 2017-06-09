import moment from 'moment';

function dateFilter(value, pattern = 'YYYY-MM-DD') {
  if (!value) {
    return '';
  }
  if (moment(value).isValid()) {
    return moment(value).format(pattern);
  }
  return value;
}

function detailedDateFilter(value, pattern = 'YYYY-MM-DD HH:ss') {
  if (!value) {
    return '';
  }
  if (moment(value).isValid()) {
    return moment(value).format(pattern);
  }
  return value;
}

export {
  dateFilter,
  detailedDateFilter
}

