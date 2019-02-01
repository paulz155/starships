<script>
	export default {
		name: 'modal',
		props: ['ship'],
		data: function () {
			return {
				error: '',
			}
		},
		methods: {
			close() {
				this.$emit('close');
			},			
		},
	};
</script>

<template>
	<div class="modal-backdrop">
		<div class="modal">
			<header class="modal-header">
				<slot name="header"> <b class="btn-close" @click="close">x</b>					        
				</slot>
			</header>
			<section class="modal-body">
				<slot name="body">
					<div v-for="(opt, i) in ship">{{i}}: {{opt}}</div>	
				</slot>
			</section>
			<footer class="modal-footer">
				<slot name="footer">

				</slot>
			</footer>
		</div>
	</div>
</template>