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
export const CloudDoneIcon = (): string | TemplateResult => {
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
                d="M10 4.75C7.65279 4.75 5.75 6.65279 5.75 9C5.75 9.07263 5.75181 9.14476 5.7554 9.21638L5.78335 9.77555L5.2552 9.96133C3.79496 10.475 2.75 11.8664 2.75 13.5C2.75 15.4015 4.16532 16.9725 6 17.217V18.7265C3.33503 18.4747 1.25 16.2309 1.25 13.5C1.25 11.4027 2.47946 9.59416 4.25521 8.75298C4.38459 5.69193 6.90712 3.25 10 3.25C12.2152 3.25 14.1364 4.50243 15.0967 6.33593C15.3895 6.2795 15.6916 6.25 16 6.25C18.5877 6.25 20.692 8.31918 20.7488 10.8932C21.9495 11.6434 22.75 12.9776 22.75 14.5C22.75 16.8472 20.8472 18.75 18.5 18.75H18V17.25H18.5C20.0188 17.25 21.25 16.0188 21.25 14.5C21.25 13.4 20.6041 12.4493 19.6676 12.0093L19.1966 11.788L19.239 11.2693C19.2463 11.1806 19.25 11.0908 19.25 11C19.25 9.20507 17.7949 7.75 16 7.75C15.6215 7.75 15.2597 7.81439 14.9238 7.9322L14.2341 8.17414L13.9745 7.49086C13.3653 5.88747 11.8145 4.75 10 4.75ZM17.5194 15.541L11.2694 21.541C10.9749 21.8238 10.5083 21.819 10.2197 21.5303L7.46967 18.7803L8.53033 17.7197L10.7607 19.9501L16.4806 14.459L17.5194 15.541Z"
            />
        </svg>
    `;
};
