#ifdef GL_ES
precision highp float;
#endif

const float RADIUS = 0.05;
const float BRIGTHNESS = 1.6;

uniform vec2 u_resolution;
uniform vec2 u_blob[10];

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.x;
  float sum = 0.0;

  for (int i = 0; i < 10; i++) {
    vec2 uv_blob = u_blob[i].xy / u_resolution.x;
    vec2 diff = st.xy - uv_blob.xy;
    float d = length(diff);
    sum += pow(RADIUS / d, BRIGTHNESS);
  }

  vec3 color = vec3(sum, sum / 2.0, sum / 1.5);

  gl_FragColor = vec4(color, 1.0);
}