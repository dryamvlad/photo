function InputHelperIn ( obj, text ) {

		if($(obj).is('input')) {
			if (obj.value == text) {
				$(obj).removeClass('toclearinput').val('');
			}
		}

		if($(obj).is('textarea')) {
			if ($(obj).val() == text) {
				$(obj).removeClass('toclearinput').val('');
			}
		}
}

function InputHelperOut ( obj, text ) {

		if($(obj).is('input')) {
			if ( obj.value == '' || obj.value == text ) {
			    $( obj ).addClass('toclearinput').val ( text );
			}
		}

		if($(obj).is('textarea')) {
			if ( $(obj).val() == '' || $(obj).val() == text ) {
			    $( obj ).addClass('toclearinput').val ( text );
			}
		}
}

function InputHelperCreate ( obj )	{
	if(obj.title==undefined||obj.title=="") return;

	$( obj )
			.bind ( 'focus', function () {
				InputHelperIn ( this, obj.title );
			} )
			.bind ( 'blur', function () {
				InputHelperOut ( this, obj.title );
			} );

		InputHelperOut ( obj, obj.title );
	}

$( document ).ready ( function () {
	$('.Helper').each(function() {
		InputHelperCreate(this);
	});
} );
