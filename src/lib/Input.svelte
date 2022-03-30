<script lang="ts">
	export let type: 'email' | 'cpf' | 'birth' | 'password' | 'checkbox';
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
</script>

{#if type === 'email'}
	<label for="email" class="flex flex-col gap-2 text-brand-warm-grey text-sm">
		E-mail
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="email"
			name="email"
			id="email"
			placeholder="ana.maria@email.com"
			required
			bind:value
		/>
	</label>
{/if}

{#if type === 'cpf'}
	<label for="cpf" class="flex flex-col gap-2 text-brand-warm-grey text-sm">
		CPF
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="text"
			name="cpf"
			id="cpf"
			placeholder="998.767.888-70"
			required
			maxlength="14"
			use:formatValues={FormattedCPF}
			bind:value
		/>
	</label>
{/if}

{#if type === 'birth'}
	<label for="birth" class="flex flex-col gap-2 text-brand-warm-grey text-sm">
		Data de nascimento
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="text"
			name="birth"
			id="birth"
			placeholder="21/12/1990"
			required
			maxlength="10"
			use:formatValues={FormattedDate}
			bind:value
		/>
	</label>
{/if}

{#if type === 'password'}
	<label for="password" class="flex flex-col gap-2 text-brand-warm-grey text-sm">
		Senha
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="password"
			name="password"
			id="password"
			placeholder="Cadastre uma senha"
			required
			bind:value
		/>
		<!-- <img src={eye_open} alt="Ver senha" /> -->
	</label>
{/if}

{#if type === 'checkbox'}
	<label
		class="flex items-center gap-3 text-xs border border-brand-pinkish-grey rounded-sm p-4"
		for="terms"
	>
		<input
			class=""
			type="checkbox"
			name="terms"
			id="terms"
			required
			on:change={() => !checked}
			bind:checked
		/>
		<span class="text-brand-pinkish-grey"
			>Li e estou de acordo com a
			<a class="text-brand-dodger-blue" href="/">Política de Privacidade</a>
			e a <a class="text-brand-dodger-blue" href="/">Política de Uso de Informações</a>
		</span>
	</label>
{/if}
