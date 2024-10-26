import * as bcrypt from 'bcrypt';

export function generateUniqueHospitalNumber(): string {
  const currentYear: number = new Date().getFullYear();
  const randomNumber: string = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0');
  const generatedNumber: string = `${currentYear}${randomNumber}`;
  return generatedNumber;
}

export async function generateHash(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export function comparePassword(first: string, sec: string) {
  const isEqual = bcrypt.compareSync(first, sec);
  return isEqual;
}

export function generatePatientNumber(): number {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toUpperCase(value: string): string {
  return value.toUpperCase();
}

export function formatName(value: string): string {
  const lowercasedValue = value.toLowerCase();
  if (hasSpaces(lowercasedValue)) {
    return capitalizeEachWord(lowercasedValue);
  } else {
    return capitalizeFirstLetter(lowercasedValue);
  }
}

function hasSpaces(lowercasedValue: string): boolean {
  return lowercasedValue.indexOf(' ') !== -1;
}

function capitalizeEachWord(lowercasedValue: string): string {
  return lowercasedValue
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ');
}

function capitalizeFirstLetter(lowercasedValue: string): string {
  return lowercasedValue.charAt(0).toUpperCase() + lowercasedValue.slice(1);
}

export function generateUniquePacientCardNumber() {
  const timestamp = Date.now().toString();
  const uniqueSequence = parseInt(timestamp.slice(-15), 10);
  return uniqueSequence;
}
