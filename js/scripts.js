function findReplace(phrase1, findWord1, replaceWord1, percent1) {
  var phrase = phrase1;
  var findWord = findWord1;
  var replaceWord = replaceWord1;
  var percent = percent1;
  var count = 0;
  phrase = phrase.split(" ");
  phrase.forEach(function(element, index, array) {
    if (element == findWord) {
      array[index] = replaceWord;
      count++;
    }
  });
  return [phrase.join(" "), count];
};


$(document).ready(function() {
  
  jQuery("#submit").prop('disabled', true);

  var toValidate = jQuery('#phrase, #findWord, #replaceWord'),
  valid = false;
  toValidate.keyup(function() {
    if (jQuery(this).val().length > 0) {
      jQuery(this).data('valid', true);
    } else {
      jQuery(this).data('valid', false);
    }
    toValidate.each(function() {
      if (jQuery(this).data('valid') == true) {
        valid = true;
      } else {
        valid = false;
      }
    });
    if (valid === true) {
      jQuery("#submit").prop('disabled', false);
    } else {
      jQuery("#submit").prop('disabled', true);
    }
  });

  $("form#findReplace").submit(function(event) {
    // $('#phrase, #findWord, #replaceWord').change(toValidate);
    var phrase = $("input#phrase").val();
    var findWord = $("input#findWord").val();
    var replaceWord = $("input#replaceWord").val();
    var percent = $("input#percent").val();
    if (percent.length > 2) {
      percent = parseInt(percent.substr(0,2));
    } else {
      percent = parseInt(percent);
    }
    debugger;
    var changed_words = findReplace(phrase, findWord, replaceWord, percent);
    var count = changed_words[1];
    var new_words = changed_words[0];
    $(".findWord").text(findWord);
    $(".replaceWord").text(replaceWord);
    $(".counter").text(count);
    $(".new_words").text(new_words);

    $("#result").show();

    event.preventDefault();

  });
});
