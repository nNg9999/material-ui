import React from 'react';
import { Slide } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (

    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
