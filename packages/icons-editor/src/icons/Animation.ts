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
export const AnimationIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9178 8.48889C19.2641 8.85666 19.5814 9.25204 19.866 9.67138L22.5483 6.79745L21.4517 5.77398L18.9178 8.48889ZM12.75 2V5.52917C12.5026 5.50985 12.2524 5.5 12 5.5C11.7476 5.5 11.4975 5.50984 11.25 5.52917V2L12.75 2ZM5.08221 8.48887L2.54831 5.77398L1.45172 6.79745L4.13403 9.67135C4.41866 9.25202 4.73593 8.85664 5.08221 8.48887ZM1 18.25V19.75L23 19.75V18.25L1 18.25ZM12 8.75C15.4518 8.75 18.25 11.5482 18.25 15C18.25 15.3404 18.2228 15.6744 18.1704 16H19.6861C19.7283 15.6726 19.75 15.3389 19.75 15C19.75 10.7198 16.2802 7.25 12 7.25C7.7198 7.25 4.25 10.7198 4.25 15C4.25 15.3389 4.27175 15.6726 4.31392 16H5.82957C5.77721 15.6744 5.75 15.3404 5.75 15C5.75 11.5482 8.54822 8.75 12 8.75Z"
            />
        </svg>
    `;
};
