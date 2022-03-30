<script lang="ts">
	export let type: 'email' | 'cpf' | 'birthDate' | 'password' | 'checkbox';
	export let value = '';
	export let checked = false;

	const formatValues = (node: HTMLInputElement, formatFunction: (value: string) => string) => {
		// Thank you very much, random svelte dev!
		// https://svelte.dev/repl/5c1abf5d24c94960a267124662e11a8d?version=3.44.2

		function updateValue(e) {
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

	const FormattedCPF = (value: string) => {
		const regex = /^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/g;
		const onlyNumbers = value.replace(/[^\d]/g, '');

		if (onlyNumbers.length > 9) {
			return onlyNumbers.replace(regex, '$1.$2.$3-$4');
		}

		return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
			[$1, $2, $3, $4].filter((group) => !!group).join('.')
		);
	};

	const FormattedDate = (value: string) => {
		const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})$/g;
		const onlyNumbers = value.replace(/[^\d]/g, '');

		return onlyNumbers.replace(regex, (regex, $1, $2, $3) =>
			[$1, $2, $3].filter((group) => !!group).join('/')
		);
	};

	let labelStyle = 'flex flex-col gap-2 text-brand-warm-grey text-sm';

	$: inputStyle = `peer border border-brand-white-two rounded-sm p-4 text-brand-black 
		placeholder:text-brand-pinkish-grey
		focus:outline-none focus:border-brand-dodger-blue focus:ring-1 focus:ring-brandborder-brand-dodger-blue
		${
			!!value &&
			'invalid:border-brand-coral-pink focus:invalid:border-brand-coral-pink focus:invalid:ring-brand-coral-pink'
		}
		`;

	$: errorStyle = `hidden ${!!value && 'peer-invalid:block'} text-brand-coral-pink text-sm -mb-7`;
</script>

{#if type === 'email'}
	<label for="email" class={labelStyle}>
		E-mail
		<input
			class={inputStyle}
			type="email"
			name="email"
			id="email"
			placeholder="ana.maria@email.com"
			bind:value
			required
		/>
		<small class={errorStyle}>O endereço de email deve ser válido.</small>
	</label>
{/if}

{#if type === 'cpf'}
	<label for="cpf" class={labelStyle}>
		CPF
		<input
			class={inputStyle}
			type="text"
			name="cpf"
			id="cpf"
			placeholder="998.767.888-70"
			bind:value
			required
			maxlength="14"
			pattern={'.{14}'}
			use:formatValues={FormattedCPF}
		/>
		<small class={errorStyle}>CPF deve conter 14 números</small>
	</label>
{/if}

{#if type === 'birthDate'}
	<label for="birthDate" class={labelStyle}>
		Data de nascimento
		<input
			class={inputStyle}
			type="text"
			name="birthDate"
			id="birthDate"
			placeholder="21/12/1990"
			bind:value
			required
			maxlength="10"
			pattern={'.{10}'}
			use:formatValues={FormattedDate}
		/>
		<small class={errorStyle}>Data de nascimento deve conter 8 dígitos</small>
	</label>
{/if}

{#if type === 'password'}
	<label for="password" class={labelStyle}>
		Senha
		<input
			class={inputStyle}
			type="password"
			name="password"
			id="password"
			placeholder="Cadastre uma senha"
			bind:value
			required
			minlength="6"
			maxlength="40"
		/>
		<small class={errorStyle}>Senha deve ter entre 6 e 40 caracteres</small>
		<!-- <img src={eye_open} alt="Ver senha" /> -->
	</label>
{/if}

{#if type === 'checkbox'}
	<label
		class="flex items-center gap-3 text-xs border border-brand-pinkish-grey rounded-sm p-4"
		for="terms"
	>
		<input type="checkbox" name="terms" id="terms" required bind:checked />
		<span class="text-brand-pinkish-grey"
			>Li e estou de acordo com a
			<a class="text-brand-dodger-blue" href="/">Política de Privacidade</a>
			e a <a class="text-brand-dodger-blue" href="/">Política de Uso de Informações</a>
		</span>
	</label>
{/if}
