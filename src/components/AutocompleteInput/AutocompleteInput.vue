<template>
	<autocomplete-search-input v-model="searchString" :drop-down-visibility="dropDownVisibility" @onArrowClick="openDropDown"/>
	<autocomplete-input-options v-if="dropDownVisibility && options.length && options" :option-key="optionKey" :option-label-key="optionLabelKey"
											 :options="options" @onSelect="selectHandler"/>
</template>

<script lang="ts">
import AutocompleteSearchInput from "components/AutocompleteSearchInput/AutocompleteSearchInput.vue";
import AutocompleteInputOptions from "components/AutocompleteInputOptions/AutocompleteInputOptions.vue";

export default {
	name: "AutocompleteInput",
	components: {AutocompleteInputOptions, AutocompleteSearchInput},
	props: {
		options: {
			type: Array,
			required: true
		},
		optionKey: {
			type: String,
			required: false,
			default: "id"
		},
		optionLabelKey: {
			type: String,
			required: false,
			default: "login"
		}
	},
	emits: ["onSearch"],
	data: () => ({
		searchString: "",
		dropDownVisibility: false,
	}),
	methods: {
		openDropDown(): void {
			if (this.options && this.options.length) {
				this.dropDownVisibility = !this.dropDownVisibility;
			}
		},
		selectHandler(data: string): void {
			this.searchString = data;
		}
	},
	watch: {
		options() {
			if (!this.options || !this.options.length) {
				this.dropDownVisibility = false;
			}
		},
		searchString() {
			this.$emit("onSearch", this.searchString);

			if (!this.dropDownVisibility) {
				this.dropDownVisibility = true;
			}
		}
	}
}
</script>