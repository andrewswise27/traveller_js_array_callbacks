const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const first = this.journeys.map(journey => journey.startLocation);
  return first;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const last = this.journeys.map(journey => journey.endLocation);
  return last;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let hghg = [];
  mode = this.journeys.map(journey => {if (journey.transport === transport) {
    hghg.push(journey)
  } } );
  return hghg;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const min = this.journeys.filter(journey => journey.distance >= [minDistance]);
  return min
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let nl = this.journeys.map(journey => journey.distance)
  let total = 0;
  const distance = nl.reduce((previousValue, currentValue) => previousValue + currentValue, total);
  return distance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let nl = this.journeys.map(journey => journey.transport)
  const unique = [...new Set(nl)];
  return unique;
};
 


module.exports = Traveller;
