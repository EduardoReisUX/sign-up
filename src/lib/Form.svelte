<script lang="ts">
	import lock from './../../static/lock.svg';

	export let terms: boolean;
	export let handleSubmit: () => void;
</script>

<form class="flex flex-col gap-8 mt-6" method="post" on:submit|preventDefault={handleSubmit}>
	<slot />

	<button
		class="flex items-center bg-brand-dodger-blue text-brand-white font-bold mt-1 py-5 px-4 duration-200 hover:brightness-90 disabled:bg-brand-pinkish-grey disabled:text-brand-warm-grey"
		type="submit"
		disabled={!terms}
	>
		<img src={lock} alt="lock" />
		<p class="mx-auto">Cadastrar</p>
	</button>
</form>
