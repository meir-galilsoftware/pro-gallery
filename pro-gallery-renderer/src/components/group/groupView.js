import React from 'react';
import ItemContainer from '../item/itemContainer.js';
import _ from 'lodash';
import utils from '../../utils';
import window from '@wix/photography-client-lib/dist/src/sdk/windowWrapper';

class GroupView extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'GroupView';
    this.dom = [];
    this.state = {};
  }

  createDom(visible) {
    return this.props.items.map(item => React.createElement(ItemContainer, _.merge(item.renderProps(_.merge(this.props.galleryConfig, {visible})), {store: this.props.store})));
  }

  render() {
    const groupStyle = {
      width: this.props.width,
      height: (this.props.totalHeight)
    };
    return (
        <div
          key={`group_${this.props.idx}`}
          data-hook={'group-view'}
        >
          {this.createDom(true)}
        </div>);
  }
}

export default GroupView;
