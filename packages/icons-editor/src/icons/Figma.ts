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
export const FigmaIcon = (): string | TemplateResult => {
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
                d="M8.5 1.25C6.15279 1.25 4.25 3.15279 4.25 5.5C4.25 6.95164 4.97779 8.2333 6.0884 9C4.97779 9.7667 4.25 11.0484 4.25 12.5C4.25 13.9516 4.97779 15.2333 6.0884 16C4.97779 16.7667 4.25 18.0484 4.25 19.5C4.25 21.8472 6.15279 23.75 8.5 23.75C10.8472 23.75 12.75 21.8472 12.75 19.5V16.75H15.5C17.8472 16.75 19.75 14.8472 19.75 12.5C19.75 11.0484 19.0222 9.7667 17.9116 9C19.0222 8.23331 19.75 6.95165 19.75 5.5C19.75 3.15279 17.8472 1.25 15.5 1.25H8.5ZM8.5 16.75C6.98122 16.75 5.75 17.9812 5.75 19.5C5.75 21.0188 6.98122 22.25 8.5 22.25C10.0188 22.25 11.25 21.0188 11.25 19.5V16.75H8.5ZM15.5 15.25H12.75L12.75 9.75H15.5C17.0188 9.75 18.25 10.9812 18.25 12.5C18.25 14.0188 17.0188 15.25 15.5 15.25ZM11.25 15.25L11.25 9.75H8.5C6.98122 9.75 5.75 10.9812 5.75 12.5C5.75 14.0188 6.98122 15.25 8.5 15.25H11.25ZM15.5 8.25H12.75V2.75H15.5C17.0188 2.75 18.25 3.98122 18.25 5.5C18.25 7.01878 17.0188 8.25 15.5 8.25ZM8.5 8.25H11.25L11.25 2.75H8.5C6.98122 2.75 5.75 3.98122 5.75 5.5C5.75 7.01878 6.98122 8.25 8.5 8.25Z"
            />
        </svg>
    `;
};
