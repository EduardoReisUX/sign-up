<script lang="ts">
	import { formatCPF, formatDate, formatValues } from '$root/lib';

	import eye_open from './../../static/eye_open.svg';

	export let type: 'email' | 'cpf' | 'birthDate' | 'password' | 'checkbox';
	export let value = '';
	export let checked = false;

	let isPasswordVisible = false;

	const togglePassword = () => {
		isPasswordVisible = !isPasswordVisible;

		//@ts-ignore
		document.querySelector('#password').type = isPasswordVisible ? 'text' : 'password';
	};

	let labelStyle = 'flex flex-col gap-2 text-brand-warm-grey text-sm';

	$: inputStyle = `peer border border-brand-white-two rounded-sm p-4 text-brand-black 
		placeholder:text-brand-pinkish-grey
		focus:outline-none focus:border-brand-dodger-blue focus:ring-1 focus:ring-brand
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
		<small class={errorStyle}>Por favor insira um email válido.</small>
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
			use:formatValues={formatCPF}
		/>
		<small class={errorStyle}>CPF deve conter 9 dígitos</small>
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
			use:formatValues={formatDate}
		/>
		<small class={errorStyle}>Data de nascimento deve conter 8 dígitos</small>
	</label>
{/if}

{#if type === 'password'}
	<label for="password" class={labelStyle + ' relative'}>
		Senha
		<input
			class={inputStyle + ' pr-10'}
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
		<button
			id="togglePassword"
			type="button"
			class="absolute w-6 h-6 flex items-center inset-y-11 right-0 mr-2"
			on:click={togglePassword}
		>
			<img
				src={eye_open}
				alt={isPasswordVisible ? 'Ver senha' : 'Esconder senha'}
				class="w-6 h-6"
			/>
		</button>
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
