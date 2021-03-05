// Toggle forum categories' visibility using jQuery cookies script.

var category_collapse = '<span style="float:right;">+</span>';
var category_expand = '<span style="float:right;">-</span>';
var collapsed_categories = new Array();

jQuery(document).ready(function () {
    function cc_save_cookie() {
        jQuery.cookie("category_collapse", collapsed_categories.join("#|#"), {
            expires: 3650,
        });
    }

    if (jQuery("#punindex").length > 0 || jQuery("#punforums").length > 0) {
        var cc_cookie = jQuery.cookie("category_collapse");

        if (cc_cookie == null) {
            jQuery("div.blocktable > h2 > span").after(
                ' <a class="category_collapse" href="#">' +
                    category_collapse +
                    "</a>"
            );
        } else {
            collapsed_categories = cc_cookie.split("#|#");

            jQuery("div.blocktable > h2 > span").each(function () {
                if (
                    jQuery.inArray(jQuery(this).html(), collapsed_categories) >
                    -1
                ) {
                    jQuery(this).after(
                        ' <a class="category_collapse" href="#">' +
                            category_expand +
                            "</a>"
                    );
                    jQuery(this)
                        .parents("div.blocktable:first")
                        .find("div.box")
                        .hide();
                } else {
                    jQuery(this).after(
                        ' <a class="category_collapse" href="#">' +
                            category_collapse +
                            "</a>"
                    );
                }
            });
        }

        jQuery("a.category_collapse").click(function (e) {
            var status = jQuery(this).html();
            var category = jQuery(this).prev().html();
            var idx = jQuery.inArray(category, collapsed_categories);

            if (status == category_collapse) {
                jQuery(this).html(category_expand);
                jQuery(this)
                    .parents("div.blocktable:first")
                    .find("div.box")
                    .hide();

                if (idx == -1) {
                    collapsed_categories.push(category);
                    cc_save_cookie();
                }
            } else {
                jQuery(this).html(category_collapse);
                jQuery(this)
                    .parents("div.blocktable:first")
                    .find("div.box")
                    .show();

                if (idx > -1) {
                    collapsed_categories.splice(idx, 1);
                    cc_save_cookie();
                }
            }

            return false;
        });
    }
});

jQuery(document).ready(function () {
    jQuery("#announce H2")
        .click(function () {
            jQuery("#announce .box").animate({ height: "toggle" }, 300);
        })
        .css("display", "inline;", "width", "200px");
});
