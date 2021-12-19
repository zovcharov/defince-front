// @ts-nocheck
import React, { ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';

import useHotkeys from '../../hooks/useHotkeys';
import useOutsideClick from '../../hooks/useOutsideClick';

import {CrossIcon} from '../Icons/Icons';

import './BaseModal.scss';

export type BaseModalType = {
  onClose: (props?: any) => any;
  isOpen: boolean;
};

const BaseModal = ({ children, isOpen, onClose }: BaseModalType & { children: ReactNode }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useHotkeys({
    Escape: () => onClose(),
  });

  useOutsideClick(modalRef, onClose);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()} tabIndex={0} role="button">
      <div className="modal" ref={modalRef}>
        <span className="modal__cross-btn" onClick={onClose} tabIndex={0} role="button">
          <CrossIcon color="#fff" />
        </span>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default React.memo(BaseModal);
