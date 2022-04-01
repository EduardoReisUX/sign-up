<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let showToast: Boolean;
</script>

{#if showToast}
	<span
		id="successToast"
		class="fixed lg:absolute top-0 w-full py-6 bg-brand-greenish-teal text-brand-white text-center z-10"
		transition:fly={{ y: -80, duration: 400, opacity: 1, easing: cubicInOut, delay: 250 }}
	>
		Parabéns! Cadastro realizado com sucesso!
	</span>
{/if}
