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
	import Container from '$lib/Container.svelte';
	import Toast from '$lib/Toast.svelte';

	let inputValues = {
		email: '',
		cpf: '',
		date: '',
		password: '',
		terms: false
	};

	let loading = false;
	let showToast = false;

	const handleSubmit = () => {
		loading = true;

		const data = { ...inputValues };

		data.cpf = data.cpf.replace(/[\.|-]/g, '');
		data.date = data.date.replace(/[/]/g, '');

		setTimeout(() => {
			loading = false;

			setTimeout(() => {
				showToast = true;
				console.log(data); // send data to some database

				setTimeout(() => {
					showToast = false;
				}, 5000); // show toast for 4 seconds
			}, 400);
		}, 1000); // 1 second of loading spinner
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
		<Toast {showToast} />

		<Container>
			<Header />
			<Main>
				<Title />
				<Form {loading} terms={inputValues.terms} {handleSubmit}>
					<Input type="email" bind:value={inputValues.email} />
					<Input type="cpf" bind:value={inputValues.cpf} />
					<Input type="birthDate" bind:value={inputValues.date} />
					<Input type="password" bind:value={inputValues.password} />
					<Input type="checkbox" bind:checked={inputValues.terms} />
				</Form>
			</Main>
			<Footer />
		</Container>
	</RightWrapper>
</Page>
