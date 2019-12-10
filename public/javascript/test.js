test = [];
test.database = {};

const loadAssets = function() {
  $.getJSON("/test/", function(data) {
    test.database = data;
    console.log(data);
    test.init();
  });
};
test.init = function() {
  test.update();
  test.new();
  test.delete();
  test.generateMarkup();
};
test.new = function() {
  $(".new").on("click", function() {
    // console.log(id._id);
    $("#addtest").show();
    window.location = "/home";
  });
};
test.update = function() {
  $(".update").on("click", function() {
    // console.log($((this)))/)
    var number = $(this).data("id");
    // console.log(number)
    $("#addU").show();
    $("#addU").submit(function(e) {
      e.preventDefault();
      $.post({
        url: "/test/" + number,
        type: "PUT",
        data: {
          studentId: $("#add1").val(),
          studentName: $("#add2").val(),
          emailId: $("#add3").val(),
          class: $("#add4").val(),
          enrollment: $("#add5").val(),
          city: $("#add4").val(),
          country: $("#add5").val()
        }
      });
      window.location = "/home";
    });
  });
};

test.delete = function() {
  $(".delete").on("click", function() {
    // console.log(id._id)
    var number = $(this).data("id");

    url = "/test/" + number;
    $.post({
      url: url,
      method: "DELETE"
    });
    window.location = "/home";
  });
};

test.generateMarkup = function() {
  var template = "";
  template += '<table class="table">';
  template += '<thead class="thead-dark">';
  template += "<tr>";
  template += '<th scope="col">ID</th>';
  template += '<th scope="col">Name</th>';
  template += '<th scope="col">E-mail</th>';
  template += '<th scope="col">Class</th>';
  template += '<th scope="col">Year</th>';
  template += '<th scope="col">City</th>';
  template += '<th scope="col">Country</th>';
  template += "</tr>";
  template += " </thead>";

  $.each(test.database, function(index) {
    db = test.database;
    id = db[index];
    // console.log(id._id);
    template += "";
    template += "<tbody>";
    template += "<tr>";
    template += "<td>" + id.studentId + "</td>";
    template += "<td>" + id.studentName + "</td>";
    template += "<td>" + id.emailId + "</td>";
    template += "<td>" + id.class + "</td>";
    template += "<td>" + id.enrollment + "</td>";
    template += "<td>" + id.city + "</td>";
    template += "<td>" + id.country + "</td>";
    // template += '<td><button data-id=' + id._id + ' class="update btn btn-primary" > Update</button></td>'
    // template += '<td><button data-id=' + id._id + ' class="delete btn btn-primary">Delete</button></td>'
    template += "</tr>";
    template += "</tbody>";
  });
  $(".content").append(template);
  test.delete();
  test.new();
  test.update();
};
loadAssets();
