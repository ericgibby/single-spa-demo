import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, { Options } from 'single-spa-react';
import Root from './root.component';
import './set-public-path';

const options: Options = {
	React,
	ReactDOM,
	rootComponent: Root,
	suppressComponentDidCatchWarning: true
};

const lifecycles = singleSpaReact(options);

export const { bootstrap, mount, unmount } = lifecycles;
