export function create(x = 0, y = 0) {
	return {x, y}
}

export function distance(a, b) {
	const dx = a.x - b.x
	const dy = a.y - b.y

	return Math.sqrt(dx * dx + dy * dy)
}