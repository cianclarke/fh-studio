client.studio = client.studio || {};
client.studio.dock = {
  el: null,
  tab: null,
  items: { },

  socket: null,

  init: function() {
    var me = this;
    //create the socket connection to the server
    this.socket = io.connect('http://localhost:3000');

    this.socket.on("update", function(data) {
      me.items[data.cacheKey].update(data);
    });

    this.el = $("#dock");
    this.tab = this.el.find(".tab");
  },

  add: function(name) {
    var me = this;

    return {
      el: $('<div class="item btn-group dropup">' +
              '<button class="btn">' + name + '</button>' + 
              '<button class="btn dropdown-toggle" data-toggle="dropdown">' +
                '<span class="caret"></span>' +
              '</button>' +
              '<ul class="dropdown-menu">' +
              '</ul>' +
          '</div>').appendTo(this.el),
      status: "idle",
      update: function(data) {
        console.log(data);

        this.status = data.status || "error";
        if(this.status === "complete" || this.status === "error") {
          this.el.addClass("btn-" + this.status);
        }

        this.el.attr("data-log", data.log.pop() || "");
      },
      poll: function(cacheKey) {
        me.items[cacheKey] = this;

        me.socket.emit("poll", {
          cacheKey: cacheKey
        });
      }
    };
  },

  remove: function(cacheKey) {
    var item = this.items[cacheKey];

    item.remove();
  },

  collapse: function() {
    this.el.addClass("animate");
    this.el.removeClass("expanded");
  },

  expand: function() {
    this.el.addClass("animate");
    this.el.addClass("expanded");
  }
};
$(function() {
  client.studio.dock.init();
});