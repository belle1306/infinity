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
var _a, _b, _c;
import { PBRMetallicRoughness } from './pbr-metallic-roughness.js';
import { TextureInfo } from './texture-info.js';
import { $correlatedObjects, $onUpdate, $sourceObject, ThreeDOMElement } from './three-dom-element.js';
const $pbrMetallicRoughness = Symbol('pbrMetallicRoughness');
const $normalTexture = Symbol('normalTexture');
const $occlusionTexture = Symbol('occlusionTexture');
const $emissiveTexture = Symbol('emissiveTexture');
/**
 * Material facade implementation for Three.js materials
 */
export class Material extends ThreeDOMElement {
    constructor(onUpdate, gltf, material, correlatedMaterials) {
        super(onUpdate, material, correlatedMaterials);
        this[_a] = null;
        this[_b] = null;
        this[_c] = null;
        if (correlatedMaterials == null) {
            return;
        }
        if (material.pbrMetallicRoughness == null) {
            material.pbrMetallicRoughness = {};
        }
        this[$pbrMetallicRoughness] = new PBRMetallicRoughness(onUpdate, gltf, material.pbrMetallicRoughness, correlatedMaterials);
        const { normalTexture, occlusionTexture, emissiveTexture } = material;
        const normalTextures = new Set();
        const occlusionTextures = new Set();
        const emissiveTextures = new Set();
        for (const material of correlatedMaterials) {
            const { normalMap, aoMap, emissiveMap } = material;
            if (normalTexture != null && normalMap != null) {
                normalTextures.add(normalMap);
            }
            if (occlusionTexture != null && aoMap != null) {
                occlusionTextures.add(aoMap);
            }
            if (emissiveTexture != null && emissiveMap != null) {
                emissiveTextures.add(emissiveMap);
            }
        }
        if (normalTextures.size > 0) {
            this[$normalTexture] =
                new TextureInfo(onUpdate, gltf, normalTexture, normalTextures);
        }
        if (occlusionTextures.size > 0) {
            this[$occlusionTexture] =
                new TextureInfo(onUpdate, gltf, occlusionTexture, occlusionTextures);
        }
        if (emissiveTextures.size > 0) {
            this[$emissiveTexture] =
                new TextureInfo(onUpdate, gltf, emissiveTexture, emissiveTextures);
        }
    }
    get name() {
        return this[$sourceObject].name || '';
    }
    get pbrMetallicRoughness() {
        return this[$pbrMetallicRoughness];
    }
    get normalTexture() {
        return this[$normalTexture];
    }
    get occlusionTexture() {
        return this[$occlusionTexture];
    }
    get emissiveTexture() {
        return this[$emissiveTexture];
    }
    get emissiveFactor() {
        return this[$sourceObject].emissiveFactor;
    }
    setEmissiveFactor(rgb) {
        for (const material of this[$correlatedObjects]) {
            material.emissive.fromArray(rgb);
        }
        this[$sourceObject].emissiveFactor = rgb;
        this[$onUpdate]();
    }
}
_a = $normalTexture, _b = $occlusionTexture, _c = $emissiveTexture;
//# sourceMappingURL=material.js.map