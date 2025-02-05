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
export const EaseoutbackIcon = (): string | TemplateResult => {
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
                d="M6.09752 7.32556C7.80154 3.41262 10.2321 0.250011 14.2226 0.250011C16.5959 0.250011 18.3155 0.78042 19.6771 1.29914C19.9686 1.41019 20.2273 1.51384 20.4681 1.61031C20.8107 1.74756 21.117 1.87029 21.43 1.97914C21.9374 2.15564 22.3453 2.25001 22.7226 2.25001V3.75001C22.1 3.75001 21.5079 3.59438 20.9372 3.39588C20.6029 3.27961 20.232 3.13147 19.8554 2.98103C19.6177 2.88609 19.3777 2.79023 19.1431 2.70088C17.8798 2.2196 16.3494 1.75001 14.2226 1.75001C11.2132 1.75001 9.14375 4.0874 7.47277 7.92446C6.19895 10.8495 5.25401 14.4196 4.31084 17.983C4.02518 19.0622 3.73969 20.1409 3.44528 21.2007L2 20.7993C2.28134 19.7865 2.55825 18.7397 2.83849 17.6803C3.78693 14.0951 4.77337 10.3662 6.09752 7.32556Z"
            />
        </svg>
    `;
};
