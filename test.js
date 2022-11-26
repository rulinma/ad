// getWeather({
//     "city": "bj",
//     "weather": "sunny",
//     "width": width,
//     "height": height,
//     "id": id
// });

var fnName = function(){
    console.log('this is a test', id, width, height);
    // 当前位置输出js文件，并iframe导入内容
    // 根据id获取对应内容type，内容然后呈现
    // document 输出script
    // content
    // {model: "text image video"}
    // document.write(id + " " + width + " " + height);

    // ajax 获取值并传递
    type = "text";

    document.write('<script src=http://localhost:5500/type.js>');
    document.write('</script>');
}();