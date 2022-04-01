export const formatValues = (node: HTMLInputElement, formatFunction: (value: string) => string) => {
	// Thank you very much, random svelte dev!
	// https://svelte.dev/repl/5c1abf5d24c94960a267124662e11a8d?version=3.44.2

	function updateValue(e: Event) {
		node.value = formatFunction(node.value);
	}

	node.addEventListener('input', updateValue);
	node.addEventListener('paste', updateValue);

	return {
		destroy() {
			node.removeEventListener('input', updateValue);
			node.removeEventListener('paste', updateValue);
		}
	};
};
