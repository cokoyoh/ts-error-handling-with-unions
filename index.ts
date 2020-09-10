// Handling errors using unions
type ConversionSucceeded = {
  kind: 'success',
  value: number
}

type ConversionFailed = {
  kind: 'failure',
  reason: string
}

type ConversionResult = ConversionSucceeded | ConversionFailed;

const safeNumber = (s: string): ConversionResult => {
  const n: number = Number(s);

  if (isNaN(n)) {
    return { kind: 'failure', reason: 'conversion returned a NaN' };
  }

  return { kind: 'success', value: n };
}

const converted = safeNumber('5');

const result: number = converted.kind === 'success' ? converted.value : 0;

console.log(result);