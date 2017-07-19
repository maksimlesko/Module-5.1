var wkButton = element(by.css('.single-action .document-action'));
var wkSearch = element(by.className('wk-search-input'));
var bredcrumbHome = element(by.binding('item.label'));
var EC = protractor.ExpectedConditions;

var results_page = function() {

	this.wkSearchField = function(){
		return wkSearch;
	};
	
	this.waitForIcon = function() {
		return browser.wait(EC.visibilityOf(wkButton), 30000);

	};
	
	this.backBrowser = function() {
		return browser.navigate().back();
	};
	
	this.clickHomeBreadcrumb = function() {
		return bredcrumbHome.click();
	};
	
};

module.exports = new results_page();