declare module 'pex-context';

declare namespace pex {
  export interface Context {
    gl: WebGLRenderingContext;
    BlendFactor: BlendFactor;
    CubemapFace: CubemapFace;
    DepthFunc: DepthFunc;
    DataType: DataType;
    Face: Face;
    Filter: Filter;
    PixelFormat: PixelFormat;
    Encoding: Encoding;
    Primitive: Primitive;
    Usage: Usage;
    Wrap: Wrap;
    QueryTarget: QueryTarget;
    QueryState: QueryState;
    frame: (fn: () => void) => void;
  }

  export interface Framebuffer {}

  export interface Pass {}

  export interface Pipeline {}

  export interface Program {}

  export interface Buffer {}

  export interface Texture {}

  export interface Query {}

  enum BlendFactor {
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

  enum CubemapFace {
    NegativeX = 34070,
    NegativeY = 34072,
    NegativeZ = 34074,
    PositiveX = 34069,
    PositiveY = 34071,
    PositiveZ = 34073,
  }

  enum DepthFunc {
    Always = 519,
    Equal = 514,
    Greater = 516,
    GreaterEqual = 518,
    Less = 513,
    LessEqual = 515,
    Never = 512,
    NotEqual = 517,
  }

  enum DataType {
    Float32 = 5126,
    Uint8 = 5121,
    Uint16 = 5123,
    Uint32 = 5125,
  }

  enum Face {
    Back = 1029,
    Front = 1028,
    FrontAndBack = 1032,
  }

  enum Filter {
    Linear = 9729,
    LinearMipmapLinear = 9987,
    LinearMipmapNearest = 9985,
    Nearest = 9728,
    NearestMipmapLinear = 9986,
    NearestMipmapNearest = 9984,
  }

  enum PixelFormat {
    RGBA8 = 'rgba8', // gl.RGBA + gl.UNSIGNED_BYTE
    RGBA32F = 'rgba32f', // gl.RGBA + gl.FLOAT
    RGBA16F = 'rgba16f', // gl.RGBA + gl.HALF_FLOAT
    R32F = 'r32f', // gl.ALPHA + gl.FLOAT
    R16F = 'r16f', // gl.ALPHA + gl.HALF_FLOAT
    Depth = 'depth' // gl.DEPTH_COMPONENT
  }

  enum Encoding {
    Linear = 1,
    Gamma = 2,
    SRGB = 3,
    RGBM = 4
  }

  enum Primitive {
    LineStrip = 3,
    Lines = 1,
    Points = 0,
    TriangleStrip = 5,
    Triangles = 4,
  }

  enum Usage {
    DynamicDraw = 35048,
    StaticDraw = 35044,
    StreamDraw = 35040,
  }

  enum Wrap {
    ClampToEdge = 33071,
    Repeat = 10497,
  }

  enum QueryTarget {
    TimeElapsed = 35007
  }

  enum QueryState {
    Ready = 'ready',
    Active = 'active',
    Pending = 'pending'
  }
}

declare function pex(opts: {} | HTMLCanvasElement): pex.Context;

export = pex;
