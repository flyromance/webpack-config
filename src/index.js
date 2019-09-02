import * as a from './lib/a';
// import React from 'react';

// webpackPrefetch: true,  webpackPreload: true
const b = import(/* webpackChunkName: "b" */ './lib/b');

const aa = 1123213;

if (__ENV__ === 'local') {
    console.log(__ENV__);
}

a.sayA();
b.sayB();