<template>
	<d2-container>
		<template slot="header">电影列表</template>
		电影列表
		<div class="movie-item" v-for="item in list" :key="item">{{item}}</div>
	</d2-container>
</template>

<script>
export default {
	name: 'MovieList',
	data() {
		return {
			list: ['让子弹飞', '邪不压正', '姜文']
		};
	}
};
</script>
