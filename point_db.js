var main = {
	levels:{
		level_1:{
				xp:0 , skin:"./images/space_1.png" ,
				bullets:"blue" , 
				enemies:["green_small"]
		},
		level_2:{
				xp:10 , 
				skin:"./images/space_2.png" , 
				bullets:"blue", 
				enemies:["green_big","red_small"]
		},
		level_3:{
				xp:100 , 
				skin:"./images/space_3.png" , 
				bullets:"green" , 
				enemies:["red_big","purple_small"]
		},
		level_4:{
				xp:500 , 
				skin:"./images/space_4.png" , 
				bullets:"red", 
				enemies:["green_small","red_small","purple_small"]
		},
		level_5:{
				xp:1000 , 
				skin:"./images/space_5.png" , 
				bullets:"purple" , 
				enemies:["green_big","red_big","purple_big"]
		},
		level_boss:{
				xp:10000 , 
				skin:"./images/space_6.png" , 
				bullets:"boss" , 
				enemies:["green_big","red_big","purple_big", "boss"]
		}
	},
	player:{
		level:"level_1",
		bullets:"blue",
		xp:0,
		health:100
	},
	enemy:{
		green_small:{
				hp:5 , 
				bullets:"green" , 
				image:"./images/space_7.png" , 
				inc_xp:1,
				freq:"2s"
		},
		green_big:{
				hp:10 , 
				bullets:"green" , 
				image:"./images/space_8.png" , 
				inc_xp:5,
				freq:"1s"
		},
		red_small:{
				hp:10 , 
				bullets:"red" , 
				image:"./images/space_9.png" , 
				inc_xp:5,
				freq:"2s"
		},
		red_big:{
				hp:15 , 
				bullets:"red" , 
				image:"./images/space_10.png" , 
				inc_xp:10,
				freq:"1s"
		},
		purple_small:{
				hp:15  , 
				bullets:"purple" , 
				image:"./images/space_11.png" , 
				inc_xp:10,
				freq:"2s"
		},
		purple_big:{
				hp:20 , 
				bullets:"purple" , 
				image:"./images/space_12.png" , 
				inc_xp:25,
				freq:"1s"
		},
		boss:{
				hp:100 , 
				bullets:"boss" , 
				image:"./images/space_13.png" , 
				inc_xp:100,
				freq:"0.5s"
		}
	},
	ballz:{
		blue:{
				player:"./images/space_17.png" , 
				enemy:"./images/space_21.png" , 
				dec_hp:1
		},
		green:{
				player:"./images/space_18.png" , 
				enemy:"./images/space_23.png" , 
				dec_hp:2
		},
		red:{
				player:"./images/space_16.png" , 
				enemy:"./images/space_22.png" , 
				dec_hp:5
		},
		purple:{
				player:"./images/space_19.png" , 
				enemy:"./images/space_24.png" , 
				dec_hp:7
		},
		boss:{
				player:"./images/space_20.png" , 
				enemy:"./images/space_25.png" , 
				dec_hp:10
		}
	}
};
