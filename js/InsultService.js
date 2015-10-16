InsultCtrl.prototype.generateInsult = function() {
  var randomAdjective1 = this.primaryAdjectives[Math.floor(Math.random()*this.primaryAdjectives.length)];
  var randomAdjective2 = this.secondaryAdjectives[Math.floor(Math.random()*this.secondaryAdjectives.length)];
  var randomNoun = this.derogatoryNouns[Math.floor(Math.random()*this.derogatoryNouns.length)];
  
  return randomAdjective1 + ' ' + randomAdjective2 + ' ' + randomNoun;
}