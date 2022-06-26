export default function guardrail(mathFunction) {
  const arr = [];
  try {
    arr.push(mathFunction());
  } catch (err) {
    arr.push(`Error: ${err.message}`);
  } finally {
    arr.push('Guardrail was processed');
    return arr;
  }
}
