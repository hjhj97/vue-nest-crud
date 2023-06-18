<template>
	<GlobalLayout :isMobile="false">
		<router-view />
	</GlobalLayout>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';
	import GlobalLayout from './components/layout/GlobalLayout.vue';

	export default defineComponent({
		components: { GlobalLayout },
		setup() {
			return {};
		},
	});
</script>
