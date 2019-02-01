import Vue from './node_modules/vue/dist/vue.js';

import modal from './com/modal.vue';

new Vue({
    el: '#ships',
	components: {modal},
    data: {
		count: 0,
		isModalVisible: false,
		previous: null,
		next: null,
		search: '',
		ships: {},
		ship: {}
    },
    computed: {
    },
    watch: {
		search: function(val) {
			this.loadShips('https://swapi.co/api/starships/?search=' + val);
		}
    },
    methods: {
		showShip: function(s) {
			console.log(s);
			this.ship = s;
			this.isModalVisible = true;
		},
		 getUrlVar: function(get_name) {
			var results = window.location.search.substr(1).match('(^|&) ?' + get_name + '=([^&]*)(&|$)');
			return results ? results[2] : '';
		},
		loadShips: function(url) {
			fetch(url)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					console.error('Network response was not ok');
				})
				.then((json) => {
					if('count' in json && 'previous' in json && 'next' in json && 'results' in json) {
						this.count = json.count;
						this.previous = json.previous;
						this.next = json.next;
						this.ships = json.results;
					} else console.error('Bad result');
				})
				.catch((error) => {
					console.error(error);
				});
		} 
    },
	created() {
		if(this.getUrlVar('search')) this.search = this.getUrlVar('search');
		else this.loadShips('https://swapi.co/api/starships/');
	},
    template: require('./com/ships.html')
});

