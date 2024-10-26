import { BadRequestException } from '@nestjs/common';
import axios from 'axios';
import { messages } from './shared/errorsMessages';

export async function GetUserInfoByBI(bi: string) {
  try {
    const apiResponse = await axios.get(
      `https://o-me-api.onrender.com/v1/identification/person/${bi}`,
    );

    return apiResponse.data.data[0];
  } catch (error) {
    console.log(error);
    throw new BadRequestException(messages.BINotFound);
  }
}
