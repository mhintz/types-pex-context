declare module 'pex-context';

declare namespace pex {

  export interface Context {
    // GL enums
    BlendFactor: typeof BlendFactor;
    CubemapFace: typeof CubemapFace;
    DepthFunc: typeof DepthFunc;
    DataType: typeof DataType;
    Face: typeof Face;
    Filter: typeof Filter;
    PixelFormat: typeof PixelFormat;
    Encoding: typeof Encoding;
    Primitive: typeof Primitive;
    Usage: typeof Usage;
    Wrap: typeof Wrap;
    QueryTarget: typeof QueryTarget;
    QueryState: typeof QueryState;

    // stored properties
    gl: WebGLRenderingContext;
    debugMode: boolean;
    capabilities: {
      instancing: boolean,
      maxColorAttachments: number,
    };
    debugCommands: Array<Command>;
    resources: Array<Resource>;
    queries: Array<Query>;
    stack: Array<State>;
    defaultState: State;
    state: State;

    // API functions
    getGLString(glEnum: number): string;
    debug(enabled: boolean): void;
    checkError(): void;
    texture2D(opts: {}): Texture;
    textureCube(opts: {}): Texture;
    framebuffer(opts: {}): Framebuffer;
    vertexBuffer(opts: { data: Float32Array, usage?: Usage } | Float32Array): Buffer;
    indexBuffer(opts: { data: Uint16Array | Uint32Array, usage?: Usage } | Uint16Array | Uint32Array): Buffer;
    program(opts: { vert: string, frag: string }): Program;
    pipeline(opts: {}): Pipeline;
    pass(opts: {}): Pass;
    query(opts: {}): Query;
    beginQuery(q: Query): void;
    endQuery(q: Query): void;
    readPixels(opts: { x: number, y: number, width: number, height: number }): Uint8Array;
    frame(fn: () => void): void;
    submit(cmd: Command, batches?: Array<Command> | Command, subCommand?: () => void): void;
  }

  export interface Command {
    name?: string;
    pass?: Pass;
    pipeline?: Pipeline;
    uniforms?: Object;
    attributes?: Object;
    indices?: Object;
    count?: number;
    instances?: number;
    viewport?: Array<number>;
    scissor?: Array<number>;
  }

  export interface State {
    pass: Pass;
    pipeline: Pipeline;
    viewport: Array<number>;
    scissor: Array<number> | null;
    count: number;
  }

  export interface Framebuffer {}

  export interface Attribute {
    name: string;
    type: ShaderDataType.FLOAT | ShaderDataType.FLOAT_VEC2 | ShaderDataType.FLOAT_VEC3 | ShaderDataType.FLOAT_VEC4 | ShaderDataType.FLOAT_MAT4;
    size: number;
    location: number;
  }

  export interface Uniform {
    name: string;
    type: ShaderDataType;
    size: number;
    location: number;
  }

  export interface Program {
    class: 'program';
    handle: WebGLProgram;
    uniforms: { [key: string]: Uniform }
    attributes: { [key: string]: Attribute };
    attributesPerLocation: { [key: number]: Attribute };
    setUniform(name: string, value: number | Array<number>): void;
  }

  export interface Buffer {
    class: 'vertexBuffer' | 'indexBuffer';
    handle: WebGLBuffer;
    target: BufferTarget;
    usage: Usage;
  }

  export interface Texture {}

  export interface Pipeline {}

  export interface Pass {}

  export interface Query {}

  type Resource = Framebuffer | Program | Buffer | Texture | Pipeline | Pass | Query;

  export enum BlendFactor {
    One = 1,
    Zero = 0,
    SrcAlpha = 770,
    OneMinusSrcAlpha = 771,
    SrcColor = 768,
    OneMinusSrcColor = 769,
    DstAlpha = 772,
    DstColor = 774,
    OneMinusDstAlpha = 773,
    OneMinusDstColor = 775,
  }

  export enum CubemapFace {
    NegativeX = 34070,
    NegativeY = 34072,
    NegativeZ = 34074,
    PositiveX = 34069,
    PositiveY = 34071,
    PositiveZ = 34073,
  }

  export enum DepthFunc {
    Always = 519,
    Equal = 514,
    Greater = 516,
    GreaterEqual = 518,
    Less = 513,
    LessEqual = 515,
    Never = 512,
    NotEqual = 517,
  }

  export enum DataType {
    Float32 = 5126,
    Uint8 = 5121,
    Uint16 = 5123,
    Uint32 = 5125,
  }

  export enum ShaderDataType {
    INT = 5124,
    BOOL = 35670,
    FLOAT = 5126,
    FLOAT_VEC2 = 35664,
    FLOAT_VEC3 = 35665,
    FLOAT_VEC4 = 35666,
    FLOAT_MAT2 = 35674,
    FLOAT_MAT3 = 35675,
    FLOAT_MAT4 = 35676,
    SAMPLER_2D = 35678,
    SAMPLER_CUBE = 35680,
  }

  export enum Face {
    Back = 1029,
    Front = 1028,
    FrontAndBack = 1032,
  }

  export enum Filter {
    Linear = 9729,
    LinearMipmapLinear = 9987,
    LinearMipmapNearest = 9985,
    Nearest = 9728,
    NearestMipmapLinear = 9986,
    NearestMipmapNearest = 9984,
  }

  export enum PixelFormat {
    RGBA8 = 'rgba8', // gl.RGBA + gl.UNSIGNED_BYTE
    RGBA32F = 'rgba32f', // gl.RGBA + gl.FLOAT
    RGBA16F = 'rgba16f', // gl.RGBA + gl.HALF_FLOAT
    R32F = 'r32f', // gl.ALPHA + gl.FLOAT
    R16F = 'r16f', // gl.ALPHA + gl.HALF_FLOAT
    Depth = 'depth' // gl.DEPTH_COMPONENT
  }

  export enum Encoding {
    Linear = 1,
    Gamma = 2,
    SRGB = 3,
    RGBM = 4
  }

  export enum Primitive {
    LineStrip = 3,
    Lines = 1,
    Points = 0,
    TriangleStrip = 5,
    Triangles = 4,
  }

  export enum Usage {
    DynamicDraw = 35048,
    StaticDraw = 35044,
    StreamDraw = 35040,
  }

  export enum Wrap {
    ClampToEdge = 33071,
    Repeat = 10497,
  }

  export enum QueryTarget {
    TimeElapsed = 35007
  }

  export enum QueryState {
    Ready = 'ready',
    Active = 'active',
    Pending = 'pending'
  }

  export enum BufferTarget {
    ARRAY_BUFFER = 34962,
    ELEMENT_ARRAY_BUFFER = 34963,
  }

}

declare function pex(opts: {} | HTMLCanvasElement): pex.Context;

export = pex;
