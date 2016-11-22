'use strict';

import React from 'react';
import {Parser, HtmlRenderer} from 'commonmark';


const parser = new Parser();
const renderer = new HtmlRenderer({safe: true});

const Markdown = ({text}) => {
  const parsed = parser.parse(text);
  const rendered = {__html: renderer.render(parsed)};

  return <div className='md-rendered' dangerouslySetInnerHTML={rendered}></div>;
};

export default Markdown;

