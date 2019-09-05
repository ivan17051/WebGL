(function () {
    var canvas = document.getElementById("glcanvas");
    var gl = glUtils.checkWebGL(canvas);

    //Bersihakan layar jadi hitam
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    //Bersihkan buffernya canvas
    gl.clear(gl.COLOR_BUFFER_BIT);
    
})();