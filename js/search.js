$(document).ready(function() {
  $('#searchBtn').click(function() {
    //alert('元素已被点击！');、
    // 清空表格当前内容
    $('#student-tbody').empty();
    
    $.ajax({
      url: 'http://192.168.0.6:3000/students',
      method: 'GET',
      success: function(data) {
        // 循环 students 数组并将数据添加到表格
        $.each(data, function(index, student) {
          $('#student-tbody').append(
            '<tr>' +
            '<td><input type="checkbox" name="studentCheckbox"></td>' +
            '<td>' + (index + 1) + '</td>' +
            '<td>' + student.id + '</td>' +
            '<td>' + student.name + '</td>' +
            '<td>' + student.gender + '</td>' +
            '<td>' + student.class + '</td>' +
            '<td>' + student.age + '</td>' +
            '<td style="text-align: left;">' + student.remarks + '</td>' +
            '</tr>'
          );
        });
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });
});