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
export const PaddingLeftIcon = (): string | TemplateResult => {
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
                d="M2.25 20L2.25 4L3.75 4L3.75 20L2.25 20ZM7.25 14.5C7.25 15.7426 8.25736 16.75 9.5 16.75L14.5 16.75C15.7426 16.75 16.75 15.7426 16.75 14.5L16.75 9.5C16.75 8.25736 15.7426 7.25 14.5 7.25L9.5 7.25C8.25736 7.25 7.25 8.25736 7.25 9.5L7.25 14.5ZM9.5 15.25C9.08579 15.25 8.75 14.9142 8.75 14.5L8.75 9.5C8.75 9.08579 9.08579 8.75 9.5 8.75L14.5 8.75C14.9142 8.75 15.25 9.08579 15.25 9.5L15.25 14.5C15.25 14.9142 14.9142 15.25 14.5 15.25L9.5 15.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
