//name our angular app
angular.module('firstApp', [])

.controller('mainController', function(){
    
    // it is good practice to link variables to vm, because just defining them and the using this could be confusing. Besides, this is used for callbacks.
    
    // bind this to vm (view model)
    var vm = this;
    
    // now we define variables that are gooing to be accesible in our views
    vm.message = 'Come, se how good I am doing!';
    
    vm.computers = [
        { name: 'Macbook Pro', color: 'Silver', nerdness: 7 },
        { name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6 },
        { name: 'Chromebook', color: 'Black', nerdness: 5 }
    ];
    
    // variable linked to our html form
    vm.computerData = {}
    
    //we define a function that add an item to our computer list
    vm.addComputer = function(){
        
        // adds a computer to the list
        vm.computers.push({
            name: vm.computerData.name,
            color: vm.computerData.color,
            nerdness: vm.computerData.nerdness
        });
        
        // we clear the variable so we can fill it again
        vm.computerData = {};
    }
    
    
});
