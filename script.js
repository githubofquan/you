$(document).ready(function() {
  
  var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
 
    var params = {
   
    'indent': true,
    'key' : 'AIzaSyAx70pKho_O8IGCTYjpZcIvom0K9LFoSUU',
  };
  $( "#timdi" ).click(function() {
    $('#entity-card-container').empty();
params.languages = $('.main-search__language').val();
params.types = $('.main-search__type').val();
params.query = $('.main-search__search-input').val();

  $.getJSON(service_url + '?callback=?', params, function(response) {
    $.each(response.itemListElement, function(i, element) {
      
      
      var large = '<div class="entity-card"><div class="entity-card__section entity-card__header-section"><h3 class="entity-card__name">QQQ_name</h3><!-- /.entity-card__name --><div class="entity-card__result-score"><span class="entity-card__key">Điểm: </span><!-- /.entity-card__key --><span class="entity-card__value">QQQ_score</span><!-- /.entity-card__value --></div><!-- /.entity-card__result-score --></div><!-- /.entity-card__header --><div class="entity-card__section"><div class="entity-card__item"><div class="entity-card__key">Mô tả:</div><div class="entity-card__value">QQQ_des</div></div><div class="entity-card__item"><div class="entity-card__key">Kiểu:</div><div class="entity-card__value">QQQ_type</div></div></div><!-- /.entity-card__body --><div class="entity-card__section"><div class="entity-card__heading">Mô tả chi tiết</div><!-- /.entity-card__key --><div class="entity-card__value">QQQ_detaildes </div><!-- /.entity-card__value --></div><div class="entity-card__section"><div class="entity-card__heading"></div><div class="entity-card__image-section"><div class="entity-card__image"><a target="_blank" href="QQQ_imageurl"><img src="QQQ_contenturl" alt="" class="entity-card__img"></a></div><div class="entity-card__image-info"><div class="entity-card__item"><div class="entity-card__key"></div><div class="entity-card__value"></div></div><div class="entity-card__item"><div class="entity-card__key"> </div><div class="entity-card__value"></div></div></div></div></div></div>';
        large = large.replace("QQQ_name", element.result.name)
        .replace("QQQ_score", element.resultScore)
        .replace("QQQ_des", element.result.description)
        .replace("QQQ_detaildes", element.result.detailedDescription ? element.result.detailedDescription.articleBody : "")
        .replace("QQQ_imageurl", element.result.image ? element.result.image.url : "")
        .replace("QQQ_contenturl", element.result.image ? element.result.image.contentUrl : "")
        .replace("QQQ_type", element.result["@type"].join());

      $('#entity-card-container').append(large);

    });
    console.log(response);
  });
}); 
}); 

