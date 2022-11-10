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
export const EyeOffIcon = (): string | TemplateResult => {
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
                d="M2.8321 9.98721L2.6708 9.66461L1.32916 10.3354L1.49046 10.658C2.33137 12.3399 3.47507 13.6951 4.80394 14.7237C4.57414 15.52 3.80193 16.0635 2.94789 15.9777L2.79795 17.4702C4.22096 17.6131 5.52162 16.8154 6.08224 15.5818C7.67456 16.5018 9.45105 17.0178 11.25 17.1299V20H12.75V17.1299C14.5489 17.0178 16.3254 16.5018 17.9177 15.5818C18.4783 16.8154 19.779 17.6131 21.202 17.4702L21.0521 15.9777C20.198 16.0635 19.4258 15.52 19.196 14.7237C20.5249 13.6951 21.6686 12.3399 22.5095 10.658L22.6708 10.3354L21.3292 9.66461L21.1679 9.98721C17.3905 17.542 6.60948 17.542 2.8321 9.98721Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
