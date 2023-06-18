<template>
	<div>Home</div>
</template>

<script>
	import axios from '@/plugins/axiosSetup';
	import { onMounted } from 'vue';
	export default {
		setup() {
			onMounted(async () => {
				const res = await axios.get('/');
				console.log(res);
			});
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
