var data = {};

$('#container').render({
	data: {
		lib: "thin.js",
		author: "eprom2006"
	},
	template: [
		{
			e: "div",
			t: "data:"
		},
		{
			e:"div",
			t:{
				e:"div",
				data:data,
			}
		}
	]
});