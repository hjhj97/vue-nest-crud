<template>
	<div>
		<h1>Todo</h1>
		<form @submit="handleSubmit">
			<input type="text" v-model="todoTitle" />
			<button type="submit">추가</button>
		</form>
		<ul>
			<li v-for="todo in todos" :key="todo.id">
				<input type="checkbox" :checked="todo.isCompleted" />
				{{ todo.title }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';
	import { getMyTodos, createTodo } from '@/api/todo';

	export default defineComponent({
		setup() {
			const todos = ref<any[]>([]);
			const todoTitle = ref<string>('');
			onMounted(() => {
				fetchData();
			});

			const fetchData = async () => {
				const res: any = await getMyTodos().catch((fail: any) => alert(fail));
				if (res) {
					todos.value = res;
				}
			};
			const handleSubmit = async (e: Event) => {
				e.preventDefault();
				const res = await createTodo(todoTitle.value).catch((fail) => alert(fail));
				if (res) {
					fetchData();
					todoTitle.value = '';
				}
			};

			return {
				todos,
				todoTitle,
				handleSubmit,
			};
		},
	});
</script>

<style scoped></style>
