angular.module('myApp').controller('mainCtrl',function ($http,$scope) {
    var vm = this;
    vm.months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
    vm.ticketTypes = ['авиабилеты','ж/д билеты','отели'];
    vm.tabs = ['в одну сторону','в обе стороны','сложный маршрут'];
    vm.currentTicketType = vm.currentType = 0;
    $scope.today = function() {
    $scope.dt = new Date();
  };

});
