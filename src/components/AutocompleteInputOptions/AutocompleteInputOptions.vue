<template>
	<div class="autocomplete-input__options">
		<autocomplete-input-option v-for="option in options" :key="option[optionKey]" :label="option[optionLabelKey]"
															 @click="$emit('onSelect', option[optionLabelKey])"/>
	</div>
</template>

<script lang="ts">
import AutocompleteInputOption from "components/AutocompleteInputOption/AutocompleteInputOption.vue";

export default {
	name: "AutocompleteInputOptions",
	components: {AutocompleteInputOption},
	props: {
		options: {
			type: Array,
			required: true
		},
		optionKey: {
			type: String,
			required: true
		},
		optionLabelKey: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
@import "AutocompleteInputOptions";
</style>