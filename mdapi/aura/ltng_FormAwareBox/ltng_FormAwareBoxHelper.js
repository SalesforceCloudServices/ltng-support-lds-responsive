({
	/**
	 * Determines the form factor that the component is shown in.
	 * @see https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/expr_browser_value_provider.htm
	 **/
    determineFormFactor : function(component, helper) {
		console.info('determining form factor. (break here for more info)');
        var formFactor = $A.get("$Browser.formFactor");
        return(formFactor);
	},
    
    /**
     * Raises a toast
     * @see https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/ref_force_showToast.htm
     **/
    toast : function(title, message){
        var toastEvent = $A.get('e.force:showToast');
        toastEvent.setParams({
            title: title,
            message: message
        });
        toastEvent.fire();
    }
})