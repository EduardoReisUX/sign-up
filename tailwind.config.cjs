module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					'warm-grey': '#8f8f8f',
					white: '#fff',
					'pinkish-grey': '#ccc',
					'greenish-teal': '#2ecc71',
					'coral-pink': '#ff5863',
					black: '#333',
					'dodger-blue': '#4c8afe',
					'white-two': '#e6e6e6'
				}
			},
			fontSize: {
				xs: ['0.75rem', '1.25rem'],
				sm: ['0.875rem', '1.25rem'],
				base: ['1rem', '1.5rem'],
				lg: ['1.25rem', '1.875rem'],
				xl: ['1.5rem', '1.875rem'],
				'2xl': ['1.5rem', '2rem']
			}
		},
		fontFamily: {
			sans: ['Arial', 'sans-serif']
		}
	},
	plugins: []
};
