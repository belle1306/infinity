export declare type RGB = [number, number, number];
export declare type RGBA = [number, number, number, number];
export declare type Quaternion = [number, number, number, number];
export declare type Vector3 = [number, number, number];
export declare type Matrix4 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export declare type Extras = unknown;
export declare type ExtensionDictionary = {
    [index: string]: unknown;
};
export declare type VariantMapping = {
    material: number;
    variants: Array<number>;
};
export declare type VariantMappings = Array<VariantMapping>;
export declare type Variants = Array<{
    name: string;
}>;
export interface PerspectiveCameraIntrinsics {
    aspectRatio?: number;
    yfov: number;
    zfar: number;
    znear: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface OrthographicCameraIntrinsics {
    xmag: number;
    ymag: number;
    zfar: number;
    znear: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type CameraType = 'perspective' | 'orthographic';
export interface PerspectiveCamera {
    name?: string;
    type: 'perspective';
    perspective?: PerspectiveCameraIntrinsics;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface OrthographicCamera {
    name?: string;
    type: 'orthographic';
    orthographic?: OrthographicCamera;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type Camera = PerspectiveCamera | OrthographicCamera;
export declare type NearestFilter = 9728;
export declare type LinearFilter = 9729;
export declare type NearestMipmapNearestFilter = 9984;
export declare type LinearMipmapNearestFilter = 9985;
export declare type NearestMipmapLinearFilter = 9986;
export declare type LinearMipmapLinearFilter = 9987;
export declare type MagFilter = NearestFilter | LinearFilter;
export declare type MinFilter = NearestFilter | LinearFilter | NearestMipmapNearestFilter | LinearMipmapNearestFilter | NearestMipmapLinearFilter | LinearMipmapLinearFilter;
export declare type ClampToEdgeWrap = 33071;
export declare type MirroredRepeatWrap = 33648;
export declare type RepeatWrap = 10497;
export declare type WrapMode = RepeatWrap | ClampToEdgeWrap | MirroredRepeatWrap;
export interface Sampler {
    name?: string;
    magFilter?: MagFilter;
    minFilter?: MinFilter;
    wrapS?: WrapMode;
    wrapT?: WrapMode;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface Texture {
    name?: string;
    sampler?: number;
    source?: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface TextureInfo {
    index: number;
    texCoord?: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface OcclusionTextureInfo extends TextureInfo {
    strength?: number;
}
export interface NormalTextureInfo extends TextureInfo {
    scale?: number;
}
export interface PBRMetallicRoughness {
    baseColorFactor?: RGBA;
    baseColorTexture?: TextureInfo;
    metallicRoughnessTexture?: TextureInfo;
    metallicFactor?: number;
    roughnessFactor?: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type AlphaMode = 'OPAQUE' | 'MASK' | 'BLEND';
export interface Material {
    name?: string;
    doubleSided?: boolean;
    alphaMode?: AlphaMode;
    alphaCutoff?: number;
    emissiveFactor?: RGB;
    pbrMetallicRoughness?: PBRMetallicRoughness;
    normalTexture?: NormalTextureInfo;
    occlusionTexture?: OcclusionTextureInfo;
    emissiveTexture?: TextureInfo;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type AttributeDictionary = {
    [index: string]: number;
};
export interface Primitive {
    attributes: AttributeDictionary;
    indices?: number;
    material?: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface Mesh {
    name?: string;
    primitives: Primitive[];
    weights: number[];
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface Node {
    name?: string;
    mesh?: number;
    matrix?: Matrix4;
    rotation?: Quaternion;
    scale?: Vector3;
    translation?: Vector3;
    weights?: number[];
    children?: number[];
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface ExternalImage {
    name?: string;
    uri: string;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface EmbeddedImage {
    name?: string;
    bufferView: number;
    mimeType: string;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type Image = ExternalImage | EmbeddedImage;
export interface Scene {
    name?: string;
    nodes: number[];
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type AccessorType = 'SCALAR' | 'VEC2' | 'VEC3' | 'VEC4' | 'MAT2' | 'MAT3' | 'MAT4';
export interface Accessor {
    name?: string;
    bufferView?: number;
    byteOffset?: number;
    componentType: number;
    normalized?: boolean;
    count: number;
    type: AccessorType;
    max?: number;
    min?: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
    sparse?: unknown;
}
export declare type ChannelTargetPath = 'rotation' | 'scale' | 'translation' | 'weights';
export interface ChannelTarget {
    node: number;
    path: ChannelTargetPath;
}
export interface Channel {
    sampler: number;
    target: ChannelTarget;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type AnimationInterpolation = 'LINEAR' | 'STEP' | 'CUBICSPLINE';
export interface AnimationSampler {
    input: number;
    interpolation: AnimationInterpolation;
    output: number;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface Animation {
    name?: string;
    channels: Channel[];
    samplers: AnimationSampler[];
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export declare type GLTFElement = Scene | Node | Mesh | Material | Image | Texture | TextureInfo | Sampler | PBRMetallicRoughness | Accessor | Camera | Animation | AnimationSampler;
export interface GLTFElementMap {
    'scene': Scene;
    'node': Node;
    'mesh': Mesh;
    'material': Material;
    'image': Image;
    'texture': Texture;
    'texture-info': TextureInfo;
    'sampler': Sampler;
    'accessor': Accessor;
    'camera': Camera;
    'animation': Animation;
    'animation-sampler': AnimationSampler;
}
export interface Asset {
    version: '2.0';
    copyright?: string;
    generator?: string;
    minVersion?: string;
    extensions?: ExtensionDictionary;
    extras?: Extras;
}
export interface GLTF {
    asset: Asset;
    scene?: number;
    scenes?: Scene[];
    nodes?: Node[];
    materials?: Material[];
    accessors?: Accessor[];
    samplers?: Sampler[];
    images?: Image[];
    textures?: Texture[];
    meshes?: Mesh[];
    cameras?: Camera[];
    animations?: Animation[];
}
