/*
Copyright 2020 Adobe. All rights reserved.
Copyright 2021 Gaoding. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { tag as html, TemplateResult } from '../custom-tag.js';
export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EditorStarIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.84 1.87616C11.2599 0.830503 12.7401 0.830506 13.16 1.87616L15.5189 7.75117L21.8177 8.18759C22.9391 8.26528 23.3961 9.66813 22.5357 10.3914L17.692 14.4633L19.2256 20.6133C19.4979 21.7056 18.3008 22.5731 17.3476 21.9741L12 18.6137L6.65239 21.9741C5.69923 22.5731 4.50207 21.7056 4.77444 20.6133L6.308 14.4633L1.4643 10.3914C0.603911 9.66813 1.06093 8.26528 2.18226 8.18759L8.48109 7.75117L10.84 1.87616ZM12 3.01287L9.69791 8.74634C9.59078 9.01314 9.34057 9.19522 9.05376 9.21509L2.90298 9.64125L7.63161 13.6164C7.85092 13.8008 7.94604 14.094 7.87672 14.372L6.38014 20.3736L11.6009 17.0929C11.8449 16.9396 12.1551 16.9396 12.3991 17.0929L17.6199 20.3736L16.1233 14.372C16.054 14.094 16.1491 13.8008 16.3684 13.6164L21.097 9.64125L14.9462 9.21509C14.6594 9.19522 14.4092 9.01314 14.3021 8.74634L12 3.01287Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
