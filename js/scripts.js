jQuery(function($) {

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });
});

function ImageFlip(e, u) {
	if (!e.otherSrc) {
		e.otherSrc = u;
	}
	u = e.src;
	e.src = e.otherSrc;
	e.otherSrc = u	;
}
