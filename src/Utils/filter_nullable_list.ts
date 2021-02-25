export function filterNullableList<GData>(
	data?: (GData | null)[] | null | GData
): GData[] {
	if (data == null) {
		return [];
	}
	if (!Array.isArray(data)) {
		data = [data];
	}
	return data.filter((item): item is GData => item != null);
}

export function filterNullableListItem<GData>(
	data?: (GData | null)[] | null | GData
): GData | undefined {
	if (data == null) {
		return undefined;
	}
	if (Array.isArray(data)) {
		return filterNullableList(data)[0];
	}
	return data;
}
