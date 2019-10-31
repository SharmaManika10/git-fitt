sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zdemomonths.zdemo_months.controller.View1", {
		onInit: function () {

		},
		
	onPress:function(oEvent)
	{
			var PressId = oEvent.getParameter("id");
			var PressArray = PressId.split("--");
		
					
			switch(PressArray[2])
			{

			case "Jan":

				sap.m.MessageToast.show("January");	
				break;

			case "Feb":
				sap.m.MessageToast.show("Feburay");	
				break;

			case "Mar":

				sap.m.MessageToast.show("March");	
				break; 

            case "Apr":

				sap.m.MessageToast.show("April");	
				break; 
				
		    case "May":

				sap.m.MessageToast.show("May");	
				break; 
				
		    case "Jun":

				sap.m.MessageToast.show("June");	
				break;
				
			case "Jul":

				sap.m.MessageToast.show("July");	
				break; 
				
			case "Aug":

				sap.m.MessageToast.show("August");	
				break; 
				
				
			case "Sep":

				sap.m.MessageToast.show("September");	
				break; 
				
			case "Oct":

				sap.m.MessageToast.show("October");	
                break;
                
            case "Nov":
	            
	            sap.m.MessageToast.show("November");	
                break; 
                
            case "Dec":
	            
	            sap.m.MessageToast.show("November");	
                break; 
}
		
}
});
});