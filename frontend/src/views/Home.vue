<template>
	<div>
		<h1>Home</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni doloremque quos excepturi vel
			pariatur dolore quam facilis consectetur eaque eveniet consequatur consequuntur quis corrupti
			molestiae, sequi dicta quas repudiandae in sit dolor! Iusto doloribus totam fugit vitae
			laborum corporis ipsam at repellendus veritatis veniam nihil alias voluptate explicabo, natus
			tenetur quis assumenda inventore laudantium vero est id magnam eligendi? Perferendis impedit
			repudiandae, hic explicabo suscipit natus adipisci ut tempora enim, eaque maxime veritatis
			alias quos ad nulla, pariatur doloremque architecto neque. Repellendus magnam pariatur
			expedita iure earum labore similique dolore inventore dolorum modi iusto voluptatem sapiente
			ratione blanditiis quae, quas porro? Molestiae ipsa eum doloremque iste vitae ut magnam quod
			delectus libero voluptas qui, doloribus provident corporis maiores, pariatur ex repellat, a
			fuga. Voluptates laboriosam alias inventore officiis minima iusto necessitatibus dolorum
			adipisci optio corporis harum a amet, rem atque minus sequi modi excepturi totam animi ullam
			itaque. Tempore tenetur ratione omnis quas saepe accusantium earum temporibus asperiores vel
			dolor assumenda, ducimus laborum doloremque eos? Laborum dignissimos quidem ex ullam repellat
			similique dolorem incidunt repellendus cum numquam distinctio vitae error quae, voluptates
			optio veritatis quas ea consectetur consequuntur, in officiis tempora? Eligendi harum nulla
			quisquam ab maiores! Eius vel asperiores natus ratione beatae hic, nesciunt sapiente delectus
			repudiandae vero, ipsam sed et nam blanditiis deleniti assumenda pariatur odit excepturi
			accusantium debitis nobis non quaerat dolorum officiis? Atque, quam distinctio debitis vel
			provident porro officia blanditiis recusandae nulla ipsum expedita alias amet non. Doloremque
			officia aperiam praesentium iusto sint voluptatem rem omnis quas necessitatibus hic minima
			architecto obcaecati impedit similique minus aliquid inventore, neque adipisci cumque saepe!
			Doloribus fuga sequi tempore modi rerum non tempora quis, omnis distinctio, excepturi,
			eligendi alias beatae placeat nam quod! Architecto aut exercitationem fuga cupiditate aliquam,
			corrupti saepe illum. Repellendus enim amet provident praesentium aliquam, accusamus possimus
			accusantium excepturi cumque temporibus saepe tempore ullam fuga necessitatibus ipsa
			cupiditate doloribus deleniti quisquam nam hic. Aliquid saepe placeat tenetur dignissimos
			porro veritatis expedita at, molestias illo, recusandae laborum consectetur, adipisci magnam!
			Vel quis reiciendis, officiis aliquid dolore adipisci cum fugit porro neque, pariatur eaque.
			Ea doloribus necessitatibus earum optio sed. Amet, neque eveniet porro sed enim cumque nemo
			adipisci ab placeat numquam voluptates quos beatae voluptatum totam voluptatem omnis aliquam,
			rerum quae praesentium ad harum. Dicta, aperiam maxime pariatur necessitatibus eius rem
			perferendis odit nulla ipsa, dolores atque molestiae fugit voluptatem animi. Iusto doloribus
			rem velit unde voluptatem.
		</p>
	</div>
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
