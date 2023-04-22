export function formatList(fields: string[]) {
  return new Intl.ListFormat('pt-BR', {
    style: 'long',
    type: 'conjunction',
  }).format(fields);
}
