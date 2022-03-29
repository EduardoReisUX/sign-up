<script lang="ts">
	import '../app.css';
	import Logo from './../../static/logo.svg';
	import PhoneGirl from './../../static/phone-girl.png';

	import lock from './../../static/lock.svg';
	import eye_open from './../../static/eye_open.svg';

	let inputValues = {
		email: '',
		cpf: '',
		birth: '',
		password: '',
		terms: false
	};

	let seePassword = false;

	function handleSubmit() {
		alert(JSON.stringify(inputValues, null, 2));
	}
</script>

<div class="grid lg:grid-cols-[1fr_2fr] min-h-screen">
	<section class="hidden lg:flex h-screen sticky top-0 flex-col justify-end items-end">
		<picture class="relative">
			<span
				class="absolute w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent"
			/>
			<img src={PhoneGirl} alt="garota no celular" class="h-screen w-full object-cover" />
		</picture>

		<div class="absolute pb-9 pr-9 text-brand-white w-3/4 text-right">
			<blockquote class="mb-2 text-lg">
				"Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado,
				foi cumprido"
			</blockquote>
			<strong>Camila Bragança,</strong>
			<p>Sideral Tecnologia</p>
		</div>
	</section>

	<section class="flex flex-col mx-auto px-4">
		<header class="w-full flex justify-end border-b py-5 px-6  lg:border-b-0">
			<a href="/">
				<img src={Logo} alt="logo" />
			</a>
		</header>

		<main class="grid my-20">
			<h1 class="text-2xl font-bold text-center">Criar meu cadastro</h1>
			<p class="text-brand-warm-grey text-center">
				Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.
			</p>

			<form class="flex flex-col gap-8 mt-6" method="post" on:submit|preventDefault={handleSubmit}>
				<label for="email" class="flex flex-col text-brand-warm-grey text-sm">
					E-mail
					<input
						class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
						type="email"
						name="email"
						id="email"
						placeholder="ana.maria@email.com"
						required
						bind:value={inputValues.email}
					/>
				</label>
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
						bind:value={inputValues.cpf}
					/>
				</label>
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
						bind:value={inputValues.birth}
					/>
				</label>
				<label for="password" class="flex flex-col text-brand-warm-grey text-sm">
					Senha
					<input
						class="border border-brand-white-two rounded-sm p-4 text-brand-black placeholder:text-brand-pinkish-grey"
						type="password"
						name="password"
						id="password"
						placeholder="Cadastre sua senha"
						required
						bind:value={inputValues.password}
					/>
					<!-- <img src={eye_open} alt="Ver senha" /> -->
				</label>
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
						bind:checked={inputValues.terms}
					/>
					<span class="text-brand-pinkish-grey"
						>Li e estou de acordo com a
						<a class="text-brand-dodger-blue" href="/">Política de Privacidade</a>
						e a <a class="text-brand-dodger-blue" href="/">Política de Uso de Informações</a>
					</span>
				</label>
				<button
					class="flex items-center bg-brand-dodger-blue text-brand-white font-bold mt-1 py-5 px-4 duration-200 hover:brightness-90 disabled:bg-brand-pinkish-grey disabled:text-brand-warm-grey"
					type="submit"
					disabled={!inputValues.terms}
				>
					<img src={lock} alt="lock" />
					<p class="mx-auto">Cadastrar</p>
				</button>
			</form>
		</main>

		<footer class="text-sm text-center text-brand-warm-grey py-4">
			<hr class="mb-4" />
			Já fiz meu cadastro.{' '}<a class="text-brand-dodger-blue" href="/">Entrar agora.</a>
		</footer>
	</section>
</div>
