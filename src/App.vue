<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>STOP</span>
        <span class="font-weight-light">Buying</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
		href="https://lihkg.com/thread/1365591/page/1"
		target="blank"

      >
        <span class="mr-2">Report</span>
		<v-icon>report</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
		 <v-container
			fluid
			grid-list-md
			pa-2
			>
			<v-layout
				wrap
			>
				<v-flex
				v-for="shop in api.shops"
				:key="shop.title"
				xs12 sm6
				>
				<v-card class="ma-2">
					<v-img
					:contain="true"
					:src="shop.src"
					class="white--text"
					height="200px"
					gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
					>
					<v-card-title
						class="fill-height align-end"
						v-text="shop.title"
					></v-card-title>
					</v-img>
					
					 <v-chip
						class="mt-4 ml-6"
						>
						<v-avatar left>
							<v-icon>{{getShopIcon(shop.type)}}</v-icon>
						</v-avatar>
						{{shop.type}}
					</v-chip>
					 <v-chip
					 	v-if="shop.fc"
						class="mt-4 ml-2"
						color="success"
						>
						<v-avatar left>
							<v-icon>contact_phone</v-icon>
						</v-avatar>
						FactChecked
					 </v-chip>
					<div>
					<blockquote class="blockquote">{{shop.reason}}</blockquote>
					</div>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn 
						class="mb-2 mr-2"
						:href="shop.details"
						target="blank"
						>
							
							<small>{{shop.date}}</small> 
							<v-icon>find_in_page</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
				</v-flex>
			</v-layout>
			</v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
	  api:{
		shops:[]

	  }
	}),
	mounted:function(){
		var self = this;
		self.axios
		.get('https://raw.githubusercontent.com/dearpp713/stopbuying/master/api/shops.json')
		.then((response) => {
				console.log(response.data.shops);
				self.api.shops = response.data.shops;
			}
		)
	},
	methods:{
		getShopIcon(shop_type){
			switch (shop_type) {
			case 'food':
				return "fastfood";
				
			case 'clothes':
				return "local_offer";
				
			case 'reading':
				return "library_books";
				
			case 'game':
				return "videogame_asset";
			}
		}
	}
};
</script>
