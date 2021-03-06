import styled from 'styled-components';

export const DropdownContainer = styled.div`
  .dropdown_button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    background: none;
    border: 2px solid transparent;
    color: var(--primary);
    transition: all 0.3s ease;

    &:hover {
      color: var(--scent-600);
    }

    &:focus {
      outline: 3px solid var(--scent-400);
      border-radius: 0.3rem;
      border: 2px solid var(--scent-450);
    }
  }

  .szh-menu--dir-bottom {
    background-color: var(--gray-100);
    top: 16px !important;
    /* padding: auto; */
    min-width: 100px;
  }

  .szh-menu__item--hover {
    color: var(--scent-600);
    background-color: var(--gray-100);
  }
  .szh-menu__item--focus {
    color: var(--scent-600);
    background-color: var(--gray-100);
    outline: 3px solid var(--scent-400);
    border-radius: 0.13rem;
  }
`;

// .rc-menu-container--theme-dark .rc-menu {
//   /* color: #cad1d8; */
//   /* color: var(--primary); */
//   /* background-color: #22262c; */
//   background-color: var(--gray-100);
//   /* border: 1px solid #333; */
//   box-shadow: 0 2px 9px 3px rgba(0, 0, 0, 0.25);
// }
// .rc-menu-container--theme-dark .rc-menu__arrow {
//   /* background-color: #22262c; */
//   /* border-left-color: #333; */
//   /* border-top-color: #333; */
// }
// .rc-menu-container--theme-dark .rc-menu__item--hover {
//   /* background-color: #31363c; */
//   background-color: transparent;
//   color: var(--scent-450);
// }
// .rc-menu-container--theme-dark .rc-menu__item--active {
//   background-color: var(--gray-100);
// }

// .szh-menu__item--hover {
//   color: var(--scent-450);
//   background-color: var(--gray-100);
// }

// .rc-menu-container--theme-dark .rc-menu__item--focusable {
//   background-color: inherit;
//   background-color: #fff;
// }
// .rc-menu-container--theme-dark .rc-menu__item--disabled {
//   color: #666;
// }
// .rc-menu-container--theme-dark .rc-menu__divider {
//   background-color: #3a3a3a;
// }
