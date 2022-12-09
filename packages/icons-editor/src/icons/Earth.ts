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
export const EarthIcon = (): string | TemplateResult => {
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
                d="M2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C12.3985 2.75 12.7912 2.7752 13.1765 2.82411C13.0895 3.27955 12.9316 3.64893 12.7363 3.96631C12.4246 4.47275 11.9993 4.87911 11.5062 5.31058C11.4316 5.37584 11.3543 5.44221 11.2753 5.51009L11.275 5.51038L11.2749 5.51039C10.3762 6.28244 9.25003 7.24978 9.25003 9.00001C9.25003 9.66243 9.46666 10.2461 9.98525 10.6075C10.4551 10.935 11.0268 10.9713 11.4951 10.9353C12.2944 10.8738 13.234 10.5539 13.9204 10.3191C13.9252 10.4174 13.9313 10.5285 13.9406 10.6304C13.9759 11.0188 14.0733 11.5914 14.509 12.0536C14.9601 12.532 15.6331 12.75 16.5 12.75C17.6064 12.75 18.854 12.477 19.9071 12.1547C20.3866 12.0079 20.8433 11.8454 21.2447 11.6841C21.2482 11.789 21.25 11.8943 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C11.4931 21.25 10.9957 21.2092 10.5109 21.1308C10.663 20.712 10.7123 20.3176 10.6561 19.9367C10.5694 19.35 10.2463 18.9314 10.0212 18.6525L9.94159 18.5541L9.94158 18.5541C9.73467 18.2988 9.63001 18.1697 9.57348 18.0115C9.53569 17.9057 9.49891 17.7234 9.6657 17.3481C9.69027 17.3352 9.74626 17.3119 9.85776 17.2879C10.0586 17.2446 10.2879 17.228 10.5823 17.2068L10.5825 17.2068L10.5835 17.2067L10.5838 17.2067C10.6732 17.2002 10.7685 17.1933 10.8709 17.1851C11.2566 17.1542 11.7567 17.1027 12.1902 16.9146C12.6736 16.7048 13.1028 16.3103 13.2355 15.6471C13.4765 14.442 12.6521 13.4329 11.7139 12.8121C10.7339 12.1635 9.38822 11.75 8.00003 11.75C6.66998 11.75 5.10831 12.0134 3.90802 12.2661C3.47823 12.3566 3.0887 12.447 2.76471 12.5261C2.75495 12.352 2.75 12.1766 2.75 12ZM2.97124 14.0201C3.6768 17.1875 6.00645 19.7427 9.04095 20.7666C9.18411 20.4479 9.18766 20.2609 9.17216 20.1559C9.14948 20.0024 9.06629 19.8577 8.85386 19.5944C8.83253 19.568 8.80876 19.5392 8.78315 19.5082C8.59628 19.282 8.31137 18.9371 8.16096 18.5163C7.96548 17.9692 8.00329 17.3686 8.3193 16.6852C8.58929 16.1014 9.15597 15.9047 9.54185 15.8215C9.85693 15.7536 10.2297 15.7273 10.5402 15.7054L10.5405 15.7054C10.6148 15.7002 10.6855 15.6952 10.751 15.6899C11.1449 15.6583 11.4144 15.6161 11.5931 15.5386C11.7218 15.4827 11.7472 15.4397 11.7646 15.3529C11.8236 15.058 11.648 14.5671 10.8861 14.063C10.1662 13.5865 9.11184 13.25 8.00003 13.25C6.83008 13.25 5.39174 13.4866 4.21703 13.7339C3.73665 13.8351 3.30828 13.9362 2.97124 14.0201ZM21.0616 10.1336C20.3757 6.78603 17.8815 4.09754 14.6444 3.13351C14.5224 3.75411 14.3011 4.28557 14.0138 4.75246C13.5754 5.46478 13.0008 5.99591 12.4939 6.43944L12.332 6.58078C11.3504 7.43677 10.75 7.96035 10.75 9.00001C10.75 9.17445 10.7776 9.27002 10.7976 9.31582C10.8146 9.35465 10.8298 9.36775 10.8429 9.3769C10.8887 9.40879 11.0357 9.4662 11.38 9.43972C11.9768 9.39382 12.7103 9.14496 13.4192 8.90443L13.4192 8.90442C13.5347 8.86526 13.6494 8.82632 13.7629 8.78851C14.0054 8.70767 14.3368 8.63831 14.6696 8.75842C15.0559 8.89779 15.2352 9.20891 15.3131 9.44255C15.3831 9.65251 15.3992 9.87777 15.408 10.0279C15.412 10.0972 15.4147 10.1572 15.4172 10.2134L15.4172 10.2135C15.4216 10.3099 15.4254 10.3947 15.4345 10.4946C15.4616 10.7938 15.5205 10.9399 15.6004 11.0246C15.665 11.093 15.867 11.25 16.5 11.25C17.3937 11.25 18.4794 11.023 19.468 10.7204C20.0964 10.528 20.6517 10.3157 21.0616 10.1336ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.309 10.1925L14.3085 10.1926L14.3033 10.1932C14.3072 10.1925 14.309 10.1924 14.309 10.1925ZM9.64937 17.3583C9.6493 17.3583 9.64952 17.358 9.65008 17.3576L9.65331 17.3552C9.65096 17.3574 9.64951 17.3584 9.64937 17.3583Z"
            />
        </svg>
    `;
};
