<script lang="ts">
	$: result = 1;
	function rollDice() {
		result = Math.floor(Math.random() * 6) + 1;
	}
</script>

<p>{result}</p>
<button on:click={rollDice}>Roll</button>
