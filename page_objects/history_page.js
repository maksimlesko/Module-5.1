var EC = protractor.ExpectedConditions;
var historyPopup = element(by.className('history-popup'));
var historyItem = element(by.css('.my-history-box>a'));
var wkGroupButton = element(by.className('wk-button-group-left'));

var history_page = function() {

	this.openHistoryPopup = function() {
        return historyPopup.click();
	};
	
	this.clickHistoryItem = function() {
		return historyItem.click();
	};
	
	this.waitForWkButton = function() {
		return browser.wait(EC.visibilityOf(wkGroupButton), 15000);
	};
		
	this.clickMyHistoryItem = function(value) {
		return element(by.linkText(value)).click();
	};
	
	
};

module.exports = new history_page();