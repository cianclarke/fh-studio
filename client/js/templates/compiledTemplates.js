(function(){dust.register("app",body_0);function body_0(chk,ctx){return chk.write("<div class=\"topbar\"><div class=\"topbar-inner\">").partial("navigation",ctx).write("</div></div><!-- This is the tab bar along the side -->").partial("apputilbar",ctx).write("<div class=\"content app  ").reference(ctx.get("tab"),ctx,"h").write("\" style=\"min-height:900px;\">").reference(ctx.get("tabLayoutHelper"),ctx,"h").partial("footer",ctx).write("</div>");}return body_0;})();(function(){dust.register("apps",body_0);function body_0(chk,ctx){return chk.write("<div class=\"topbar\"><div class=\"topbar-inner\">").partial("navigation",ctx).write("</div></div><div class=\"content apps fullWidth\">").reference(ctx.get("tabHelper"),ctx,"h").write("<h2>My Apps</h2><table class=\"apps\"><colgroup><col class=\"icon\"><col class=\"title\"><col class=\"desc\"><col class=\"modified\"><col class=\"version\"></colgroup><thead><tr><th class=\"header\"></th><th class=\"header headerSortDown\">Name</th><th class=\"header\">Description</th><th class=\"header\">Modified</th><th class=\"header\">Version</th></tr></thead><tbody>").reference(ctx.get("data"),ctx,"h").section(ctx.get("apps"),ctx,{"block":body_1},null).write("</tbody></table><footer><p>© Feedhenry 2011 | <span class=\"label success\"><a href=\"http://www.feedhenrystatus.com\">Service Status: OK</a></span> </p></footer></div>");}function body_1(chk,ctx){return chk.write("<tr><td><img src=\"https://").reference(ctx.get("domain"),ctx,"h").write(".feedhenry.com/static/i/").reference(ctx.get("domain"),ctx,"h").write("/").reference(ctx.get("id"),ctx,"h").write("/studio/46/small.png\"></td><td><a class=\"singlepage\" href=\"/app/").reference(ctx.get("id"),ctx,"h").write("\">").reference(ctx.get("title"),ctx,"h").write("</a></td><td>").reference(ctx.get("title"),ctx,"h").write("</td><td>").reference(ctx.get("description"),ctx,"h").write("</td><td>").reference(ctx.get("modified"),ctx,"h").write("</td><td>").reference(ctx.get("version"),ctx,"h").write("</td></tr>");}return body_0;})();(function(){dust.register("apputilbar",body_0);function body_0(chk,ctx){return chk.write("<div class=\"appBar pull-left\"> <!-- Gets topbar-inner as this makes it black like bootstrap nav --><ul><li id=\"dashboardLink\"><a class=\"singlepage\"  href=\"/app/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("\"><span>App Dashboard</span></a></li><li id=\"editorLink\"><a class=\"singlepage\" href=\"/app/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/editor\"><span>Editor</span></a></li><li id=\"previewLink\"><a class=\"singlepage\"  href=\"/app/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/preview\"><span>Preview</span></a></li><li id=\"buildLink\" ><a class=\"singlepage\"  href=\"/app/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/build\"><span>Build</span></a></li><li id=\"debugLink\" ><a class=\"singlepage\"  href=\"/app/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/debug\"><span>Debug</span></a></li><li id=\"prefsLink\" ><a class=\"singlepage\"  href=\"/app/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/prefs\"><span>Preferences</span></a></li></ul></div>").reference(ctx.get("filesTreeHelper"),ctx,"h");}return body_0;})();(function(){dust.register("build",body_0);function body_0(chk,ctx){return chk.write("<h1> Build</h1><div class=\"row buildRow\"><div class=\"span6\"><h3>iPad</h3><img src=\"/images/build/iPad.png\" /><p><a class=\"btn primary\" href=\"#\">iOS 5.0</a></p><p><a class=\"btn\" href=\"#\">iOS 4.0</a></p></div><div class=\"span5\"><h3>iPhone</h3><img src=\"/images/build/iPhone.png\" /><p><a class=\"btn primary\" href=\"#\">iOS 5.0</a></p><p><a class=\"btn\" href=\"#\">iOS 4.0</a></p><p><a class=\"btn\" href=\"#\">iOS 3.2</a></p></div><div class=\"span5\"><h3>Android</h3><img src=\"/images/build/android.png\" /><p><a class=\"btn primary\" href=\"#\">Android 4.0</a></p><p><a class=\"btn\" href=\"#\">Android 3.0</a></p><p><a class=\"btn\" href=\"#\">Android 2.3</a></p><p><a class=\"btn\" href=\"#\">Android 2.2</a></p><p><a class=\"btn\" href=\"#\">Android 2.1</a></p></div></div><div class=\"row buildRow\"><div class=\"span6\"><h3>Blackberry</h3><p><a class=\"btn primary\" href=\"#\">RIM 6.0</a></p></div><div class=\"span5\"><h3>Windows Phone 7</h3><p><a class=\"btn primary\" href=\"#\">WP 7.0</a></p></div><div class=\"span5\"><h3>Noia WRT</h3></div></div>");}return body_0;})();(function(){dust.register("dashboard",body_0);function body_0(chk,ctx){return chk.write("<section class=\"preview dashboardPreview pull-right\"><h2>Preview</h2><div class=\"previewContainer iPhone\" style=\" width: 640px; -webkit-transform: scale(0.4); -webkit-transform-origin: 0 0;\"><iframe src=\"http://").reference(ctx.get("domain"),ctx,"h").write(".feedhenry.com/box/srv/1.1/wid/").reference(ctx.get("domain"),ctx,"h").write("/studio/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/container\" frameborder=\"0\"></iframe></div></section><section class=\"summary\"><h2>").reference(ctx.getPath(false,["data","inst","title"]),ctx,"h").write("</h2><br /><p>").reference(ctx.getPath(false,["data","inst","description"]),ctx,"h").write("</p><h3>More Info</h3><strong>w3cid:</strong> ").reference(ctx.getPath(false,["data","app","w3cid"]),ctx,"h").write("<br /><strong>guid:</strong> ").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("<br /><strong>height:</strong>").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("<br /><strong>width:</strong> ").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("<br /></section>");}return body_0;})();(function(){dust.register("debug",body_0);function body_0(chk,ctx){return chk.write("<h1>Debug</h1>");}return body_0;})();(function(){dust.register("editor",body_0);function body_0(chk,ctx){return chk.write("<div class=\"topbar\" id=\"editorToolbar\" style=\"position: relative;\"><div class=\"topbar-inner\"><div class=\"container-fluid\"><ul class=\"nav\"><li class=\"dropdown\" data-dropdown=\"dropdown\"><a class=\"dropdown-toggle no-ajax\" href=\"#\">File</a><ul class=\"dropdown-menu\"><li><a class=\"no-ajax save\"  href=\"#\">Save</a></li><li><a class=\"no-ajax save\"  href=\"#\" >Save All</a></li><li><a href=\"#\">Open Recent</a></li></ul></li><li class=\"button\"><a>Edit</a></li><li class=\"button\"><a>Find</a></li><li class=\"button\"><a class=\"no-ajax save\" href=\"#\" >Save</a></li><li class=\"button\"><a class=\"no-ajax save\" href=\"#\" >Save All</a></li><li class=\"button\"><a class=\"no-ajax save\" href=\"#\" >Save & Close</a></li><li class=\"button\"><a>Find</a></li><li class=\"dropdown\" data-dropdown=\"dropdown\"><a class=\"dropdown-toggle no-ajax\" href=\"#\">$fh...</a><ul class=\"dropdown-menu\"><li><h3>Client</h3></li><li><a href=\"#\" id=\"1015103\" class=\"snippet\" >$fh.act</a></li><li><a href=\"#\" id=\"1015259\" class=\"snippet\"  >$fh.web</a></li><li><a href=\"#\" id=\"1099663\" class=\"snippet\" >$fh.camera</a></li><li class=\"divider\"></li><li><h3>Cloud</h3></li><li><a id=\"1015259\" class=\"snippet\" href=\"#\">$fh.web</a></li><li><a id=\"1015127\" class=\"snippet\" href=\"#\">$fh.cache</a></li></ul></ul></div></div></div><!-- inject some file contents into the DOM on first rendering this page - these will be destroyed by the clientside JS --><input type=\"hidden\" id=\"appId\" value=\"").reference(ctx.get("appId"),ctx,"h").write("\"></input>").reference(ctx.get("fileContents"),ctx,"h").section(ctx.get("fileContents"),ctx,{"else":body_1,"block":body_2},null).write("<ul class=\"tabs editorTabs\"><li class=\"active\"><a class=\"no-ajax\" href=\"#tab0\">tab0</a></li></ul><div class=\"pill-content\"><div class=\"active tab\" id=\"tab0\" style=\"height: 100%; position: absolute;\"><pre id=\"editor0\">").section(ctx.get("fileContents"),ctx,{"block":body_3},null).write("</pre></div></div><script src=\"/js/lib/ace/ace-uncompressed.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script src=\"/js/lib/ace/theme-cobalt.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script src=\"/js/lib/ace/theme-chrome.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script src=\"/js/lib/ace/theme-textmate.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script src=\"/js/lib/ace/mode-javascript.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script src=\"/js/lib/ace/mode-html.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script src=\"/js/lib/ace/mode-css.js\" type=\"text/javascript\" charset=\"utf-8\"></script><script>$(function() {client.studio.editor.init();$('.editorTabs').tabs()});</script>");}function body_1(chk,ctx){return chk.write("<input type=\"hidden\" id=\"fileId\" value=\"\"></input>");}function body_2(chk,ctx){return chk.write("<input type=\"hidden\" id=\"fileId\" value=\"").reference(ctx.getPath(true,["fileId"]),ctx,"h").write("\"></input>");}function body_3(chk,ctx){return chk.reference(ctx.get("fileContents"),ctx,"h");}return body_0;})();(function(){dust.register("filestree",body_0);function body_0(chk,ctx){return chk.write("<input type=\"hidden\" value=\"").reference(ctx.get("filesTree"),ctx,"h").write("\" name=\"filestree\" /><div id=\"treeSearch\" class=\"pull-left\"><input type=\"search\" placeholder=\"Search...\"></input><ul class=\"tabs editorTabs\"><li class=\"active\"><a class=\"no-ajax\" href=\"#navigator\">Navigator</a></li><li class=\"\"><a href=\"#snippets\" class=\"no-ajax\">Snippets</a></li></ul></div><div class=\"pill-content\"><div class=\"active\" id=\"navigator\"><div id=\"treeContainer\" class=\"pull-left\"></div></div><div id=\"snippets\">Some code snippets</div></div>");}return body_0;})();(function(){dust.register("footer",body_0);function body_0(chk,ctx){return chk.write("<footer><p>&copy; Feedhenry 2011 | <span class=\"label success\"><a href=\"http://www.feedhenrystatus.com\">Service Status: OK</a></span> </p></footer>");}return body_0;})();(function(){dust.register("home",body_0);function body_0(chk,ctx){return chk.write("<div class=\"topbar\"><div class=\"topbar-inner\">").partial("navigation",ctx).write("</div></div><div id=\"container dashboard\" class=\"container\"><!-- Main hero unit for a primary marketing message or call to action --><ul class=\"tabs toptabs\" data-tabs=\"tabs\"><li class=\"active\"><a href=\"#welcome\" class=\"no-ajax\">Welcome</a></li><li><a id=\"studioLink\" href=\"#studio\" class=\"no-ajax\">App Studio</a></li><li><a id=\"installingLink\" href=\"#installing\" class=\"no-ajax\">Installing FHC</a></li><li><a href=\"#staging\" class=\"no-ajax\">Staging to Cloud Foundry</a></li></ul><div class=\"hero-unit tab-content pill-content\"><div id=\"welcome\" class=\"row active\"><div class=\"span7\"><h2>Build apps powered by Cloud Foundry</h2><p>Build powerful cloud powered apps with Feedhenry. Write in HTML5 and JavaScript. Deploy to your Cloud Foundry, and have a cloud scalable app on 5 platformsinstantly!</p><br /><p><a href=\"#installing\" class=\"btn primary large no-ajax\" onclick=\"switchTab('installing')\">Get started by Installing FHC &raquo;</a></p></div><div class=\"span7 video\"><iframe class=\"vimeo\" src=\"http://player.vimeo.com/video/34086215\" width=\"400\" height=\"225\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div><div id=\"installing\" class=\"row\"><div class=\"span7\"><h2>Installing FHC</h2><p>The FHC command line utility gives access to the entire FeedHenry suite through your command line. It's a NodeJS utility which allows you to quickly get started staging your apps to Cloud Foundry.</p><pre class=\"code\">$ sudo npm install -g fh-fhc$ fhc -v$ fhc target mobilecf.feedhenry.com$ fhc login demo@example.com password$ fhc apps╔═════════════════╤═══════════╤═══════════════════╗║  ID             │ Title     │Description        ║╠═════════════════╪═══════════╪═══════════════════╣║  dttK1K42_y...  │ First App │Simple store finder║╚═════════════════╧═══════════╧═══════════════════╝</pre></div><div class=\"span7 video\"><!--<iframe class=\"vimeo\" src=\"http://player.vimeo.com/video/33966777?title=0&amp;byline=0&amp;portrait=0\" width=\"400\" height=\"225\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>--></div></div><div id=\"staging\" class=\"row\"><div class=\"span7\"><h2>Staging your first app to Cloud Foundry</h2><p>Learn how to stage an app you've created to public Cloud Foundry.We start with in app in GitHub, add it to the FeedHenry platform then stage it's server side to Cloud Foundry.</p></div><div class=\"span7 video\"><iframe class=\"vimeo\" src=\"http://player.vimeo.com/video/34086439?title=0&amp;byline=0&amp;portrait=0\" width=\"400\" height=\"225\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div><div id=\"studio\" class=\"row\"><div class=\"span7\"><h2>App Studio</h2><p>Learn about the FeedHenry App Studio.This powerful web-based tool allows you to build and manage your app portfolio.</p><br /><p><a href=\"login.html\" class=\"btn primary large no-ajax\">Get Started Now! &raquo;</a></p></div><div class=\"span7 video\"><!--<iframe class=\"vimeo\" src=\"http://player.vimeo.com/video/34513716?title=0&amp;byline=0&amp;portrait=0\" width=\"400\" height=\"225\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>--></div></div></div><!-- Example row of columns --><div class=\"row docs\"><div class=\"span6\"><h2>FHC Documentation</h2><p>Have a read of our documentation, where you can learn more about what Feedhenry is, and how to use our powerful cloud and client API's to build powerful mobile apps.</p><p><a class=\"btn\" href=\"http://docs.feedhenry.com/fhc\">See the docs &raquo;</a></p></div><div class=\"span5\"><h2>Tutorials</h2><p>Learn how to utilize the cloud to hash then cache data from multiple sources in the cloud. Localize an app, cloud powered language assets make corrections and updates a breeze.</p><p><a class=\"btn\" href=\"http://docs.feedhenry.com/tutorials\">View our tutorials &raquo;</a></p></div><div class=\"span5\"><h2>API Docs</h2><p>Read about the $fh APIs that exist to make calls to the FeedHenry cloud, or access on-device functionality not normally available to HTML5 apps.</p><p><a class=\"btn\" href=\"http://docs.feedhenry.com/api\">Read the API Docs &raquo;</a></p></div></div></div>");}return body_0;})();(function(){dust.register("login",body_0);function body_0(chk,ctx){return chk.write("<div class=\"content login\"><div class=\"row\"><div class=\"span4\">&nbsp;</div><div class=\"span8\"><div id=\"logo\"><img src=\"/images/logo.png\" /></div><br /><br /><div class=\"hero-unit tab-content pill-content\"><div id=\"login\" class=\"row active\"><div class=\"span7\"><p>Enter your username and password to login</p><form action=\"/login\" method=\"post\"><fieldset><input class=\"span6\" placeholder=\"email\" name=\"username\" id=\"login_email\" type=\"text\"><br /><br /><input class=\"span6\" placeholder=\"password\" name=\"password\" id=\"login_password\" type=\"password\"><br /><br /></fieldset><p><button class=\"btn primary large\" type=\"submit\">Login</button>&nbsp;<a id=\"forgot\" href=\"forgot.html\" class=\"large\">Forgot...</a></p></form></div></div> <!-- /login --><div id=\"loginCloud\">&nbsp;</div></div><!-- /hero-unit --></div> <!-- /span8 --><div class=\"span4\">&nbsp;</div></div></div>");}return body_0;})();(function(){dust.register("navigation",body_0);function body_0(chk,ctx){return chk.write("<script src=\"/js/lib/bootstrap/bootstrap-tabs.js\"></script><script type=\"text/javascript\">$('.tabs').tabs();function switchTab(id){$(\"#\" + id + \"Link\").click();}</script><div class=\"container-fluid\"><img class=\"logo\" src=\"/images/logo-small.png\" alt=\"Feedhenry Logo\"><ul class=\"nav studioNav\"><li class=\"dropdown\" data-dropdown=\"dropdown\"><a class=\"brand dropdown-toggle no-ajax\" href=\"#\">studio</a><ul class=\"dropdown-menu\"><li><a class=\"brand singlepage\" href=\"/\">Dashboard</a></li><li><a class=\"brand singlepage\" href=\"/apps\">App Studio</a></li><li><a class=\"brand\" href=\"/reporting\">Reporting</a></li><li><a class=\"brand\" href=\"/admin\">Admin</a></li></ul></li><li class=\"active\"><a class=\"singlepage\" href=\"/home\">Home</a></li><li><a class=\"singlepage\" href=\"/apps\">Apps</a></li><li><a href=\"/apps\">Reporting</a></li><li><a href=\"/apps\">Admin</a></li><li><a href=\"/apps\">Docs</a></li></ul>").section(ctx.get("user"),ctx,{"else":body_1,"block":body_2},null).write("</div>");}function body_1(chk,ctx){return chk.write("<form action=\"/login\" method=\"post\" class=\"pull-right\"><input name=\"username\" class=\"input-small\" type=\"text\" placeholder=\"Username\"><input name=\"password\" class=\"input-small\" type=\"password\" placeholder=\"Password\"><button class=\"btn\" type=\"submit\">Sign in</button></form>");}function body_2(chk,ctx){return chk.write("<p class=\"pull-right\"><a href=\"#\">").reference(ctx.getPath(true,["username"]),ctx,"h").write(" (").reference(ctx.getPath(true,["role"]),ctx,"h").write(")</a> |<a href=\"#\">Help</a> |<a href=\"#\">Preferences</a> |<a href=\"/logout\">Log Out</a></p>");}return body_0;})();(function(){dust.register("prefs",body_0);function body_0(chk,ctx){return chk.write("<h1>Prefs</h1>");}return body_0;})();(function(){dust.register("preview",body_0);function body_0(chk,ctx){return chk.write("<h2 style=\"display: inline;\">Preview</h2><span class=\"\" style=\"margin-left: 100px;\"><a href=\"#\" onclick=\"client.studio.preview.change('iPad')\">iPad</a> |<a href=\"#\" onclick=\"client.studio.preview.change('iPhone')\">iPhone</a> |<a style=\"font-size: 2em;\" href=\"#\" onclick=\"client.studio.preview.rotate();\">&#8635;</a> |Scale: 25%<input type=\"range\" onchange=\"client.studio.preview.scale(this.value);\" min=\"25\" maxvalue=\"100\">100%<br /></span><div class=\"previewContainer iPhone\" id=\"previewContainer\" style=\"\"><iframe src=\"http://").reference(ctx.get("domain"),ctx,"h").write(".feedhenry.com/box/srv/1.1/wid/").reference(ctx.get("domain"),ctx,"h").write("/studio/").reference(ctx.getPath(false,["data","inst","guid"]),ctx,"h").write("/container\" frameborder=\"0\" style=\"\"></iframe></div>");}return body_0;})();