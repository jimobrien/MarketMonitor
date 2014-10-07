 angular.module('cmm.services', ['cmm.sockets'])
 .factory('MarketData', ['PriceData', 'PriceDistData', 'COVData', 'VolumeData', 'RangeData', 'SummaryData', 'TradeData',
  function (PriceData, PriceDistData, COVData, VolumeData, RangeData, SummaryData, TradeData) {
    console.log('instantiated marketdata');
    return {
      price: PriceData,
      priceDist: PriceDistData,
      cov: COVData,
      volume: VolumeData,
      range: RangeData,
      summary: SummaryData,
      trades: TradeData
    };
 }]);