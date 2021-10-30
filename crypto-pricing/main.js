import './style.css'
import $ from "jquery";

function populateCards(currencyData) {
  currencyData.map(function (element, index) {
  });
  $.each(currencyData, function (index, element) {
    if (index === 0) {
      $(".currency-card").find('.currency-title').text(element.name);
      $(".currency-card").find('.currency-symbol').text(element.symbol);
      $(".currency-card").find('.currency-rank').text(element.rank);
      $(".currency-card").find('.currency-price').text(Number(element.priceUsd).toFixed(3));
    } else {
      const currencyCardClone = $('.currency-card').first().clone();
      currencyCardClone.find(".currency-title").text(element.name);
      currencyCardClone.find('.currency-symbol').text(element.symbol);
      currencyCardClone.find('.currency-rank').text(element.rank);
      currencyCardClone.find('.currency-price').text(Number(element.priceUsd).toFixed(3));
      $('.card-container').append(currencyCardClone);
      
    }
  });
}

function fetchData() {
  console.log("data fetch func is called");
  $.ajax({
    url: "https://api.coincap.io/v2/assets?limit=6", success: function (result) {
      console.log("result: " + result);
      const currencyData = result.data;
      populateCards(currencyData)
    }
  });
}

$(window).on("load", function () {
    fetchData();
});
