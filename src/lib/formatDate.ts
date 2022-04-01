export const formatDate = (value: string) => {
	const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})$/g;
	const onlyNumbers = value.replace(/[^\d]/g, '');

	return onlyNumbers.replace(regex, (regex, $1, $2, $3) =>
		[$1, $2, $3].filter((group) => !!group).join('/')
	);
};
