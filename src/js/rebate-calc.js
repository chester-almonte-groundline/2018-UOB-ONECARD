var item_p = 0;
var item_g = 0;
var item_d = 0;
var item_r = 0;
var item_o = 0;
var total = 0;
var rebate = 0;
var interest = 0;

$(document).ready(function() {

	//$('.item-input').numeric();
	$('.item-input').on('focusin', function(e) {
		if ($(this).val() <= 0) {
			$(this).val('');
		}
	});
	$('.item-input').on('focusout', function(e) {
		if ($(this).val() == '' || $(this).val() <= 0) {
			$(this).val(0);
		} else {
			$(this).val(parseFloat($(this).val(), 10));
		}
	});
	$('.btn_calculate').on('click', function(e) {
		e.preventDefault();

		$('.btn_calculate').css('display', 'none');
		$('.btn_recalculate').css('display', 'block');
		$('.result').css('display', 'block');
		$(".item-input").prop('disabled', true);

		rebate_calc();
	});
	$('.btn_recalculate').on('click', function(e) {
		e.preventDefault();

		$('.btn_calculate').css('display', 'block');
		$('.btn_recalculate').css('display', 'none');
		$('.result').css('display', 'none');
		$(".item-input").prop('disabled', false);
	});

});

function rebate_calc() {
	item_p = $('#item-petrol').val();
	item_p = parseFloat(item_p) || 0;
	item_g = $('#item-groce').val();
	item_g = parseFloat(item_g) || 0;
	item_d = $('#item-dining').val();
	item_d = parseFloat(item_d) || 0;
	item_r = $('#item-recurr').val();
	item_r = parseFloat(item_r) || 0;
	item_o = $('#item-other').val();
	item_o = parseFloat(item_o) || 0;

	total = item_p + item_g + item_d + item_r + item_o;

	if (total >= 2000) {
		rebate = 1200;
		interest = 'and up to 3.33% interest p.a. on savings<br class="hidden-xs" />in UOB One Account<sup>2</sup>';
	} else if (total >= 1000) {
		rebate = 400;
		interest = 'and up to 3.33% interest p.a. on savings<br class="hidden-xs" />in UOB One Account<sup>2</sup>';
	} else if (total >= 500) {
		rebate = 200;
		interest = 'and up to 3.33% interest p.a. on savings<br class="hidden-xs" />in UOB One Account<sup>2</sup>';
	} else {
		rebate = 0;
		interest = '';
	}

	$('#total-spend').html(commaSeparateNumber(total));
	$('#cash-rebate').html(commaSeparateNumber(rebate));
	$('#interest').html(interest);
}

function commaSeparateNumber(val){
	while (/(\d+)(\d{3})/.test(val.toString())){
    	val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
   	}
   	return val;
}