<script lang="ts">
	export let type: 'email' | 'cpf' | 'birth' | 'password' | 'checkbox';
	export let value = '';
	export let checked = false;

	let seePassword = false;
</script>

{#if type === 'email'}
	<label for="email" class="flex flex-col text-brand-warm-grey text-sm">
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
	<label for="cpf" class="flex flex-col text-brand-warm-grey text-sm">
		CPF
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="text"
			name="cpf"
			id="cpf"
			placeholder="000.000.000-00"
			required
			maxlength="11"
			bind:value
		/>
	</label>
{/if}

{#if type === 'birth'}
	<label for="birth" class="flex flex-col text-brand-warm-grey text-sm">
		Data de nascimento
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="text"
			name="birth"
			id="birth"
			placeholder="DD/MM/AAAA"
			required
			maxlength="8"
			bind:value
		/>
	</label>
{/if}

{#if type === 'password'}
	<label for="password" class="flex flex-col text-brand-warm-grey text-sm">
		Senha
		<input
			class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
			type="password"
			name="password"
			id="password"
			placeholder="Cadastre sua senha"
			required
			bind:value
		/>
		<!-- <img src={eye_open} alt="Ver senha" /> -->
	</label>
{/if}

{#if type === 'checkbox'}
	<label
		class="flex items-center gap-2 text-xs border border-brand-pinkish-grey rounded-sm p-4"
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
