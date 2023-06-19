<template>
	<div>
		<h1>Home</h1>
		<form @submit="handleSubmit">
			<div>
				<input type="text" v-model="loginData.name" />
			</div>
			<div>
				<input type="password" v-model="loginData.password" />
			</div>
			<button type="submit">로그인</button>
		</form>
	</div>
</template>

<script lang="ts">
	import { signIn } from '@/api/auth';
	import router from '@/router';

	import { defineComponent, onMounted, ref } from 'vue';

	export default defineComponent({
		setup() {
			const loginData = ref<{ name: string; password: string }>({} as any);
			const handleSubmit = async (e: Event) => {
				e.preventDefault();
				const data = { ...loginData.value };

				const res: any = await signIn(data).catch((fail: string) => {
					alert(fail);
				});
				if (res) {
					localStorage.setItem('access_token', res.accessToken);
					router.replace({ name: 'TodoView' });
				}
			};

			return {
				loginData,
				//
				handleSubmit,
			};
		},
	});
</script>

<style lang="scss" scoped></style>
