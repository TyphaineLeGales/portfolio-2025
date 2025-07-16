#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse; // normalized [0–1]

// Convert mouse to centered coordinates
vec2 getMouseCenter() {
    vec2 m = u_mouse / u_resolution;
    m = m * 2.0 - 1.0;
    m.x *= u_resolution.x / u_resolution.y;
    return m;
}

float blob(vec2 uv, vec2 pos, float radius) {
    float d = length(uv - pos);
    return exp(-pow(d / radius, 2.0) * 5.0);
}

// Color palette
vec3 red     = vec3(253.0, 79.0, 2.0) / 255.0;
vec3 blue    = vec3(103.0, 125.0, 223.0) / 255.0;
vec3 yellow  = vec3(253.0, 223.0, 86.0) / 255.0;
vec3 green   = vec3(85.0, 148.0, 90.0) / 255.0;
vec3 pink    = vec3(255.0, 179.0, 244.0) / 255.0;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(1.0); // white background
    float time = u_time * 0.4;

    vec2 mouseCenter = getMouseCenter();

    vec2 positions[5];
    vec3 colors[5];

    positions[0] = 0.3 * vec2(sin(time), cos(time * 1.2));
    colors[0] = red;

    positions[1] = 0.3 * vec2(sin(time * 0.9 + 1.0), cos(time * 0.8 + 1.0));
    colors[1] = blue;

    positions[2] = 0.3 * vec2(sin(time * 1.1 + 2.0), cos(time * 1.3 + 2.0));
    colors[2] = yellow;

    positions[3] = 0.3 * vec2(cos(time * 0.7 + 3.0), sin(time * 0.6 + 3.0));
    colors[3] = pink;

    positions[4] = 0.3 * vec2(cos(time * 1.5 + 4.0), sin(time * 1.4 + 4.0));
    colors[4] = green;

    // Apply subtle mouse influence
    for (int i = 0; i < 5; i++) {
        // Offset each blob slightly away from or toward mouse
        vec2 direction = normalize(positions[i] - mouseCenter);
        float distance = length(positions[i] - mouseCenter);
        float influence = 0.25 / (distance + 0.3); // prevent division by 0
        positions[i] += direction * influence * 0.2;
    }

    // Render blobs
    for (int i = 0; i < 5; i++) {
        float b = blob(uv, positions[i], 0.55);
        color = mix(color, colors[i], b);
    }

    gl_FragColor = vec4(color, 1.0);
}