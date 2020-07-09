import { withStyles, WithStylesProps } from 'react-with-styles';
import React from 'react';

type Props = {
  currentPage: number;
  total: number;
  onNext?: () => void;
  onPrev?: () => void
} & WithStylesProps;

function PageIndicator({css, styles, currentPage, total}: Props) {
  return (
    <div {...css(styles.container)}>
      <div>{currentPage}</div>
      <div {...css(styles.separator)}>-</div>
      <div>{total}</div>
    </div>
  );
}

export default withStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    fontFamily: 'Robot',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
  },
  separator: {
    margin: '24px 18px 28px 0',
  }
})
)(PageIndicator);