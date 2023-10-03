<template>
	<div class="autocomplete-input__search">
		<input class="autocomplete-input__item" type="text" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"/>
		<img :class="['autocomplete-input__item-arrow', {'autocomplete-input__item-arrow_open': dropDownVisibility}]" alt="Стрелка"
				 src="../../assets/select-arrow.png" @click="$emit('onArrowClick')">
	</div>
</template>

<script lang="ts">
export default {
	name: "AutocompleteSearchInput",
	props: {
		modelValue: {
			type: String,
		},
		dropDownVisibility: {
			type: Boolean,
			required: true
		}
	},
	emits: ["update:modelValue", "onArrowClick"],
}
</script>

<style lang="scss" scoped>
@import "AutocompleteSearchInput";
</style>