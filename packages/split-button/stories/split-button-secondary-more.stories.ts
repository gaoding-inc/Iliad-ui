/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { TemplateResult } from '@future-ui/base';
import { splitbutton } from './index.js';

import '../sp-split-button.js';
import '@future-ui/menu/sp-menu-item.js';

export default {
    title: 'Split Button/Secondary/More',
    component: 'sp-split-button',
};

const variant = 'secondary';
const type = 'more';
const open = true;
const left = true;

export const openMenu = (options = {}): TemplateResult =>
    splitbutton({ size: 's', variant, type, open }, options);

export const openMenuLeft = (options = {}): TemplateResult =>
    splitbutton({ size: 's', variant, type, open, left }, options);
