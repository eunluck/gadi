/*
 *
 *   ITSM - 공통함수(신주식)
 *
 */
$(document).ready(function () {

	/**
	 * AJAX 설정
	 */
	$.ajaxSetup({
		beforeSend: function(xhr) {
			xhr.setRequestHeader('AJAX', 'true');
		},
		error: function(xhr) {
			if(xhr.status == 403) {
				parent.location.href = '/';
			}else {
				//alert("AJAX Error");
			}
		}
	});

	/**
	 * 공통 modal remote content
	 */
	$('.remoteModal').on('click', function(e) {
		e.preventDefault();
		$($(this).data('target')+' .modal-content').load($(this).data('remote'));
	});

	/**
	 * form 태그의 첫번째 인풋 포커스
	 */
	$('form:first *:input[type!=hidden]:first').focus();

	/**
	 * modal form 태그의 첫번째 인풋 포커스
	 */
	$('#modal-layout').on('shown.bs.modal', function() {
		$('form:first *:input[type!=hidden]:first').focus();
	});

	/**
	 * 알림메시지 toastr global option
	 * ex) toastr.success('내용','타이틀');
	 * ex) toastr.info('내용','타이틀');
	 * ex) toastr.warning('내용','타이틀');
	 * ex) toastr.error('내용','타이틀');
	 */
	toastr.options = {
			  "closeButton": true,
			  "debug": false,
			  "progressBar": false,
			  "preventDuplicates": false,
			  "positionClass": "toast-top-center",
			  "onclick": null,
			  "showDuration": "400",
			  "hideDuration": "800",
			  "timeOut": "7000",
			  "extendedTimeOut": "1000",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut"
			}

	/**
	 * 유효성검사 언어설정
	 */
	$.extend( $.validator.messages, {
		required: "* 필수 항목입니다.",
		remote: "* 항목을 수정하세요.",
		email: "* 유효하지 않은 E-Mail주소입니다.",
		url: "* 유효하지 않은 URL입니다.",
		date: "* 올바른 날짜를 입력하세요.",
		dateISO: "* 올바른 날짜(ISO)를 입력하세요.",
		number: "* 유효한 숫자가 아닙니다.",
		digits: "* 숫자만 입력 가능합니다.",
		creditcard: "* 신용카드 번호가 바르지 않습니다.",
		equalTo: "* 같은 값을 다시 입력하세요.",
		extension: "* 올바른 확장자가 아닙니다.",
		maxlength: $.validator.format( "* {0}자를 넘을 수 없습니다. " ),
		minlength: $.validator.format( "* {0}자 이상 입력하세요." ),
		rangelength: $.validator.format( "* 문자 길이가 {0} 에서 {1} 사이의 값을 입력하세요." ),
		range: $.validator.format( "* {0} 에서 {1} 사이의 값을 입력하세요." ),
		max: $.validator.format( "* {0} 이하의 값을 입력하세요." ),
		min: $.validator.format( "* {0} 이상의 값을 입력하세요." )
	});

	/**
	 * 단축키
	 */
	var ctrlDown = false;
	var ctrlKey = 17;
	$(document).keyup(function(e) {
		if(e.ctrlKey && e.which == 81) {
			$('#sr-layout').modal();
			//$('#sr-layout .modal-content').load('/sr/insertFormDe.do');
		}
		return false;
	});

	/**
	 * ITSM 사용자 자동완성
	 */
	$(document).on('.userAutocomplete', function() {

	});


});

/**
 * 공통페이징함수
 */
function cfnPageLink(page) {
	var frm = $("#currentPageNo").parent("form");
	$("#currentPageNo").val(page);
	frm.submit();
}