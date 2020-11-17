import React from 'react';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { Transition } from 'react-transition-group';
import { useOverlay, useModal, OverlayContainer } from '@react-aria/overlays';
import { Cross } from '@components/icons';

import { Root, Container } from './Modal.styles';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface Props {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  onClose: () => void;
}
const Modal: React.FC<Props> = ({
  className,
  children,
  open = false,
  onClose,
  ...props
}) => {
  const ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const { modalProps } = useModal();
  const { dialogProps } = useDialog({}, ref);
  const { overlayProps } = useOverlay(
    {
      isOpen: open,
      isDismissable: false,
      onClose,
      ...props,
    },
    ref
  );

  return (
    <Transition in={open} timeout={duration} unmountOnExit>
      {(state) => (
        <OverlayContainer>
          <FocusScope contain autoFocus>
            <Root
              className={className}
              // @ts-ignore For using trnasitions
              style={{ ...defaultStyle, ...transitionStyles[state] }}
              {...props}
            >
              <Container
                ref={ref}
                {...overlayProps}
                {...dialogProps}
                {...modalProps}
              >
                <div className="h-7 flex items-center justify-end w-full">
                  <button
                    onClick={() => onClose()}
                    aria-label="Close Panel"
                    className="hover:text-gray-500 transition ease-in-out duration-150 focus:outline-none"
                  >
                    <Cross className="h-6 w-6" />
                  </button>
                </div>
                {children}
              </Container>
            </Root>
          </FocusScope>
        </OverlayContainer>
      )}
    </Transition>
  );
};

export default Modal;
