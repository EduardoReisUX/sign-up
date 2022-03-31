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

	let isLoading = false;
	let show = false;

	function showToast(interval: number) {
		show = true;

		setTimeout(() => {
			show = false;
		}, interval);
	}

	const handleSubmit = () => {
		isLoading = true;

		const formattedData = { ...inputValues };

		formattedData.cpf = formattedData.cpf.replace(/[\.|-]/g, '');
		formattedData.date = formattedData.date.replace(/[/]/g, '');

		setTimeout(() => {
			isLoading = false;

			showToast(5000);
			console.log(formattedData); // send data to some database
		}, 1000); // 1 second of loading spinner
	};
</script>

<svelte:head>
	<title>Criar meu cadastro | Bcredi</title>
	<meta name="description" content="Faça seu cadastro na Bcredi" />
</svelte:head>

<Page>
	<LeftWrapper>
		<Picture />
		<Quote />
	</LeftWrapper>

	<RightWrapper>
		<Toast showToast={show} />

		<Container>
			<Header />
			<Main>
				<Title />
				<Form loading={isLoading} terms={inputValues.terms} {handleSubmit}>
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
