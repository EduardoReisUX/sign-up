export const formatCPF = (value: string) => {
	const regex = /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/g;
	const onlyNumbers = value.replace(/[^\d]/g, '');

	if (onlyNumbers.length > 9) {
		return onlyNumbers.replace(regex, '$1.$2.$3-$4');
	}

	return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
		[$1, $2, $3, $4].filter((group) => !!group).join('.')
	);
};
