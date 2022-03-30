<script lang="ts">
	import lock from './../../static/lock.svg';

	export let loading: boolean;
	export let terms: boolean;
	export let handleSubmit: () => void;
</script>

<form class="flex flex-col gap-8 mt-6" method="post" on:submit|preventDefault={handleSubmit}>
	<slot />

	<button
		class="flex items-center bg-gradient-to-br from-brand-dodger-blue to-brand-dodger-blue/80 bg-brand-dodger-blue mt-1 py-5 px-4 shadow-md shadow-brand-dodger-blue/10 duration-150 
		hover:brightness-110 hover:shadow-lg hover:shadow-brand-dodger-blue/20 
		disabled:bg-brand-pinkish-grey disabled:bg-none disabled:text-brand-warm-grey disabled:shadow-none
		disabled:hover:brightness-100"
		type="submit"
		disabled={!terms || loading}
	>
		{#if loading}
			<div
				class="w-6 h-6 border-2 rounded-full mx-auto border-brand-white border-b-transparent animate-spin duration-200"
			/>
		{:else}
			<img src={lock} alt="lock" />
			<p class="mx-auto font-bold text-brand-white">Cadastrar</p>
		{/if}
	</button>
</form>
