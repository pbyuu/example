var example = {
	view_container: null,
	config: {},
	views: {},
	modules: {},
	components: {}
};

example.views.index = function () {
	$("#main").empty();
	$("#main").render({
		template: [
			{
				e: "tab-nav",
				t: "list_demo",
				click: example.views.index.listDemo
			},
			{
				e: "tab-nav",
				t: "form_demo",
				click: example.views.index.formDemo,
			},
			{
				e: "tab-nav",
				t: "aaaaaa",
				click: example.views.index.moreDemo,
				a: {class: "active"}
			}
		]
	});
	example.views.index.moreDemo();
};

example.views.index.moreDemo = function () {
	var container = $('#container');
	container.empty();
	container.render({
		template: {
			e: "div",
			a: {class: "info_page"},
			style: {},
			t: [
				//顶部tab
				{
					e: "ul",
					a: {class: "head_tab"},
					t: [
						{
							e: "li", t: "messageList", a: {class: "active"},
							click: function (d) {
								example.views.index.moreDemo.messageList();
								$(".head_tab li").removeClass("active");
								$(d.sender).addClass("active");
							},
							style: {
								"border-bottom": "1px solid #cccccc"
							}
						},
						{
							e: "li", t: "analysis",
							click: function (d) {
								example.views.index.moreDemo.analysis();
								$(".head_tab li").removeClass("active");
								$(d.sender).addClass("active");
							},
						}
					],
				},
				//切换tab的作用页面
				{
					e: "div",
					a: {class: "page_container", id: "page_container"},
				}
			]
		}
	});
	example.views.index.moreDemo.messageList();
};

example.views.index.moreDemo.messageList = function () {
	var page_container = $("#page_container");
	page_container.empty();
	page_container.render({
		template: [
			{e: "button", a: {class: "list_btn"}, t: "添加数据"},
			{
				e: "div", a:{class:"search_div"}, t: [
					{e: "input", a: {class: "search_input"}},
					{e: "button", a: {class: "list_btn"}, t: "查询",style:{"margin-left":"20px"}}
				]
			},
			{
				// 边框
				e:"table",a:{class:"result_table"},
				t:[
					{
						e:"thead",
						t:{
							e:"tr",
							//如果t里元素很简单，就没必要用e-t模板，可以直接写标签。 t[] 支持写多个字符串，逗号隔开即可
							t:[
								"<th>id</th>","<th>name</th>","<th>age</th>","<th>grade</th>","<th>description</th>","<th>操作</th>"
							]
						}
					},
					{
						e:"tbody"
					},
					{
						e:"tfoot"
					}
				]

			}
		]
	});
};

example.views.index.moreDemo.analysis = function () {
	var page_container = $("#page_container");
	page_container.empty();
	page_container.render({
		template: [
			{e: "p", t: "22222"}
		]
	});
};

example.views.index.listDemo = function () {
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "/demoData2",
		success: function (data) {
			var container = $('#container');
			container.empty();
			data = JSON.parse(data);
			console.log(data);
			container.render({
				data: data,
				template: {
					e: "div",
					t: [
						{
							e: "h3",
							t: data.listTitle
						},
						{
							e: "div",
							t: data.userId,
							a: {
								username: data.userInfo.userName,
								usertype: data.userInfo.userType
							}
						},
						{
							e: "ul",
							t: {
								e: "li",
								datapath: "messageList/message",
								t: [
									{
										e: "div",
										a: {
											class: "person-img",
											dataId: "[[userId]]"
										},
										t: {
											e: "a",
											a: {
												href: "http://test.wanfangdata.com.cn/sns/user/[[userId]]"
											},
											t: {
												e: "img",
												a: {
													src: "http://test.wanfangdata.com.cn/sns/getCurrentAvatar/[[userId]]"
												},
												style: {
													width: "56px",
													height: "56px",
													border: "2px solid #fff",
												}
											}
										},
										style: {
											float: "left"
										}
									},
									{
										e: "div",
										t: [
											{
												e: "div",
												t: [
													{
														e: "a",
														t: "[[userId]]",
														style: {
															"font-size": "16px",
															"color": "#417dc9",
															"text-decoration": "none"
														},
														a: {
															href: "http://test.wanfangdata.com.cn/sns/user/[[userId]]"
														}
													},
													{
														e: "i",
														t: "[[releaseTime]]"
													},
													{
														e: "div",
														t: "[[message]]",
														a: {
															dataId: "[[msgId]]"
														}
													},
												]
											},
											{
												e: "button",
												t: "!",
												click: function (val) {
													//这个代码块里不能用[[]]占位符
													var dataId = val.org_data.msgId;
													$('[data-id=' + dataId + '] .tip').toggle();
												}
											},
											{
												e: "input",
												a: {
													class: "tip",
													value: "[[msgId]]"
												},
												style: {
													display: "none",
													width: "300px"
												}

											}
										],
										style: {
											float: "left"
										}
									}
								],
								style: {
									clear: "both",
									"padding": "20px",
									"margin-bottom": "20px"
								},
								a: {
									"data-id": "[[msgId]]"
								}
							}
						}
					]
				}
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
};

var userData = {
	info: [
		{name: "a", age: "1"},
		{name: "b", age: "2"},
		{name: "c", age: "3"}
	]

};

example.views.index.formDemo = function () {
	var container = $('#container');
	container.empty();
	container.render({
		data: userData,
		template: {
			e: "div",
			t: [
				{
					e: "button",
					t: "添加",
					click: function () {
						poplayer({
							header: "添加",
							width: "500px",
							template: {
								e: "div",
								t: [
									{
										e: "div",
										t: [
											{
												e: "label",
												t: "姓名"
											},
											{
												e: "input",
												a: {
													width: "100px",
													type: "text"
												}
											}
										]
									},
									{
										e: "div",
										t: [
											{
												e: "label",
												t: "密码"
											},
											{
												e: "input",
												a: {
													type: "password",
													width: "100px"
												}
											}
										]

									}
								]
							}
						});
					}
				},
				{
					e: "div",
					t: [
						{e: "label", t: "搜索："},
						{e: "input",},
						{e: "button", t: "搜索"}
					]
				},
				{
					e: "table",
					t: [
						{
							e: "tr",
							t: [
								{
									e: "th", t: "name"
								},
								{
									e: "th", t: "age"
								}
							]

						},
						{
							e: "tr",
							datapath: "info",
							t: [
								{
									e: "td", t: "[[name]]"
								},
								{
									e: "td", t: "[[age]]"
								}
							]
						}
					]

				}


			]
		}
	});
};


