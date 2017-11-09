$(document).ready(function() {
	var i = 0;
$("#root").append("<ul><li></li></ul>")
$("li").append("<span>Сделать задание #3 по web-программированию</span>")
$("li").append("<button>Удалить</button>").click(function() {
	$(this).remove();
});
$("#root").append("<input id='add_task_input'>")
$("#root").append("<button id='add_task'></button>")
	$("#add_task").click(function() {
		i = i + 1;
		var tmp = $("input").val();
		$("ul").append($("<li></li>").attr("id", i));
		$("#" + i).append($("<span></span>").text(tmp));
		$("#" + i).append("<button>Удалить</button>").click(function() {
	$(this).remove();
});
});
});


/*JS-код должен находиться в отдельном файле app.js.
На страницу index.html должен быть подключен jQuery и app.js.
После загрузки страницы выполняется JS-код, который:

    добавляет в div с id=root список ul,
    добавляет в этот список элемент li,
    добавляет в элемент li тэг span с текстом “Сделать задание #3 по web-программированию”,
    добавляет в элемент li кнопку button с текстом “Удалить”, при нажатии на которую весь элемент li должен быть удален из DOM-дерева,
    добавляет в div с id=root input с id=add_task_input и кнопку button с id=add_task

При нажатии на кнопку с id=add_task добавляется новый элемент li с текстом из input, с требованиями как для “Сделать задание #3 по web-программированию”*/