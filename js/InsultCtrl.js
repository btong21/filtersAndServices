app.controller('InsultCtrl', InsultCtrl);

function InsultCtrl(InsultService) {
	this.insulter = InsultService;
   	this.insult = InsultService.generateInsult();
}

InsultCtrl.prototype.replaceInsult = function () {
	this.insult = this.insulter.generateInsult();
};





















