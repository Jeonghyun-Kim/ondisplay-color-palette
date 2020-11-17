import React from 'react';
import cn from 'classnames';
import { usePreventScroll } from '@react-aria/overlays';
import debounce from 'lodash.debounce';
import { Header } from '@components/core';
import { Container, Modal } from '@components/ui';
import { useUI } from '@components/ui/context';

import { Root, Main } from './Layout.styles';

const Layout: React.FC = ({ children }) => {
  const { displayModal, closeModal, modalView } = useUI();
  const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

  usePreventScroll({
    isDisabled: !displayModal,
  });

  const handleScroll = React.useCallback(() => {
    debounce(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      setHasScrolled(scrollTop > offset);
    }, 1);
  }, []);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Root>
      <header
        className={cn(
          'stick top-0 bg-primary z-40 transition-all duration-150',
          {
            'shadow-magical': hasScrolled,
          }
        )}
      >
        <Container full>
          <Header />
        </Container>
      </header>
      <Main>{children}</Main>
      <Modal open={displayModal} onClose={closeModal}>
        {modalView === 'TEST_VIEW' && <div>TEST_MODAL ON!!!</div>}
      </Modal>
    </Root>
  );
};

export default Layout;
