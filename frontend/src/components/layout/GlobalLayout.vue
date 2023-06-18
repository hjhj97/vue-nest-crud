<template>
	<div class="mobile-layout" ref="layoutRef">
		<slot />
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';

	export default defineComponent({
		props: {
			isMobile: Boolean,
		},
		setup(props) {
			const layoutRef = ref<HTMLElement | null>(null);
			onMounted(() => {
				if (layoutRef.value && props.isMobile) {
					layoutRef.value.style.maxWidth = '450px';
				}
			});
			return {
				layoutRef,
			};
		},
	});
</script>

<style scoped>
	.mobile-layout {
		max-width: 1200px;
		margin: 0 auto;
		width: auto;
		min-height: 100%;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
	}
</style>
