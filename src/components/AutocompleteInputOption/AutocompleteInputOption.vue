<template>
	<div class="autocomplete-input__option">
		<span class="autocomplete-input__option-label">{{ label }}</span>
	</div>
</template>

<script lang="ts">
export default {
	name: "AutocompleteInputOption",
	props: {
		label: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: false,
			default: ""
		}
	}
}
</script>

<style scoped lang="scss">
@import "AutocompleteInputOption";
</style>