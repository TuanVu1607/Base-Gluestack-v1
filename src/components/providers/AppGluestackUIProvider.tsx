import {StyledProvider} from '@gluestack-style/react';
import {OverlayProvider} from '@gluestack-ui/overlay';
import {createProvider} from '@gluestack-ui/provider';
import {ToastProvider} from '@gluestack-ui/toast';
import React from 'react';

const GluestackUIStyledProvider = createProvider({StyledProvider});

const AppGluestackUIProvider = ({children, ...props}: any) => {
  return (
    <GluestackUIStyledProvider {...props}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};

export default AppGluestackUIProvider;
