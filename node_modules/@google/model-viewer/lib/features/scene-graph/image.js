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
import { ImageLoader } from 'three';
import { $correlatedObjects, $onUpdate, $sourceObject, ThreeDOMElement } from './three-dom-element.js';
const loader = new ImageLoader();
const $threeTextures = Symbol('threeTextures');
const $uri = Symbol('uri');
const $bufferViewImages = Symbol('bufferViewImages');
/**
 * Image facade implementation for Three.js textures
 */
export class Image extends ThreeDOMElement {
    constructor(onUpdate, image, correlatedTextures) {
        super(onUpdate, image, correlatedTextures);
        this[_a] = undefined;
        this[_b] = new WeakMap();
        if (image.uri != null) {
            this[$uri] = image.uri;
        }
        if (image.bufferView != null) {
            for (const texture of correlatedTextures) {
                this[$bufferViewImages].set(texture, texture.image);
            }
        }
    }
    get [$threeTextures]() {
        return this[$correlatedObjects];
    }
    get name() {
        return this[$sourceObject].name || '';
    }
    get uri() {
        return this[$uri];
    }
    get type() {
        return this.uri != null ? 'external' : 'embedded';
    }
    async setURI(uri) {
        this[$uri] = uri;
        const image = await new Promise((resolve, reject) => {
            loader.load(uri, resolve, undefined, reject);
        });
        for (const texture of this[$threeTextures]) {
            // If the URI is set to null but the Image had an associated buffer view
            // (this would happen if it started out as embedded), then fall back to
            // the cached object URL created by GLTFLoader:
            if (image == null &&
                this[$sourceObject].bufferView != null) {
                texture.image = this[$bufferViewImages].get(texture);
            }
            else {
                texture.image = image;
            }
            texture.needsUpdate = true;
        }
        this[$onUpdate]();
    }
}
_a = $uri, _b = $bufferViewImages;
//# sourceMappingURL=image.js.map