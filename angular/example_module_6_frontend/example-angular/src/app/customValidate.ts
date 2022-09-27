import {AbstractControl} from '@angular/forms';

export function checkDayStart(validate: AbstractControl) {
  const now = new Date();
  const dayStart = new Date(validate.value);
  if (dateDiff(dayStart, now) <= 0) {
    return {checkDayStart: true};
  }
  return null;
}

export function checkDayEnd(validate: AbstractControl) {
  const now = new Date();
  const dayEnd = new Date(validate.value);
  if (dateDiff(dayEnd, now) <= 0) {
    return {checkDayEnd: true};
  }
  return null;
}

export function checkDay(validate: AbstractControl) {
  const dayStart = new Date(validate.value.dayStart);
  const dayEnd = new Date(validate.value.dayEnd);
  if (dateDiff(dayStart, dayEnd) <= 0) {
    return {checkDay: true};
  }
  return null;
}

function dateDiff(start, end) {
  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}

