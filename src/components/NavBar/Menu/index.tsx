import React from 'react';
import { bool } from 'prop-types';
import { StyledLink, StyledMenu } from './styles';
import Link from 'next/link';

const MenuItem = ({ label, path, setOpen, tabIndex }) => {
  return (
    <Link href={path} passHref>
      <StyledLink tabIndex={tabIndex} onClick={() => setOpen(false)}>
        {/* <span aria-hidden="true">💁🏻‍♂️</span> */}
        {label}
      </StyledLink>
    </Link>
  );
};

export const Menu = ({ open, setOpen, content, ...props }) => {
  const isHidden = !!open;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <MenuItem
        {...{ label: `${content.home}`, path: '/#home', setOpen, tabIndex }}
      />
      <MenuItem
        {...{
          label: `${content.experience}`,
          path: '/#experience',
          setOpen,
          tabIndex,
        }}
      />
      <MenuItem
        {...{
          label: `${content.projects}`,
          path: '/#projects',
          setOpen,
          tabIndex,
        }}
      />
      <MenuItem
        {...{
          label: `${content.articles}`,
          path: '/articles',
          setOpen,
          tabIndex,
        }}
      />
      <MenuItem
        {...{ label: `${content.about}`, path: '/#about', setOpen, tabIndex }}
      />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
