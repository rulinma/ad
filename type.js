var fnName = function(){
    console.log('type', id, width, height, type);

    // 当前位置输出js文件，并iframe导入内容
    // 根据id获取对应内容type，内容然后呈现
    // document 输出script

    // content
    // {model: "text image video"}
    document.write(" 获取到参数： { type:"+ type + " id:" +  id + " width: " + width + " height: " + height + " }"  );

    // iframe 显示image
    // img = "";
    // document.write("<iframe width="+ width + " height=" + height +" src=''>");
    // document.write("</iframe>");
}();