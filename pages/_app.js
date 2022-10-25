import '../styles/app.css'
import {
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  AptosWalletAdapter,
  FewchaWalletAdapter,
  WalletProvider,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  FletchWalletAdapter,
  AptosSnapAdapter,
  NightlyWalletAdapter,
  BitkeepWalletAdapter,
  TokenPocketWalletAdapter,
  BloctoWalletAdapter,
  WalletAdapterNetwork,
  Coin98WalletAdapter
} from '@manahippo/aptos-wallet-adapter';
import { useMemo, useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  const wallets = useMemo(
    () => [
      new AptosWalletAdapter(),
    ],
    []
  );

  useEffect(()=>{
    document.title="Aptos Deers"
  });

  return <WalletProvider
  wallets={wallets}
  onError={(error) => {
    console.log('wallet errors: ', error);
  }}>
  <Component {...pageProps} />
</WalletProvider>
}

export default MyApp
