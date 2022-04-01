<script lang="ts">
	import type { Tweened } from 'svelte/motion';

	export let progress: Tweened<number>;
</script>

<div class="fixed top-0 lg:static w-full h-1">
	<div
		class="bg-gradient-to-r from-brand-dodger-blue to-brand-dodger-blue/50 h-1"
		style={`width: ${$progress}%`}
	/>
</div>
