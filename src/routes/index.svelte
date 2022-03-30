<script lang="ts">
	import '../app.css';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Form from '$lib/Form.svelte';
	import Main from '$lib/Main.svelte';
	import Title from '$lib/Title.svelte';
	import RightWrapper from '$lib/RightWrapper.svelte';
	import Quote from '$lib/Quote.svelte';
	import Picture from '$lib/Picture.svelte';
	import LeftWrapper from '$lib/LeftWrapper.svelte';
	import Page from '$lib/Page.svelte';
	import Input from '$lib/Input.svelte';

	let inputValues = {
		email: '',
		cpf: '',
		birth: '',
		password: '',
		terms: false
	};

	let loading = false;

	const handleSubmit = () => {
		loading = true;

		const data = { ...inputValues };

		data.cpf = data.cpf.replace(/[\.|-]/g, '');
		data.birth = data.birth.replace(/[/]/g, '');

		setTimeout(() => {
			loading = false;
			setTimeout(() => {
				alert(JSON.stringify(data, null, 2));
			}, 400);
		}, 450);
	};
</script>

<svelte:head>
	<title>Criar meu cadastro | Bcredi</title>
</svelte:head>

<Page>
	<LeftWrapper>
		<Picture />
		<Quote />
	</LeftWrapper>

	<RightWrapper>
		<Header />

		<Main>
			<Title />
			<Form {loading} terms={inputValues.terms} {handleSubmit}>
				<Input type="email" bind:value={inputValues.email} />
				<Input type="cpf" bind:value={inputValues.cpf} />
				<Input type="birth" bind:value={inputValues.birth} />
				<Input type="password" bind:value={inputValues.password} />
				<Input type="checkbox" bind:checked={inputValues.terms} />
			</Form>
		</Main>

		<Footer />
	</RightWrapper>
</Page>
