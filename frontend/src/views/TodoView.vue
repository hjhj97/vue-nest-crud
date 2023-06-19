<template>
	<div>
		<h1>Todo</h1>
		<ul>
			<li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { getMyTodos } from '@/api/todo';

	export default defineComponent({
		setup() {
			const todos = ref<any[]>([]);
			onMounted(() => {
				fetchData();
			});

			const fetchData = async () => {
				const res: any = await getMyTodos().catch((fail: any) => alert(fail));
				if (res) {
					todos.value = res;
				}
			};
			return {
				todos,
			};
		},
	});
</script>

<style scoped></style>
