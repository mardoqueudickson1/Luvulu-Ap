import { BadRequestException } from '@nestjs/common';
import { isBefore, isAfter } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const ANGOLA_TIMEZONE = 'Africa/Luanda';

export function validateDateRange(startTime: Date, endTime: Date): void {
  const currentAngolaTime = new Date();
  const parsedStartedAt = utcToZonedTime(startTime, ANGOLA_TIMEZONE);
  const parsedEndedAt = utcToZonedTime(endTime, ANGOLA_TIMEZONE);

  if (isBefore(parsedStartedAt, currentAngolaTime)) {
    throw new BadRequestException(
      'A data de início não pode ser anterior à data atual em Angola.',
    );
  }

  if (isBefore(parsedEndedAt, currentAngolaTime)) {
    throw new BadRequestException(
      'A data de término não pode ser anterior à data atual em Angola.',
    );
  }

  if (isAfter(parsedEndedAt, currentAngolaTime)) {
    throw new BadRequestException(
      'A data de término não pode ser posterior à data atual em Angola.',
    );
  }

  if (isBefore(parsedEndedAt, parsedStartedAt)) {
    throw new BadRequestException(
      'A data de término não pode ser anterior à data de início.',
    );
  }
}
