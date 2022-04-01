<script lang="ts">
	import '../app.css';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	import Header from '$root/components/Header.svelte';
	import Footer from '$root/components/Footer.svelte';
	import Form from '$root/components/Form.svelte';
	import Main from '$root/components/Main.svelte';
	import Title from '$root/components/Title.svelte';
	import RightWrapper from '$root/components/RightWrapper.svelte';
	import Quote from '$root/components/Quote.svelte';
	import Picture from '$root/components/Picture.svelte';
	import LeftWrapper from '$root/components/LeftWrapper.svelte';
	import Page from '$root/components/Page.svelte';
	import Input from '$root/components/Input.svelte';
	import Container from '$root/components/Container.svelte';
	import Toast from '$root/components/Toast.svelte';
	import Progress from '$root/components/Progress.svelte';

	let inputValues = {
		email: '',
		cpf: '',
		date: '',
		password: '',
		terms: false
	};

	let isLoading = false;
	let show = false;

	$: progress = tweened(0, {
		duration: 1500,
		easing: cubicInOut
	});

	function showToast(interval: number) {
		show = true;

		setTimeout(() => {
			show = false;
		}, interval);
	}

	const handleSubmit = () => {
		isLoading = true;
		progress.set(100);

		const formattedData = { ...inputValues };

		formattedData.cpf = formattedData.cpf.replace(/[\.|-]/g, '');
		formattedData.date = formattedData.date.replace(/[/]/g, '');

		setTimeout(() => {
			isLoading = false;
			progress.set(0, { delay: 600 });

			showToast(5000);
			console.log(formattedData); // send formatted data to some database
		}, 1500); // 1.5 seconds of loading spinner
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
		<Progress {progress} />

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
