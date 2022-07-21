// @ts-nocheck
/**
 * @file 支持 vue 3 的 loader，这个文件其实是 jsx
 */

import React from 'react';
// @ts-ignore
import { createApp } from 'vue/dist/vue.esm-bundler';

class Vue3Factory extends React.Component {
  constructor(props) {
    super(props);
    this.App = null;
    this.domRef = React.createRef();
    this.vm = null;
  }

  componentDidMount() {
    const { amisData, amisFunc } = this.resolveAmisProps();
    this.app = this.App({ createApp, props: amisData, funcs: amisFunc });
    this.vm = this.app.mount(this.domRef.current);
  }

  componentDidUpdate() {
    const { amisData, amisFunc } = this.resolveAmisProps();
    if (this.vm) {
      this.vm.$data.props = amisData;
    }
  }

  componentWillUnmount() {
    this.app && this.app.unmount();
  }

  resolveAmisProps() {
    let amisFunc = {},
      amisData = {};

    Object.keys(this.props).forEach((key) => {
      const value = this.props[key];
      if (typeof value === 'function') {
        amisFunc[key] = value;
      } else {
        amisData[key] = value;
      }
    });

    return { amisData, amisFunc };
  }

  render() {
    return <div ref={this.domRef}></div>;
  }
}

export function createVue3Component(vueModule) {
  class VueComp extends Vue3Factory {
    constructor(props) {
      super(props);
      this.App = vueModule;
    }
  }
  return VueComp;
}
