<script lang="ts">
	import { fly } from 'svelte/transition';

	export let showToast: Boolean;
</script>

{#if showToast}
	<span
		id="successToast"
		class="fixed top-0 w-full py-6 bg-brand-greenish-teal text-brand-white text-center"
		transition:fly={{ y: -80, duration: 250 }}
	>
		Parabéns! Cadastro realizado com sucesso!
	</span>
{/if}
