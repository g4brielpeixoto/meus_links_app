<template>
	<div class="toggle-slider">
		<label class="switch">
			<!-- eslint-disable-next-line vue/no-mutating-props -->
			<input v-model="state" type="checkbox" @click="$emit('toggleState')">
			<span class="track">
				<span class="handle"></span>
			</span>
		</label>
	</div>
</template>

<script>
export default {
	name: 'ToggleButton',
	props: {
		state: {
			type: Boolean,
			required: true
		}
	}
}
</script>

<style scoped lang="scss">
.switch {
	position: relative;
	display: inline-block;
	width: 26px;
	height: 12px;
	input {
		display: none;
	}
	.track {
		display: flex;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		cursor: pointer;
		border-radius: 34px;
		transition: .4s;
		.handle {
			display: flex;
			width: 14px;
			height: 14px;
			background-color: #fff;
			border-radius: 50%;
			transition: .4s;
		}
	}
	input:checked+.track {
		background-color: #00a190;
	}
	input:focus+.track {
		box-shadow: 0 0 1px #00a190;
	}
	input:checked+.track>.handle {
		transform: translateX(13px);
	}
}
</style>