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
export const BackspaceIcon = (): string | TemplateResult => {
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
                d="M7.5 5.75C7.26005 5.75 7.03458 5.86481 6.89345 6.05887L2.89345 11.5589C2.70218 11.8219 2.70218 12.1781 2.89345 12.4411L6.89345 17.9411C7.03458 18.1352 7.26005 18.25 7.5 18.25H19C19.4142 18.25 19.75 17.9142 19.75 17.5V6.5C19.75 6.08579 19.4142 5.75 19 5.75H7.5ZM4.42737 12L7.88192 7.25H18.25V16.75H7.88192L4.42737 12ZM16.5303 9.53033L14.0607 12L16.5303 14.4697L15.4697 15.5303L13 13.0607L10.5303 15.5303L9.46967 14.4697L11.9393 12L9.46967 9.53033L10.5303 8.46967L13 10.9393L15.4697 8.46967L16.5303 9.53033Z"
            />
        </svg>
    `;
};
