$(document).ready(function() {
  // 当文档加载完成后，加载过滤菜单
  $("#filter-menu").load("filter-menu.html");

  // 处理点击事件，切换过滤菜单的显示和隐藏
  $("#filter-toggle").on('click', function(event) {
    event.preventDefault();
    // 这里假设过滤菜单在加载完成后可见
    // 你可能需要根据实际情况做调整，比如检查是否已加载
    $("#filter-menu").toggle();
  });

  // 可以在这里或者filter-menu.html的script标签内添加更多交互逻辑
});