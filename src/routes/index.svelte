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

	$: maskCPF = inputValues.cpf && inputValues.cpf.replace(/(\d{3})/g, '•');

	let handleSubmit = () => {
		alert(JSON.stringify(inputValues, null, 2));
	};
</script>

<Page>
	<LeftWrapper>
		<Picture />
		<Quote />
	</LeftWrapper>

	<RightWrapper>
		<Header />

		<Main>
			<Title />
			<Form terms={inputValues.terms} {handleSubmit}>
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
