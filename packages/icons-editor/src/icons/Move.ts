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
export const MoveIcon = (): string | TemplateResult => {
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
                d="M12.5303 2.15595C12.2374 1.86306 11.7626 1.86306 11.4697 2.15595L7.81283 5.81279L8.87349 6.87345L11.25 4.49694L11.25 11.25L4.49695 11.25L6.87348 8.87347L5.81281 7.81282L2.15597 11.4697C1.86308 11.7626 1.86308 12.2374 2.15597 12.5303L5.81281 16.1872L6.87348 15.1265L4.49696 12.75L11.25 12.75L11.25 19.503L8.8735 17.1265L7.81283 18.1871L11.4697 21.844C11.6103 21.9847 11.8011 22.0637 12 22.0637C12.1989 22.0637 12.3897 21.9847 12.5303 21.844L16.1872 18.1872L15.1265 17.1265L12.75 19.503L12.75 12.75L19.503 12.75L17.1265 15.1265L18.1872 16.1872L21.844 12.5303C21.9847 12.3897 22.0637 12.1989 22.0637 12C22.0637 11.8011 21.9847 11.6103 21.8441 11.4697L18.1872 7.81282L17.1265 8.87348L19.5031 11.25L12.75 11.25L12.75 4.49693L15.1265 6.87346L16.1872 5.8128L12.5303 2.15595Z"
            />
        </svg>
    `;
};
