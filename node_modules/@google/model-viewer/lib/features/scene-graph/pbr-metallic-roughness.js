/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a, _b;
import { TextureInfo } from './texture-info.js';
import { $correlatedObjects, $onUpdate, $sourceObject, ThreeDOMElement } from './three-dom-element.js';
const $threeMaterials = Symbol('threeMaterials');
const $baseColorTexture = Symbol('baseColorTexture');
const $metallicRoughnessTexture = Symbol('metallicRoughnessTexture');
/**
 * PBR material properties facade implementation for Three.js materials
 */
export class PBRMetallicRoughness extends ThreeDOMElement {
    constructor(onUpdate, gltf, pbrMetallicRoughness, correlatedMaterials) {
        super(onUpdate, pbrMetallicRoughness, correlatedMaterials);
        this[_a] = null;
        this[_b] = null;
        // Assign glTF default values
        if (pbrMetallicRoughness.baseColorFactor == null) {
            pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1];
        }
        if (pbrMetallicRoughness.roughnessFactor == null) {
            pbrMetallicRoughness.roughnessFactor = 0;
        }
        if (pbrMetallicRoughness.metallicFactor == null) {
            pbrMetallicRoughness.metallicFactor = 0;
        }
        const { baseColorTexture, metallicRoughnessTexture } = pbrMetallicRoughness;
        const baseColorTextures = new Set();
        const metallicRoughnessTextures = new Set();
        for (const material of correlatedMaterials) {
            if (baseColorTexture != null && material.map != null) {
                baseColorTextures.add(material.map);
            }
            // NOTE: GLTFLoader users the same texture for metalnessMap and
            // roughnessMap in this case
            // @see https://github.com/mrdoob/three.js/blob/b4473c25816df4a09405c7d887d5c418ef47ee76/examples/js/loaders/GLTFLoader.js#L2173-L2174
            if (metallicRoughnessTexture != null && material.metalnessMap != null) {
                metallicRoughnessTextures.add(material.metalnessMap);
            }
        }
        if (baseColorTextures.size > 0) {
            this[$baseColorTexture] =
                new TextureInfo(onUpdate, gltf, baseColorTexture, baseColorTextures);
        }
        if (metallicRoughnessTextures.size > 0) {
            this[$metallicRoughnessTexture] = new TextureInfo(onUpdate, gltf, metallicRoughnessTexture, metallicRoughnessTextures);
        }
    }
    get [(_a = $baseColorTexture, _b = $metallicRoughnessTexture, $threeMaterials)]() {
        return this[$correlatedObjects];
    }
    get baseColorFactor() {
        return this[$sourceObject].baseColorFactor;
    }
    get metallicFactor() {
        return this[$sourceObject].metallicFactor;
    }
    get roughnessFactor() {
        return this[$sourceObject].roughnessFactor;
    }
    get baseColorTexture() {
        return this[$baseColorTexture];
    }
    get metallicRoughnessTexture() {
        return this[$metallicRoughnessTexture];
    }
    setBaseColorFactor(rgba) {
        for (const material of this[$threeMaterials]) {
            material.color.fromArray(rgba);
            material.opacity = (rgba)[3];
        }
        const pbrMetallicRoughness = this[$sourceObject];
        pbrMetallicRoughness.baseColorFactor = rgba;
        this[$onUpdate]();
    }
    setMetallicFactor(value) {
        for (const material of this[$threeMaterials]) {
            material.metalness = value;
        }
        const pbrMetallicRoughness = this[$sourceObject];
        pbrMetallicRoughness.metallicFactor = value;
        this[$onUpdate]();
    }
    setRoughnessFactor(value) {
        for (const material of this[$threeMaterials]) {
            material.roughness = value;
        }
        const pbrMetallicRoughness = this[$sourceObject];
        pbrMetallicRoughness.roughnessFactor = value;
        this[$onUpdate]();
    }
}
//# sourceMappingURL=pbr-metallic-roughness.js.map