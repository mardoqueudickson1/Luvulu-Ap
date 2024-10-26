export function formatPhoneNumber(phoneNumber: string): string {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  const formattedPhoneNumber = cleanedPhoneNumber.startsWith('+')
    ? cleanedPhoneNumber
    : `+244${cleanedPhoneNumber}`;

  return formattedPhoneNumber;
}
