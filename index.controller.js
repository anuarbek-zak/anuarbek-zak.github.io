angular.module('myApp').controller('mainCtrl',function ($http,$scope) {
	var vm = this;
	vm.months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
	vm.ticketTypes = ['авиабилеты','ж/д билеты','отели'];
	vm.tabs = ['В одну сторону','В обе стороны','Сложный маршрут'];
	vm.currentTicketType = vm.currentTab = 0;


	$http.get("https://santufei.com/api/v1/content/directions/?city_a=ALA&city_b=IS")
	.then(function(response) {
		console.log('resp',response)
	},function(err){
				console.log('err',err)

	});
});
