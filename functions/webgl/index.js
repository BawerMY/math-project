var canvas = document.getElementById('canvas')
var gl = canvas.getContext('experimental-webgl')

var verticles = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5, ]

vertex_buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
gl.bindBuffer(gl.ARRAY_BUFFER, null);