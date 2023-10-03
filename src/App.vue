<template>
	<div>
		<autocomplete-input :options="users" @onSearch="getUsersBySearch"/>
	</div>
</template>

<script lang="ts">
import {IUsersDto} from "data/api/models/IUserDto";
import AutocompleteInput from "components/AutocompleteInput/AutocompleteInput.vue";

export default {
	name: "App",
	components: {AutocompleteInput},
	computed: {
		users(): IUsersDto {
			return this.$store.getters.allUsers;
		}
	},
	methods: {
		getUsersBySearch(data: string): void {
			this.$store.dispatch('getUsers', data)
		}
	}
}
</script>

<style lang="scss">
* {
	box-sizing: border-box;
	font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
	display: flex;
	justify-content: center;
	height: 100vh;
	margin: 0;
	padding-top: 100px;
}
</style>