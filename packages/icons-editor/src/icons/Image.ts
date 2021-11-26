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
export const SvgImage = (): string | TemplateResult => {
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
                d="M2.25 6C2.25 3.92893 3.92893 2.25 6 2.25H18C20.0711 2.25 21.75 3.92893 21.75 6V18C21.75 20.0711 20.0711 21.75 18 21.75H6C3.92893 21.75 2.25 20.0711 2.25 18V6ZM6 3.75C4.75736 3.75 3.75 4.75736 3.75 6V18C3.75 18.4781 3.89914 18.9214 4.15343 19.2859L10.7626 12.6768C11.446 11.9934 12.554 11.9934 13.2374 12.6768L16 15.4393L17.2626 14.1768C17.946 13.4934 19.054 13.4934 19.7374 14.1768L20.25 14.6893V6C20.25 4.75736 19.2426 3.75 18 3.75H6ZM20.25 16.8107L19.9697 16.5303L18.6768 15.2374C18.5791 15.1398 18.4209 15.1398 18.3232 15.2374L16.5303 17.0303L14.5303 19.0303L14 19.5607L12.9393 18.5L13.4697 17.9697L14.9393 16.5L12.1768 13.7374C12.0791 13.6398 11.9209 13.6398 11.8232 13.7374L5.39338 20.1673C5.58637 20.2212 5.78982 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V16.8107ZM10.5 8.75C10.5 9.7165 9.7165 10.5 8.75 10.5C7.7835 10.5 7 9.7165 7 8.75C7 7.7835 7.7835 7 8.75 7C9.7165 7 10.5 7.7835 10.5 8.75Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
