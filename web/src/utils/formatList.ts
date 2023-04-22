export function formatList(fields: string[]) {
  return new Intl.ListFormat('pt-BR', {
    // TODO: entender melhor sobre isso
    style: 'long',
    type: 'conjunction',
  }).format(fields);
}
