angular.module('templates-app', ['auth/login.tpl.html', 'dashboard/dashboard.tpl.html', 'layout/main.tpl.html', 'layout/side-navigation.tpl.html', 'networks/networks.tpl.html']);

angular.module("auth/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/login.tpl.html",
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-4 col-md-offset-4 text-center\">\n" +
    "        <div id=\"login-box\">\n" +
    "        <div id=\"welcome-header-wrapper\"><div id=\"welcome-header\">Welcome!</div> </div>\n" +
    "        <div>This system is limited to employees of Mega Corp.</div> \n" +
    "        <div>Log in with your Company Google Apps account below.</div><br />\n" +
    "        <div ng-click=\"login.oauth()\" id=\"login-button\" class=\"btn btn-default\">Login with google</div>\n" +
    "        {{ login.message}}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6\"> \n" +
    "        <section class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <strong>\n" +
    "                    <i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i>\n" +
    "                    <span data-i18n=\"Data\">Top 5 hashtags</span>\n" +
    "                    <i class=\"fa fa-refresh widget-refresh\" ng-click=\"dashboard.updateBar()\" ></i>\n" +
    "                </strong>\n" +
    "               \n" +
    "            </div>\n" +
    "            <div id=\"bar-chart-container\">\n" +
    "                <nvd3-discrete-bar-chart\n" +
    "                    data=\"dashboard.barData\"\n" +
    "                    showXAxis=\"true\"\n" +
    "                    showYAxis=\"true\"\n" +
    "                    showValues=\"true\"\n" +
    "                    showLegend=\"true\"\n" +
    "                  \n" +
    "                    >\n" +
    "                     <svg id=\"bar-chart\"></svg>\n" +
    "                </nvd3-discrete-bar-chart>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <section class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <strong>\n" +
    "                    <i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i>\n" +
    "                    <span data-i18n=\"Data\">Top Tweet Locations</span>\n" +
    "                    <i class=\"fa fa-refresh widget-refresh\" ng-click=\"dashboard.updatePie()\" ></i>\n" +
    "                </strong>\n" +
    "            </div>\n" +
    "            <div id=\"pie-chart-container\">\n" +
    "            <nvd3-pie-chart\n" +
    "                data=\"dashboard.pieData\"\n" +
    "                id=\"pieChart\"\n" +
    "                margin=\"{left:0,top:0,bottom:0,right:0}\"\n" +
    "                x=\"dashboard.xFunction()\"\n" +
    "                y=\"dashboard.yFunction()\"\n" +
    "                showLabels=\"true\"\n" +
    "                pieLabelsOutside=\"false\"\n" +
    "                showValues=\"true\"\n" +
    "                showLegend=\"true\"\n" +
    "                objectequality=\"false\"\n" +
    "                labelType=\"percent\">\n" +
    "                <svg id=\"pie-chart\"></svg>\n" +
    "            </nvd3-pie-chart>\n" +
    "            </div>\n" +
    "            \n" +
    "        </section>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<section class=\"panel panel-default\">\n" +
    "            <div class=\"panel-heading\">\n" +
    "                <strong>\n" +
    "                    <i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i>\n" +
    "                    <span data-i18n=\"Data\">Tweets per minute for last 60 minutes</span>\n" +
    "                    \n" +
    "                </strong>\n" +
    "               \n" +
    "            </div>\n" +
    "            <div id=\"line-chart-container\">\n" +
    "                <nvd3-line-chart\n" +
    "            data=\"dashboard.lineData\"\n" +
    "            id=\"exampleId\"\n" +
    "            showXAxis=\"true\"\n" +
    "            showYAxis=\"true\"\n" +
    "            tooltips=\"true\"\n" +
    "            interactive=\"true\"\n" +
    "            objectequality=\"false\"\n" +
    "            margin=\"{left:50,top:50,bottom:50,right:50}\"\n" +
    "            >\n" +
    "        <svg></svg>\n" +
    "    </nvd3-line-chart>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "");
}]);

angular.module("layout/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("layout/main.tpl.html",
    "    <div id=\"wrapper\">\n" +
    "      <div id=\"side-navigation\" ui-view=\"side-navigation\"></div>\n" +
    " \n" +
    "\n" +
    "      <div id=\"page-wrapper\">\n" +
    "          \n" +
    "    \n" +
    "        <ol class=\"breadcrumb\">\n" +
    "            \n" +
    "            <li > <a ui-sref=\"home.dashboard\" class=\"small\">Dashboard </a></li>\n" +
    "         \n" +
    "\n" +
    "        </ol>\n" +
    "          \n" +
    "\n" +
    "        <div class=\"slide\" ui-view=\"main\"></div>\n" +
    "       \n" +
    "          </div>\n" +
    "        </div><!-- /.row -->\n" +
    "\n" +
    "      </div><!-- /#page-wrapper -->\n" +
    "\n" +
    "    </div><!-- /#wrapper -->\n" +
    "<div class=\"modal fade\" id=\"default-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "  <div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "      <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "        \n" +
    "      </div>\n" +
    "        <div class=\"modal-body\" id=\"default-modal-body\">\n" +
    "        </div>\n" +
    "      <div class=\"modal-footer\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "       \n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("layout/side-navigation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("layout/side-navigation.tpl.html",
    "<!-- Sidebar -->\n" +
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" ui-sref=\"home.dashboard\"><img src=\"assets/images/twitterstats.png\" height=\"50\" width=\"54\"  />TwitterStats</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n" +
    "        <ul class=\"nav navbar-nav side-nav\">\n" +
    "            <li \n" +
    "                class=\"\" >\n" +
    "                <a ui-sref=\"home.dashboard\"><i class=\"fa fa-dashboard\"></i> Dashboard</a></li>\n" +
    "\n" +
    "\n" +
    "            <li\n" +
    "                class=\"\" > \n" +
    "\n" +
    "                <a ui-sref=\"home.networks\"><i class=\"fa fa-users\"></i> Networks</a></li>\n" +
    "            \n" +
    "\n" +
    "\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right navbar-user\">\n" +
    "\n" +
    "            <li class=\"dropdown\" on-toggle=\"toggled(open)\">\n" +
    "                <a href class=\"dropdown-toggle\">\n" +
    "                    <i class=\"fa fa-user\"></i> Jim Smithers <b class=\"caret\"></b>\n" +
    "                </a>\n" +
    "                <ul class=\"dropdown-menu\">\n" +
    "                    <li >\n" +
    "                        <a href  ng-click=\"logout()\">Logout</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "\n" +
    "        </ul>\n" +
    "    </div><!-- /.navbar-collapse -->\n" +
    "\n" +
    "</nav>\n" +
    "");
}]);

angular.module("networks/networks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("networks/networks.tpl.html",
    "\n" +
    "\n" +
    "<section class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <strong>\n" +
    "            <i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i><i class=\"fa fa-ellipsis-v dashboard-panel-icon\"></i>\n" +
    "            <span data-i18n=\"Data\">Network of tweeters for #snowden</span>\n" +
    "\n" +
    "        </strong>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-6\"> \n" +
    "            <div id=\"container\" ></div>\n" +
    "\n" +
    "            <div sigma-graph graph-data=\"api\" network-data=\"networks.networkData\" tweeter=\"networks.tweeter\" graph-container=\"container\"> </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 detail-panel\" >\n" +
    "             \n" +
    "            <p>Select a node to view tweeter details</p>\n" +
    "            <div ng-hide=\"networks.tweeter.hideProfile\" class=\"tweeter-profile profile-fadein\" >\n" +
    "                <div>\n" +
    "                <img src=\"{{ networks.tweeter.profilePic}}\" width=\"50px\" height=\"50px \"/> {{ networks.tweeter.handle }}\n" +
    "                </div>\n" +
    "                <div class=\"tweeter-stats\">\n" +
    "                <strong>Tweets: </strong>{{ networks.tweeter.tweets }} \n" +
    "                <strong>Followers: </strong>{{ networks.tweeter.followers }}\n" +
    "                <strong>Following: </strong>{{ networks.tweeter.following }}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "                \n" +
    "            \n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</section>\n" +
    "\n" +
    "");
}]);
