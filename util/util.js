
export function constructImagePathPrefix (collection, area, name) {
	return `/assets/${collection.name}/${area.name}/${name}.svg`;
}