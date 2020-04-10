import moment from 'moment';

export const timestampToDate = (timestamp, format = 'MM/DD/YYYY') => (
  moment.unix(timestamp).format(format)
);
