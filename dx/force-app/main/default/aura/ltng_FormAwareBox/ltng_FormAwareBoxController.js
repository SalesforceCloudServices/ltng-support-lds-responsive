({
	init : function(component, event, helper) {
        var formFactor = helper.determineFormFactor(component,helper);
		component.set("v.formFactor",formFactor);
        
        var buttonLabel = 'Behavior for ' + formFactor;
        component.set('v.buttonLabel',buttonLabel);
	},
    
    handleClick : function(component, event, helper){
        var title = 'Click handled';
        var message = 'FormFactor: ' + component.get('v.formFactor');
        helper.toast(title, message);
    }
})