/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zdemomonths/zdemo_months/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});