import { Texture as ThreeTexture } from 'three';
import { GLTF, TextureInfo as GLTFTextureInfo } from '../../three-components/gltf-instance/gltf-2.0.js';
import { TextureInfo as TextureInfoInterface } from './api.js';
import { Texture } from './texture.js';
import { ThreeDOMElement } from './three-dom-element.js';
declare const $texture: unique symbol;
/**
 * TextureInfo facade implementation for Three.js materials
 */
export declare class TextureInfo extends ThreeDOMElement implements TextureInfoInterface {
    private [$texture];
    constructor(onUpdate: () => void, gltf: GLTF, textureInfo: GLTFTextureInfo, correlatedTextures: Set<ThreeTexture>);
    get texture(): Texture;
}
export {};
