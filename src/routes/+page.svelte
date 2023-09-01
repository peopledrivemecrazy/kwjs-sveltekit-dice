<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
</script>

<p>{data.result}</p>

<form method="POST" use:enhance>
	<button>Roll</button>
</form>
