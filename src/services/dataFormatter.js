function extractIdentifier (url) {
  const urlParts = url.split('/')
  const stringId = urlParts[urlParts.length - 2]
  return parseInt(stringId, 10)
}

export function formatStarship (starship) {
  return {
    ...starship,
    cost_in_credits: starship.cost_in_credits === 'unknown' ? null : parseInt(starship.cost_in_credits, 10),
    id: extractIdentifier(starship.url)
  }
}
