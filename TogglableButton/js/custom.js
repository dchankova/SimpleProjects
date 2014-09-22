$(document).ready(function(){
	$("#whenOption1").show();

	// if( $('input:radio:checked').length > 0){
		// $("#whenOption2").show();
	// }else{
	// //NOTHING is checked!
	// // }
	// };
});
function showFirstMenu(){
	toggleText("whenOption2", "whenOption1");
}
function showSecondMenu(){
	toggleText("whenOption1", "whenOption2");
}
function toggleText(elemToHide, elemToShow){
	$("#" + elemToHide).hide();
	$("#" + elemToShow).show();
}